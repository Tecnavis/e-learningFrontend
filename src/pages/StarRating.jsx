import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAddSyllbusRatingMutation } from "@/app/service/syllbusData"
import StarRating from "@/components/starRating/StarRating"
import { Button } from "@/components/ui/button"

export default function StarRatingPage({ id, classNo, subjectTitle, chapterTitle, setCancel }) {
  const [currentRating, setCurrentRating] = useState(0)

  const user = localStorage.getItem("user")
  

  const [addSyllbusRating, { isLoading: isPosting }] = useAddSyllbusRatingMutation()

  const handleRatingAdd = async (rating) => {
    if (rating === 0) return 

    try {
      const response = await addSyllbusRating({
        id,
        classNo,
        subjectTitle,
        chapterTitle,
        rating,
        userId: user?.userDetails?._id,
      })

      console.log("Rating added successfully:", response)
    } catch (error) {
      console.error("Failed to add rating:", error)
    }
  }

  return (
    <div>
      <Card className="w-full max-w-3xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Star Rating Component</CardTitle>
          <CardDescription className="text-center">
            Interactive star rating with customizable options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StarRating
            onRatingChange={(rating) => setCurrentRating(rating)}
            onSubmit={handleRatingAdd}
          />
        </CardContent>
        <Button onClick={() => setCancel(true)} className={"mx-3"}>Cancel</Button>
        </Card>
    </div>
  )
}
