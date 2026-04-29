import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData";

const classColors = [
  { bg: "from-blue-500 to-blue-600", ring: "ring-blue-200 dark:ring-blue-900", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  { bg: "from-emerald-500 to-teal-600", ring: "ring-emerald-200 dark:ring-emerald-900", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
  { bg: "from-violet-500 to-purple-600", ring: "ring-violet-200 dark:ring-violet-900", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300" },
  { bg: "from-rose-500 to-pink-600", ring: "ring-rose-200 dark:ring-rose-900", badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" },
  { bg: "from-orange-500 to-amber-600", ring: "ring-orange-200 dark:ring-orange-900", badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
  { bg: "from-cyan-500 to-sky-600", ring: "ring-cyan-200 dark:ring-cyan-900", badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" },
];

function ClassCard({ id, no, title, subjects = 0, colorIdx = 0 }) {
  const navigate = useNavigate();
  const c = classColors[colorIdx % classColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: colorIdx * 0.04 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div
        className={`relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/30 ring-2 ring-transparent hover:${c.ring}`}
        onClick={() => id && no && navigate(`/subjects/${id}/${no}`)}
      >
        {/* Color top strip */}
        <div className={`h-2 w-full bg-gradient-to-r ${c.bg}`} />

        <div className="p-4">
          {/* Class number badge */}
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${c.bg} text-white font-extrabold text-lg shadow-md mb-3`}>
            {no}
          </div>

          <div className="font-bold text-sm mb-1.5">{title}</div>

          <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${c.badge}`}>
            <BookOpen className="h-3 w-3" />
            {subjects} subjects
          </div>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="h-4 w-4 text-primary" />
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard({ idx }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card animate-pulse">
      <div className="h-2 w-full bg-muted" />
      <div className="p-4">
        <div className="h-11 w-11 rounded-xl bg-muted mb-3" />
        <div className="h-4 w-20 bg-muted rounded mb-2" />
        <div className="h-5 w-24 bg-muted rounded-full" />
      </div>
    </div>
  );
}

export default function ClassList({ selectedCategories }) {
  const { data, isLoading, isError } = useGetAllSyllbusQuery();

  const filteredData =
    selectedCategories == null
      ? data?.[0]
      : data?.find((value) => value.title === selectedCategories);

  return (
    <div className="pt-6">
      {filteredData && (
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg md:text-xl font-bold">
              {filteredData ? `${filteredData.title} Classes` : "Available Classes"}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {filteredData?.classes?.length || 0} classes available · Click to explore subjects
            </p>
          </div>
          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            {filteredData?.classes?.length || 0} Classes
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {isLoading || !filteredData
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} idx={i} />)
          : filteredData.classes.map((classItem, idx) => (
              <ClassCard
                key={classItem._id}
                id={filteredData._id}
                no={classItem.no}
                title={`Class ${classItem.no}`}
                subjects={classItem.subjects.length}
                colorIdx={idx}
              />
            ))}
      </div>
    </div>
  );
}
