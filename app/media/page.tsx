"use client"

import { useState } from "react"
import { PageTitle } from "@/components/ui/page-title"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import videoLinks from "@/mock/video-links.json"
import YoutubePlaylistPlayer from "@/components/ui/youtube-playlist-player"

export default function Page() {
  const [selectedUrl, setSelectedUrl] = useState(videoLinks[0]?.url || "")

  return (
    <div className="max-w-3xl mx-auto py-10 w-full">
      <PageTitle>Media</PageTitle>
      <YoutubePlaylistPlayer
        videoLinks={videoLinks}
        selectedUrl={selectedUrl}
        onSelect={setSelectedUrl}
      />
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <Select value={selectedUrl} onValueChange={setSelectedUrl}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a video" />
            </SelectTrigger>
            <SelectContent className="max-h-72 overflow-y-auto">
              {videoLinks.map((video) => (
                <SelectItem
                  key={`${video.chapter}-${video.title}`}
                  value={video.url}
                >
                  {video.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
} 