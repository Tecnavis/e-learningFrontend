import { useGetASyllbusByIdQuery } from '@/app/service/syllbusData';
import Chapters from '@/components/chapter/Chapters'
import React from 'react'
import { useParams } from 'react-router-dom';

export default function ChaptersPage() {

   const {id, no, chapterId  } = useParams();
  
     const { data, isLoading, isError } = useGetASyllbusByIdQuery(id)
    
  
      const showSkeleton = isLoading || isError || !data;

    
    const subject = data?.classes.filter((cla) => cla.no == no)

    const chapter = subject?.[0].subjects.filter((chp) => chp._id == chapterId);
  
  return (
    <>
    <Chapters  isLoading = { showSkeleton }  chapters = {chapter?.[0].chapters}   id = {id} no = {no} chapterId = {chapterId} />
    </>
  )
}
