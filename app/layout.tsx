import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Chatbot from "@/components/chatbot"
import "./globals.css"

export const metadata: Metadata = {
  title: "AyuSutra Panchkarma - Patient Management System",
  description: "Comprehensive Ayurvedic hospital management and therapy scheduling software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
