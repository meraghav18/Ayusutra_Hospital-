"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  Plus,
  Search,
  Leaf,
  Bell,
  Settings,
  User,
  Stethoscope,
  MapPin,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function PatientAppointmentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Priya Sharma",
      treatment: "Abhyanga Massage",
      date: "Jan 20, 2025",
      time: "10:00 AM",
      duration: "60 mins",
      status: "confirmed",
      location: "Room 1",
      phone: "+91 98765 43210",
      rating: 4.8,
      specialization: "Panchakarma Specialist",
    },
    {
      id: 2,
      doctor: "Dr. Rajesh Kumar",
      treatment: "Consultation",
      date: "Jan 22, 2025",
      time: "2:30 PM",
      duration: "30 mins",
      status: "pending",
      location: "Consultation Room",
      phone: "+91 98765 43211",
      rating: 4.9,
      specialization: "Ayurvedic Physician",
    },
  ]

  const pastAppointments = [
    {
      id: 3,
      doctor: "Dr. Priya Sharma",
      treatment: "Shirodhara",
      date: "Jan 15, 2025",
      time: "11:00 AM",
      status: "completed",
      rating: 5,
    },
    {
      id: 4,
      doctor: "Dr. Rajesh Kumar",
      treatment: "Initial Consultation",
      date: "Jan 10, 2025",
      time: "3:00 PM",
      status: "completed",
      rating: 4,
    },
  ]

  const availableDoctors = [
    {
      name: "Dr. Priya Sharma",
      specialization: "Panchakarma Specialist",
      rating: 4.8,
      experience: "15 years",
    },
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Ayurvedic Physician",
      rating: 4.9,
      experience: "12 years",
    },
    {
      name: "Dr. Meera Patel",
      specialization: "Herbal Medicine Expert",
      rating: 4.7,
      experience: "10 years",
    },
  ]

  const treatments = [
    "Consultation",
    "Abhyanga Massage",
    "Shirodhara",
    "Panchakarma",
    "Udvartana",
    "Nasya",
    "Basti",
    "Virechana",
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/patient/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AyuSutra</h1>
                <p className="text-xs text-muted-foreground">My Appointments</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input type="text" placeholder="Search appointments..." className="pl-10 w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Appointments</h1>
            <p className="text-muted-foreground">Manage your therapy sessions and consultations</p>
          </div>

          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Book New Appointment</DialogTitle>
                <DialogDescription>Schedule a consultation or therapy session</DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="doctor">Select Doctor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDoctors.map((doctor) => (
                        <SelectItem key={doctor.name} value={doctor.name.toLowerCase()}>
                          <div className="flex flex-col">
                            <span>{doctor.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {doctor.specialization} • ⭐ {doctor.rating}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">Treatment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {treatments.map((treatment) => (
                        <SelectItem key={treatment} value={treatment.toLowerCase()}>
                          {treatment}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptoms">Symptoms/Concerns</Label>
                  <Textarea id="symptoms" placeholder="Describe your symptoms or health concerns" rows={3} />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    Book Appointment
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsBookingOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
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
                  <div key={appointment.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {appointment.doctor
                              .split(" ")
                              .map((n) => n[1]?.[0] || n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{appointment.doctor}</h4>
                          <p className="text-sm text-muted-foreground">{appointment.specialization}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{appointment.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Stethoscope className="w-4 h-4 text-muted-foreground" />
                        <span>{appointment.treatment}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{appointment.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>
                          {appointment.date} at {appointment.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Join Session
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Past Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Past Appointments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-muted">
                          {appointment.doctor
                            .split(" ")
                            .map((n) => n[1]?.[0] || n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{appointment.doctor}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.treatment}</p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < appointment.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Available Doctors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Available Doctors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableDoctors.map((doctor, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {doctor.name
                          .split(" ")
                          .map((n) => n[1]?.[0] || n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{doctor.name}</h4>
                      <p className="text-xs text-muted-foreground">{doctor.specialization}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{doctor.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{doctor.experience}</span>
                      </div>
                    </div>
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
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Book New Appointment
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Doctor
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Rate Experience
                </Button>
              </CardContent>
            </Card>

            {/* Appointment Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Before Your Visit</h4>
                  <p className="text-xs text-muted-foreground">Avoid heavy meals 2 hours before therapy sessions</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">What to Bring</h4>
                  <p className="text-xs text-muted-foreground">Comfortable clothing and any previous medical reports</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Cancellation Policy</h4>
                  <p className="text-xs text-muted-foreground">Cancel at least 24 hours in advance to avoid charges</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
