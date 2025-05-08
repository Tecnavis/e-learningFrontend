import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values) {
    // In a real application, you would send the form data to your server here
    console.log(values);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <div className="container relative mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="relative mb-20 flex flex-col items-center justify-center text-center">
        <div className="absolute -top-16 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let's start a
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text px-2 text-transparent">
            conversation
          </span>
        </h1>
        <p className="mt-6 animate-fade-in-up animation-delay-100 max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Have a question, project idea, or want to work with us? We'd love to
          hear from you. Reach out using any of the methods below.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="mb-20 grid animate-fade-in-up animation-delay-200 gap-4 md:grid-cols-3 md:gap-8">
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-primary/5">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our friendly team is here to help
            </p>
            <a
              href="mailto:hello@company.com"
              className="mt-4 inline-flex items-center text-primary hover:underline"
            >
              hello@company.com
            </a>
          </CardContent>
        </Card>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-primary/5">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Mon-Fri from 8am to 5pm
            </p>
            <a
              href="tel:+11234567890"
              className="mt-4 inline-flex items-center text-primary hover:underline"
            >
              +1 (123) 456-7890
            </a>
          </CardContent>
        </Card>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-primary/5">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Come say hello at our office
            </p>
            <address className="mt-4 not-italic text-primary">
              123 Innovation Street
              <br />
              San Francisco, CA 94103
            </address>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form and Map Section */}
      <div className="mb-20 grid gap-8 lg:grid-cols-2">
        <div className="animate-fade-in-left animation-delay-300">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">
              We'll get back to you as soon as possible
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex h-[400px] flex-col items-center justify-center rounded-lg border border-border bg-muted/30 p-8 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Message Sent!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
              <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="transition-all focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            {...field}
                            className="transition-all focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How can we help you?"
                          {...field}
                          className="transition-all focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project, questions, or feedback..."
                          className="min-h-[120px] resize-y transition-all focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="group w-full sm:w-auto">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Form>
          )}
        </div>

        <div className="animate-fade-in-right animation-delay-400">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Our Locations</h2>
            <p className="mt-2 text-muted-foreground">
              Visit us at one of our offices
            </p>
          </div>

          <Tabs defaultValue="sanfrancisco" className="w-full">
            <TabsContent value="sanfrancisco" className="animate-fade-in">
              <div className="overflow-hidden rounded-lg border">
                <div className="relative h-[300px] w-full">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="San Francisco Office Map"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-lg bg-background/90 p-4 text-center shadow-lg">
                      <h3 className="font-semibold">San Francisco HQ</h3>
                      <address className="mt-1 text-sm not-italic text-muted-foreground">
                        123 Innovation Street
                        <br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">San Francisco Office</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our headquarters located in the heart of San Francisco's
                    tech district.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>+1 (123) 456-7890</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>sf@company.com</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="animate-fade-in-up animation-delay-500 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Separator className="my-4 w-20 bg-primary" />
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Find answers to common questions about working with us
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {[
            {
              question: "What services do you offer?",
              answer:
                "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and technology consulting tailored to your business needs.",
              delay: "600",
            },
            {
              question: "How much do your services cost?",
              answer:
                "Our pricing varies based on project scope, complexity, and timeline. We provide detailed quotes after an initial consultation to understand your specific requirements.",
              delay: "700",
            },
            {
              question: "How long does a typical project take?",
              answer:
                "Project timelines depend on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take several months. We'll provide a timeline estimate during our consultation.",
              delay: "800",
            },
            {
              question: "Do you work with clients internationally?",
              answer:
                "Yes, we work with clients globally. Our team is experienced in remote collaboration and we use tools to ensure smooth communication regardless of time zones or location.",
              delay: "900",
            },
            {
              question: "What is your design process?",
              answer:
                "Our design process includes discovery, wireframing, prototyping, visual design, and user testing. We collaborate closely with clients throughout to ensure the final product meets their vision and user needs.",
              delay: "1000",
            },
            {
              question: "Do you provide ongoing support after launch?",
              answer:
                "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch. These can include updates, security monitoring, and performance optimization.",
              delay: "1100",
            },
          ].map((faq, index) => (
            <Card
              key={index}
              className={`animate-fade-in-up animation-delay-${faq.delay} group overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mb-20">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="animate-fade-in-up animation-delay-1200 text-3xl font-bold tracking-tight sm:text-4xl">
            Connect With Us
          </h2>
          <Separator className="my-4 w-20 bg-primary" />
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Follow us on social media for updates, insights, and more
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              icon: Twitter,
              label: "Twitter",
              href: "#",
              color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "#",
              color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
            },
            {
              icon: Github,
              label: "GitHub",
              href: "#",
              color: "hover:bg-[#333] hover:border-[#333]",
            },
            {
              icon: Mail,
              label: "Email",
              href: "mailto:hello@company.com",
              color: "hover:bg-primary hover:border-primary",
            },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className={`animate-fade-in animation-delay-${
                1300 + index * 100
              } flex h-16 w-16 items-center justify-center rounded-full border-2 border-muted-foreground/20 text-muted-foreground transition-all duration-300 ${
                social.color
              } hover:text-white`}
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="animate-fade-in-up animation-delay-1400 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay updated with our newsletter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to receive the latest news, updates, and insights from our
            team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-md flex-1"
            />
            <Button className="group w-full sm:w-auto">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our
            <Link
              href="#"
              className="underline underline-offset-2 hover:text-primary"
            >
              {" "}
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
