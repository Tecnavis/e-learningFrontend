"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Chapters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const navigate = useNavigate();
  const {id} = useParams()

  // Sample lessons data
  const lessons = [
    {
      id: 1,
      title: "Introduction to HTML",
      duration: "45 min",
      level: "beginner",
      description: "Learn the basics of HTML structure and elements",
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      duration: "60 min",
      level: "beginner",
      description: "Style your web pages with CSS",
    },
    {
      id: 3,
      title: "JavaScript Basics",
      duration: "75 min",
      level: "intermediate",
      description: "Add interactivity to your websites with JavaScript",
    },
    {
      id: 4,
      title: "Responsive Design",
      duration: "50 min",
      level: "intermediate",
      description: "Make your websites look good on all devices",
    },
    {
      id: 5,
      title: "Working with APIs",
      duration: "65 min",
      level: "advanced",
      description: "Connect your website to external data sources",
    },
    {
      id: 6,
      title: "Web Performance Optimization",
      duration: "55 min",
      level: "advanced",
      description: "Make your websites load faster and perform better",
    },
  ]

  // Filter lessons based on search query and level
  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === "all" || lesson.level === selectedLevel
    return matchesSearch && matchesLevel
  })

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
     
        <TabsContent value="lessons" className='pt-5'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{lesson.title}</h3>
                    <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{lesson.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                    </span>
                    {/* <Link href={`/video/${lesson.id}`}> */}
                      <Button  onClick = {() => navigate(`/video/${lesson.id}`)} variant="outline" size="sm">
                        Watch Lesson
                      </Button>
                    {/* </Link> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
      </Tabs>
    </div>
  )
}
