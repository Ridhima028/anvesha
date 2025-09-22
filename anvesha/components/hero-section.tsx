"use client"

import { useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] mt-[80px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/k.jpeg')" }}
      ></div>

      {/* Subtle Glass Overlay */}
      <div
        className="absolute bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl"
        style={{ top: "20px", bottom: "60px", left: "20px", right: "20px" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-12 space-y-6">
        <h1 className="font-extrabold leading-tight text-center">
          {/* Smart Automation for */}
          <span className="relative block text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-orange-500 transition-colors whitespace-nowrap">
            Smart Automation for
          </span>

          <span className="relative block mt-2 sm:mt-4">
            {/* Neon background glow */}
            <span className="absolute top-0 left-0 w-full h-full bg-blue-500/30 rounded-lg blur-2xl filter opacity-50 animate-pulse-slow"></span>
            {/* Text */}
            <span className="relative text-blue-500 text-4xl sm:text-6xl lg:text-8xl xl:text-[100px] font-bold glow-sky-blue-neon">
              Kochi Metro
            </span>
          </span>

          <span className="relative text-gray-300 block mt-3 text-lg sm:text-xl lg:text-2xl">
            Document Overload Solved
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed text-center mt-4 px-2 sm:px-6">
          Search, Summarize, Automate & Collaborate — All in one platform.
        </p>

        {/* New Text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-500 font-semibold leading-relaxed text-center mt-2">
          Powered by AI for the Future of Transit Management
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6">
          {/* Summary Button */}
          <Link href="/Document">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:shadow-[0_0_20px_#FFA500] transition-shadow text-base sm:text-lg font-semibold">
              Summary
              
            </button>
          </Link>

          {/* Demo Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_#FFA500] transition-all text-base sm:text-lg font-semibold"
          >
            Demo
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-3xl">
            <iframe
              className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
