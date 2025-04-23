import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export function FilterBox() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLevels, setSelectedLevels] = useState([])



  const syllabus = [
  
    {
       syle: "Kerala",
       medium: "English Medium"

    },
    {
        syle: "Kerala",
        medium: "Malayalam Medium"
 
     },
     {
        syle: "CBSE",
        medium: "English Medium"
 
     },
  ]


  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }


  return (
    <Card>
      <CardContent className="p-6 ">


      <div className="mb-8 flex items-center justify-around">
        <div>
          <h2 className="text-3xl font-bold">Select Syllabus</h2>
        </div>
        {/* <button className="flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          <BookOpen className="mr-1 h-4 w-4" />
          View All
        </button> */}
      </div>

        <div className="flex justify-center items-center">


          {/* Categories */}
          <div>
            <div className="flex flex-wrap gap-2">
              {syllabus.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category)}
                  className="text-sm px-5 py-2 rounded-md cursor-pointer"

                >
                  {category.syle}
                  <span>{category.medium}</span>
                </Button>
              ))}
            </div>
          </div>
         
        </div>

      </CardContent>
    </Card>
  )
}
