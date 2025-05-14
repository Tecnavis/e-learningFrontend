import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useAddNewDiscussionMutation,
  useGetAllDocDiscussionQuery,
} from "@/app/service/discussionData";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRatingPage from "@/pages/StarRating";

export default function Videos({ video, title, videosId, id, no, subject }) {
  const [tabValue, setTabValue] = useState("documentation");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenPdfIndex, setFullscreenPdfIndex] = useState(null);
  const [chat, setChat] = useState("");
  const [showAd, setShowAd] = useState(true);
  const [user] = useState(JSON.parse(localStorage.getItem("user"))?.userDetails);
  const [showStarRating, stShowStarRating] = useState(false);
  const [Cancel, setCancel] = useState(false);
  const navigate = useNavigate();
  const adRef = useRef(null);
  const containerRef = useRef(null);
  const { data, isLoading, isError, refetch } = useGetAllDocDiscussionQuery(videosId);
  const [addNewDiscussion, { isLoading: isPosting }] = useAddNewDiscussionMutation();

  useEffect(() => {
    const timer = setTimeout(() => setShowAd(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement) setFullscreenPdfIndex(null);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (window.adsbygoogle && adRef.current) {
      const alreadyLoaded = adRef.current.getAttribute("data-ad-status") === "done";
      if (!alreadyLoaded) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adRef.current.setAttribute("data-ad-status", "done");
        } catch (e) {
          console.error("AdSense injection failed", e);
        }
      }
    }
  }, [showAd]);

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

  if (showAd) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-6820691540388182"
          data-ad-slot="1420763964"
          data-ad-format="auto"
          data-full-width-responsive="true"
          ref={adRef}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
        <ArrowLeft onClick={handleBack} className="h-6 w-6 cursor-pointer" />
        {title}
      </h2>

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

      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full mt-8">
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
                  <div className="relative w-full h-[85vh] rounded-xl overflow-hidden shadow-md" ref={containerRef}>
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
            <p className="text-muted-foreground">No documentation available.</p>
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
                placeholder="Add a comment..."
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                rows={3}
              />
              <Button
                onClick={handleClick}
                disabled={isPosting || chat.trim() === ""}
                className="self-end"
              >
                {isPosting ? "Posting..." : "Post"}
              </Button>
            </div>

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
                          `${chatItem?.userId?.image}` ||
                          "/default.png"
                        }
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

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   useAddNewDiscussionMutation,
//   useGetAllDocDiscussionQuery,
// } from "@/app/service/discussionData";
// import { formatDistanceToNowStrict, parseISO } from "date-fns";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import StarRatingPage from "@/pages/StarRating";

// export default function Videos({ video, title, videosId, id, no, subject }) {
//   const [tabValue, setTabValue] = useState("documentation");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [chat, setChat] = useState("");
//   const userData = JSON.parse(localStorage.getItem("user"));
//   const [user, setUser] = useState(userData?.userDetails);
//   const [showStarRating, stShowStarRating] = useState(false);
//   const [Cancel, setCancel] = useState(false);
//   const navigate = useNavigate();

//   const { data, isLoading, isError, refetch } = useGetAllDocDiscussionQuery(videosId);
//   const [addNewDiscussion, { isLoading: isPosting }] = useAddNewDiscussionMutation();
//   const adRef = useRef(null);

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };
//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   // Handle AdSense only once
//   useEffect(() => {
//     if (window.adsbygoogle && adRef.current) {
//       try {
//         // if (!adRef.current.getAttribute("data-ad-loaded")) {
//         //   window.adsbygoogle.push({});
//         //   adRef.current.setAttribute("data-ad-loaded", "true");
//         // }

//         (window.adsbygoogle = window.adsbygoogle || []).push({});

//       } catch (e) {
//         console.error("AdSense injection failed", e);
//       }
//     }
//   }, []);

//   const getYoutubeEmbedLink = (url) => {
//     try {
//       const parsed = new URL(url);
//       const videoId = parsed.searchParams.get("v");
//       return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
//     } catch {
//       return "";
//     }
//   };

//   const getGoogleDrivePreviewLink = (url) => {
//     const match = url?.match(/\/d\/(.*?)\//);
//     return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
//   };

