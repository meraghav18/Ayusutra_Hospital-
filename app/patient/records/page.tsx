"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Calendar,
  Heart,
  Activity,
  Stethoscope,
  Leaf,
  Bell,
  Settings,
  TrendingUp,
  Eye,
  Share,
} from "lucide-react"
import Link from "next/link"

export default function PatientRecordsPage() {
  const patientInfo = {
    name: "Abhay Patel",
    age: 35,
    gender: "Male",
    phone: "+91 98765 43210",
    email: "patel@gmail.com",
    address: "jhashi, UP",
    dosha: "Vata-Pitta",
    patientId: "AYU2025001",
    joinDate: "2024-12-15",
  }

  const medicalHistory = [
    {
      id: 1,
      date: "2025-01-15",
      type: "Consultation",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Vata imbalance causing anxiety and insomnia",
      treatment: "Abhyanga massage therapy, meditation guidance",
      prescription: "Ashwagandha tablets (2x daily), Brahmi oil for head massage",
      notes: "Patient showing improvement in stress levels. Continue current treatment plan.",
      status: "completed",
    },
    {
      id: 2,
      date: "2025-01-10",
      type: "Dosha Assessment",
      doctor: "Dr. Rajesh Kumar",
      diagnosis: "Initial constitutional analysis - Vata-Pitta predominant",
      treatment: "Lifestyle counseling and dietary recommendations",
      prescription: "Triphala churna (1 tsp before bed), daily meditation practice",
      notes: "Recommended dietary changes to balance Vata. Avoid cold foods and drinks.",
      status: "completed",
    },
    {
      id: 3,
      date: "2025-01-05",
      type: "Initial Consultation",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Stress-related digestive issues, sleep disturbances",
      treatment: "Comprehensive Panchakarma evaluation",
      prescription: "Digestive tea blend, stress management techniques",
      notes: "Patient history of high stress job. Recommended work-life balance improvements.",
      status: "completed",
    },
  ]

  const currentVitals = {
    bloodPressure: "120/80 mmHg",
    pulse: "72 bpm",
    weight: "70 kg",
    height: "175 cm",
    bmi: "22.9",
    bodyFat: "15%",
    lastUpdated: "2025-01-15",
  }

  const treatmentProgress = [
    {
      name: "Panchakarma Detox Program",
      progress: 75,
      sessions: "6 of 8 sessions",
      startDate: "2025-01-01",
      endDate: "2025-01-30",
      doctor: "Dr. Priya Sharma",
      status: "active",
    },
    {
      name: "Stress Management Therapy",
      progress: 40,
      sessions: "2 of 5 sessions",
      startDate: "2025-01-10",
      endDate: "2025-02-10",
      doctor: "Dr. Rajesh Kumar",
      status: "active",
    },
    {
      name: "Digestive Health Program",
      progress: 100,
      sessions: "4 of 4 sessions",
      startDate: "2024-12-15",
      endDate: "2025-01-05",
      doctor: "Dr. Priya Sharma",
      status: "completed",
    },
  ]

  const healthMetrics = [
    { label: "Dosha Balance", value: "Vata-Pitta", trend: "stable", color: "blue" },
    { label: "Energy Level", value: "Good", trend: "improving", color: "green" },
    { label: "Sleep Quality", value: "7.5/10", trend: "improving", color: "green" },
    { label: "Stress Level", value: "Low", trend: "improving", color: "green" },
    { label: "Digestion", value: "Normal", trend: "stable", color: "blue" },
    { label: "Mental Clarity", value: "High", trend: "improving", color: "green" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving":
        return <TrendingUp className="w-3 h-3 text-green-600" />
      case "stable":
        return <Activity className="w-3 h-3 text-blue-600" />
      default:
        return <Activity className="w-3 h-3 text-gray-600" />
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
                <p className="text-xs text-muted-foreground">My Health Records</p>
              </div>
            </Link>
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
            <h1 className="text-3xl font-bold">My Health Records</h1>
            <p className="text-muted-foreground">Access your complete medical history and treatment progress</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share Records
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>
        </div>

        {/* Patient Overview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  {patientInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{patientInfo.name}</CardTitle>
                <p className="text-muted-foreground">
                  {patientInfo.age} years old • {patientInfo.gender} • Patient ID: {patientInfo.patientId}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge>{patientInfo.dosha} Constitution</Badge>
                  <span className="text-sm text-muted-foreground">Member since {patientInfo.joinDate}</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Records Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="treatments">Treatments</TabsTrigger>
            <TabsTrigger value="vitals">Vitals & Metrics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Health Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Current Health Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{metric.label}</span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <span className="font-medium">{metric.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Consultation completed</p>
                      <p className="text-xs text-muted-foreground">Jan 15, 2025 with Dr. Priya Sharma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Stethoscope className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Treatment session</p>
                      <p className="text-xs text-muted-foreground">Jan 12, 2025 - Abhyanga massage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <FileText className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">New prescription</p>
                      <p className="text-xs text-muted-foreground">Jan 10, 2025 - Ashwagandha tablets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Complete Medical History</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export History
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {medicalHistory.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          {record.type}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {record.doctor} • {record.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
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

          <TabsContent value="treatments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Treatment Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {treatmentProgress.map((treatment, index) => (
                  <div key={index} className="space-y-3 p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{treatment.name}</h4>
                        <p className="text-sm text-muted-foreground">Dr. {treatment.doctor}</p>
                        <p className="text-xs text-muted-foreground">
                          {treatment.startDate} - {treatment.endDate}
                        </p>
                      </div>
                      <Badge className={getStatusColor(treatment.status)}>{treatment.status}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{treatment.sessions}</span>
                        <span>{treatment.progress}% Complete</span>
                      </div>
                      <Progress value={treatment.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vitals" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Current Vitals
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Last updated: {currentVitals.lastUpdated}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Blood Pressure</span>
                    <span className="font-medium">{currentVitals.bloodPressure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Pulse Rate</span>
                    <span className="font-medium">{currentVitals.pulse}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Weight</span>
                    <span className="font-medium">{currentVitals.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Height</span>
                    <span className="font-medium">{currentVitals.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">BMI</span>
                    <span className="font-medium">{currentVitals.bmi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Body Fat</span>
                    <span className="font-medium">{currentVitals.bodyFat}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Dosha Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <Badge className="text-lg px-4 py-2">{patientInfo.dosha}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">Your constitutional type</p>
                    </div>
                    <div className="space-y-3">
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Medical Reports & Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-medium">Consultation Report</h4>
                        <p className="text-xs text-muted-foreground">Jan 15, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Dr. Priya Sharma</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-medium">Dosha Assessment</h4>
                        <p className="text-xs text-muted-foreground">Jan 10, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Dr. Rajesh Kumar</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-medium">Treatment Plan</h4>
                        <p className="text-xs text-muted-foreground">Jan 5, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Dr. Priya Sharma</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
