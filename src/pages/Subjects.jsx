import { SubjectsCard } from '@/components/subject/Subjects'
import React from 'react'

export default function Subjects() {

    const Subject = [
        {
          id: 1,
          title: "English",
          instructor: "John Doe",
          rating: 4.8,
          students: 1234,
          image: "/placeholder.svg?height=200&width=300",
          category: "Programming",
          level: "Beginner",
        },
        {
          id: 2,
          title: "Maths",
          instructor: "Jane Smith",
          rating: 4.9,
          students: 987,
          image: "/placeholder.svg?height=200&width=300",
          category: "Programming",
          level: "Advanced",
        },
        {
          id: 3,
          title: "Arabic",
          instructor: "Alex Johnson",
          rating: 4.7,
          students: 2345,
          image: "/placeholder.svg?height=200&width=300",
          category: "Data Science",
          level: "Intermediate",
        },
        {
          id: 4,
          title: "Biolagy",
          instructor: "Sarah Williams",
          rating: 4.6,
          students: 876,
          image: "/placeholder.svg?height=200&width=300",
          category: "Design",
          level: "Beginner",
        },
        {
          id: 5,
          title: "Chemistry",
          instructor: "Michael Brown",
          rating: 4.8,
          students: 1543,
          image: "/placeholder.svg?height=200&width=300",
          category: "Programming",
          level: "Intermediate",
        },
        {
          id: 6,
          title: "Fisics",
          instructor: "Emily Davis",
          rating: 4.9,
          students: 2109,
          image: "/placeholder.svg?height=200&width=300",
          category: "Data Science",
          level: "Advanced",
        }
      ]

  return (
    <>
        {/* Courses Section */}
        <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Select Subject</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Subject.map((subject) => (
            <SubjectsCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>
    </>
  )
}
