// ── Home.jsx ────────────────────────────────────────────────────────────────
import { Carousel } from "@/components/Carousel";
import ClassList from "@/components/Class-list";
import { FilterBox } from "@/components/Filter-box";
import { SpecialDays } from "@/components/SpecialDays";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const navigate = useNavigate();

  const adRef = useRef(null);
  const adPushed = useRef(false);

  useEffect(() => {
    // Guard against double-push (React StrictMode / re-renders)
    if (adPushed.current) return;
    adPushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <>
      <Carousel />

      {/* ── Business Description Section ── */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Learn Smarter with{" "}
              <span className="text-primary">Cognix Learn</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl md:mx-0 mx-auto">
              Cognix Learn is your all-in-one e-learning platform offering
              structured courses, chapter-wise video lessons, study materials,
              and live discussions — all designed to help students excel. From
              school subjects to competitive exams, we make quality education
              accessible for everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-8 mt-6 justify-center md:justify-start">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-primary">500+</span>
                <span className="text-xs text-muted-foreground">Video Lessons</span>
              </div>
              <div className="w-px bg-border hidden md:block" />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-primary">50+</span>
                <span className="text-xs text-muted-foreground">Subjects Covered</span>
              </div>
              <div className="w-px bg-border hidden md:block" />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-primary">10k+</span>
                <span className="text-xs text-muted-foreground">Students Enrolled</span>
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
      <div className="w-full my-4 px-2">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6820691540388182"
          data-ad-slot="1420763964"
          data-ad-format="auto"
          data-full-width-responsive="true"
          ref={adRef}
        />
      </div>

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
