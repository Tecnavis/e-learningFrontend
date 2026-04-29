import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData";
import { GraduationCap } from "lucide-react";

export function FilterBox({ selectedCategories, setSelectedCategories }) {
  const { data, isError, isLoading } = useGetAllSyllbusQuery();

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <GraduationCap className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-base font-bold">Select Your Syllabus</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-28 rounded-xl" />
          ))}

        {!isLoading && !isError && Array.isArray(data) &&
          data.map((category) => {
            const isSelected = selectedCategories === category.title;
            return (
              <button
                key={category._id}
                onClick={() => setSelectedCategories(category?.title)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-background border-border hover:border-primary/40 hover:bg-primary/5 text-foreground/70 hover:text-foreground"
                }`}
              >
                {category.title}
              </button>
            );
          })}

        {isError && (
          <p className="text-sm text-destructive">Failed to load syllabus options.</p>
        )}
      </div>
    </div>
  );
}
