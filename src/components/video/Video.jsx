import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useAddNewDiscussionMutation,
  useGetAllDocDiscussionQuery,
} from "@/app/service/discussionData";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { ArrowLeft, Maximize2, Minimize2, BookOpen, Lightbulb, Target, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRatingPage from "@/pages/StarRating";
import AdBanner from "@/components/AdBanner";

export default function Videos({ video, title, videosId, id, no, subject }) {
  const [tabValue, setTabValue] = useState("documentation");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenPdfIndex, setFullscreenPdfIndex] = useState(null);
  const [chat, setChat] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("user"))?.userDetails);
  const [showStarRating, stShowStarRating] = useState(false);
  const [Cancel, setCancel] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { data, isLoading, isError, refetch } = useGetAllDocDiscussionQuery(videosId);
  const [addNewDiscussion, { isLoading: isPosting }] = useAddNewDiscussionMutation();

  // NOTE: The full-screen interstitial ad-gate has been removed.
  // Google AdSense Policy prohibits ads on screens used for navigation or
  // behavioural purposes (i.e. showing an ad *before* content loads).
  // Ads must only appear on pages that already contain publisher content.

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement) setFullscreenPdfIndex(null);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const getYoutubeEmbedLink = (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    } catch {
      return "";
    }
  };

  const getGoogleDrivePreviewLink = (url) => {
    const match = url?.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  const handleClick = async () => {
    if (chat.trim() === "") return;
    try {
      const response = await addNewDiscussion({ documentId: videosId, chat, userId: user._id });
      if (response?.data?.status === 201) {
        setChat("");
        refetch();
      }
    } catch (error) {
      console.error("Failed to add discussion:", error);
    }
  };

  const handleBack = () => stShowStarRating(true);

  const toggleFullscreen = async (index) => {
    if (fullscreenPdfIndex === index) {
      document.exitFullscreen();
    } else {
      setFullscreenPdfIndex(index);
      await containerRef.current?.requestFullscreen();
    }
  };

  useEffect(() => {
    if (Cancel) {
      stShowStarRating(false);
      navigate(-1);
    }
  }, [Cancel, navigate]);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Page heading — establishes publisher content before any ads */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
        <ArrowLeft onClick={handleBack} className="h-6 w-6 cursor-pointer shrink-0" />
        {title}
      </h1>
      {subject && (
        <p className="text-sm text-muted-foreground mb-6 pl-8">
          Subject: <span className="font-medium text-foreground">{subject}</span> · Class {no}
        </p>
      )}

      {/* Video player */}
      {video?.video && (
        <div className="relative mb-4 bg-black rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video"
            src={getYoutubeEmbedLink(video.video)}
            title={title || "Lesson video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Learning tips block — publisher content that surrounds the ad below */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { icon: BookOpen, text: "Follow along with the notes below while you watch." },
          { icon: Lightbulb,  text: "Pause the video whenever you need to re-read a concept." },
          { icon: Target,     text: "Attempt the practice questions after finishing the lesson." },
          { icon: Clock,      text: "Use the discussion tab to ask doubts at any time." },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex gap-2 items-start rounded-xl bg-muted/40 border border-border p-3">
            <Icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* AdSense Banner — placed between publisher content blocks, never on an empty/nav screen */}
      <div className="rounded-2xl overflow-hidden bg-muted/20 border border-dashed border-border mb-6">
        <AdBanner className="my-2 px-2" />
      </div>

      {/* Tabs: Documentation + Discussion */}
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        <TabsContent value="documentation" className="mt-4">
          {Array.isArray(video?.pdf) && video.pdf.length > 0 ? (
            <Tabs defaultValue="0" className="w-full">
              <TabsList>
                {video.pdf.map((_, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    PDF {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {video.pdf.map((pdfUrl, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <div
                    className="relative w-full h-[85vh] rounded-xl overflow-hidden shadow-md"
                    ref={containerRef}
                  >
                    <iframe
                      src={getGoogleDrivePreviewLink(pdfUrl)}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay"
                    />
                    <button
                      onClick={() => toggleFullscreen(index)}
                      className="absolute top-2 right-2 bg-white p-1 rounded-md shadow-md hover:bg-gray-100"
                    >
                      {fullscreenPdfIndex === index ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <p className="text-muted-foreground">No documentation available for this lesson.</p>
          )}
        </TabsContent>

        <TabsContent value="discussion" className="mt-4">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">
              Discussion ({data?.length || 0} comments)
            </h3>
            <div className="flex gap-4 mb-6">
              <textarea
                className="flex-grow p-4 rounded-md border bg-background"
                placeholder="Add a comment or question about this lesson…"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                rows={3}
              />
              <Button
                onClick={handleClick}
                disabled={isPosting || chat.trim() === ""}
                className="self-end"
              >
                {isPosting ? "Posting…" : "Post"}
              </Button>
            </div>

            {isLoading ? (
              <div>Loading discussions…</div>
            ) : isError ? (
              <div className="text-red-500">Failed to load comments.</div>
            ) : data?.length === 0 ? (
              <div className="text-muted-foreground">No comments yet. Be the first to ask a question!</div>
            ) : (
              <div className="space-y-6">
                {data.map((chatItem) => (
                  <div key={chatItem._id} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={`${chatItem?.userId?.image}` || "/default.png"}
                        alt={chatItem?.userId?.name || "User"}
                        className="w-10 h-10 rounded-full bg-muted"
                      />
                      <div>
                        <div className="font-semibold">{chatItem?.userId?.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDistanceToNowStrict(parseISO(chatItem.createdAt), {
                            addSuffix: true,
                          })}
                        </div>
                      </div>
                    </div>
                    <p className="ml-12">{chatItem?.chat}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {showStarRating && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <StarRatingPage
            chapterTitle={title}
            id={id}
            classNo={no}
            subjectTitle={subject}
            setCancel={setCancel}
          />
        </div>
      )}
    </div>
  );
}
