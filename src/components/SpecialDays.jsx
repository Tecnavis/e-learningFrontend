import { useGetAllSpecialDaysQuery } from "@/app/service/specialDayData";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function SpecialDays() {
  const { data, isError, isLoading } = useGetAllSpecialDaysQuery();
  const navigate = useNavigate();

  const showSkeleton = isLoading || isError || !Array.isArray(data) || data.length === 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {showSkeleton
        ? Array.from({ length: 8 }).map((_, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg animate-pulse p-0"
            >
              <div className="h-24 sm:h-28 md:h-32 w-full bg-gray-300" />
            </Card>
          ))
        : data.slice(0, 8).map((day) => (
            <Card
              key={day._id}
              className="overflow-hidden rounded-lg cursor-pointer p-0"
              onClick={() => navigate(`/special-days/${day?._id}`)}
            >
              <div className="h-24 sm:h-28 md:h-32 w-full">
                <img
                  src={`${import.meta.env.VITE_API_URL}/images/${day.image}`}
                  alt={day.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>
          ))}
    </div>
  );
}
