"use client"

import { useEffect, useRef } from "react"

// YouTube IFrame API types
interface YT {
  Player: {
    new(elementId: string, config: PlayerConfig): YouTubePlayer
  }
}

interface PlayerConfig {
  videoId: string
  playerVars?: {
    autoplay?: 0 | 1
    rel?: 0 | 1
    [key: string]: unknown
  }
  events?: {
    onReady?: () => void
    onStateChange?: (event: { data: number }) => void
  }
}

interface YouTubePlayer {
  loadVideoById: (videoId: string) => void
  destroy: () => void
}

// Add YT to the Window type for TypeScript
declare global {
  interface Window {
    YT: YT
  }
}

interface Video {
  chapter: number
  title: string
  url: string
  type: string
}

interface YoutubePlaylistPlayerProps {
  videoLinks: Video[]
  selectedUrl: string
  onSelect: (url: string) => void
}

function getVideoId(url: string) {
  return url.split("v=")[1]?.split("&")[0] || ""
}

export default function YoutubePlaylistPlayer({ videoLinks, selectedUrl, onSelect }: YoutubePlaylistPlayerProps) {
  const playerRef = useRef<YouTubePlayer | null>(null)

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT) return
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)
  }, [])

  // Create or update the player
  useEffect(() => {
    function onPlayerReady() {
      if (playerRef.current?.loadVideoById) {
        playerRef.current.loadVideoById(getVideoId(selectedUrl))
      }
    }

    function onPlayerStateChange(event: { data: number }) {
      // 0 means ended
      if (event.data === 0) {
        const idx = videoLinks.findIndex(v => v.url === selectedUrl)
        if (idx < videoLinks.length - 1) {
          onSelect(videoLinks[idx + 1].url)
        }
      }
    }

    // Wait for YT to be available
    const interval = setInterval(() => {
      if (window.YT?.Player) {
        clearInterval(interval)
        if (!playerRef.current) {
          playerRef.current = new window.YT.Player("yt-player", {
            videoId: getVideoId(selectedUrl),
            playerVars: { autoplay: 1, rel: 0 },
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
            },
          })
        } else {
          onPlayerReady()
        }
      }
    }, 100)

    return () => {
      clearInterval(interval)
      if (playerRef.current?.destroy) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [selectedUrl, videoLinks, onSelect])

  return (
    <div className="w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mb-8 relative">
      <div className="aspect-video w-full">
        <div id="yt-player" className="w-full h-full" />
      </div>
    </div>
  )
} 