//   const handleClick = async () => {
//     if (chat.trim() === "") return;
//     try {
//       const response = await addNewDiscussion({
//         documentId: videosId,
//         chat,
//         userId: user._id,
//       });
//       if (response?.data?.status === 201) {
//         setChat("");
//         refetch();
//       }
//     } catch (error) {
//       console.error("Failed to add discussion:", error);
//     }
//   };

//   const handlBack = () => stShowStarRating(true);

//   useEffect(() => {
//     if (Cancel) {
//       stShowStarRating(false);
//       navigate(-1);
//     }
//   }, [Cancel]);

//   return (
//     <div className="container mx-auto px-4 py-8 relative">
//       <h1 className="text-3xl font-bold mb-6">
//         <ArrowLeft onClick={handlBack} className="h-6 w-6 cursor-pointer inline-block mr-2" />
//         {title}
//       </h1>

//       {/* AdSense Ad */}
//       <div className="my-6 w-[100%] overflow-hidden ">
//         <ins
//           className="adsbygoogle bg-black"
//           style={{ display: "block", width: "100%", height: "" }}
//           data-ad-client="ca-pub-9589063125380558"
//           data-ad-slot="3684043265"
//           ref={adRef}
//         />
//       </div>

//       {/* Video Section */}
//       {video?.video && (
//         <div className="relative mb-8 bg-black rounded-lg overflow-hidden">
//           <iframe
//             className="w-full aspect-video"
//             src={getYoutubeEmbedLink(video.video)}
//             title="YouTube video"
//             frameBorder="0"
//             allowFullScreen
//           />
//         </div>
//       )}

//       {/* Tabs Section */}
//       <Tabs value={tabValue} onValueChange={setTabValue} className="w-full mt-8">
//         <TabsList>
//           <TabsTrigger value="documentation">Documentation</TabsTrigger>
//           <TabsTrigger value="discussion">Discussion</TabsTrigger>
//         </TabsList>

//         <TabsContent value="documentation" className="mt-4">
//           <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
//             <iframe
//               src={getGoogleDrivePreviewLink(video?.pdf)}
//               className="w-full h-full"
//               frameBorder="0"
//               allow="autoplay"
//             />
//           </div>
//         </TabsContent>

//         <TabsContent value="discussion" className="mt-4">
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold mb-4">
//               Discussion ({data?.length || 0} comments)
//             </h3>
//             <div className="flex gap-4 mb-6">
//               <textarea
//                 className="flex-grow p-4 rounded-md border bg-background"
//                 placeholder="Add a comment..."
//                 value={chat}
//                 onChange={(e) => setChat(e.target.value)}
//                 rows={3}
//               />
//               <Button
//                 onClick={handleClick}
//                 disabled={isPosting || chat.trim() === ""}
//                 className="self-end"
//               >
//                 {isPosting ? "Posting..." : "Post"}
//               </Button>
//             </div>
//             {isLoading ? (
//               <div>Loading discussions...</div>
//             ) : isError ? (
//               <div className="text-red-500">Failed to load comments.</div>
//             ) : data?.length === 0 ? (
//               <div>No comments yet. Be the first to post!</div>
//             ) : (
//               <div className="space-y-6">
//                 {data.map((chatItem) => (
//                   <div key={chatItem._id} className="border-b pb-4">
//                     <div className="flex items-center gap-2 mb-2">
//                       <img
//                         src={
//                           `${import.meta.env.VITE_API_URL}/images/${chatItem?.userId?.image}` ||
//                           "/default.png"
//                         }
//                         alt={chatItem?.userId?.name || "User"}
//                         className="w-10 h-10 rounded-full bg-muted"
//                       />
//                       <div>
//                         <div className="font-semibold">{chatItem?.userId?.name}</div>
//                         <div className="text-sm text-muted-foreground">
//                           {formatDistanceToNowStrict(parseISO(chatItem.createdAt), {
//                             addSuffix: true,
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="ml-12">{chatItem?.chat}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>

//       {showStarRating && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <StarRatingPage
//             chapterTitle={title}
//             id={id}
//             classNo={no}
//             subjectTitle={subject}
//             setCancel={setCancel}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
