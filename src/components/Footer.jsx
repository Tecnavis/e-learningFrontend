import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className=" py-12 p-3 flex justify-center items-center flex-col">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
            <BookOpen className="h-6 w-6" />
            <span>EduLearn</span>
          </Link>
          <p className="text-muted-foreground mb-4">
            Empowering minds through quality online education. Learn at your own pace, anytime, anywhere.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Programming
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Data Science
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Design
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Marketing
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Business
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <div className="flex gap-2">
            <Input placeholder="Your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
