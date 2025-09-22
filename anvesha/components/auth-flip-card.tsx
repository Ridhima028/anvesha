"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

export function AuthFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const flipToSignUp = () => setIsFlipped(true)
  const flipToSignIn = () => setIsFlipped(false)

  return (
    <div className="auth-container">
      <div className="flip-card">
        {/* Sign In Form */}
        <div className={`flip-card-face flip-card-front ${isFlipped ? "hidden" : ""}`}>
          <div className="flex h-full">
            {/* Left Half - White Background with Form */}
            <div className="w-1/2 bg-white flex items-center justify-center p-8">
              <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
                  <p className="text-gray-600">Welcome back! Please sign in to your account.</p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-sm font-medium text-gray-900">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-12 bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-sm font-medium text-gray-900">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Forgot password?
                    </button>
                  </div>

                  <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">Sign In</Button>

                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={flipToSignUp}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Sign Up
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Half - Gradient Background */}
            <div
              className="w-1/2 flex items-center justify-center p-8 relative"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #0ea5e9 50%, #00d4ff 75%, #60a5fa 100%)",
                backgroundColor: "#3b82f6",
              }}
            >
              <div className="text-center space-y-6 relative z-10" style={{ backgroundColor: "transparent" }}>
                <h2 className="text-4xl font-bold" style={{ color: "#ffffff", backgroundColor: "transparent" }}>
                  Welcome Back!
                </h2>
                <p className="text-xl" style={{ color: "#dbeafe", backgroundColor: "transparent" }}>
                  Sign in to access your account and continue your journey with us.
                </p>
                <div className="w-24 h-1 bg-white mx-auto rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className={`flip-card-face flip-card-back ${isFlipped ? "visible" : ""}`}>
          <div className="flex h-full">
            {/* Left Half - White Background with Form */}
            <div className="w-1/2 bg-white flex items-center justify-center p-8">
              <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
                  <p className="text-gray-600">Create your account to get started.</p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-sm font-medium text-gray-900">
                      Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 h-12 bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-sm font-medium text-gray-900">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-12 bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-sm font-medium text-gray-900">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 h-12 bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="text-sm font-medium text-gray-900">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 h-12 bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">Sign Up</Button>

                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={flipToSignIn}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Sign In
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Half - Gradient Background */}
            <div
              className="w-1/2 flex items-center justify-center p-8 relative"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #0ea5e9 50%, #00d4ff 75%, #60a5fa 100%)",
                backgroundColor: "#3b82f6",
              }}
            >
              <div className="text-center space-y-6 relative z-10" style={{ backgroundColor: "transparent" }}>
                <h2 className="text-4xl font-bold" style={{ color: "#ffffff", backgroundColor: "transparent" }}>
                  Join Us Today!
                </h2>
                <p className="text-xl" style={{ color: "#dbeafe", backgroundColor: "transparent" }}>
                  Create your account and become part of our amazing community.
                </p>
                <div className="w-24 h-1 bg-white mx-auto rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
