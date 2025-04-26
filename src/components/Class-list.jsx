import { useState } from "react"
import { motion } from "framer-motion"
import { Book, NotebookText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData"

function ClassCard({ id,no, title, subjects = 0, color = "bg-blue-500" }) {
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
        // onClick={() => navigate(`/subjects/${id, no}`)}
        onClick={() => navigate(`/subjects/${id}/${no}`)}

      >
        <div className={`h-2 ${color} rounded-t-md`} />
        <CardContent className="flex flex-col items-center justify-center gap-2 pt-4 px-2 pb-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${color} text-white font-bold text-sm`}>
            {no}
          </div>
          <div className="text-sm font-medium">{title}</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {/* <Book className="h-4 w-4" /> */}
          <NotebookText className="h-4 w-4" />
            <span>{subjects}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ClassList() {
  const { data, isLoading, isError } = useGetAllSyllbusQuery()

  if (isLoading) return <div className="p-4">Loading...</div>
  if (isError || !data || data.length === 0) return <div className="p-4">No syllabus found.</div>

  const syllabus = data[0] 
    
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Available Classes for {syllabus.title}</h2>
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> */}
      <div className="grid grid-cols-4 gap-2">

        {syllabus.classes.map((classItem) => (
          <ClassCard
            key={classItem._id}
            id={syllabus._id}
            no={classItem.no}
            title={`Class ${classItem.no}`}
            subjects={classItem.subjects.length}
            color="bg-sky-500"
          />
        ))}
      </div>
    </div>
  )
}
