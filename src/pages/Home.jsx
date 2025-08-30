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


   const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // Ensure it’s only loaded once
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <>
      <Carousel />
      <FilterBox
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <ClassList selectedCategories={selectedCategories} />
      
      <div className="my-4 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
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
