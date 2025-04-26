import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {  useNavigate,  } from "react-router-dom";
import { Star } from "lucide-react";

export default function Chapters({ chapters, id, no, chapterId  }) {
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
          <h1 className="text-3xl font-bold mb-2">Chapters</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson) => (
              <Card key={lesson._id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{lesson.title}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
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
                  <p className="text-muted-foreground mb-4">
                    {lesson.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full"></span>
                    <Button
                      onClick={() => navigate(`/subjects/${id}/${no}/chapters/${chapterId}/video/${lesson._id}`)}
                      variant="outline"
                      size="sm"
                    >
                      Watch Lesson
                    </Button>
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
