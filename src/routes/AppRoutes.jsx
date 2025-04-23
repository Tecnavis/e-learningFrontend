import ChaptersPage from '@/pages/Chapters'
import Home from '@/pages/Home'
import Subjects from '@/pages/Subjects'
import VideoPage from '@/pages/Video'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
        <Route  path='/' element= {<Home />} />
        <Route  path='/subjects/:id' element= {<Subjects />} />
        <Route  path='/chapters/:id' element= {<ChaptersPage />} />
        <Route  path='/video/:id' element= {<VideoPage />} />
    </Routes>
  )
}
