"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, Menu, ChevronDown, X } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const features = [
  { name: "Language Translator", href: "#translator", className: "text-xl " },
  { name: "Data Summaries", href: "Document" },
  { name: "Smart Alert", href: "Alert" },
  { name: "Meeting Schedule", href: "meetingscheduler" },
  { name: "Workflow Automation", href: "#automation" },
  { name: "Voice Assistance", href: "#voice" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black text-white shadow-xl" : "bg-cfixed text-foreground"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              scrolled ? "bg-white" : "bg-primary"
            }`}
          >
            <Search
              className={`w-4 h-4 ${
                scrolled ? "text-black" : "text-primary-foreground"
              }`}
            />
          </div>
          <span
            className={`text-3xl font-bold font-sans tracking-tight transition-colors duration-300 ${
              scrolled ? "text-white" : "text-foreground"
            }`}
          >
            Anvesha
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`text-2xl font-bold flex items-center gap-1 transition-colors duration-300 ${
                  scrolled
                    ? "text-white hover:text-gray-300"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Features <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`glass-card border-0 shadow-xl transition-colors duration-300 ${
                  scrolled ? "bg-black text-white" : "bg-white text-foreground"
                }`}
              >
                {features.map((feature) => (
                  <DropdownMenuItem key={feature.name} asChild>
                    <a
                      href={feature.href}
                      className={`cursor-pointer text-xl font-semibold transition-colors duration-300 ${
                        scrolled
                          ? "text-white hover:text-gray-300"
                          : "text-foreground hover:text-orange-500"
                      }`}
                    >
                      {feature.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#workflow"
              className={`px-4 py-2 rounded-lg text-2xl font-bold transition-colors duration-300 ${
                scrolled
                  ? "text-white hover:text-gray-300"
                  : "text-foreground hover:text-primary"
              }`}
            >
              How it Works
            </a>
            <a
              href="#journey"
              className={`px-1 py-1 rounded-lg text-2xl font-bold transition-colors duration-300 ${
                scrolled
                  ? "text-white hover:text-gray-300"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Journey
            </a>
            <a
              href="#contact"
              className={`px-4 py-2 rounded-lg text-2xl font-bold transition-colors duration-300 ${
                scrolled
                  ? "text-white hover:text-gray-300"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Buttons */}
          <Button
            variant="ghost"
            className={`text-2xl font-bold hidden md:inline-flex transition-colors duration-300 ${
              scrolled
                ? "text-white hover:text-gray-300"
                : "text-foreground hover:text-primary"
            }`}
            asChild
          >
             <Link href="/auth">Sign In</Link>
          </Button>
          <Button
            className={`hidden md:inline-flex bg-primary hover:bg-primary/90 glow-orange transition-colors duration-300 ${
              scrolled
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
            asChild
          >
            <Link href="/auth">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col gap-4 px-6 py-6 shadow-lg transition-colors duration-300 ${
            scrolled ? "bg-black text-white" : "bg-white text-foreground"
          }`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="text-xl font-bold flex items-center gap-1">
              Features <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`mt-2 p-2 rounded-md ${
                scrolled ? "bg-black text-white" : "bg-white text-foreground"
              }`}
            >
              {features.map((feature) => (
                <DropdownMenuItem key={feature.name} asChild>
                  <a
                    href={feature.href}
                    className="block py-2 text-lg font-semibold"
                  >
                    {feature.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#workflow" className="text-lg font-semibold">
            How it Works
          </a>
          <a href="#journey" className="text-lg font-semibold">
            Journey
          </a>
          <a href="#contact" className="text-lg font-semibold">
            Contact
          </a>

          <Link href="/signin" className="text-lg font-semibold">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-lg font-semibold bg-primary text-white px-4 py-2 rounded-md text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
