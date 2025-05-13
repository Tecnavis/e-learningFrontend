import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

export function SubjectsCard({ isLoading, subject, id, no }) {
  const navigate = useNavigate();

  return (
    <>
      {!isLoading ? (
         <Card
          className="w-full max-w-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all !p-0 !m-0"
          onClick={() =>
            navigate(`/subjects/${id}/${no}/chapters/${subject._id}`)
          }
        >
          <div className="relative w-full h-40">
            {" "}
            <img
              src={
                subject.image
                  ? `${import.meta.env.VITE_API_URL}/images/${subject.image}`
                  : "/placeholder.svg"
              }
              alt={subject.title}
              className="w-full h-full object-cover block m-0 p-0"
            />
          </div>

          <CardContent className="p-3">
            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
              {subject.title}
            </h3>
            <div className="text-xs text-muted-foreground">
              Instructor: {subject.author}
            </div>
          </CardContent>
        </Card>
      ) : (
        Array.from({ length: 8 }).map((_, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all animate-pulse cursor-pointer"
          >
            <div className="relative aspect-video bg-gray-300" />
            <CardContent className="p-4">
              <div className="h-4 w-3/4 bg-gray-300 rounded mb-2" />
              <div className="h-3 w-1/2 bg-gray-300 rounded" />
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}
