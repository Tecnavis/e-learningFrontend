import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookOpen, Menu, User, GraduationCap, Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import { useState } from "react";
import UserProfilePage from "@/pages/UserProfile";

export function Navbar() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData?.userDetails);
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileShow = () => {
    if (!user?.token) return;
    setShowProfile(!showProfile);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 flex justify-center items-center shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          {/* Left: hamburger + logo + nav */}
          <div className="flex items-center gap-2 md:gap-8">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-xl">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-6 w-72">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-bold">
                    Cognix <span className="text-primary">LEARN</span>
                  </span>
                </div>
                <nav className="grid gap-2">
                  {navLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted text-foreground/70 hover:text-foreground"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/10">
                  <p className="text-xs font-semibold text-primary mb-1">🎓 Kerala & CBSE</p>
                  <p className="text-xs text-muted-foreground">Class 1–12 · 100+ Lessons · Free to Start</p>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="hidden md:block text-lg font-bold tracking-tight">
                Cognix <span className="text-primary">LEARN</span>
              </span>
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted text-foreground/70 hover:text-foreground"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right: toggle + profile */}
          <div className="flex items-center gap-2 relative">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold">
              <Sparkles className="h-3 w-3" />
              Free Access
            </div>
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleProfileShow}
              className="rounded-full cursor-pointer ring-2 ring-transparent hover:ring-primary/30 transition-all"
            >
              {user?.image ? (
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={user?.image}
                  alt="User avatar"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
              )}
            </Button>
          </div>
        </div>
      </header>
      {showProfile && <UserProfilePage />}
    </div>
  );
}
