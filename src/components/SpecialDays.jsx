import { useGetAllSpecialDaysQuery } from "@/app/service/specialDayData";
import { useNavigate } from "react-router-dom";
import { CalendarDays } from "lucide-react";

export function SpecialDays() {
  const { data, isError, isLoading } = useGetAllSpecialDaysQuery();
  const navigate = useNavigate();

  const showSkeleton = isLoading || isError || !Array.isArray(data) || data.length === 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {showSkeleton
        ? Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden animate-pulse bg-muted aspect-[4/3]" />
          ))
        : data.slice(0, 8).map((day) => (
            <div
              key={day._id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] card-lift"
              onClick={() => navigate(`/special-days/${day?._id}`)}
            >
              <img
                src={day.image}
                alt={day.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {day.title}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
