"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Clock, Trophy, Users, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function LeaderboardPage() {
  // Mock data for individual leaderboard
  const individuals = [
    {
      id: 1,
      name: "Sarah Johnson",
      hours: 120,
      points: 600,
      events: 15,
      rank: 1,
      badges: ["100+ Hours", "Environmental Champion"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      hours: 95,
      points: 475,
      events: 12,
      rank: 2,
      badges: ["Team Leader", "Education Advocate"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Jessica Williams",
      hours: 82,
      points: 410,
      events: 10,
      rank: 3,
      badges: ["Consistent Volunteer"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Rodriguez",
      hours: 78,
      points: 390,
      events: 9,
      rank: 4,
      badges: ["Humanitarian Aid"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Emily Taylor",
      hours: 65,
      points: 325,
      events: 8,
      rank: 5,
      badges: ["New Volunteer"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Mock data for team leaderboard
  const teams = [
    {
      id: 1,
      name: "Green Warriors",
      hours: 450,
      points: 2250,
      events: 25,
      members: 15,
      rank: 1,
      category: "Environment",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Tech Tutors",
      hours: 380,
      points: 1900,
      events: 20,
      members: 12,
      rank: 2,
      category: "Education",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Food Rescue Squad",
      hours: 320,
      points: 1600,
      events: 18,
      members: 20,
      rank: 3,
      category: "Humanitarian",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Community Builders",
      hours: 280,
      points: 1400,
      events: 15,
      members: 10,
      rank: 4,
      category: "Community Development",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Health Heroes",
      hours: 250,
      points: 1250,
      events: 12,
      members: 8,
      rank: 5,
      category: "Healthcare",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

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
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2 dark:glow-text">Impact Leaderboard</h1>
        <p className="text-muted-foreground">Recognizing our most active volunteers and teams</p>
      </motion.div>

      <Tabs defaultValue="individuals" className="w-full">
        <TabsList className="mb-4 bg-muted/50 dark:bg-muted/20 p-1 rounded-lg">
          <TabsTrigger value="individuals" className="data-[state=active]:dark:glow-effect">
            Individual Volunteers
          </TabsTrigger>
          <TabsTrigger value="teams" className="data-[state=active]:dark:glow-effect">
            Teams
          </TabsTrigger>
        </TabsList>
        <TabsContent value="individuals">
          <Card className="enhanced-card">
            <CardHeader>
              <CardTitle className="dark:glow-text">Top Individual Contributors</CardTitle>
              <CardDescription>Based on verified volunteer hours and impact</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                {individuals.map((person) => (
                  <motion.div
                    key={person.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          person.rank === 1
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
                            : person.rank === 2
                              ? "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              : person.rank === 3
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                        } font-bold`}
                      >
                        {person.rank}
                      </div>
                      <Avatar className="avatar-enhanced">
                        <AvatarImage src={person.avatar} alt={person.name} />
                        <AvatarFallback>{person.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{person.name}</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {person.badges.map((badge, index) => (
                            <Badge key={index} variant="outline" className="text-xs dark:border-primary/30">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-bold">{person.hours}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-bold">{person.points}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Points</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-bold">{person.events}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Events</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teams">
          <Card className="enhanced-card">
            <CardHeader>
              <CardTitle className="dark:glow-text">Top Team Contributors</CardTitle>
              <CardDescription>Based on collective impact and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                {teams.map((team) => (
                  <motion.div
                    key={team.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 dark:hover:bg-muted/10 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          team.rank === 1
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
                            : team.rank === 2
                              ? "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              : team.rank === 3
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                        } font-bold`}
                      >
                        {team.rank}
                      </div>
                      <Avatar className="avatar-enhanced">
                        <AvatarImage src={team.avatar} alt={team.name} />
                        <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{team.name}</h3>
                        <div className="text-xs text-muted-foreground">{team.category}</div>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-bold">{team.hours}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span className="font-bold">{team.points}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Points</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-bold">{team.members}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Members</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

