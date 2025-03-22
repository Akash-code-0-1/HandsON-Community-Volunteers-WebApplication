"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Clock, Edit, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [user] = useState({
    name: "Tanvir",
    email: "tanvir0ah0akash@gmail.com",
    avatar: "https://github.com/Akash-code-0-1/Profile/blob/main/WhatsApp%20Image%202025-02-17%20at%2012,51,35%20PM-photoaidcom-cropped.jpeg?raw=true",
    hours: 45,
    points: 225,
    events: 8,
    skills: ["Teaching", "Organizing", "First Aid"],
    causes: ["Education", "Environment", "Elderly Care"],
    nextMilestone: 50,
  })

  // Mock data for upcoming events
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: "Community Park Cleanup",
      date: "2023-06-15",
      time: "09:00 AM - 12:00 PM",
      location: "Central Park, New York",
    },
    {
      id: 2,
      title: "Food Drive for Local Shelter",
      date: "2023-06-20",
      time: "10:00 AM - 02:00 PM",
      location: "Community Center, Brooklyn",
    },
  ])

  // Mock data for past events
  const [pastEvents, setPastEvents] = useState([
    {
      id: 1,
      title: "Beach Cleanup",
      date: "2023-05-10",
      hours: 3,
      verified: true,
    },
    {
      id: 2,
      title: "Homeless Shelter Assistance",
      date: "2023-05-05",
      hours: 4,
      verified: true,
    },
    {
      id: 3,
      title: "Senior Center Visit",
      date: "2023-04-28",
      hours: 2,
      verified: false,
    },
  ])

  // Mock data for teams
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Green Warriors",
      role: "Member",
      members: 15,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Tech Tutors",
      role: "Team Leader",
      members: 12,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const [verificationMessage, setVerificationMessage] = useState("")

  const handleVerifyHours = (eventId) => {
    setPastEvents(pastEvents.map((event) => (event.id === eventId ? { ...event, verified: true } : event)))
    console.log("Hours verified for event ID:", eventId)
    setVerificationMessage("Hours verified successfully!")

    // Clear message after 3 seconds
    setTimeout(() => {
      setVerificationMessage("")
    }, 3000)
  }

  const [certificateMessage, setCertificateMessage] = useState("")

  const handleDownloadCertificate = () => {
    console.log("Certificate downloaded")
    setCertificateMessage("Certificate downloaded to your device")

    // Clear message after 3 seconds
    setTimeout(() => {
      setCertificateMessage("")
    }, 3000)
  }

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
      {verificationMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 text-green-800 p-4 rounded-md shadow-md">
          {verificationMessage}
        </div>
      )}

      {certificateMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 text-green-800 p-4 rounded-md shadow-md">
          {certificateMessage}
        </div>
      )}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-8 md:grid-cols-3">
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="enhanced-card h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="dark:glow-text">My Profile</CardTitle>
                <CardDescription>Manage your volunteer profile</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Edit className="h-4 w-4 text-primary" />
                <span className="sr-only">Edit Profile</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4 avatar-enhanced">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold dark:glow-text">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="dark:bg-secondary/80">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Causes I Support</h3>
                  <div className="flex flex-wrap gap-1">
                    {user.causes.map((cause, index) => (
                      <Badge key={index} variant="outline" className="dark:border-primary/30">
                        {cause}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Impact Summary</h3>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold dark:glow-text">{user.hours}</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold dark:glow-text">{user.points}</div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold dark:glow-text">{user.events}</div>
                      <div className="text-xs text-muted-foreground">Events</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-sm font-medium">Next Milestone</h3>
                    <span className="text-sm">
                      {user.hours}/{user.nextMilestone} hours
                    </span>
                  </div>
                  <Progress value={(user.hours / user.nextMilestone) * 100} className="h-2 dark:bg-muted/30" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {user.nextMilestone - user.hours} more hours until your next certificate!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Section */}
        <div className="md:col-span-2 space-y-8">
          {/* Upcoming Events */}
          <motion.div variants={itemVariants}>
            <Card className="enhanced-card">
              <CardHeader>
                <CardTitle className="dark:glow-text">My Volunteer Schedule</CardTitle>
                <CardDescription>Your upcoming and past volunteer activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="mb-4 bg-muted/50 dark:bg-muted/20 p-1 rounded-lg">
                    <TabsTrigger value="upcoming" className="data-[state=active]:dark:glow-effect">
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="past" className="data-[state=active]:dark:glow-effect">
                      Past Events
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming">
                    {upcomingEvents.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingEvents.map((event) => (
                          <div
                            key={event.id}
                            className="flex justify-between p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200"
                          >
                            <div>
                              <h3 className="font-medium">{event.title}</h3>
                              <div className="text-sm text-muted-foreground space-y-1 mt-1">
                                <div className="flex items-center">
                                  <Calendar className="mr-2 h-4 w-4 text-primary" />
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
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="dark:border-primary/30 dark:hover:bg-primary/10"
                            >
                              View Details
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/20">
                          <Calendar className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground mb-4">You have no upcoming events</p>
                        <Link href="/events">
                          <Button className="btn-enhanced dark:glow-effect">Find Events</Button>
                        </Link>
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="past">
                    <div className="space-y-4">
                      {pastEvents.map((event) => (
                        <div
                          key={event.id}
                          className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200"
                        >
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <div className="text-sm text-muted-foreground mt-1">
                              <div className="flex items-center">
                                <Calendar className="mr-2 h-4 w-4 text-primary" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                <span>{event.hours} hours</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {event.verified ? (
                              <Badge
                                variant="success"
                                className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                              >
                                Verified
                              </Badge>
                            ) : (
                              <Button
                                size="sm"
                                onClick={() => handleVerifyHours(event.id)}
                                className="btn-enhanced dark:glow-effect"
                              >
                                Log Hours
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Messages */}
          <motion.div variants={itemVariants}>
            <Card className="enhanced-card">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="dark:glow-text">Messages</CardTitle>
                    <CardDescription>Your conversations with other volunteers</CardDescription>
                  </div>
                  <Link href="/dashboard/messages">
                    <Button variant="outline" size="sm" className="dark:border-primary/30 dark:hover:bg-primary/10">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Avatar className="avatar-enhanced">
                        <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          Are you coming to the park cleanup event tomorrow?
                        </p>
                      </div>
                    </div>
                    <Badge variant="info" className="dark:bg-blue-900/50 dark:text-blue-300">
                      New
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Avatar className="avatar-enhanced">
                        <AvatarImage src="/placeholder.svg" alt="Green Warriors Team" />
                        <AvatarFallback>GW</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Green Warriors Team</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          We need 5 more volunteers for Saturday's event.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">Yesterday</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* My Teams */}
          <motion.div variants={itemVariants}>
            <Card className="enhanced-card">
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="dark:glow-text">My Teams</CardTitle>
                    <CardDescription>Teams you're a part of</CardDescription>
                  </div>
                  <Link href="/teams">
                    <Button variant="outline" size="sm" className="dark:border-primary/30 dark:hover:bg-primary/10">
                      Find Teams
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {teams.length > 0 ? (
                  <div className="space-y-4">
                    {teams.map((team) => (
                      <div
                        key={team.id}
                        className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="avatar-enhanced">
                            <AvatarImage src={team.avatar} alt={team.name} />
                            <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{team.name}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Badge variant="outline" className="mr-2 dark:border-primary/30">
                                {team.role}
                              </Badge>
                              <Users className="mr-1 h-3 w-3 text-primary" />
                              <span>{team.members} members</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="dark:border-primary/30 dark:hover:bg-primary/10">
                          Team Page
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/20">
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground mb-4">You haven't joined any teams yet</p>
                    <Link href="/teams">
                      <Button className="btn-enhanced dark:glow-effect">Browse Teams</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <Card className="enhanced-card">
              <CardHeader>
                <CardTitle className="dark:glow-text">My Achievements</CardTitle>
                <CardDescription>Certificates and recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6 border rounded-lg bg-blue-50 dark:bg-blue-950/50 dark:border-blue-900/50">
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400 dark:glow-effect" />
                    <h3 className="text-lg font-bold mb-2 dark:glow-text">Certificate of Appreciation</h3>
                    <p className="text-sm text-muted-foreground mb-4">For completing 20+ hours of community service</p>
                    <Button onClick={handleDownloadCertificate} className="btn-enhanced dark:glow-effect">
                      Download Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

