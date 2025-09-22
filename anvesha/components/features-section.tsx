"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Languages, FileText, Bell, Calendar, Workflow, Mic } from "lucide-react"

const features = [
  {
    icon: Languages,
    title: "Language Translator",
    description:
      "Break language barriers with real-time translation supporting 100+ languages for seamless global communication.",
    color: "text-primary",
    id: "translator",
  },
  {
    icon: FileText,
    title: "Data Summaries",
    description:
      "Transform complex datasets into clear, actionable insights with AI-powered summarization and visualization.",
    color: "text-secondary",
    id: "summaries",
  },
  {
    icon: Bell,
    title: "Smart Alert",
    description: "Stay informed with intelligent notifications that prioritize important updates and filter out noise.",
    color: "text-primary",
    id: "alerts",
    href: "Alert",
  },
  {
    icon: Calendar,
    title: "Meeting Schedule",
    description: "Effortlessly coordinate meetings across time zones with smart scheduling and automated reminders.",
    color: "text-secondary",
    id: "meetings",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks with intelligent automation that adapts to your team's unique processes.",
    color: "text-primary",
    id: "automation",
  },
  {
    icon: Mic,
    title: "Voice Assistance",
    description: "Control your workspace hands-free with advanced voice commands and natural language processing.",
    color: "text-secondary",
    id: "voice",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 font-sans">
            Powerful Features for{" "}
            <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to explore, discover, and build the next generation of solutions for Smart India.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              id={feature.id}
              className="hover:scale-105 border-gray-200 
                hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] rounded-2xl 
                transition-all duration-500 group cursor-pointer 
                relative overflow-hidden h-full shadow-xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-400/0 to-orange-600/0 group-hover:from-orange-500/20 group-hover:via-orange-400/10 group-hover:to-orange-600/20 transition-all duration-500 rounded-lg blur-xl -z-10 group-hover:blur-2xl"></div>

              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-center relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  >
                    <feature.icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color} group-hover:drop-shadow-lg transition-all duration-300`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 font-sans group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
