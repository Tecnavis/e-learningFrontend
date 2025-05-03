import { useGetAllSpecialDaysQuery } from "@/app/service/specialDayData";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

export function SpecialDaysCard() {
  const { data, isError, isLoading } = useGetAllSpecialDaysQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredSpecialDays =
    !isLoading && data?.length > 0
      ? data.filter((days) =>
          days.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !Array.isArray(data))
    return <h1>Oops! Something went wrong.</h1>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="h-6 w-6 cursor-pointer"
        />
        Special Days
      </h2>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search subjects..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Grid: Always 3 columns */}
      <div className="grid grid-cols-3 gap-2">
        {!isLoading
          ? filteredSpecialDays.map((day) => (
              <Card
                key={day._id}
                className="overflow-hidden rounded-lg cursor-pointer"
                onClick={() => navigate(`/special-days/${day._id}`)}
              >
                {/* Image height reduced only for small screens */}
                <div className="h-20 sm:h-24 w-full">
                  <img
                    src={
                      `${import.meta.env.VITE_API_URL}/images/${day.image}` ||
                      "/placeholder.svg"
                    }
                    alt={day.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="px-2 py-2 sm:py-3 text-center">
                  <h3 className="text-xs sm:text-sm font-semibold">
                    {day.title}
                  </h3>
                </CardContent>
              </Card>
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-lg animate-pulse"
              >
                <div className="h-20 sm:h-24 w-full bg-gray-300" />
                <CardContent className="px-2 py-2 sm:py-3 text-center">
                  <div className="h-3 w-20 bg-gray-300 rounded mx-auto" />
                </CardContent>
              </Card>
            ))}
      </div>
    </section>
  );
}
