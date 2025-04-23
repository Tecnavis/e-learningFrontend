import { useGetAllSpecialDaysQuery } from "@/app/service/specialDayData"
import { Card, CardContent } from "@/components/ui/card"

export function SpecialDays() {
  
    const { data, isError, isLoading } = useGetAllSpecialDaysQuery()

 
    if (isLoading) return <h1>Loading...</h1>
    if (isError || !Array.isArray(data)) return <h1>Oops! Something went wrong.</h1>
  

  return (
    <div className="grid grid-cols-3 gap-2">
    {data.map((day) => (
      <Card key={day._id} className="overflow-hidden rounded-lg">
        <div className="h-24 w-full">
          <img
            src={`http://localhost:3000/images/${day.image}` || "/placeholder.svg"}
            alt={day.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="px-2 py-3 text-center">
          <h3 className="text-sm font-semibold">{day.title}</h3>
        </CardContent>
      </Card>
    ))}
  </div>
  
  )
}
