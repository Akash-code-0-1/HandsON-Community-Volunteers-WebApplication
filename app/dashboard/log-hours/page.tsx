"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { CalendarIcon, Clock, Info } from "lucide-react"

export default function LogHoursPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    eventType: "",
    eventName: "",
    hours: "",
    minutes: "",
    description: "",
    organizationName: "",
    supervisorName: "",
    supervisorEmail: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!date) {
      setError("Please select the date of your volunteer activity.")
      return
    }

    if (!formData.eventType) {
      setError("Please select the type of volunteer activity.")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Hours logged successfully!")
    setSuccess(true)

    // Redirect after showing success message briefly
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Log Volunteer Hours</h1>

        {error && <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-4">{error}</div>}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-4">
            Hours logged successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Activity Details</CardTitle>
              <CardDescription>Log your volunteer hours to track your impact and earn recognition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <Select onValueChange={(value) => handleSelectChange("eventType", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platform">HandsOn Platform Event</SelectItem>
                    <SelectItem value="external">External Volunteer Activity</SelectItem>
                  </SelectContent>
                </Select>
                {formData.eventType === "platform" && (
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <Info className="h-4 w-4 mr-1" />
                    Hours for platform events are automatically verified
                  </p>
                )}
              </div>

              {formData.eventType === "platform" ? (
                <div className="space-y-2">
                  <Label htmlFor="eventName">Select Event</Label>
                  <Select onValueChange={(value) => handleSelectChange("eventName", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the event you participated in" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="event1">Community Park Cleanup (June 15, 2023)</SelectItem>
                      <SelectItem value="event2">Food Drive for Local Shelter (June 20, 2023)</SelectItem>
                      <SelectItem value="event3">Teach Basic Computer Skills (June 25, 2023)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="eventName">Activity Name</Label>
                  <Input
                    id="eventName"
                    placeholder="e.g., Beach Cleanup, Food Bank Volunteering"
                    value={formData.eventName}
                    onChange={handleChange}
                    required={formData.eventType === "external"}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Hours Spent</Label>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Label htmlFor="hours" className="sr-only">
                      Hours
                    </Label>
                    <Input
                      id="hours"
                      type="number"
                      min="0"
                      max="24"
                      placeholder="Hours"
                      value={formData.hours}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <span>:</span>
                  <div className="flex-1">
                    <Label htmlFor="minutes" className="sr-only">
                      Minutes
                    </Label>
                    <Input
                      id="minutes"
                      type="number"
                      min="0"
                      max="59"
                      placeholder="Minutes"
                      value={formData.minutes}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description of Activities</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you did during this volunteer activity"
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {formData.eventType === "external" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name</Label>
                    <Input
                      id="organizationName"
                      placeholder="Name of the organization you volunteered with"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required={formData.eventType === "external"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supervisorName">Supervisor/Coordinator Name</Label>
                    <Input
                      id="supervisorName"
                      placeholder="Name of person who can verify your hours"
                      value={formData.supervisorName}
                      onChange={handleChange}
                      required={formData.eventType === "external"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supervisorEmail">Supervisor/Coordinator Email</Label>
                    <Input
                      id="supervisorEmail"
                      type="email"
                      placeholder="Email for verification purposes"
                      value={formData.supervisorEmail}
                      onChange={handleChange}
                      required={formData.eventType === "external"}
                    />
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Note:</strong> External volunteer hours require verification. We'll send an email to the
                      supervisor/coordinator you provided to verify your hours.
                    </p>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Log Hours"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

