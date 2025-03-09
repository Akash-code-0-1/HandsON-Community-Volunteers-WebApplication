"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Users, Search, CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Mock data for teams
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Green Warriors",
      description: "Dedicated to environmental conservation and sustainability projects.",
      members: 15,
      events: 8,
      isPublic: true,
      category: "Environment",
      image: "/placeholder.svg?height=100&width=100",
      joined: false,
    },
    {
      id: 2,
      name: "Tech Tutors",
      description: "Teaching technology skills to underserved communities.",
      members: 12,
      events: 5,
      isPublic: true,
      category: "Education",
      image: "/placeholder.svg?height=100&width=100",
      joined: false,
    },
    {
      id: 3,
      name: "Food Rescue Squad",
      description: "Collecting and distributing surplus food to those in need.",
      members: 20,
      events: 12,
      isPublic: false,
      category: "Humanitarian",
      image: "/placeholder.svg?height=100&width=100",
      joined: false,
    },
  ])

  const handleJoinTeam = (teamId) => {
    setTeams(
      teams.map((team) =>
        team.id === teamId
          ? { ...team, members: team.joined ? team.members - 1 : team.members + 1, joined: !team.joined }
          : team,
      ),
    )

    const team = teams.find((t) => t.id === teamId)
    if (team) {
      if (!team.joined) {
        if (team.isPublic) {
          console.log(`Successfully joined team: ${team.name}`)
        } else {
          console.log(`Request sent to join team: ${team.name}`)
        }
      } else {
        console.log(`Left team: ${team.name}`)
      }
    }
  }

  // Filter teams based on search query
  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.category.toLowerCase().includes(searchQuery.toLowerCase()),
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
          <h1 className="text-3xl font-bold mb-2 dark:glow-text">Volunteer Teams</h1>
          <p className="text-muted-foreground">Join existing teams or create your own for long-term initiatives</p>
        </div>
        <Link href="/teams/create">
          <Button className="btn-enhanced dark:glow-effect">
            <Plus className="mr-2 h-4 w-4" /> Create Team
          </Button>
        </Link>
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
            placeholder="Search teams by name or category..."
            className="pl-10 max-w-md transition-all duration-300 focus:border-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </motion.div>

      {filteredTeams.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredTeams.map((team) => (
            <motion.div key={team.id} variants={itemVariants}>
              <Card className="enhanced-card card-hover-effect h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Avatar className="h-12 w-12 avatar-enhanced">
                      <AvatarImage src={team.image} alt={team.name} />
                      <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <Badge
                      variant={team.isPublic ? "secondary" : "outline"}
                      className={team.isPublic ? "dark:bg-secondary/80" : "dark:border-primary/30"}
                    >
                      {team.isPublic ? "Public" : "Private"}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium text-primary mb-1 dark:glow-text">{team.category}</div>
                  <CardTitle>{team.name}</CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-primary" />
                      <span>{team.members} members</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                      <span>{team.events} events organized</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full btn-enhanced ${team.joined ? "dark:border-primary/30" : "dark:glow-effect"}`}
                    variant={team.joined ? "outline" : "default"}
                    onClick={() => handleJoinTeam(team.id)}
                  >
                    {team.joined ? "Leave Team" : team.isPublic ? "Join Team" : "Request to Join"}
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
          <p className="text-muted-foreground mb-4">No teams found matching your search</p>
          <Link href="/teams/create">
            <Button className="btn-enhanced dark:glow-effect">Create a New Team</Button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

