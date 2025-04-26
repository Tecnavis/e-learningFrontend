import { useGetASyllbusByIdQuery } from '@/app/service/syllbusData';
import { SubjectsCard } from '@/components/subject/Subjects'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Subjects() {

  const {id, no } = useParams();

   const { data, isLoading, isError } = useGetASyllbusByIdQuery(id)
  
    if (isLoading) return <div className="p-4">Loading...</div>
    if (isError || !data || data.length === 0) return <div className="p-4">No subject found.</div>
  
  const subject = data?.classes.filter((cla) => cla.no == no)
  

   
  return (
    <>
        {/* Courses Section */}
        <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Select Subject</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subject?.[0].subjects?.map((subject) => (
            <SubjectsCard key={subject._id} subject={subject} id= {id} no= {no} />
          ))}
        </div>
      </section>
    </>
  )
}
