"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function CreateTeamPage() {
  const router = useRouter()
  const [isPublic, setIsPublic] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Team created successfully!")
    setSuccess(true)

    // Redirect after showing success message briefly
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/teams")
    }, 1000)
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create a Volunteer Team</h1>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-4">
            Team created successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Team Details</CardTitle>
              <CardDescription>Create a team for long-term initiatives and collaborative projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Team Name</Label>
                <Input id="name" placeholder="e.g., Green Warriors" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your team's mission, goals, and the kind of initiatives you'll undertake"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="environment">Environment</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="humanitarian">Humanitarian</SelectItem>
                    <SelectItem value="animals">Animal Welfare</SelectItem>
                    <SelectItem value="health">Healthcare</SelectItem>
                    <SelectItem value="community">Community Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="public-membership">Public Membership</Label>
                  <p className="text-sm text-muted-foreground">
                    {isPublic ? "Anyone can join your team without approval" : "New members need approval to join"}
                  </p>
                </div>
                <Switch id="public-membership" checked={isPublic} onCheckedChange={setIsPublic} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input id="location" placeholder="e.g., New York City" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Team"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

