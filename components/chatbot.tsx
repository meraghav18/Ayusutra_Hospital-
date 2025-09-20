"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

const FAQ_RESPONSES = {
  panchkarma:
    "Panchkarma is a set of five therapeutic treatments in Ayurveda designed to cleanse and rejuvenate the body. The five treatments are: Vamana (therapeutic vomiting), Virechana (purgation), Basti (medicated enemas), Nasya (nasal administration), and Raktamokshana (bloodletting). Each treatment helps eliminate toxins and restore balance to the doshas.",

  appointment:
    "To book an appointment: 1) Log into your patient portal, 2) Go to 'Appointments' section, 3) Select your preferred doctor and treatment type, 4) Choose available date and time, 5) Confirm your booking. You'll receive a confirmation message with appointment details.",

  dosha:
    "The three doshas are Vata (air and space), Pitta (fire and water), and Kapha (earth and water). Vata governs movement and nervous system, Pitta controls digestion and metabolism, Kapha manages structure and immunity. Imbalance in doshas leads to health issues, which Ayurvedic treatments aim to correct.",

  "treatment duration":
    "Treatment duration varies based on your condition and dosha imbalance. Typically: Consultation sessions last 30-45 minutes, Panchkarma therapies range from 7-21 days, Abhyanga (oil massage) takes 45-60 minutes, and Shirodhara sessions last 30-45 minutes. Your doctor will recommend the appropriate duration.",

  diet: "Ayurvedic diet recommendations are based on your dosha constitution: Vata types should eat warm, moist, grounding foods; Pitta types benefit from cool, sweet, bitter foods; Kapha types need light, warm, spicy foods. Avoid incompatible food combinations and eat according to your digestive fire (Agni).",

  "side effects":
    "Ayurvedic treatments are generally safe when performed by qualified practitioners. Mild detox symptoms like fatigue, headache, or digestive changes may occur initially as toxins are eliminated. Always inform your doctor about any medications you're taking and follow post-treatment guidelines.",

  preparation:
    "Before Panchkarma treatment: Follow prescribed diet for 3-7 days, avoid alcohol and smoking, get adequate rest, inform about any health conditions or medications, wear comfortable clothing, and arrive with an empty stomach if advised by your doctor.",

  abdm: "ABDM (Ayushman Bharat Digital Mission) integration allows you to: Link your ABHA ID for unified health identity, access your health records across providers, share treatment history securely, and benefit from government health schemes. Your data remains secure and you control access permissions.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Namaste! I'm your AyuSutra assistant. I can help you with questions about Panchkarma treatments, appointments, doshas, and more. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    "What is Panchkarma?",
    "How to book appointment?",
    "Tell me about doshas",
    "Treatment duration?",
    "Diet recommendations",
    "ABDM integration",
  ]

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const findBestResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (lowerQuery.includes(key) || key.includes(lowerQuery.split(" ")[0])) {
        return response
      }
    }

    // Default response for unmatched queries
    return "I understand you're asking about Ayurvedic treatments. For specific medical advice, please consult with our qualified doctors. You can book an appointment through the patient portal. For general questions about Panchkarma, doshas, diet, or our services, feel free to ask more specifically!"
  }

  const handleSendMessage = (content?: string) => {
    const messageContent = content || inputValue.trim()
    if (!messageContent) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: findBestResponse(messageContent),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg z-50"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md h-[600px] p-0">
          <Card className="h-full border-0">
            <CardHeader className="bg-emerald-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AyuSutra Assistant
                <Badge variant="secondary" className="ml-auto">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI Powered
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.type === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-emerald-600" />
                        </div>
                      )}

                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>

                      {message.type === "user" && (
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Quick Questions */}
              <div className="p-4 border-t">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickQuestions.map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs bg-transparent"
                      onClick={() => handleSendMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about Panchkarma, appointments, doshas..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim()}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  )
}
