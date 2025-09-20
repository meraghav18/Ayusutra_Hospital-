import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ABDMIntegration from "@/components/abdm-integration"
import {
  Calendar,
  Users,
  IndianRupee,
  TrendingUp,
  Plus,
  CalendarDays,
  FileText,
  Stethoscope,
  MoreHorizontal,
  Search,
  Bell,
  Settings,
  Leaf,
  Star,
} from "lucide-react"

export default function DoctorDashboard() {
  const todaysAppointments = [
    {
      id: 1,
      patient: "Priya Patel",
      treatment: "Abhyanga Massage",
      time: "9:00 AM",
      duration: "60 mins",
      status: "confirmed",
      initials: "PP",
    },
    {
      id: 2,
      patient: "Rajesh Singh",
      treatment: "Consultation",
      time: "10:30 AM",
      duration: "30 mins",
      status: "in-progress",
      initials: "RS",
    },
    {
      id: 3,
      patient: "Meera Sharma",
      treatment: "Shirodhara",
      time: "2:00 AM",
      duration: "45 mins",
      status: "upcoming",
      initials: "MS",
    },
    {
      id: 4,
      patient: "Arjun Kumar",
      treatment: "Panchakarma",
      time: "3:30 AM",
      duration: "90 mins",
      status: "upcoming",
      initials: "AK",
    },
  ]

  const recentPatients = [
    {
      name: "Sita Devi",
      condition: "Stress Management",
      lastVisit: "2025-02-10",
      nextVisit: "2025-01-20",
    },
    {
      name: "Vikram Gupta",
      condition: "Digestive Issues",
      lastVisit: "2025-02-09",
      nextVisit: "2025-01-18",
    },
    {
      name: "Anita Reddy",
      condition: "Sleep Disorder",
      lastVisit: "2025-01-08",
      nextVisit: "2025-01-22",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
              <p className="text-xs text-muted-foreground">Doctor Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-muted rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>Dr. XYZ</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Dr. XYZ</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-green-600">+2 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67</div>
              <p className="text-xs text-green-600">+8 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,000</div>
              <p className="text-xs text-green-600">+12% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-green-600">+3% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Good morning, Dr.</h2>
              <p className="text-muted-foreground mb-4">You have 4 appointments scheduled for today.</p>
              <div className="flex gap-3">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Patient
                </Button>
                <Button variant="outline">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  View Schedule
                </Button>
              </div>
            </div>

            {/* ABDM Integration Section */}
            <ABDMIntegration userType="doctor" />

            {/* Today's Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    Today's Appointments
                  </CardTitle>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">{appointment.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{appointment.patient}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.treatment}</p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.time} • {appointment.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

       
            <Card>
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPatients.map((patient, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-muted">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{patient.name}</h4>
                        <p className="text-sm text-muted-foreground">{patient.condition}</p>
                        <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Next: {patient.nextVisit}</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        <FileText className="w-4 h-4 mr-1" />
                        View Records
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Create Prescription
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Treatment Plans
                </Button>
              </CardContent>
            </Card>

            {/* This Month Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Patients Treated</span>
                  <span className="font-medium">234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Rating</span>
                  <span className="font-medium flex items-center gap-1">
                    4.8 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-medium">₹1,89,000</span>
                </div>
              </CardContent>
            </Card>

            {/* Popular Treatments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Popular Treatments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Abhyanga</span>
                  <span className="text-sm text-muted-foreground">32%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Shirodhara</span>
                  <span className="text-sm text-muted-foreground">28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Panchakarma</span>
                  <span className="text-sm text-muted-foreground">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Consultation</span>
                  <span className="text-sm text-muted-foreground">16%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
