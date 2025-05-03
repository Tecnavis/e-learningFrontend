import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetASpecialDaysByIdQuery } from "@/app/service/specialDayData";

export default function Pdf() {
  const [tabValue, setTabValue] = useState("documentation");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

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

  const getGoogleDrivePreviewLink = (url) => {
    if (!url) return ""; // Return empty string if URL is invalid
    const match = url.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Oops! Something went wrong.</h1>;

  return (
    <div className="container mx-auto px-4 py-8 relative ">
      <h1 className="text-3xl font-bold mb-6">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="h-6 w-6 cursor-pointer"
        />
        {data?.title}
      </h1>

      {/* Tabs Section */}
      <Tabs
        value={tabValue}
        onValueChange={setTabValue}
        className="w-full mt-8"
      >
        {/* Documentation View */}
        <TabsContent value="documentation" className="mt-4">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <iframe
              src={getGoogleDrivePreviewLink(data?.pdf)}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
