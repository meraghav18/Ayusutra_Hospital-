import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Calendar, FileText, Shield, Smartphone, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AyuSutra</h1>
              <p className="text-xs text-muted-foreground">Panchkarma</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/auth">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth?tab=signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Trusted by 500+ Ayurvedic Practitioners
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Harmonize Your <span className="text-primary">Ayurvedic Practice</span> with Gentle Care
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Experience the perfect balance of ancient wisdom and modern technology. Manage your Panchkarma treatments
            with our comprehensive, ABDM-ready platform designed for holistic healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/auth">
                Begin Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Discover Wellness
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">500+</h3>
              <p className="text-muted-foreground">Happy Practitioners</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">10K+</h3>
              <p className="text-muted-foreground">Patients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">98%</h3>
              <p className="text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Comprehensive Wellness Management
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Nurturing Features for <span className="text-primary">Holistic Healing</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Every feature in AyuSutra is designed with mindfulness and intention, supporting your practice while
              honoring the sacred tradition of Ayurvedic healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Gentle Patient Care</CardTitle>
                <CardDescription>
                  Nurture comprehensive patient profiles with Dosha assessments creating personalized healing journeys
                  for optimal wellness outcomes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mindful Treatment Timing</CardTitle>
                <CardDescription>
                  Harmonize your daily Panchkarma treatments with precision timing each treatment flows within the
                  rhythm of healing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Sacred Herbal Wisdom</CardTitle>
                <CardDescription>
                  Access traditional prescriptions and herbal remedies with extensive documentation honoring the sacred
                  knowledge of Ayurveda.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Harmonious Spaces</CardTitle>
                <CardDescription>
                  Organize therapy rooms and treatment spaces to create serenity of peace where healing can flourish
                  naturally.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Wellness Journey Tracking</CardTitle>
                <CardDescription>
                  Monitor patient progress with compassionate tracking and only forward in their path to balanced
                  healthy vitality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mobile Serenity</CardTitle>
                <CardDescription>
                  Access your practice management tools from anywhere with our mobile-friendly interface designed for
                  busy practitioners.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Cultivate Wellness with <span className="text-primary">Sacred Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            AyuSutra bridges the timeless wisdom of Ayurveda with the clarity and efficiency that modern technology can
            bring, creating healing practice in new ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/auth">Begin Your Journey Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">AyuSutra</h3>
                  <p className="text-xs text-muted-foreground">Panchkarma Care</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Harmonizing ancient Ayurvedic wisdom with modern healthcare technology for comprehensive patient
                management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Patient Management</li>
                <li>Treatment Scheduling</li>
                <li>Digital Assessment</li>
                <li>Therapy Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Wellness</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About AyuSutra</li>
                <li>Our Philosophy</li>
                <li>Favorite Testimonials</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contact Us</li>
                <li>Support</li>
                <li>Documentation</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              "In the rhythm of the body, the melody of the mind, and the harmony of the soul lies the dance of life"
            </p>
            <p className="mt-2">- Ancient Ayurvedic Wisdom</p>
            <p className="mt-4">
              © 2025 AyuSutra Panchkarma Care. Experience the harmony of tradition and technology in your Ayurvedic
              practice.
            </p>
            <p className="mt-2 text-xs">Trusted by Wellness Practitioners Worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
