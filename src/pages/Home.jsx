import { Carousel } from '@/components/Carousel'
import ClassList from '@/components/Class-list'
import { FilterBox } from '@/components/Filter-box'
import { SpecialDays } from '@/components/SpecialDays'
import React, { useState } from 'react'

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState(null)

  return (
    <>
        <Carousel />
       <FilterBox  selectedCategories = {selectedCategories} setSelectedCategories = {setSelectedCategories} />
       <ClassList selectedCategories = {selectedCategories}  />
       <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Special Days</h2>
        <SpecialDays />
      </section>
    </>
  )
}
