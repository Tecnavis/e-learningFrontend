import {
  BookOpen, Users, Award, Target, CheckCircle, Star, GraduationCap,
  Lightbulb, Globe, Heart, Play, ArrowRight, Zap, Shield, TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "10,000+", label: "Students Enrolled", icon: Users, color: "from-blue-500 to-blue-600" },
  { value: "500+", label: "Video Lessons", icon: Play, color: "from-violet-500 to-purple-600" },
  { value: "50+", label: "Subjects Covered", icon: GraduationCap, color: "from-emerald-500 to-teal-600" },
  { value: "Class 1–12", label: "All Classes", icon: Award, color: "from-orange-500 to-amber-600" },
];

const values = [
  { icon: Target, title: "Focused Learning", desc: "Every lesson has a clear objective so students always know what they will achieve.", color: "bg-blue-500/10 text-blue-600" },
  { icon: Lightbulb, title: "Concept Clarity", desc: "Complex topics broken into simple, relatable explanations with real-life examples.", color: "bg-amber-500/10 text-amber-600" },
  { icon: Globe, title: "Accessible Anywhere", desc: "Works on mobile and desktop — learn from home, on the bus, or anywhere.", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Heart, title: "Student-First", desc: "Every feature is guided by what genuinely helps students learn better.", color: "bg-rose-500/10 text-rose-600" },
  { icon: Star, title: "Quality Content", desc: "All lessons are reviewed by experienced educators before publishing.", color: "bg-purple-500/10 text-purple-600" },
  { icon: CheckCircle, title: "Curriculum Aligned", desc: "Content mapped to Kerala Syllabus and CBSE guidelines, Classes 1–12.", color: "bg-teal-500/10 text-teal-600" },
];

const syllabus = [
  { board: "Kerala Syllabus", classes: "Class 1 – Class 12", subjects: ["Mathematics", "Science", "Social Studies", "English", "Malayalam", "Hindi"] },
  { board: "CBSE", classes: "Class 1 – Class 12", subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Social Science"] },
];

const faqs = [
  { q: "Is Cognix Learn free to use?", a: "Yes — students can browse subjects and access a wide range of free lessons. Premium plans unlock additional resources and downloadable materials." },
  { q: "Which syllabus does Cognix Learn support?", a: "We currently support Kerala State Syllabus and CBSE for Classes 1 through 12. More boards will be added soon." },
  { q: "How are lessons structured?", a: "Each subject is divided into chapters, and every chapter contains video lessons, notes, and practice questions — all mapped to the official curriculum." },
  { q: "Can teachers join Cognix Learn?", a: "Absolutely. We welcome experienced educators to contribute content. Reach out through our Contact page to learn about our teacher onboarding process." },
  { q: "Is the content available offline?", a: "Offline access is available for premium subscribers on the mobile app. Free users can access all content online with a stable internet connection." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <Zap className="h-4 w-4" /> About Cognix Learn
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Education Made <span className="gradient-text">Accessible</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cognix Learn is a premier e-learning platform built exclusively for school students from Class 1 to Class 12,
            covering both Kerala Syllabus and CBSE boards. We bring together experienced teachers, structured video lessons,
            detailed study notes, and interactive discussions — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-xl border-2 border-border hover:border-primary/40 hover:bg-primary/5 font-semibold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/40 border-y py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="glass-card rounded-2xl p-6 text-center card-lift border border-border">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our mission is simple: make high-quality school education accessible to every student in Kerala and beyond,
            regardless of their location or economic background. We believe that when a student truly <em>understands</em> a concept —
            not just memorizes it — their confidence grows, their grades improve, and their curiosity never stops.
            Cognix Learn exists to make that understanding possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-14 items-start max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-5">What We Offer</h3>
            <ul className="space-y-3">
              {[
                "Chapter-wise video lessons for every subject",
                "Downloadable study notes and reference materials",
                "Practice questions mapped to each chapter",
                "Special Days educational content and activities",
                "Subject-wise discussion boards for peer learning",
                "Progress tracking and bookmarking",
                "Dark mode and mobile-friendly interface",
                "Regular content updates aligned to syllabus changes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Syllabus Coverage</h3>
            <div className="space-y-4">
              {syllabus.map((s) => (
                <div key={s.board} className="rounded-2xl border border-border bg-card p-5 card-lift">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="font-bold">{s.board}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{s.classes}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.subjects.map((sub) => (
                      <span key={sub} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 border-y py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              These principles guide every decision we make — from content creation to platform design.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass-card rounded-2xl p-6 card-lift border border-border group">
                <div className={`h-11 w-11 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Cognix Learn Works</h2>
          <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
          {[
            { step: "1", title: "Choose Your Class", desc: "Select your class and board from the home screen.", icon: BookOpen },
            { step: "2", title: "Pick a Subject", desc: "Browse subjects for your class and open one to study.", icon: GraduationCap },
            { step: "3", title: "Watch & Learn", desc: "Watch video lessons, read notes, attempt practice questions.", icon: Play },
            { step: "4", title: "Track Progress", desc: "Bookmark lessons, revisit chapters, join discussions.", icon: TrendingUp },
          ].map(({ step, title, desc, icon: Icon }) => (
            <div key={step} className="flex flex-col items-center gap-3 group">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 border-2 border-primary/20 flex items-center justify-center transition-all">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                  {step}
                </span>
              </div>
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 border-y py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card rounded-2xl p-6 border border-border card-lift">
                <h3 className="font-bold mb-2 flex items-start gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-12 text-center text-primary-foreground">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          </div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Learning?</h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8 text-sm">
              Join thousands of students who are already improving their grades. Free to get started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="px-7 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg">
                Browse Classes
              </Link>
              <Link to="/contact" className="px-7 py-3 rounded-xl border-2 border-white/30 hover:bg-white/10 font-semibold transition-all">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
