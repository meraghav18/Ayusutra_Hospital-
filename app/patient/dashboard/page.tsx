import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import ABDMIntegration from "@/components/abdm-integration"
import {
  Calendar,
  FileText,
  Heart,
  Leaf,
  Bell,
  Settings,
  User,
  Activity,
  BookOpen,
  Star,
  Phone,
  MessageCircle,
} from "lucide-react"

export default function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Priya Sharma",
      treatment: "Abhyanga Massage",
      date: "Jan 20, 2025",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Rajesh Kumar",
      treatment: "Consultation",
      date: "Jan 22, 2025",
      time: "2:30 PM",
      status: "pending",
    },
  ]

  const treatmentProgress = [
    {
      name: "Panchakarma Detox",
      progress: 75,
      sessions: "6 of 8 sessions",
      nextSession: "Jan 20, 2025",
    },
    {
      name: "Stress Management",
      progress: 40,
      sessions: "2 of 5 sessions",
      nextSession: "Jan 22, 2025",
    },
  ]

  const healthMetrics = [
    { label: "Dosha Balance", value: "Vata-Pitta", status: "balanced" },
    { label: "Energy Level", value: "Good", status: "improving" },
    { label: "Sleep Quality", value: "7.5/10", status: "stable" },
    { label: "Stress Level", value: "Low", status: "improving" },
  ]

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
              <p className="text-xs text-muted-foreground">Patient Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
              <p className="text-muted-foreground">
                Your wellness journey continues. You have 2 upcoming appointments.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* ABDM Integration */}
            <ABDMIntegration userType="patient" />

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {appointment.doctor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{appointment.doctor}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.treatment}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                        {appointment.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-transparent" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book New Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Treatment Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Treatment Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {treatmentProgress.map((treatment, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{treatment.name}</h4>
                      <span className="text-sm text-muted-foreground">{treatment.sessions}</span>
                    </div>
                    <Progress value={treatment.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{treatment.progress}% Complete</span>
                      <span>Next: {treatment.nextSession}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Health Records */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Recent Health Records
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Consultation Report</h4>
                    <p className="text-sm text-muted-foreground">Dr. Priya Sharma • Jan 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Dosha Assessment</h4>
                    <p className="text-sm text-muted-foreground">Dr. Rajesh Kumar • Jan 10, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Treatment Plan</h4>
                    <p className="text-sm text-muted-foreground">Dr. Priya Sharma • Jan 8, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Health Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{metric.label}</p>
                      <p className="text-xs text-muted-foreground">{metric.status}</p>
                    </div>
                    <span className="font-medium">{metric.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  View Records
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Doctor
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Wellness Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Daily Wellness Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Morning Routine</h4>
                  <p className="text-xs text-muted-foreground">
                    Start your day with warm water and lemon to balance your Pitta dosha.
                  </p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Meditation</h4>
                  <p className="text-xs text-muted-foreground">
                    Practice 10 minutes of mindful breathing to reduce stress levels.
                  </p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Diet Tip</h4>
                  <p className="text-xs text-muted-foreground">
                    Include warm, cooked foods in your diet to support digestion.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Rate Your Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">How was your last treatment session?</p>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400 cursor-pointer" />
                  ))}
                </div>
                <Button className="w-full" size="sm">
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
