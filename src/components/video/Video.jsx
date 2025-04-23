

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Maximize, Minimize, Pause, Play, Volume2, VolumeX } from "lucide-react"
import { useParams } from "react-router-dom"

export default function Videos() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const {id} = useParams()



  // Sample video data
  const videoData = {
    id: id,
    title: "Introduction to HTML",
    description: "Learn the basics of HTML structure and elements",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  }

  // Sample documentation data
  const documentation = `
    # Introduction to HTML
    
    HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.
    
    ## Basic Structure
    
    Every HTML document has a basic structure that includes the following elements:
    
    \`\`\`html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
      </body>
    </html>
    \`\`\`
    
    ## Common HTML Elements
    
    - **Headings**: \`<h1>\` to \`<h6>\`
    - **Paragraphs**: \`<p>\`
    - **Links**: \`<a>\`
    - **Images**: \`<img>\`
    - **Lists**: \`<ul>\`, \`<ol>\`, \`<li>\`
    - **Divs**: \`<div>\`
    - **Spans**: \`<span>\`
    
    ## Semantic HTML
    
    Semantic HTML introduces meaning to the web page rather than just presentation. Examples include:
    
    - \`<header>\`
    - \`<footer>\`
    - \`<article>\`
    - \`<section>\`
    - \`<nav>\`
    - \`<aside>\`
    - \`<main>\`
  `

  // Handle video playback
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle video mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Update video progress
  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime
      const duration = videoRef.current.duration
      setCurrentTime(currentTime)
      setDuration(duration)
      setProgress((currentTime / duration) * 100)
    }
  }

  // Handle seeking
  const handleSeek = (e) => {
    const seekTime = Number.parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = (seekTime / 100) * videoRef.current.duration
    }
  }

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{videoData.title}</h1>

      {/* Video Player */}
      <div className="relative mb-8 bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full aspect-video"
          src={videoData.videoUrl || "/placeholder.svg"}
          onTimeUpdate={updateProgress}
          onLoadedMetadata={updateProgress}
        />

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer mb-4"
            style={{
              background: `linear-gradient(to right, white ${progress}%, gray ${progress}%)`,
            }}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </Button>

              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="documentation" className="mt-8">
        <TabsList>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        <TabsContent value="documentation" className="mt-4">
          <div className="prose max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: documentation
                  .replace(/\n/g, "<br>")
                  .replace(/#{1,6} (.*)/g, "<h3>$1</h3>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/`(.*?)`/g, "<code>$1</code>")
                  .replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>"),
              }}
            />
          </div>
        </TabsContent>

        <TabsContent value="notes" className="mt-4">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Your Notes</h3>
            <textarea
              className="w-full h-64 p-4 rounded-md border bg-background"
              placeholder="Take notes while watching the video..."
            ></textarea>
            <Button className="mt-4">Save Notes</Button>
          </div>
        </TabsContent>

        <TabsContent value="discussion" className="mt-4">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Discussion (24 comments)</h3>

            <div className="flex gap-4 mb-6">
              <textarea
                className="flex-grow p-4 rounded-md border bg-background"
                placeholder="Add a comment..."
                rows={3}
              ></textarea>
              <Button className="self-end">Post</Button>
            </div>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div>
                    <div className="font-semibold">Alex Thompson</div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                </div>
                <p className="ml-12">
                  Great explanation of HTML basics! I was confused about semantic tags before, but now it makes sense.
                </p>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div>
                    <div className="font-semibold">Maria Garcia</div>
                    <div className="text-sm text-muted-foreground">1 week ago</div>
                  </div>
                </div>
                <p className="ml-12">
                  Could you explain more about the difference between div and span? I'm still a bit confused.
                </p>

                <div className="ml-12 mt-4 pl-4 border-l">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-semibold">John Doe (Instructor)</div>
                      <div className="text-sm text-muted-foreground">6 days ago</div>
                    </div>
                  </div>
                  <p>
                    Great question! The main difference is that div is a block-level element (takes up the full width
                    available) while span is an inline element (only takes up as much width as necessary). I'll cover
                    this more in the next lesson!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
