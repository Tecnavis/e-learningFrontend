import { Link } from "react-router-dom";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-background border-t">
      {/* Main footer links */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Learn</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">All Classes</Link></li>
            <li><Link to="/" className="hover:text-foreground">Kerala Syllabus</Link></li>
            <li><Link to="/" className="hover:text-foreground">CBSE</Link></li>
            <li><Link to="/special-days" className="hover:text-foreground">Special Days</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/privacy-policy#privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/privacy-policy#terms" className="hover:text-foreground">Terms of Service</Link></li>
            <li><Link to="/privacy-policy#cookies" className="hover:text-foreground">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Help Centre</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Report an Issue</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src={theme === "light" ? logo3 : logo2}
              alt="Cognix Learn Logo"
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cognix Learn. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-xs">
            An e-learning platform for Kerala Syllabus &amp; CBSE students, Class 1–12.
          </p>
        </div>
      </div>
    </footer>
  );
}
