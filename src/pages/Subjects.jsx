import { useGetASyllbusByIdQuery } from "@/app/service/syllbusData";
import { SubjectsCard } from "@/components/subject/Subjects";
import { Input } from "@/components/ui/input"; // Don't forget this!
import { ArrowLeft, Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Subjects() {
  const navigate = useNavigate();
  const { id, no } = useParams();

  const { data, isLoading, isError } = useGetASyllbusByIdQuery(id);
  const [searchQuery, setSearchQuery] = useState("");

  const showSkeleton = isLoading || isError || !data;


  const subject = data?.classes?.filter((cla) => cla.no == no);

  const filteredSubject =
    !isLoading && subject?.length > 0
      ? subject[0].subjects?.filter((subject) => {
          const matchesSearch =
            subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            subject.author.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesSearch;
        })
      : [];

  return (
    <>
      {/* Courses Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="h-6 w-6 cursor-pointer"
          />
          Select Subject
        </h2>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search subjects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {showSkeleton
            ? Array.from({ length: 8 }).map((_, index) => (
                <SubjectsCard key={index} isLoading={true} />
              ))
            : filteredSubject?.map((subject) => (
                <SubjectsCard
                  key={subject._id}
                  subject={subject}
                  id={id}
                  no={no}
                  isLoading={false}
                />
              ))}
        </div>
      </section>
    </>
  );
}
