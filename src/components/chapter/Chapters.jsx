import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export default function Chapters({ isLoading, chapters, id, no, chapterId }) {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  // Filter lessons based on search query and level
  const filteredLessons = chapters?.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Subject Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-2/3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <ArrowLeft
              onClick={() => navigate(-1)}
              className="h-6 w-6 cursor-pointer"
            />
            Chapters
          </h2>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search chapters..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="lessons" className="mb-8">
        <TabsContent value="lessons" className="pt-5">
          {/* Grid layout for lessons, 2 items per row on all screen sizes */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {!isLoading
              ? filteredLessons.map((lesson) => (
                  <Card
                    key={lesson._id}
                    className="flex flex-col justify-between"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col mb-2">
                        <h3 className="text-lg font-semibold mb-2">
                          {lesson.title}
                        </h3>

                        {/* Move Rating Below Heading */}
                        <div className="flex items-center gap-1 text-yellow-500 mb-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className={`h-4 w-4 ${
                                index < Math.round(lesson.rating)
                                  ? "fill-yellow-500"
                                  : "fill-muted stroke-muted"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            {lesson.rating}
                          </span>
                        </div>
                      </div>

                      {/* Decrease font size for description */}
                      <p className="text-muted-foreground text-sm mb-4">
                        {lesson.description}
                      </p>

                      <div className="flex justify-between items-center">
                        {lesson.time && (
                          <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                            {lesson.time}
                          </span>
                        )}
                        <div className="w-full flex justify-center sm:justify-end">
                          <Button
                            onClick={() =>
                              navigate(
                                `/subjects/${id}/${no}/chapters/${chapterId}/video/${lesson._id}`
                              )
                            }
                            variant="outline"
                            size="sm"
                            className="cursor-pointer"
                          >
                            Watch Lesson
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : Array.from({ length: 8 }).map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        {/* Skeleton title */}
                        <div className="h-5 w-1/2 bg-gray-300 rounded" />
                        {/* Skeleton stars */}
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <div
                              key={starIndex}
                              className="h-4 w-4 bg-gray-300 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                      {/* Skeleton description */}
                      <div className="h-4 w-full bg-gray-300 rounded mb-2" />
                      <div className="h-4 w-3/4 bg-gray-300 rounded mb-4" />
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-12 bg-gray-300 rounded-full" />
                        {/* Skeleton button */}
                        <div className="h-8 w-24 bg-gray-300 rounded" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
