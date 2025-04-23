import React from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ThemeProvider } from "next-themes";
import AppRoutes from './routes/AppRoutes';


export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  </ThemeProvider>
  )
}
