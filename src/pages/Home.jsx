import { Carousel } from '@/components/Carousel'
import ClassList from '@/components/Class-list'
import { FilterBox } from '@/components/Filter-box'
import { SpecialDays } from '@/components/SpecialDays'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState(null)

  const navigate = useNavigate();

  return (
    <>
        <Carousel />
       <FilterBox  selectedCategories = {selectedCategories} setSelectedCategories = {setSelectedCategories} />
       <ClassList selectedCategories = {selectedCategories}  />
       <section className="container mx-auto px-4 py-12">
        <div className='flex justify-between'>
        <h2 className="text-2xl font-bold mb-6">Special Days</h2>
        <div>

         <h4 onClick={() => navigate('/special-days')} className='flex justify-center items-center cursor-pointer'>See More <ArrowRight className="w-4 h-4" /> </h4>
        </div>
        </div>
        <SpecialDays />
      </section>
    </>
  )
}
