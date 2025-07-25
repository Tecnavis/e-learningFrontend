import Pdf from '@/components/pdf/Pdf'
import { SpecialDaysCard } from '@/components/specialDays/SpecialDays'
import AboutPage from '@/pages/About'
import SignInPage from '@/pages/auth/SignIn'
import SignUpPage from '@/pages/auth/SignUp'
import ChaptersPage from '@/pages/Chapters'
import ContactPage from '@/pages/Contact'
import Home from '@/pages/Home'
import Subjects from '@/pages/Subjects'
import VideoPage from '@/pages/Video'
import ProtectedRoutes from '@/utils/ProtectedRoutes'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
{/*       <Route path="/sign-in" element={<SignInPage />} /> */}
{/*       <Route path="/sign-up" element={<SignUpPage />} /> */}

{/*       <Route element={<ProtectedRoutes />}> */}
        <Route path="/subjects/:id/:no" element={<Subjects />} />
        <Route
          path="/subjects/:id/:no/chapters/:chapterId"
          element={<ChaptersPage />}
        />
        <Route
          path="/subjects/:id/:no/chapters/:chapterId/video/:videoId"
          element={<VideoPage />}
        />
        <Route path="/special-days" element={<SpecialDaysCard />} />
        <Route path="/special-days/:id" element={<Pdf />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
{/*       </Route> */}
    </Routes>
  );
}

