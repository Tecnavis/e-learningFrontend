import { useGetASyllbusByIdQuery } from '@/app/service/syllbusData';
import Videos from '@/components/video/Video'
import React from 'react'
import { useParams } from 'react-router-dom';

export default function VideoPage() {
     const {id, no, chapterId, videoId   } = useParams();     
    
       const { data, isLoading, isError } = useGetASyllbusByIdQuery(id)
      
        if (isLoading) return <div className="p-4">Loading...</div>
        if (isError || !data || data.length === 0) return <div className="p-4">No subject found.</div>
    
      
      const subject = data?.classes.filter((cla) => cla.no == no)
  
      const chapter = subject?.[0].subjects.filter((chp) => chp._id == chapterId);
      
      const video = chapter?.[0].chapters.filter((vid) =>  vid._id == videoId);
          
    
  return (
    <>
     <Videos  title = {chapter?.[0].chapters[0].title}  video = {video?.[0].document} id = {id}  no={no} subject = {chapter?.[0].title} videosId ={videoId} />
    </>
  )
}
