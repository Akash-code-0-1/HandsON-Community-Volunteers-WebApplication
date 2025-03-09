"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function HelpRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

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
    {
      id: 3,
      title: "Community Garden Maintenance",
      description: "Need help with watering, weeding, and general maintenance of our community garden.",
      urgency: "Low",
      category: "Environment",
      postedBy: "Maria Garcia",
      responses: 2,
      offered: false,
    },
    {
      id: 4,
      title: "Food Pantry Volunteers",
      description: "Our local food pantry needs volunteers to help sort and distribute food donations.",
      urgency: "Medium",
      category: "Humanitarian",
      postedBy: "Robert Johnson",
      responses: 5,
      offered: false,
    },
  ])

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

  // Filter help requests based on search query
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
          <h1 className="text-3xl font-bold mb-2 dark:glow-text">Community Help Requests</h1>
          <p className="text-muted-foreground">Browse requests for help or post your own request</p>
        </div>
        <Link href="/help-requests/create">
          <Button className="btn-enhanced dark:glow-effect">
            <Plus className="mr-2 h-4 w-4" /> Post Help Request
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
            placeholder="Search help requests..."
            className="pl-10 max-w-md transition-all duration-300 focus:border-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </motion.div>

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
    </div>
  )
}

