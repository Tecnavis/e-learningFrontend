import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SpecialDays() {
  const offers = [
    {
      id: 1,
      title: "Onam",
      description: "Get 50% off on all courses this summer",
      image: "/placeholder.svg?height=200&width=400",
      expiryDate: "July 31, 2023",
    },
    {
      id: 2,
      title: "Vishu",
      description: "First course free for new students",
      image: "/placeholder.svg?height=200&width=400",
      expiryDate: "Ongoing",
    },
    {
      id: 3,
      title: "New year",
      description: "Buy 2 courses and get 1 free",
      image: "/placeholder.svg?height=200&width=400",
      expiryDate: "August 15, 2023",
    },
    // {
    //   id: 1,
    //   title: "Onam",
    //   description: "Get 50% off on all courses this summer",
    //   image: "/placeholder.svg?height=200&width=400",
    //   expiryDate: "July 31, 2023",
    // },
    // {
    //   id: 2,
    //   title: "Vishu",
    //   description: "First course free for new students",
    //   image: "/placeholder.svg?height=200&width=400",
    //   expiryDate: "Ongoing",
    // },
    // {
    //   id: 3,
    //   title: "New year",
    //   description: "Buy 2 courses and get 1 free",
    //   image: "/placeholder.svg?height=200&width=400",
    //   expiryDate: "August 15, 2023",
    // }
  ]

  return (
    <div className="grid grid-cols-3 gap-2">
    {offers.map((offer) => (
      <Card key={offer.id} className="overflow-hidden rounded-lg">
        <div className="h-24 w-full">
          <img
            src={offer.image || "/placeholder.svg"}
            alt={offer.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="px-2 py-3 text-center">
          <h3 className="text-sm font-semibold">{offer.title}</h3>
        </CardContent>
      </Card>
    ))}
  </div>
  
  )
}
