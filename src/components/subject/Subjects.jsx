import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"



export function SubjectsCard({ subject }) {

  const navigate = useNavigate()

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md" onClick = {() => navigate(`/chapters/${subject.id}`) } >
      {/* <Link href={`/subjects/chapters/${subject.id}`}> */}
        <div className="relative aspect-video">
          <img src={subject.image || "/placeholder.svg"} alt={subject.title} fill className="object-cover" />
          {/* <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{subject.level}</div> */}
        </div>
        <CardContent className="p-4">
          {/* <div className="text-sm text-muted-foreground mb-1">{subject.category}</div> */}
          <h3 className="font-semibold line-clamp-2 mb-2">{subject.title}</h3>
          <div className="text-sm text-muted-foreground mb-2">Instructor: {subject.instructor}</div>
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{subject.rating}</span>
              <span className="text-xs text-muted-foreground ml-1">({subject.students})</span>
            </div>
          </div> */}
        </CardContent>
      {/* </Link> */}
    </Card>
  )
}
