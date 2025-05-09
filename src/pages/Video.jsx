import { useGetASyllbusByIdQuery } from '@/app/service/syllbusData';
import { Skeleton } from "@/components/ui/skeleton";
import Videos from '@/components/video/Video'
import React from 'react'
import { useParams } from 'react-router-dom';

export default function VideoPage() {
     const {id, no, chapterId, videoId   } = useParams();     
         
       const { data, isLoading, isError } = useGetASyllbusByIdQuery(id)
      
       const showSkeleton = isLoading || isError || !data;

  if (showSkeleton) {
    return (
      <div className="flex items-center justify-center h-screen px-4">
        <Skeleton className="w-full max-w-5xl h-[80vh] rounded-xl" />
      </div>
    );
  }
      
      const subject = data?.classes.filter((cla) => cla.no == no)
  
      const chapter = subject?.[0].subjects.filter((chp) => chp._id == chapterId);
      
      const video = chapter?.[0].chapters.filter((vid) =>  vid._id == videoId);
          
    
  return (
    <>
     <Videos  title = {chapter?.[0].chapters[0].title}  video = {video?.[0].document} id = {id}  no={no} subject = {chapter?.[0].title} videosId ={videoId} />
    </>
  )
}
