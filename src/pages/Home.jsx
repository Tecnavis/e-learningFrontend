// ── Home.jsx ────────────────────────────────────────────────────────────────
import { Carousel } from "@/components/Carousel";
import ClassList from "@/components/Class-list";
import { FilterBox } from "@/components/Filter-box";
import { SpecialDays } from "@/components/SpecialDays";
import AdBanner from "@/components/AdBanner";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Carousel />

     {/* ── Business Description Section ── */}
<section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 border-b">
  
  {/* Background Glow Effects */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30"></div>

  <div className="container mx-auto px-4 py-14 relative z-10">
    
    <div className="max-w-5xl mx-auto text-center md:text-left">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
        Learn Smarter with{" "}
        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Cognix Learn
        </span>
      </h1>

      {/* Sub Text */}
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl md:mx-0 mx-auto">
        Cognix Learn is your all-in-one e-learning platform offering
        structured courses, chapter-wise video lessons, study materials,
        and live discussions — all designed to help students excel.
        From school subjects to competitive exams, we make quality
        education accessible for everyone, everywhere.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
        <button className="px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-lg hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-xl border border-border hover:bg-muted transition-all duration-300">
          Explore Courses
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-10 max-w-md md:max-w-none mx-auto md:mx-0">
        
        <div className="bg-background/60 backdrop-blur-lg border rounded-2xl p-4 text-center md:text-left shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-primary">100+</h3>
          <p className="text-xs text-muted-foreground">Video Lessons</p>
        </div>

        <div className="bg-background/60 backdrop-blur-lg border rounded-2xl p-4 text-center md:text-left shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-primary">50+</h3>
          <p className="text-xs text-muted-foreground">Subjects Covered</p>
        </div>

        <div className="bg-background/60 backdrop-blur-lg border rounded-2xl p-4 text-center md:text-left shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-primary">10k+</h3>
          <p className="text-xs text-muted-foreground">Students Enrolled</p>
        </div>

      </div>
    </div>
  </div>
</section>

      <FilterBox
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <ClassList selectedCategories={selectedCategories} />

      {/* ── Google AdSense Banner ── */}
      <AdBanner className="my-4 px-2" />

      <section className="container mx-auto px-4 py-4">
        <div className="flex justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
            Discover
          </h2>
          <div>
            <h4
              onClick={() => navigate("/special-days")}
              className="text-sm sm:text-base md:text-xl flex justify-center items-center cursor-pointer gap-1"
            >
              See More <ArrowRight className="w-4 h-4" />
            </h4>
          </div>
        </div>
        <SpecialDays />
      </section>
    </>
  );
}
