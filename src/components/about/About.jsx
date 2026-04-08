import {
  BookOpen,
  Users,
  Award,
  Target,
  CheckCircle,
  Star,
  GraduationCap,
  Lightbulb,
  Globe,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "10,000+", label: "Students Enrolled", icon: Users },
  { value: "500+", label: "Video Lessons", icon: BookOpen },
  { value: "50+", label: "Subjects Covered", icon: GraduationCap },
  { value: "100+", label: "Expert Teachers", icon: Award },
];

const values = [
  {
    icon: Target,
    title: "Focused Learning",
    description:
      "We design every lesson with a clear learning objective so students always know what they will achieve by the end of each session.",
  },
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    description:
      "Our teachers break down complex topics into simple, relatable explanations backed by real examples from everyday life.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description:
      "Learn from home, on the bus, or anywhere you have internet access. Our platform works seamlessly on mobile and desktop.",
  },
  {
    icon: Heart,
    title: "Student-First Approach",
    description:
      "Every feature we build — from the study materials to the discussion forums — is guided by what genuinely helps students learn better.",
  },
  {
    icon: Star,
    title: "Quality Content",
    description:
      "All lessons are reviewed and approved by experienced educators before being published, ensuring accuracy and curriculum alignment.",
  },
  {
    icon: CheckCircle,
    title: "Curriculum Aligned",
    description:
      "Content is carefully mapped to Kerala Syllabus and CBSE guidelines from Class 1 to Class 12, covering all core subjects.",
  },
];

const syllabus = [
  {
    board: "Kerala Syllabus",
    classes: "Class 1 – Class 12",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Malayalam", "Hindi"],
  },
  {
    board: "CBSE",
    classes: "Class 1 – Class 12",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Social Science"],
  },
];

const faqs = [
  {
    q: "Is Cognix Learn free to use?",
    a: "Yes — students can browse subjects and access a wide range of free lessons. Premium plans unlock additional resources and downloadable materials.",
  },
  {
    q: "Which syllabus does Cognix Learn support?",
    a: "We currently support Kerala State Syllabus and CBSE for Classes 1 through 12. More boards will be added soon.",
  },
  {
    q: "How are lessons structured?",
    a: "Each subject is divided into chapters, and every chapter contains video lessons, notes, and practice questions — all mapped to the official curriculum.",
  },
  {
    q: "Can teachers join Cognix Learn?",
    a: "Absolutely. We welcome experienced educators to contribute content. Reach out through our Contact page to learn about our teacher onboarding process.",
  },
  {
    q: "Is the content available offline?",
    a: "Offline access is available for premium subscribers on the mobile app. Free users can access all content online with a stable internet connection.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 text-center overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Cognix Learn
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cognix Learn is a premier e-learning platform built exclusively for school
            students from Class 1 to Class 12, covering both Kerala Syllabus and CBSE
            boards. We bring together experienced teachers, structured video lessons,
            detailed study notes, and interactive discussions — all in one place — so
            that every student can learn at their own pace and excel academically.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">Explore Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-muted/40 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary">{value}</span>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
          <Separator className="mx-auto my-4 w-20 bg-primary" />
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our mission is simple: make high-quality school education accessible to
            every student in Kerala and beyond, regardless of their location or
            economic background. We believe that when a student truly understands a
            concept — not just memorizes it — their confidence grows, their grades
            improve, and their curiosity never stops. Cognix Learn exists to make
            that understanding possible.
          </p>
        </div>

        {/* What we offer */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
              {[
                "Chapter-wise video lessons for every subject",
                "Downloadable study notes and reference materials",
                "Practice questions mapped to each chapter",
                "Special Days educational content and activities",
                "Subject-wise discussion boards for peer learning",
                "Progress tracking and bookmarking",
                "Dark mode and mobile-friendly interface",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Syllabus Coverage</h3>
            <div className="space-y-4">
              {syllabus.map((s) => (
                <Card key={s.board}>
                  <CardContent className="p-4">
                    <p className="font-semibold text-base">{s.board}</p>
                    <p className="text-xs text-muted-foreground mb-2">{s.classes}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/30 border-y py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Our Core Values</h2>
            <Separator className="mx-auto my-4 w-20 bg-primary" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              These principles guide every decision we make — from content creation to platform design.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">How Cognix Learn Works</h2>
          <Separator className="mx-auto my-4 w-20 bg-primary" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { step: "1", title: "Choose Your Class", desc: "Select your class and board — Kerala Syllabus or CBSE — from the home screen." },
            { step: "2", title: "Pick a Subject", desc: "Browse all subjects offered for your class and open the one you want to study." },
            { step: "3", title: "Learn Chapter by Chapter", desc: "Watch video lessons, read notes, and attempt practice questions at your own pace." },
            { step: "4", title: "Track Your Progress", desc: "Bookmark lessons, revisit chapters, and participate in discussions to reinforce your learning." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                {step}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 border-y py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <Separator className="mx-auto my-4 w-20 bg-primary" />
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <Card key={q}>
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-1">{q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Start Learning?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join thousands of students who are already improving their grades with
          Cognix Learn. It is free to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">Browse Classes</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
