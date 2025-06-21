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
import { ScrollArea } from "@/components/ui/scroll-area"
import videoLinks from "@/mock/video-links.json"
import YoutubePlaylistPlayer from "@/components/ui/youtube-playlist-player"
import Container from '@/components/layout/Container'

export default function Page() {
  const [selectedUrl, setSelectedUrl] = useState(videoLinks[0]?.url || "")

  return (
    <Container>
      {/* Main content wrapper with spacing */}
      <div className="min-h-[calc(100vh-6rem)] flex flex-col gap-16 py-12">
        {/* Page Title */}
        <div>
          <PageTitle>Media</PageTitle>
        </div>

        {/* Video Player */}
        <div className="w-full">
          <YoutubePlaylistPlayer
            videoLinks={videoLinks}
            selectedUrl={selectedUrl}
            onSelect={setSelectedUrl}
          />
        </div>

        {/* Video Selection */}
        <div className="w-full max-w-3xl mx-auto mt-12">
          <Select value={selectedUrl} onValueChange={setSelectedUrl}>
            <SelectTrigger className="w-full h-22">
              <SelectValue placeholder="Select a video" />
            </SelectTrigger>
            <SelectContent>
              <ScrollArea className="h-[400px] w-full">
                {videoLinks.map((video) => (
                  <SelectItem
                    key={`${video.chapter}-${video.title}`}
                    value={video.url}
                  >
                    {video.chapter === 0 ? (
                      <div className="flex w-full items-center justify-between gap-10 text-lg">
                        <span className="font-medium whitespace-nowrap text-muted-foreground mr-2">Prologue:</span>
                        <span className="w-full font-regular text-lg text-primary">
                          {video.title}
                        </span>
                      </div>

                    ) : (
                      <div className="flex w-full items-center justify-between gap-10 text-lg">
                        <span className="font-medium whitespace-nowrap text-muted-foreground">Chapter {video.chapter}</span>
                        <div id="title-container text-primary-foreground text-right flex-shrink-0">
                          <span className="text-primary whitespace-nowrap mr-2">{video.type.charAt(0).toUpperCase() + video.type.slice(1)}:</span>
                          <span className="text-primary font-normal truncate">{video.title}</span>
                        </div>
                      </div>
                    )}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Container>
  )
} 