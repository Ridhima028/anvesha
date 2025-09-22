"use client"

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Users,
  Clock,
  MapPin,
  UserCheck,
  Settings,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type Meeting = {
  id: string
  title: string
  time: string
  department: string
  organizer: string
  location: string
  color: string
  priority?: boolean
}

const meetings: Meeting[] = [
  {
    id: "1",
    title: "Sprint Planning & Booking Review",
    time: "9:00 AM",
    department: "Operations",
    organizer: "Sarah Chen",
    location: "Main Office",
    color: "orange",
    priority: true,
  },
  {
    id: "2",
    title: "Product Roadmap Discussion",
    time: "9:00 AM",
    department: "Operations",
    organizer: "Mike Johnson",
    location: "All Attendees",
    color: "blue",
  },
  {
    id: "3",
    title: "Marketing Campaign Strategy",
    time: "10:00 AM",
    department: "Customer Service",
    organizer: "Lisa Rodriguez",
    location: "All Attendees",
    color: "yellow",
  },
  {
    id: "4",
    title: "Client Presentation Prep",
    time: "11:00 AM",
    department: "Operations",
    organizer: "David Kim",
    location: "All Attendees",
    color: "purple",
    priority: true,
  },
  {
    id: "5",
    title: "UX/UI Design Review",
    time: "2:00 PM",
    department: "Operations",
    organizer: "Sarah Chen",
    location: "All Attendees",
    color: "blue",
  },
  {
    id: "6",
    title: "Quarterly Goals Planning",
    time: "2:00 PM",
    department: "Operations",
    organizer: "Alex Brown",
    location: "All Attendees",
    color: "green",
  },
  {
    id: "7",
    title: "Technical Architecture Discussion",
    time: "3:00 PM",
    department: "Maintenance",
    organizer: "Sarah Chen",
    location: "All Attendees",
    color: "blue",
  },
  {
    id: "8",
    title: "Sales Pipeline Review",
    time: "4:00 PM",
    department: "Finance",
    organizer: "Mike Johnson",
    location: "All Attendees",
    color: "orange",
    priority: true,
  },
  {
    id: "9",
    title: "Brand Guidelines Update",
    time: "4:00 PM",
    department: "Customer Service",
    organizer: "Ryan Taylor",
    location: "All Attendees",
    color: "yellow",
  },
  {
    id: "10",
    title: "Team Retrospective",
    time: "5:00 PM",
    department: "HR",
    organizer: "Jennifer Lee",
    location: "All Attendees",
    color: "green",
  },
]

export default function MeetingScheduler() {
  const [activeFilter, setActiveFilter] = useState<string>("All Attendees")

  const filteredMeetings = meetings.filter((meeting) => {
    if (activeFilter === "All Attendees") return true
    if (activeFilter === "Priority") return meeting.priority
    if (activeFilter === "HR Human Resources") return meeting.department === "HR"
    return meeting.department === activeFilter
  })

  const getMeetingColorClasses = (color: string) => {
    const colorMap = {
      orange: "bg-orange-50 border-orange-200",
      blue: "bg-blue-50 border-blue-200",
      yellow: "bg-yellow-50 border-yellow-200",
      purple: "bg-purple-50 border-purple-200",
      green: "bg-green-50 border-green-200",
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-50 border-gray-200"
  }

  const groupedMeetings = filteredMeetings.reduce(
    (acc, meeting) => {
      if (!acc[meeting.time]) {
        acc[meeting.time] = []
      }
      acc[meeting.time].push(meeting)
      return acc
    },
    {} as Record<string, Meeting[]>,
  )

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Kochi Metro Rail</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-900">September 14, 2025</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600">
            <Filter className="w-4 h-4" />
            Filter by
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "All Attendees" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("All Attendees")}
          >
            <Users className="w-4 h-4 mr-2" />
            All Attendees
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "Priority" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("Priority")}
          >
            <Clock className="w-4 h-4 mr-2" />
            Priority
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "HR Human Resources" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("HR Human Resources")}
          >
            <MapPin className="w-4 h-4 mr-2" />
            HR Human Resources
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "Operations" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("Operations")}
          >
            <Settings className="w-4 h-4 mr-2" />
            Operations
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "Maintenance" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("Maintenance")}
          >
            <UserCheck className="w-4 h-4 mr-2" />
            Maintenance
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "Customer Service" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("Customer Service")}
          >
            <Settings className="w-4 h-4 mr-2" />
            Customer Service
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${activeFilter === "AI Review" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-600"}`}
            onClick={() => setActiveFilter("AI Review")}
          >
            <Star className="w-4 h-4 mr-2" />
            AI Review
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Schedule Overview</h2>
            <p className="text-sm text-gray-600">{filteredMeetings.length} meetings scheduled</p>
            <p className="text-sm text-gray-600">4 hours total</p>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">8:00</div>
              <div className="text-sm text-gray-500">AM</div>
            </div>
          </div>
        </div>

        {/* Schedule Content */}
        <div className="flex-1 p-6">
          <div className="space-y-4">
            {timeSlots.map((timeSlot) => (
              <div key={timeSlot} className="flex items-start gap-4">
                <div className="w-16 text-right">
                  <div className="text-sm font-medium text-blue-600">{timeSlot}</div>
                </div>
                <div className="flex-1">
                  {groupedMeetings[timeSlot] ? (
                    <div className="space-y-4">
                      {groupedMeetings[timeSlot].map((meeting) => (
                        <div
                          key={meeting.id}
                          className={`${getMeetingColorClasses(meeting.color)} border rounded-lg p-4`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                            {meeting.priority && (
                              <Button variant="ghost" size="sm" className="text-gray-400">
                                <Settings className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{meeting.department}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{meeting.organizer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{meeting.location}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400 text-sm">No meetings scheduled</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
