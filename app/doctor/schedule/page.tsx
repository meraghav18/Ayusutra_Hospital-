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
  Filter,
  MoreHorizontal,
  User,
  Stethoscope,
  Leaf,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function DoctorSchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week")
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false)

  const appointments = [
    {
      id: 1,
      patient: "Priya Patel",
      treatment: "Abhyanga Massage",
      time: "9:00 AM",
      duration: 60,
      status: "confirmed",
      room: "Room 1",
      phone: "+91 98765 43210",
      notes: "First session, assess Vata imbalance",
    },
    {
      id: 2,
      patient: "Rajesh Singh",
      treatment: "Consultation",
      time: "10:30 AM",
      duration: 30,
      status: "in-progress",
      room: "Consultation Room",
      phone: "+91 98765 43211",
      notes: "Follow-up for digestive issues",
    },
    {
      id: 3,
      patient: "Meera Sharma",
      treatment: "Shirodhara",
      time: "2:00 PM",
      duration: 45,
      status: "upcoming",
      room: "Room 2",
      phone: "+91 98765 43212",
      notes: "Stress management therapy",
    },
    {
      id: 4,
      patient: "Arjun Kumar",
      treatment: "Panchakarma",
      time: "3:30 PM",
      duration: 90,
      status: "upcoming",
      room: "Room 3",
      phone: "+91 98765 43213",
      notes: "Complete detox program - Day 5",
    },
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
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

  const rooms = ["Consultation Room", "Room 1", "Room 2", "Room 3", "Panchakarma Suite", "Meditation Room"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-orange-100 text-orange-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
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
            <Link href="/doctor/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AyuSutra</h1>
                <p className="text-xs text-muted-foreground">Schedule Management</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input type="text" placeholder="Search patients..." className="pl-10 w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback>Dr</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Dr. XYZ</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Schedule Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Schedule Management</h1>
            <p className="text-muted-foreground">Manage your therapy sessions and appointments</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <Button variant={viewMode === "day" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("day")}>
                Day
              </Button>
              <Button variant={viewMode === "week" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("week")}>
                Week
              </Button>
              <Button
                variant={viewMode === "month" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("month")}
              >
                Month
              </Button>
            </div>

            <Dialog open={isNewAppointmentOpen} onOpenChange={setIsNewAppointmentOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Schedule New Appointment</DialogTitle>
                  <DialogDescription>Create a new therapy session or consultation</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient">Patient Name</Label>
                    <Input id="patient" placeholder="Enter patient name" />
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
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
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
                    <Label htmlFor="room">Room</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map((room) => (
                          <SelectItem key={room} value={room.toLowerCase()}>
                            {room}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                        <SelectItem value="120">120 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Add any special notes or instructions" />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1">
                      Schedule Appointment
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsNewAppointmentOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-xl font-semibold">
              {selectedDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                ...(viewMode === "day" && { day: "numeric" }),
              })}
            </h2>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              Today
            </Button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {appointment.patient
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{appointment.patient}</CardTitle>
                      <p className="text-sm text-muted-foreground">{appointment.phone}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                  <span className="text-sm text-muted-foreground">{appointment.duration} mins</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Stethoscope className="w-4 h-4 text-muted-foreground" />
                    <span>{appointment.treatment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{appointment.room}</span>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Start Session
                  </Button>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {appointments.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No appointments scheduled</h3>
              <p className="text-muted-foreground mb-4">Start by scheduling your first therapy session</p>
              <Button onClick={() => setIsNewAppointmentOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Schedule Appointment
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
