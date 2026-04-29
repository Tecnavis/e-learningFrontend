import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Heart, BookOpen, Users, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-8">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Cognix <span className="text-primary">LEARN</span></span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Your all-in-one e-learning platform for Kerala Syllabus and CBSE students,
              Class 1 through 12. Quality education, accessible for everyone.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              Malappuram, Kerala, India
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
              <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
              <a href="mailto:cognixlearn@gmail.com" className="hover:text-primary transition-colors">
                cognixlearn@gmail.com
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" /> Learn
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "All Classes" },
                { to: "/", label: "Kerala Syllabus" },
                { to: "/", label: "CBSE Classes" },
                { to: "/special-days", label: "Special Days" },
                { to: "/", label: "Video Lessons" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-muted-foreground hover:text-primary transition-colors text-xs">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" /> Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/about", label: "Our Mission" },
                { to: "/contact", label: "Join as Teacher" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-muted-foreground hover:text-primary transition-colors text-xs">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4">Legal & Support</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/privacy-policy#privacy", label: "Privacy Policy" },
                { to: "/privacy-policy#terms", label: "Terms of Service" },
                { to: "/privacy-policy#cookies", label: "Cookie Policy" },
                { to: "/contact", label: "Help Centre" },
                { to: "/contact", label: "Report an Issue" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-muted-foreground hover:text-primary transition-colors text-xs">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Boards strip */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Kerala Syllabus", "CBSE", "Class 1–5", "Class 6–10", "Class 11–12", "Science", "Maths", "Social Studies"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© {year} Cognix Learn. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 fill-rose-500 text-rose-500" /> for students in Kerala
          </span>
        </div>
      </div>
    </footer>
  );
}
