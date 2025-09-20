"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Leaf, User, Stethoscope } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")
  const [userType, setUserType] = useState("patient")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      if (userType === "doctor") {
        router.push("/doctor/dashboard")
      } else {
        router.push("/patient/dashboard")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AyuSutra</h1>
                <p className="text-sm text-muted-foreground">Panchkarma</p>
              </div>
            </div>
            <CardTitle className="text-lg text-balance">Access your Panchkarma patient management portal</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Tab Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "login"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "signup"
                    ? "bg-muted-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>

              {activeTab === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>
              )}

              {/* User Type Selection */}
              <div className="space-y-3">
                <Label>I am a:</Label>
                <RadioGroup value={userType} onValueChange={setUserType} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="patient" id="patient" />
                    <Label htmlFor="patient" className="flex items-center gap-2 cursor-pointer">
                      <User className="w-4 h-4" />
                      Patient
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="doctor" id="doctor" />
                    <Label htmlFor="doctor" className="flex items-center gap-2 cursor-pointer">
                      <Stethoscope className="w-4 h-4" />
                      Doctor
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our terms of Service and Privacy Policy
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
