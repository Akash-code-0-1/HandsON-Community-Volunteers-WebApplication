"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Upload } from "lucide-react"

export default function EditProfilePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  // Mock user data
  const [formData, setFormData] = useState({
    name: "Jane Smith",
    email: "jane.smith@example.com",
    bio: "Passionate about environmental conservation and education. I enjoy volunteering in my community and making a positive impact.",
    location: "New York, NY",
    phone: "(555) 123-4567",
    avatar: "/placeholder.svg?height=100&width=100",
    skills: ["Teaching", "Organizing", "First Aid"],
    causes: ["Education", "Environment", "Elderly Care"],
    newSkill: "",
    newCause: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleAddSkill = () => {
    if (formData.newSkill.trim() && !formData.skills.includes(formData.newSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, prev.newSkill.trim()],
        newSkill: "",
      }))
    }
  }

  const handleRemoveSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }))
  }

  const handleAddCause = () => {
    if (formData.newCause.trim() && !formData.causes.includes(formData.newCause.trim())) {
      setFormData((prev) => ({
        ...prev,
        causes: [...prev.causes, prev.newCause.trim()],
        newCause: "",
      }))
    }
  }

  const handleRemoveCause = (cause) => {
    setFormData((prev) => ({
      ...prev,
      causes: prev.causes.filter((c) => c !== cause),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Profile updated successfully!")
    setSuccess(true)

    // Redirect after showing success message briefly
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Edit Your Profile</h1>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-4">
            Profile updated successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={formData.avatar} alt={formData.name} />
                  <AvatarFallback>{formData.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Upload className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={formData.location} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="min-h-[100px]"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {skill}</span>
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    id="newSkill"
                    value={formData.newSkill}
                    onChange={handleChange}
                    placeholder="Add a skill..."
                    className="flex-1"
                  />
                  <Button type="button" onClick={handleAddSkill} size="sm">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add Skill</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Causes You Support</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.causes.map((cause) => (
                    <Badge key={cause} variant="outline" className="flex items-center gap-1">
                      {cause}
                      <button
                        type="button"
                        onClick={() => handleRemoveCause(cause)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {cause}</span>
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    id="newCause"
                    value={formData.newCause}
                    onChange={handleChange}
                    placeholder="Add a cause..."
                    className="flex-1"
                  />
                  <Button type="button" onClick={handleAddCause} size="sm">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add Cause</span>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

