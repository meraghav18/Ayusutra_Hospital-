"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Link, FileText, User, CheckCircle, AlertCircle } from "lucide-react"

interface ABDMIntegrationProps {
  userType: "doctor" | "patient"
}

export default function ABDMIntegration({ userType }: ABDMIntegrationProps) {
  const [abhaId, setAbhaId] = useState("")
  const [isLinked, setIsLinked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLinkABHA = async () => {
    setIsLoading(true)
    // Simulate ABHA linking process
    setTimeout(() => {
      setIsLinked(true)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-600" />
          <CardTitle>ABDM Integration</CardTitle>
        </div>
        <CardDescription>
          Connect with Ayushman Bharat Digital Mission for seamless health record management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="abha" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="abha">ABHA ID</TabsTrigger>
            <TabsTrigger value="phr">PHR</TabsTrigger>
            <TabsTrigger value="hie">HIE-CM</TabsTrigger>
          </TabsList>

          <TabsContent value="abha" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="abha-id">ABHA ID</Label>
              <div className="flex gap-2">
                <Input
                  id="abha-id"
                  placeholder="Enter your 14-digit ABHA ID"
                  value={abhaId}
                  onChange={(e) => setAbhaId(e.target.value)}
                  maxLength={14}
                />
                <Button
                  onClick={handleLinkABHA}
                  disabled={isLoading || abhaId.length !== 14}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {isLoading ? "Linking..." : "Link"}
                </Button>
              </div>
            </div>

            {isLinked && (
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-emerald-700">ABHA ID successfully linked</span>
                <Badge variant="secondary" className="ml-auto">
                  Verified
                </Badge>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-medium">Benefits of ABHA ID:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Unified health identity across healthcare providers</li>
                <li>• Secure access to your health records</li>
                <li>• Seamless appointment booking and consultation</li>
                <li>• Integration with national health programs</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="phr" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Personal Health Records</h4>
                <Badge variant="outline">ABDM Compliant</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <div>
                      <p className="font-medium text-sm">Treatment History</p>
                      <p className="text-xs text-muted-foreground">12 records</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-3">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-emerald-600" />
                    <div>
                      <p className="font-medium text-sm">Prescriptions</p>
                      <p className="text-xs text-muted-foreground">8 active</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                <Link className="h-4 w-4 mr-2" />
                Sync with PHR App
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="hie" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Health Information Exchange</h4>
                <Badge variant="secondary">Connected</Badge>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <span className="font-medium text-sm">Data Sharing Consent</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Control how your health data is shared with healthcare providers
                </p>
                <Button size="sm" variant="outline">
                  Manage Consent
                </Button>
              </div>

              {userType === "doctor" && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-sm mb-2">Healthcare Provider Access</h5>
                  <p className="text-xs text-muted-foreground mb-2">
                    Access patient records with proper consent through HIE-CM
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Access Patient Records
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
