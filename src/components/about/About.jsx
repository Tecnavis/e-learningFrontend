// import {
//   ArrowRight,
//   Linkedin,
//   Mail,
//   Twitter,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { Separator } from "@/components/ui/separator";
// import { Link } from "react-router-dom";

export const metadata = {
  title: "About Us | Company Name",
  description: "Learn more about our company, our mission, and our team.",
};

export default function About() {
  return (
    <div className="container relative mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="relative mb-20 flex flex-col items-center justify-center text-center">
        <div className="absolute -top-16 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            COGNIX LEARN
          </span>
        </h1>

        <p className="mt-6 animate-fade-in-up animation-delay-100 max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          COGNIX LEARN is a premier e-learning platform designed to support
          students from Class 1 to +2 (Kerala Syllabus & CBSE) with
          comprehensive academic resources. Our mission is to make learning
          engaging, accessible, and effective by providing high-quality
          educational materials curated by experienced professional teachers.
        </p>
      </div>

      {/* Stats Section */}
      {/* <div className="mb-20 grid animate-fade-in-up animation-delay-200 gap-4 md:grid-cols-3 md:gap-8">
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <span className="text-2xl font-bold text-primary">10+</span>
            </div>
            <h3 className="text-xl font-semibold">Years Experience</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A decade of excellence in digital innovation
            </p>
          </CardContent>
        </Card>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <span className="text-2xl font-bold text-primary">200+</span>
            </div>
            <h3 className="text-xl font-semibold">Clients Worldwide</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Trusted by businesses across the globe
            </p>
          </CardContent>
        </Card>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <span className="text-2xl font-bold text-primary">50+</span>
            </div>
            <h3 className="text-xl font-semibold">Team Members</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Talented professionals dedicated to your success
            </p>
          </CardContent>
        </Card>
      </div> */}

      {/* Our Story Section */}
      {/* <div className="mb-20">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="animate-fade-in-up animation-delay-300 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Story
          </h2>
          <Separator className="my-4 w-20 bg-primary" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-fade-in-left animation-delay-400 flex flex-col justify-center">
            <p className="mb-4 text-lg text-muted-foreground">
              Founded in 2014, our company began with a simple vision: to create
              digital solutions that make a difference. What started as a small
              team of passionate developers has grown into a global agency with
              offices in major cities around the world.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              We believe in the power of technology to transform businesses and
              improve lives. Our approach combines technical expertise with
              creative thinking to deliver results that exceed expectations.
            </p>
          </div>
          <div className="animate-fade-in-right animation-delay-500 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Our team collaborating"
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div> */}

      {/* Values Section */}
      {/* <div className="mb-20">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="animate-fade-in-up animation-delay-600 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Values
          </h2>
          <Separator className="my-4 w-20 bg-primary" />
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            These core principles guide everything we do
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovation",
              description:
                "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
              delay: "700",
            },
            {
              title: "Excellence",
              description:
                "We are committed to delivering the highest quality work in everything we do.",
              delay: "800",
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of teamwork and partnership with our clients.",
              delay: "900",
            },
            {
              title: "Integrity",
              description:
                "We operate with honesty, transparency, and ethical standards in all our interactions.",
              delay: "1000",
            },
            {
              title: "Adaptability",
              description:
                "We embrace change and continuously evolve to meet new challenges.",
              delay: "1100",
            },
            {
              title: "Impact",
              description:
                "We measure our success by the positive difference we make for our clients and communities.",
              delay: "1200",
            },
          ].map((value, index) => (
            <Card
              key={index}
              className={`animate-fade-in-up animation-delay-${value.delay} group overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      {/* Team Section */}
      {/* <div className="mb-20">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="animate-fade-in-up animation-delay-1300 text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
          <Separator className="my-4 w-20 bg-primary" />
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Talented professionals dedicated to your success
          </p>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsContent value="leadership" className="animate-fade-in">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Founder",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Sarah Williams",
                  role: "COO",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Michael Chen",
                  role: "CTO",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, index) => (
                <Card key={index} className="group overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 flex w-full justify-center gap-4 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <Link
                        href="#"
                        className="rounded-full bg-background p-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href="#"
                        className="rounded-full bg-background p-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="#"
                        className="rounded-full bg-background p-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
       
        </Tabs>
      </div> */}

      {/* CTA Section */}
      {/* <div className="animate-fade-in-up animation-delay-1400 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to work with us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how we can help your business grow and achieve its
            goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
