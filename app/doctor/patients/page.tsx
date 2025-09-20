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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Search,
  Filter,
  Plus,
  FileText,
  User,
  Calendar,
  Stethoscope,
  Heart,
  Activity,
  Leaf,
  Bell,
  Settings,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Edit,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function DoctorPatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<any>(null)
  const [isNewRecordOpen, setIsNewRecordOpen] = useState(false)

  const patients = [
    {
      id: 1,
      name: "Priya Patel",
      age: 32,
      gender: "Female",
      phone: "+91 98765 43210",
      email: "priya.patel@email.com",
      address: "Mumbai, Maharashtra",
      dosha: "Vata-Pitta",
      lastVisit: "2025-01-15",
      nextVisit: "2025-01-20",
      condition: "Stress Management",
      status: "active",
      treatments: ["Abhyanga", "Shirodhara"],
      vitals: {
        bloodPressure: "120/80",
        pulse: "72 bpm",
        weight: "58 kg",
        height: "165 cm",
      },
    },
    {
      id: 2,
      name: "Rajesh Singh",
      age: 45,
      gender: "Male",
      phone: "+91 98765 43211",
      email: "rajesh.singh@email.com",
      address: "Delhi, India",
      dosha: "Kapha-Vata",
      lastVisit: "2025-01-12",
      nextVisit: "2025-01-22",
      condition: "Digestive Issues",
      status: "active",
      treatments: ["Panchakarma", "Consultation"],
      vitals: {
        bloodPressure: "130/85",
        pulse: "68 bpm",
        weight: "75 kg",
        height: "175 cm",
      },
    },
    {
      id: 3,
      name: "Meera Sharma",
      age: 28,
      gender: "Female",
      phone: "+91 98765 43212",
      email: "meera.sharma@email.com",
      address: "Bangalore, Karnataka",
      dosha: "Pitta",
      lastVisit: "2025-01-10",
      nextVisit: "2025-01-25",
      condition: "Sleep Disorder",
      status: "active",
      treatments: ["Shirodhara", "Meditation"],
      vitals: {
        bloodPressure: "115/75",
        pulse: "76 bpm",
        weight: "52 kg",
        height: "160 cm",
      },
    },
  ]

  const medicalHistory = [
    {
      date: "2025-01-15",
      type: "Consultation",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Vata imbalance causing anxiety",
      treatment: "Abhyanga massage therapy",
      prescription: "Ashwagandha tablets, Brahmi oil",
      notes: "Patient showing improvement in stress levels",
    },
    {
      date: "2025-01-10",
      type: "Assessment",
      doctor: "Dr. Rajesh Kumar",
      diagnosis: "Initial Dosha assessment",
      treatment: "Lifestyle counseling",
      prescription: "Triphala churna, meditation practice",
      notes: "Recommended dietary changes for Vata balance",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "critical":
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
            <Link href="/doctor/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AyuSutra</h1>
                <p className="text-xs text-muted-foreground">Patient Records</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search patients..."
                className="pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <AvatarFallback>Dr</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Dr. XYZ</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Patient Records</h1>
            <p className="text-muted-foreground">Manage comprehensive patient health records and treatment history</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Dialog open={isNewRecordOpen} onOpenChange={setIsNewRecordOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Patient
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Patient</DialogTitle>
                  <DialogDescription>Create a new patient record</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Age" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="patient@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter full address" rows={2} />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1">
                      Add Patient
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsNewRecordOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patients List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Patients ({filteredPatients.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedPatient?.id === patient.id ? "bg-primary/5 border-primary" : ""
                    }`}
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {patient.age}y, {patient.gender}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(patient.status)}>{patient.status}</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{patient.condition}</p>
                      <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Patient Details */}
          <div className="lg:col-span-2">
            {selectedPatient ? (
              <div className="space-y-6">
                {/* Patient Overview */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                          {selectedPatient.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl">{selectedPatient.name}</CardTitle>
                        <p className="text-muted-foreground">
                          {selectedPatient.age} years old • {selectedPatient.gender}
                        </p>
                        <Badge className="mt-2">{selectedPatient.dosha} Constitution</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact
                        </h4>
                        <p className="text-sm text-muted-foreground">{selectedPatient.phone}</p>
                        <p className="text-sm text-muted-foreground">{selectedPatient.email}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Address
                        </h4>
                        <p className="text-sm text-muted-foreground">{selectedPatient.address}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Appointments
                        </h4>
                        <p className="text-sm text-muted-foreground">Last: {selectedPatient.lastVisit}</p>
                        <p className="text-sm text-muted-foreground">Next: {selectedPatient.nextVisit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Patient Details Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="vitals">Vitals</TabsTrigger>
                    <TabsTrigger value="treatments">Treatments</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Current Condition</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{selectedPatient.condition}</p>
                          <div className="mt-4">
                            <h4 className="font-medium mb-2">Active Treatments</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedPatient.treatments.map((treatment: string, index: number) => (
                                <Badge key={index} variant="secondary">
                                  {treatment}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Dosha Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm">Primary Dosha</span>
                              <Badge>{selectedPatient.dosha}</Badge>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Vata</span>
                                <span>60%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Pitta</span>
                                <span>30%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-secondary h-2 rounded-full" style={{ width: "30%" }}></div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Kapha</span>
                                <span>10%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-accent h-2 rounded-full" style={{ width: "10%" }}></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="space-y-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Medical History</CardTitle>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {medicalHistory.map((record, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">{record.type}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {record.doctor} • {record.date}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm">
                                <FileText className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <span className="text-sm font-medium">Diagnosis: </span>
                                <span className="text-sm text-muted-foreground">{record.diagnosis}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">Treatment: </span>
                                <span className="text-sm text-muted-foreground">{record.treatment}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">Prescription: </span>
                                <span className="text-sm text-muted-foreground">{record.prescription}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">Notes: </span>
                                <span className="text-sm text-muted-foreground">{record.notes}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="vitals" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Heart className="w-5 h-5" />
                            Vital Signs
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm">Blood Pressure</span>
                            <span className="font-medium">{selectedPatient.vitals.bloodPressure}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Pulse Rate</span>
                            <span className="font-medium">{selectedPatient.vitals.pulse}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Weight</span>
                            <span className="font-medium">{selectedPatient.vitals.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Height</span>
                            <span className="font-medium">{selectedPatient.vitals.height}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Activity className="w-5 h-5" />
                            Health Metrics
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm">BMI</span>
                            <span className="font-medium">21.3</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Body Fat</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Stress Level</span>
                            <Badge variant="secondary">Low</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Energy Level</span>
                            <Badge className="bg-green-100 text-green-800">Good</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="treatments" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Stethoscope className="w-5 h-5" />
                          Treatment Plan
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {selectedPatient.treatments.map((treatment: string, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{treatment}</h4>
                              <p className="text-sm text-muted-foreground">
                                {index === 0 ? "3 sessions completed" : "2 sessions completed"}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">Active</Badge>
                              <Button variant="ghost" size="sm">
                                <FileText className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Select a Patient</h3>
                  <p className="text-muted-foreground">Choose a patient from the list to view their detailed records</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
