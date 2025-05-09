
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData"

export function FilterBox({ selectedCategories, setSelectedCategories }) {
  const { data, isError, isLoading } = useGetAllSyllbusQuery()

  return (
    <Card className="w-full">
      <CardContent className="p-2">
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 text-center">
          Select Syllabus
        </h2>

        <div className="overflow-x-auto">
          <div className="flex flex-wrap gap-2 justify-center w-full">
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-8 w-20 rounded-md flex-shrink-0"
                />
              ))}

            {!isLoading && !isError && Array.isArray(data) &&
              data.map((category) => (
                <Button
                  key={category._id}
                  variant={
                    selectedCategories === category.title
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategories(category?.title)}
                  className="text-xs sm:text-sm md:text-base px-3 py-1 whitespace-nowrap flex-shrink-0 cursor-pointer"
                >
                  {category.title}
                </Button>
              ))}

            {isError && (
              <div className="text-sm text-red-500 font-medium">
                Failed to load syllabus. Please try again later.
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

