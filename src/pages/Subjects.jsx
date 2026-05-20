import { useGetASyllbusByIdQuery } from "@/app/service/syllbusData";
import { SubjectsCard } from "@/components/subject/Subjects";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import { ArrowLeft, Search, BookOpen, Target, Video, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const subjectTips = [
  { icon: BookOpen, title: "Chapter-wise Notes", desc: "Every subject has detailed notes mapped to your syllabus chapter by chapter." },
  { icon: Video, title: "Video Lessons", desc: "Watch clearly explained video lessons for each topic at your own pace." },
  { icon: Target, title: "Practice Questions", desc: "Test your understanding with chapter-end practice questions." },
  { icon: MessageCircle, title: "Discussion Forum", desc: "Ask doubts and get answers from teachers and fellow students." },
];

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

  const boardName = data?.name || "Your Syllabus";
  const className = `Class ${no}`;

  return (
    <>
      {/* Page header with context */}
      <section className="bg-muted/40 border-b py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {boardName} — {className} Subjects
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Browse all subjects available for {className} under the {boardName} curriculum. Each subject contains
            chapter-wise video lessons, downloadable study notes, and practice questions — all aligned to your official syllabus.
            Select a subject below to begin learning.
          </p>
        </div>
      </section>

      {/* Subject list */}
      <section className="container mx-auto px-4 py-8">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
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

        {/* Content block before ad — gives Google-served ads the surrounding content they require */}
        <div className="rounded-2xl bg-muted/30 border border-border p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">How to Make the Most of Your {className} Studies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjectTips.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">{title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AdSense Banner — surrounded by publisher content as required by policy */}
        <div className="rounded-2xl overflow-hidden bg-muted/20 border border-dashed border-border">
          <AdBanner className="my-2 px-2" />
        </div>
      </section>
    </>
  );
}
