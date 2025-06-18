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

function getEmbedUrl(url: string) {
  // Convert YouTube watch URL to embed URL with autoplay
  const videoId = url.split("v=")[1]?.split("&")[0]
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : ""
}

export default function Page() {
  const [selectedUrl, setSelectedUrl] = useState(videoLinks[0]?.url || "")

  return (
    <div className="max-w-3xl mx-auto py-10 w-full">
      <PageTitle>Media</PageTitle>
      {/* Full-width video embed */}
      <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mb-8">
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={getEmbedUrl(selectedUrl)}
            title="Selected Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
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