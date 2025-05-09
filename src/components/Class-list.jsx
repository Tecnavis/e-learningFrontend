import { useState } from "react";
import { motion } from "framer-motion";
import { NotebookText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useGetAllSyllbusQuery } from "@/app/service/syllbusData";

function ClassCard({ id, no, title, subjects = 0, color = "bg-blue-500" }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: typeof id === "number" ? id * 0.05 : 0 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card
        className="rounded-xl overflow-hidden p-1 text-center hover:shadow-md transition-all cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => id && no && navigate(`/subjects/${id}/${no}`)}
      >
        <div className={`h-1.5 ${color} rounded-t-md`} />
        <CardContent className="flex flex-col items-center justify-center gap-1 pt-2 px-1 pb-1">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full ${color} text-white font-bold text-[10px]`}
          >
            {no}
          </div>
          <div className="text-[10px] font-medium">{title}</div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <NotebookText className="h-3 w-3" />
            <span>{subjects}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ClassList({ selectedCategories }) {
  const { data, isLoading, isError } = useGetAllSyllbusQuery();

  const filteredData =
    selectedCategories == null
      ? data?.[0]
      : data?.find((value) => value.title === selectedCategories);

      if(isError) {
        console.error(`Somthing wrong ${isError}`)
      }

  return (
    <div className="container mx-auto px-2 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
          {filteredData ? `Available Classes for ${filteredData.title}` : "Loading Classes..."}
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {isError || isLoading || !filteredData
          ? Array.from({ length: 8 }).map((_, index) => (
              <ClassCard
                key={index}
                id=""
                no=""
                title=""
                subjects={0}
                color="bg-gray-300 animate-pulse"
              />
            ))
          : filteredData.classes.map((classItem) => (
              <ClassCard
                key={classItem._id}
                id={filteredData._id}
                no={classItem.no}
                title={`Class ${classItem.no}`}
                subjects={classItem.subjects.length}
                color="bg-sky-500"
              />
            ))}
      </div>
    </div>
  );
}
