import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData"


export function FilterBox() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLevels, setSelectedLevels] = useState([])

  const { data, isError, isLoading } = useGetAllSyllbusQuery()


  

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

      </div>

        <div className="flex justify-center items-center">


          {/* Categories */}
          <div>
            <div className="flex flex-wrap gap-2">
              {data?.map((category) => (
                <Button
                  key={category._id}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category)}
                  className="text-sm px-5 py-2 rounded-md cursor-pointer"

                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
         
        </div>

      </CardContent>
    </Card>
  )
}
