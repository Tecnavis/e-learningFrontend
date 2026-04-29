import { Carousel } from "@/components/Carousel";
import ClassList from "@/components/Class-list";
import { FilterBox } from "@/components/Filter-box";
import { SpecialDays } from "@/components/SpecialDays";
import AdBanner from "@/components/AdBanner";
import {
  ArrowRight, BookOpen, Video, FileText, Users,
  Star, Zap, Award, TrendingUp, Play, CheckCircle2,
  MessageCircle, Target, Globe, Clock
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const features = [
  { icon: Video, title: "Chapter-wise Videos", desc: "Structured video lessons for every subject, mapped to your syllabus chapter by chapter.", color: "from-blue-500 to-indigo-600" },
  { icon: FileText, title: "Study Notes & PDFs", desc: "Downloadable notes, summaries, and reference materials you can access anytime.", color: "from-emerald-500 to-teal-600" },
  { icon: MessageCircle, title: "Live Discussions", desc: "Ask questions and get answers from teachers and fellow students in our discussion forums.", color: "from-orange-500 to-amber-600" },
  { icon: Target, title: "Practice Questions", desc: "Test your understanding with practice questions after every chapter, topic by topic.", color: "from-pink-500 to-rose-600" },
];

const testimonials = [
  { name: "Arjun M.", class: "Class 10 · Kerala Syllabus", text: "Cognix Learn helped me score 98% in Science. The chapter videos explain every concept so clearly!", avatar: "A" },
  { name: "Fathima K.", class: "Class 8 · CBSE", text: "I used to struggle with Maths. Now the discussion forum and practice questions make it easy!", avatar: "F" },
  { name: "Rahul T.", class: "Class 12 · Kerala Syllabus", text: "The study notes are incredibly well-structured. Saved me so much time during board exam revision.", avatar: "R" },
];

const subjects = [
  { name: "Mathematics", emoji: "📐", count: "12 chapters" },
  { name: "Science", emoji: "🔬", count: "15 chapters" },
  { name: "English", emoji: "📖", count: "10 chapters" },
  { name: "Social Science", emoji: "🌍", count: "14 chapters" },
  { name: "Malayalam", emoji: "✍️", count: "8 chapters" },
  { name: "Physics", emoji: "⚡", count: "13 chapters" },
  { name: "Chemistry", emoji: "🧪", count: "11 chapters" },
  { name: "Biology", emoji: "🌱", count: "12 chapters" },
];

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Carousel */}
      <Carousel />

      {/* ── Hero Content Section ── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <Zap className="h-4 w-4" />
              Kerala Syllabus &amp; CBSE · Class 1–12
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Learn Smarter,{" "}
              <span className="gradient-text">Score Higher</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Cognix Learn is your all-in-one e-learning platform for Kerala Syllabus and CBSE students.
              Access structured video lessons, chapter notes, practice questions, and live discussions —
              all completely <strong className="text-foreground">free to start</strong>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={() => navigate("/sign-up")}
                className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => document.getElementById('classes').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-xl border-2 border-border hover:border-primary/40 hover:bg-primary/5 font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Play className="h-4 w-4 fill-primary text-primary" /> Explore Classes
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "10,000+", label: "Students", icon: Users },
                { value: "100+", label: "Video Lessons", icon: Video },
                { value: "50+", label: "Subjects", icon: BookOpen },
                { value: "Class 1–12", label: "All Classes", icon: Award },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass-card rounded-2xl p-4 text-center card-lift">
                  <div className="flex justify-center mb-2">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-extrabold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Class Selector Section ── */}
      <section id="classes" className="bg-muted/40 border-y py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Find Your Class</h2>
            <p className="text-muted-foreground text-sm">Select your syllabus and choose your class to start learning</p>
          </div>
          <FilterBox
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <ClassList selectedCategories={selectedCategories} />
        </div>
      </section>

      {/* ── AdSense Banner ── */}
      <div className="container mx-auto px-4 py-6">
        <div className="rounded-2xl overflow-hidden bg-muted/20 border border-dashed border-border">
          <AdBanner className="my-2 px-2" />
        </div>
      </div>

      {/* ── Features Section ── */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Everything You Need to Excel</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Cognix Learn brings together all the tools students need — in one place, on any device.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group glass-card rounded-2xl p-6 card-lift border border-border hover:border-primary/30 transition-colors">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Subject Highlights ── */}
      <section className="bg-muted/30 border-y py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Popular Subjects</h2>
            <p className="text-muted-foreground text-sm">Browse our most popular subjects with full chapter coverage</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {subjects.map(({ name, emoji, count }) => (
              <div key={name} className="glass-card rounded-2xl p-4 text-center card-lift cursor-pointer hover:border-primary/30 border border-border transition-colors group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{emoji}</div>
                <div className="font-semibold text-sm">{name}</div>
                <div className="text-xs text-muted-foreground mt-1">{count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground text-sm">Start learning in 4 simple steps</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {[
            { step: "01", title: "Choose Your Class", desc: "Pick your board (Kerala or CBSE) and select your class from 1 to 12.", icon: BookOpen },
            { step: "02", title: "Select a Subject", desc: "Browse all subjects available for your class and pick what you want to study.", icon: Target },
            { step: "03", title: "Watch & Learn", desc: "Stream chapter-wise video lessons, read notes, and practice questions.", icon: Play },
            { step: "04", title: "Track Progress", desc: "Bookmark lessons, join discussions, and revisit topics anytime.", icon: TrendingUp },
          ].map(({ step, title, desc, icon: Icon }) => (
            <div key={step} className="text-center group">
              <div className="relative inline-flex mb-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 border-2 border-primary/20 flex items-center justify-center transition-all">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.replace("0", "")}
                </span>
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Students Love Cognix Learn</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">Trusted by 10,000+ students across Kerala and India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map(({ name, class: cls, text, avatar }) => (
              <div key={name} className="glass-card rounded-2xl p-6 card-lift border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{cls}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-muted/30 border-y py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Students Choose Cognix Learn</h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                We understand how students in Kerala and across India learn best. Our platform is built
                around your curriculum, not just general content — so every lesson matters.
              </p>
              <ul className="space-y-3">
                {[
                  "Aligned to Kerala Syllabus and CBSE curriculum",
                  "Free access to video lessons for all classes",
                  "Mobile-friendly — learn anywhere, anytime",
                  "Dark mode for comfortable night studying",
                  "No ads on content pages — distraction-free learning",
                  "Regular updates with new chapters and topics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, title: "Any Device", desc: "Works perfectly on phones, tablets and computers", color: "bg-blue-500/10 text-blue-600" },
                { icon: Clock, title: "Learn Anytime", desc: "Access all content 24/7 at your own pace", color: "bg-emerald-500/10 text-emerald-600" },
                { icon: Award, title: "Expert Teachers", desc: "Content reviewed by experienced educators", color: "bg-amber-500/10 text-amber-600" },
                { icon: Users, title: "Peer Learning", desc: "Discuss topics with thousands of students", color: "bg-pink-500/10 text-pink-600" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="glass-card rounded-2xl p-5 card-lift border border-border">
                  <div className={`h-10 w-10 rounded-xl ${color} bg-opacity-10 flex items-center justify-center mb-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-sm mb-1">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Special Days Section ── */}
      <section className="container mx-auto px-4 py-14">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Discover & Explore</h2>
            <p className="text-muted-foreground text-sm">Special days, events, and educational moments</p>
          </div>
          <button
            onClick={() => navigate("/special-days")}
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            See All <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <SpecialDays />
      </section>

      {/* ── CTA Banner ── */}
      <section className="container mx-auto px-4 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-10 text-center text-primary-foreground">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
          </div>
          <div className="relative">
            <div className="text-4xl mb-4">🎓</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Learning?</h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-6 text-sm">
              Join 10,000+ students already improving their grades with Cognix Learn. Free to get started — no credit card needed.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/sign-up" className="px-7 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg">
                Create Free Account
              </Link>
              <Link to="/about" className="px-7 py-3 rounded-xl border-2 border-white/30 hover:bg-white/10 font-semibold transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom AdSense ── */}
      <div className="container mx-auto px-4 pb-8">
        <AdBanner className="my-2" />
      </div>
    </>
  );
}
