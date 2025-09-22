"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-6 h-1 bg-secondary rounded-full"></div>
                <div className="absolute -bottom-1 left-2 w-6 h-1 bg-secondary rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Anvesha</span>
            </div>
            <p className="text-background/80 text-pretty text-sm sm:text-base">
              Empowering the next generation of innovators to explore, discover, and build solutions for Smart India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-primary transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-background/80 text-sm mb-4 text-pretty">
              Get the latest updates on new features and hackathon opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60 w-full"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-background/60 text-sm">
            © 2024 Anvesha. Built for Smart India Hackathon. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button size="icon" variant="ghost" className="text-background/60 hover:text-primary">
              <Github className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" className="text-background/60 hover:text-secondary">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" className="text-background/60 hover:text-primary">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
