import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Users, Clock, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"


const classes = [
    {
      id: 1,
      title: "Introduction to Mathematics",
      students: 24,
      duration: "8 weeks",
      level: "Beginner",
      color: "bg-rose-500",
    },
    {
      id: 2,
      title: "Advanced Physics",
      students: 18,
      duration: "12 weeks",
      level: "Advanced",
      color: "bg-amber-500",
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      students: 22,
      duration: "10 weeks",
      level: "Intermediate",
      color: "bg-emerald-500",
    },
    {
      id: 4,
      title: "Biology & Life Sciences",
      students: 26,
      duration: "14 weeks",
      level: "Beginner",
      color: "bg-sky-500",
    },
    {
      id: 5,
      title: "Computer Programming",
      students: 20,
      duration: "16 weeks",
      level: "Intermediate",
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Art & Design",
      students: 15,
      duration: "8 weeks",
      level: "Beginner",
      color: "bg-pink-500",
    },
  ]


  function ClassCard({ id, title, students, duration, level, color }) {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: id * 0.05 }}
        whileHover={{ scale: 1.03 }}
      >
        <Card
          className="rounded-xl overflow-hidden p-2 text-center hover:shadow-md transition-all cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate(`/subjects/${id}`)}
        >
          <div className={`h-2 ${color} rounded-t-md`} />
          <CardContent className="flex flex-col items-center justify-center gap-2 pt-4 px-2 pb-2">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${color} text-white font-bold text-sm`}>
              {id}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{students}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }
  
export default function ClassList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Available Classes</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
  {classes.map((classItem) => (
    <ClassCard key={classItem.id} {...classItem} />
  ))}
</div>


    </div>
  )
}
