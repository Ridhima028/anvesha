"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Bell, Wifi, FileText, CreditCard, Wrench, Globe, AlertTriangle, DollarSign, Languages } from "lucide-react"
import { cn } from "@/lib/utils"

interface Notification {
  id: string
  title: string
  description: string
  time: string
  status: "urgent" | "pending" | "completed"
  icon: React.ReactNode
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "RTI Report Pending",
    description:
      "Right to Information request #RTI2024/001 requires immediate attention. Response deadline approaching.",
    time: "2 hours ago",
    status: "urgent",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: "2",
    title: "Payment Due - Vendor Invoice",
    description: "Invoice #INV-2024-0892 from Metro Construction Ltd. due for payment within 3 days.",
    time: "4 hours ago",
    status: "pending",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: "3",
    title: "Maintenance Scheduled",
    description: "Regular maintenance for Aluva-Petta line scheduled for this weekend. Operations will be affected.",
    time: "6 hours ago",
    status: "pending",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    id: "4",
    title: "Malayalam Translation Ready",
    description: "Safety guidelines have been translated to Malayalam and are ready for review and approval.",
    time: "8 hours ago",
    status: "completed",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: "5",
    title: "Emergency Maintenance Required",
    description: "Signal malfunction reported at Kaloor station. Immediate technical intervention required.",
    time: "12 minutes ago",
    status: "urgent",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    id: "6",
    title: "Monthly Financial Report",
    description: "September 2024 financial report has been generated and requires management review.",
    time: "1 day ago",
    status: "pending",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: "7",
    title: "Contractor Payment Processed",
    description: "Payment of ₹2,45,000 to Kerala Infrastructure Ltd. has been successfully processed.",
    time: "2 days ago",
    status: "completed",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    id: "8",
    title: "Hindi Translation Update",
    description: "Station announcements have been updated with Hindi translations as per new guidelines.",
    time: "3 days ago",
    status: "completed",
    icon: <Languages className="w-5 h-5" />,
  },
]

export default function AlertsDashboard() {
  const [activeTab, setActiveTab] = useState<"all" | "urgent" | "pending" | "completed">("all")
  const [clickedButton, setClickedButton] = useState<string | null>(null)

  const handleButtonClick = (buttonId: string) => {
    setClickedButton(buttonId)
    setTimeout(() => setClickedButton(null), 200)
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    return notification.status === activeTab
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "urgent":
        return <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Urgent</Badge>
      case "pending":
        return <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Pending</Badge>
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600 text-white">Completed</Badge>
      default:
        return null
    }
  }

  const getIconBackground = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-orange-100 text-orange-600"
      case "pending":
        return "bg-blue-100 text-blue-600"
      case "completed":
        return "bg-green-100 text-green-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getTabCount = (tab: string) => {
    if (tab === "all") return notifications.length
    return notifications.filter((n) => n.status === tab).length
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Alerts & Notifications</h1>
                <p className="text-slate-300 text-sm">Real-time system updates and notifications</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Wifi className="w-4 h-4" />
              <span className="text-sm font-medium">Connected</span>
              <Bell className="w-5 h-5 ml-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8">
          {[
            { key: "all", label: "All Notifications" },
            { key: "urgent", label: "Urgent" },
            { key: "pending", label: "Pending" },
            { key: "completed", label: "Completed" },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "ghost"}
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                activeTab === tab.key
                  ? "bg-slate-800 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm",
                clickedButton === tab.key && "animate-pulse",
              )}
              onClick={() => {
                setActiveTab(tab.key as any)
                handleButtonClick(tab.key)
              }}
            >
              <span
                className={cn("relative z-10 flex items-center gap-2", clickedButton === tab.key && "animate-bounce")}
              >
                {tab.label}
                <Badge
                  variant="secondary"
                  className={cn(
                    "ml-1 text-xs",
                    activeTab === tab.key ? "bg-slate-600 text-white" : "bg-slate-100 text-slate-600 border-slate-200",
                  )}
                >
                  {getTabCount(tab.key)}
                </Badge>
              </span>
              {clickedButton === tab.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-orange-400/30 animate-pulse" />
              )}
            </Button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={cn(
                "p-6 bg-white backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group relative overflow-hidden",
                clickedButton === notification.id && "animate-pulse",
              )}
              onClick={() => handleButtonClick(notification.id)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    getIconBackground(notification.status),
                    clickedButton === notification.id && "animate-bounce",
                  )}
                >
                  {notification.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {notification.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{notification.description}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className="text-xs text-gray-500 font-medium">{notification.time}</span>
                      {getStatusBadge(notification.status)}
                    </div>
                  </div>
                </div>
              </div>

              {clickedButton === notification.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-orange-400/10 animate-pulse pointer-events-none" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}