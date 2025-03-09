"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Plus, Users, Search, CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function EventsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState(tabParam || "events")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Mock data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Community Park Cleanup",
      description: "Join us for a day of cleaning up Central Park to make it more enjoyable for everyone.",
      date: "2023-06-15",
      time: "09:00 AM - 12:00 PM",
      location: "Central Park, New York",
      category: "Environment",
      attendees: 12,
      joined: false,
    },
    {
      id: 2,
      title: "Food Drive for Local Shelter",
      description: "Help collect and distribute food to those in need at our local homeless shelter.",
      date: "2023-06-20",
      time: "10:00 AM - 02:00 PM",
      location: "Community Center, Brooklyn",
      category: "Humanitarian",
      attendees: 8,
      joined: false,
    },
    {
      id: 3,
      title: "Teach Basic Computer Skills",
      description: "Volunteer to teach basic computer skills to seniors at the community center.",
      date: "2023-06-25",
      time: "01:00 PM - 03:00 PM",
      location: "Senior Center, Queens",
      category: "Education",
      attendees: 5,
      joined: false,
    },
  ])

  // Mock data for help requests
  const [helpRequests, setHelpRequests] = useState([
    {
      id: 1,
      title: "Need Volunteers for Weekly Tutoring",
      description: "Looking for volunteers to help tutor underprivileged children in math and science.",
      urgency: "Medium",
      category: "Education",
      postedBy: "Jane Smith",
      responses: 3,
      offered: false,
    },
    {
      id: 2,
      title: "Assistance Needed for Elderly Neighbors",
      description: "Seeking volunteers to help elderly residents with grocery shopping and errands.",
      urgency: "High",
      category: "Elderly Care",
      postedBy: "John Doe",
      responses: 7,
      offered: false,
    },
  ])

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  const handleTabChange = (value) => {
    setActiveTab(value)
    router.push(`/events?tab=${value}`, { scroll: false })
  }

  const handleJoinEvent = (eventId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId
          ? { ...event, attendees: event.joined ? event.attendees - 1 : event.attendees + 1, joined: !event.joined }
          : event,
      ),
    )

    const event = events.find((e) => e.id === eventId)
    if (event) {
      if (!event.joined) {
        // Log to console instead of toast
        console.log(`Successfully joined event: ${event.title}`)
      } else {
        console.log(`Canceled registration: ${event.title}`)
      }
    }
  }

  const handleOfferHelp = (requestId) => {
    setHelpRequests(
      helpRequests.map((request) =>
        request.id === requestId
          ? {
              ...request,
              responses: request.offered ? request.responses - 1 : request.responses + 1,
              offered: !request.offered,
            }
          : request,
      ),
    )

    const request = helpRequests.find((r) => r.id === requestId)
    if (request) {
      if (!request.offered) {
        console.log(`Help offered: ${request.title}`)
      } else {
        console.log(`Offer withdrawn: ${request.title}`)
      }
    }
  }

  // Filter events and help requests based on search query
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredHelpRequests = helpRequests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:glow-text">Volunteer Opportunities</h1>
          <p className="text-muted-foreground">Discover and join events or help requests in your community</p>
        </div>
        <div className="flex gap-4">
          <Link href="/events/create">
            <Button className="btn-enhanced dark:glow-effect">
              <Plus className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </Link>
          <Link href="/help-requests/create">
            <Button variant="outline" className="dark:border-primary/30 dark:hover:bg-primary/10">
              <Plus className="mr-2 h-4 w-4" /> Post Help Request
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6 relative"
      >
        <div
          className={`flex items-center relative transition-all duration-300 ${isSearchFocused ? "ring-2 ring-primary" : ""}`}
        >
          <Search
            className={`absolute left-3 h-5 w-5 transition-colors duration-300 ${isSearchFocused ? "text-primary" : "text-muted-foreground"}`}
          />
          <Input
            type="search"
            placeholder="Search events or help requests..."
            className="pl-10 max-w-md transition-all duration-300 focus:border-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-4 bg-muted/50 dark:bg-muted/20 p-1 rounded-lg">
          <TabsTrigger value="events" className="data-[state=active]:dark:glow-effect">
            Scheduled Events
          </TabsTrigger>
          <TabsTrigger value="help-requests" className="data-[state=active]:dark:glow-effect">
            Help Requests
          </TabsTrigger>
        </TabsList>
        <TabsContent value="events">
          {filteredEvents.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className="enhanced-card card-hover-effect h-full flex flex-col">
                    <CardHeader>
                      <div className="text-sm font-medium text-primary mb-1 dark:glow-text">{event.category}</div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-primary" />
                          <span>{event.attendees} volunteers registered</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full btn-enhanced ${event.joined ? "dark:border-primary/30" : "dark:glow-effect"}`}
                        variant={event.joined ? "outline" : "default"}
                        onClick={() => handleJoinEvent(event.id)}
                      >
                        {event.joined ? "Cancel Registration" : "Join Event"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/20">
                <CalendarIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">No events found matching your search</p>
              <Link href="/events/create">
                <Button className="btn-enhanced dark:glow-effect">Create a New Event</Button>
              </Link>
            </motion.div>
          )}
        </TabsContent>
        <TabsContent value="help-requests">
          {filteredHelpRequests.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredHelpRequests.map((request) => (
                <motion.div key={request.id} variants={itemVariants}>
                  <Card className="enhanced-card card-hover-effect h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm font-medium text-primary dark:glow-text">{request.category}</div>
                        <div
                          className={`text-xs px-2 py-1 rounded-full ${
                            request.urgency === "High"
                              ? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                              : request.urgency === "Medium"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                          }`}
                        >
                          {request.urgency} Urgency
                        </div>
                      </div>
                      <CardTitle>{request.title}</CardTitle>
                      <CardDescription>{request.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="text-sm">
                        <p>Posted by: {request.postedBy}</p>
                        <p>{request.responses} people have offered help</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full btn-enhanced ${request.offered ? "dark:border-primary/30" : "dark:glow-effect"}`}
                        variant={request.offered ? "outline" : "default"}
                        onClick={() => handleOfferHelp(request.id)}
                      >
                        {request.offered ? "Withdraw Offer" : "Offer Help"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/20">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">No help requests found matching your search</p>
              <Link href="/help-requests/create">
                <Button className="btn-enhanced dark:glow-effect">Post a New Help Request</Button>
              </Link>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

