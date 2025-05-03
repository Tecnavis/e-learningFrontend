import { Link } from "react-router-dom";
import logo2 from "../../public/2.png";
import logo3 from "../../public/3.png";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="py-6 px-4 bg-background border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and copyright */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
          <img
            src={theme == "light" ? logo3 : logo2}
            alt="Cognix Learn Logo"
            className="h-10 w-auto"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cognix LEARN. All rights reserved.
          </p>
        </div>

        {/* Footer links */}
        <div className="flex gap-6 text-sm">
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
