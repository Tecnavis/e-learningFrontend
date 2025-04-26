import { Card, CardContent } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"



export function SubjectsCard({ subject, id, no}) {

  const navigate = useNavigate()

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md" onClick = {() => navigate(`/subjects/${id}/${no}/chapters/${subject._id}`) } >
      {/* <Link href={`/subjects/chapters/${subject.id}`}> */}
        <div className="relative aspect-video">
          <img src={subject.image || "/placeholder.svg"} alt={subject.title}  className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-2 mb-2">{subject.title}</h3>
          <div className="text-sm text-muted-foreground mb-2">Instructor: {subject.author}</div>
        </CardContent>
      {/* </Link> */}
    </Card>
  )
}
