import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import { ArrowLeft, Search, BookOpen, Video, MessageCircle, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const studyGuide = [
  { icon: Video,         title: "Watch First",        desc: "Stream the video lesson for the chapter before opening the notes." },
  { icon: BookOpen,      title: "Read the Notes",     desc: "Go through the PDF documentation to reinforce what you just watched." },
  { icon: Target,        title: "Practice",           desc: "Answer practice questions at the end of each chapter to test yourself." },
  { icon: MessageCircle, title: "Ask Doubts",         desc: "Use the discussion section inside a lesson to post any questions." },
];

export default function Chapters({ isLoading, chapters, id, no, chapterId }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredLessons = chapters?.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 mb-2">
          <ArrowLeft onClick={() => navigate(-1)} className="h-6 w-6 cursor-pointer shrink-0" />
          Chapter Lessons
        </h1>
        <p className="text-sm text-muted-foreground pl-8">
          Select a lesson below to watch the video, read study notes, and join the discussion.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search lessons…"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Lesson cards */}
      <Tabs defaultValue="lessons">
        <TabsContent value="lessons" className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-10">
            {!isLoading
              ? filteredLessons.map((lesson) => (
                  <Card key={lesson._id} className="flex flex-col justify-between">
                    <CardContent className="p-6">
                      <div className="flex flex-col mb-2">
                        <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
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
                          <span className="text-sm text-muted-foreground ml-1">{lesson.rating}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{lesson.description}</p>
                      <div className="flex justify-between items-center">
                        {lesson.time && (
                          <span className="text-xs px-2 py-1 bg-secondary rounded-full">{lesson.time}</span>
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
                        <div className="h-5 w-1/2 bg-gray-300 rounded" />
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <div key={starIndex} className="h-4 w-4 bg-gray-300 rounded-full" />
                          ))}
                        </div>
                      </div>
                      <div className="h-4 w-full bg-gray-300 rounded mb-2" />
                      <div className="h-4 w-3/4 bg-gray-300 rounded mb-4" />
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-12 bg-gray-300 rounded-full" />
                        <div className="h-8 w-24 bg-gray-300 rounded" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Study guide block — publisher content surrounding the ad */}
      <div className="rounded-2xl bg-muted/30 border border-border p-6 mb-6">
        <h2 className="text-base font-bold mb-4">How to Study This Chapter Effectively</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {studyGuide.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-1">{title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AdSense Banner — placed between content blocks, never on a bare/navigation screen */}
      <div className="rounded-2xl overflow-hidden bg-muted/20 border border-dashed border-border">
        <AdBanner className="my-2 px-2" />
      </div>
    </div>
  );
}
