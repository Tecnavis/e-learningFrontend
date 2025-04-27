import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useAddNewDiscussionMutation,
  useGetAllDocDiscussionQuery,
} from "@/app/service/discussionData";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRatingPage from "@/pages/StarRating";

export default function Videos({ video, title, videosId, id, no, subject }) {
  const [tabValue, setTabValue] = useState("documentation");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chat, setChat] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData?.userDetails);
  const [showStarRating, stShowStarRating] = useState(false);
  const [Cancel, setCancel] = useState(false);
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useGetAllDocDiscussionQuery(videosId);

  const [addNewDiscussion, { isLoading: isPosting }] =
    useAddNewDiscussionMutation();

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const getYoutubeEmbedLink = (url) => {
    if (!url) return ""; // Return empty string if URL is invalid
    try {
      const parsed = new URL(url);
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    } catch (err) {
      return ""; // Return empty string in case of an error
    }
  };

  const getGoogleDrivePreviewLink = (url) => {
    if (!url) return ""; // Return empty string if URL is invalid
    const match = url.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  const handleClick = async () => {
    if (chat.trim() === "") return;

    const newData = {
      documentId: id,
      chat,
      userId: user._id,
    };

    try {
      const response = await addNewDiscussion(newData);
      if (response?.data?.status === 201) {
        setChat("");
        refetch();
      }
    } catch (error) {
      console.error("Failed to add discussion:", error);
    }
  };

  const handlBack = () => {
    stShowStarRating(true);
  };

  useEffect(() => {
    if (Cancel) {
      stShowStarRating(false);
      navigate(-1);
    }
  }, [Cancel, navigate]);

  return (
    <div className="container mx-auto px-4 py-8 relative ">
      <h1 className="text-3xl font-bold mb-6">
        <ArrowLeft onClick={handlBack} className="h-6 w-6 cursor-pointer" />
        {title}
      </h1>

      {/* Video Section */}
      {video?.video && (
        <div className="relative mb-8 bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src={getYoutubeEmbedLink(video.video)}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Tabs Section */}
      <Tabs
        value={tabValue}
        onValueChange={setTabValue}
        className="w-full mt-8"
      >
        <TabsList>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        {/* Documentation View */}
        <TabsContent value="documentation" className="mt-4">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <iframe
              src={getGoogleDrivePreviewLink(video?.pdf)}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </TabsContent>

        {/* Discussion View */}
        <TabsContent value="discussion" className="mt-4">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">
              Discussion ({data?.length || 0} comments)
            </h3>

            {/* Add Comment */}
            <div className="flex gap-4 mb-6">
              <textarea
                className="flex-grow p-4 rounded-md border bg-background"
                placeholder="Add a comment..."
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                rows={3}
              />
              <Button
                onClick={handleClick}
                disabled={isPosting || chat.trim() === ""}
                className="self-end cursor-pointer"
              >
                {isPosting ? "Posting..." : "Post"}
              </Button>
            </div>

            {/* Show Comments */}
            {isLoading ? (
              <div>Loading discussions...</div>
            ) : isError ? (
              <div className="text-red-500">Failed to load comments.</div>
            ) : data?.length === 0 ? (
              <div>No comments yet. Be the first to post!</div>
            ) : (
              <div className="space-y-6">
                {data.map((chatItem) => (
                  <div key={chatItem._id} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={
                          `http://localhost:3000/images/${chatItem?.userId?.image}` ||
                          "/default.png"
                        }
                        alt={chatItem?.userId?.name || "User"}
                        className="w-10 h-10 rounded-full bg-muted"
                      />
                      <div>
                        <div className="font-semibold">
                          {chatItem?.userId?.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {formatDistanceToNowStrict(
                            parseISO(chatItem.createdAt),
                            {
                              addSuffix: true,
                            }
                          )}
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
