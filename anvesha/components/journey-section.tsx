"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Sparkles, Search, BarChart3, Users, Lightbulb } from "lucide-react"

const journeySteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Use Language Translator and Voice Assistance to break communication barriers and gather diverse insights from global teams.",
    features: ["Language Translator", "Voice Assistance"],
    color: "from-blue-500 to-cyan-500",
    icon: Search,
    position: "left",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Transform raw information into actionable insights with Data Summaries and Smart Alerts to identify key opportunities.",
    features: ["Data Summaries", "Smart Alert"],
    color: "from-purple-500 to-pink-500",
    icon: BarChart3,
    position: "right",
  },
  {
    step: "03",
    title: "Collaborate",
    description:
      "Coordinate seamlessly with Meeting Schedule and Workflow Automation to bring teams together and execute efficiently.",
    features: ["Meeting Schedule", "Workflow Automation"],
    color: "from-orange-500 to-red-500",
    icon: Users,
    position: "left",
  },
  {
    step: "04",
    title: "Innovate",
    description:
      "Combine all features to create breakthrough solutions that address real-world challenges and drive meaningful change.",
    features: ["All Features Combined"],
    color: "from-green-500 to-emerald-500",
    icon: Lightbulb,
    position: "right",
  },
]

export function JourneySection() {
  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans">
              Your Journey to <span className="text-primary">Innovation</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow the S-shaped path of discovery as Anvesha's integrated features guide you through each step of
            innovation.
          </p>
        </div>

        <div className="relative">
          {/* S-shaped curved path background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M 150 100 Q 350 150 450 250 Q 550 350 350 450 Q 150 550 250 650 Q 350 750 550 800 Q 650 850 650 950"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Journey Steps */}
          <div className="relative z-10 space-y-16 sm:space-y-24 lg:space-y-32">
            {journeySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`flex ${
                    step.position === "right" ? "justify-end sm:justify-end" : "justify-start sm:justify-start"
                  } relative`}
                >
                  {/* Step card */}
                  <div
                    className={`w-full max-w-sm sm:max-w-md ${
                      step.position === "right" ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <Card className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-700 cursor-pointer shadow-2xl neon-yellow-hover">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      <CardContent className="p-6 sm:p-8 relative z-10">
                        <div className="text-center space-y-4">
                          {/* Step number and icon */}
                          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div
                              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-white/20`}
                              style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                            >
                              {step.step}
                            </div>
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 border border-white/20`}
                            >
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                          </div>

                          {/* Title & Description */}
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-sans group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>

                          {/* Feature tags */}
                          <div className="flex flex-wrap gap-2 justify-center pt-2 sm:pt-4">
                            {step.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 sm:px-3 sm:py-1 bg-primary/20 text-primary-foreground rounded-full text-[10px] sm:text-xs font-medium hover:bg-primary/30 transition-colors duration-300 border border-primary/30"
                                style={{
                                  backgroundColor: "hsl(var(--primary) / 0.15)",
                                  color: "hsl(var(--primary))",
                                  borderColor: "hsl(var(--primary) / 0.3)",
                                }}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Directional Arrow */}
                  {index < journeySteps.length - 1 && (
                    <div
                      className={`absolute ${
                        step.position === "right" ? "left-1/4" : "right-1/4"
                      } -bottom-10 sm:-bottom-16 transform -translate-x-1/2`}
                    >
                      <div className="relative">
                        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary/60 animate-bounce" />
                        <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
