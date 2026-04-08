import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Clock,
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@cognixlearn.com",
    sub: "We reply within 24 hours",
    href: "mailto:support@cognixlearn.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 9 AM – 6 PM IST",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Our Location",
    value: "Kerala, India",
    sub: "Serving students across India",
    href: null,
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 6:00 PM IST",
    href: null,
  },
];

const topics = [
  { icon: BookOpen, label: "Course & Content Questions" },
  { icon: HelpCircle, label: "Technical Support" },
  { icon: MessageSquare, label: "Feedback & Suggestions" },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values) {
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 text-center overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/10 blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
            Have a question about a lesson, a technical issue, or just want to
            share feedback? We would love to hear from you. Our support team
            typically responds within one business day.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        {/* Left: contact info + topics */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Contact Information</h2>
          <Separator />
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator />
          <div>
            <h3 className="font-semibold mb-3">What Can We Help With?</h3>
            <div className="space-y-2">
              {topics.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">For Teachers</p>
              Interested in contributing lessons or joining our educator network?
              Mention it in your message and our team will get back to you with details.
            </CardContent>
          </Card>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. We have received your message and
                    will respond within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="you@example.com" {...field} />
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
                              <Input placeholder="e.g. Question about Class 10 Maths Chapter 3" {...field} />
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
                                placeholder="Describe your question, issue, or feedback in detail..."
                                className="min-h-[150px] resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </CardContent>
          </Card>

          {/* FAQ teaser */}
          <div className="mt-6 p-5 rounded-xl border bg-muted/30">
            <h3 className="font-semibold mb-2">Before You Write</h3>
            <p className="text-sm text-muted-foreground">
              Many common questions — like how to change your class, navigate
              chapters, or access study materials — are answered on our{" "}
              <a href="/about" className="text-primary underline underline-offset-2">
                About page
              </a>
              . Check there first and you might find an instant answer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
