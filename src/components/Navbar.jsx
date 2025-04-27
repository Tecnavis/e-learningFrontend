import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookOpen, Menu, Search, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import { useState } from "react";
import UserProfilePage from "@/pages/UserProfile";

export function Navbar() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData?.userDetails);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="relative">
      <header className="sticky  top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <BookOpen className="h-6 w-6" />
                    <span>
                      Cognix <small>LEARN</small>
                    </span>
                  </Link>
                  <NavLink to={"/"} className="hover:text-primary">
                    Home
                  </NavLink>
                  <Link href="#" className="hover:text-primary">
                    About Us
                  </Link>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <NavLink
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <BookOpen className="h-6 w-6" />
              <span className="hidden md:inline-block">
                Cognix <small>LEARN</small>
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <NavLink
                to="/"
                className="font-medium transition-colors hover:text-primary"
              >
                Home
              </NavLink>
              <Link
                href="#"
                className="font-medium transition-colors hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 relative">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowProfile(!showProfile)}
              className={"cursor-pointer"}
            >
              {user.image ? (
                <img
                  class="w-8 h-8 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                  src={`${import.meta.env.VITE_API_URL}/images/${user.image}`}
                  alt="Bordered avatar"
                />
              ) : (
                <User className="h-5 w-5 cursor-pointer " />
              )}
            </Button>
          </div>
        </div>
      </header>
      {showProfile && <UserProfilePage />}
    </div>
  );
}
