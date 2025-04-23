import { Carousel } from '@/components/Carousel'
import ClassList from '@/components/Class-list'
import { FilterBox } from '@/components/Filter-box'
import { SpecialDays } from '@/components/SpecialDays'
import React from 'react'

export default function Home() {
  return (
    <>
        <Carousel />
       <FilterBox />
       <ClassList />
       <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Special Days</h2>
        <SpecialDays />
      </section>
    </>
  )
}
