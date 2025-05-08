import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetASpecialDaysByIdQuery } from "@/app/service/specialDayData";

export default function Pdf() {
  const [tabValue, setTabValue] = useState("documentation");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const containerRef = useRef(null);

  const { data, isError, isLoading } = useGetASpecialDaysByIdQuery(id);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // Use Google Drive PREVIEW link
  const getGoogleDrivePreviewLink = (url) => {
    if (!url) return "";
    const match = url.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Oops! Something went wrong.</h1>;

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isFullscreen ? "h-screen" : "container mx-auto px-4 py-8"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="h-6 w-6 cursor-pointer"
          />
          {data?.title}
        </h2>
        <button
          onClick={toggleFullscreen}
          className="p-2 border rounded  cursor-pointer transition"
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5 text-violet-600" />
          ) : (
            <Maximize2 className="w-5 h-5  text-violet-600" />
          )}
        </button>
      </div>

      <Tabs
        value={tabValue}
        onValueChange={setTabValue}
        className="w-full"
      >
        <TabsContent value="documentation">
          <div
            className={`rounded-xl overflow-hidden shadow-md ${
              isFullscreen ? "w-full h-[calc(100vh-60px)]" : "h-[80vh]"
            }`}
          >
            <iframe
              src={getGoogleDrivePreviewLink(data?.pdf)}
              className="w-full h-full"
              frameBorder="0"
              title="PDF Viewer"
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
