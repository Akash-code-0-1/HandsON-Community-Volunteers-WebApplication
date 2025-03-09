"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Download, Share2 } from "lucide-react"

export default function CertificatesPage() {
  const certificateRef = useRef(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [actionMessage, setActionMessage] = useState("")

  // Mock certificates data
  const certificates = [
    {
      id: 1,
      title: "20 Hours of Community Service",
      date: "May 15, 2023",
      description: "Awarded for completing 20 hours of verified volunteer service",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Environmental Champion",
      date: "June 10, 2023",
      description: "Awarded for outstanding contribution to environmental conservation efforts",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Mock upcoming certificates
  const upcomingCertificates = [
    {
      id: 3,
      title: "50 Hours of Community Service",
      progress: 45,
      total: 50,
      description: "Complete 5 more hours to earn this certificate",
    },
    {
      id: 4,
      title: "Team Leadership Award",
      progress: 3,
      total: 5,
      description: "Lead 2 more team events to earn this certificate",
    },
  ]

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate)
    setActionMessage("")
  }

  const handleDownloadCertificate = () => {
    // In a real implementation, this would generate and download a PDF
    console.log("Certificate downloaded")
    setActionMessage("Certificate downloaded to your device")

    // Clear message after 3 seconds
    setTimeout(() => {
      setActionMessage("")
    }, 3000)
  }

  const handleShareCertificate = () => {
    // In a real implementation, this would open a share dialog
    console.log("Share options opened")
    setActionMessage("Share options opened")

    // Clear message after 3 seconds
    setTimeout(() => {
      setActionMessage("")
    }, 3000)
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Your Certificates</h1>
        <p className="text-muted-foreground mb-8">Recognition for your volunteer contributions</p>

        {actionMessage && (
          <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-md mb-4">{actionMessage}</div>
        )}

        {selectedCertificate ? (
          <div className="space-y-6">
            <Button variant="outline" onClick={() => setSelectedCertificate(null)} className="mb-4">
              Back to All Certificates
            </Button>

            <Card className="overflow-hidden">
              <div className="bg-blue-600 text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">HandsOn Certificate of Recognition</h2>
                <p>This certifies that</p>
              </div>

              <div
                ref={certificateRef}
                className="p-8 text-center space-y-6 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center bg-no-repeat"
              >
                <h3 className="text-3xl font-serif font-bold">Jane Smith</h3>
                <p className="text-xl">has successfully completed</p>
                <h4 className="text-2xl font-bold text-blue-600">{selectedCertificate.title}</h4>
                <p className="text-lg">Awarded on {selectedCertificate.date}</p>
                <div className="flex justify-center mt-4">
                  <Award className="h-16 w-16 text-blue-600" />
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    This certificate is awarded in recognition of the valuable contribution made to the community
                    through volunteer service with HandsOn.
                  </p>
                </div>
              </div>

              <CardFooter className="flex justify-center gap-4 p-6 bg-gray-50">
                <Button onClick={handleDownloadCertificate} className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
                <Button variant="outline" onClick={handleShareCertificate} className="flex items-center">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Certificate
                </Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Earned Certificates</h2>
              {certificates.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {certificates.map((certificate) => (
                    <Card key={certificate.id} className="card-hover-effect overflow-hidden">
                      <div className="aspect-video relative">
                        <img
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-bold text-lg">{certificate.title}</h3>
                            <p className="text-sm text-white/80">Awarded: {certificate.date}</p>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-500">{certificate.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button onClick={() => handleViewCertificate(certificate)} className="w-full">
                          View Certificate
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-gray-50 dark:bg-gray-900">
                  <CardContent className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">No Certificates Yet</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Complete volunteer hours to earn your first certificate.
                    </p>
                    <Button variant="outline">Log Volunteer Hours</Button>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Upcoming Certificates</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {upcomingCertificates.map((certificate) => (
                  <Card key={certificate.id}>
                    <CardHeader>
                      <CardTitle>{certificate.title}</CardTitle>
                      <CardDescription>{certificate.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">
                            {certificate.progress}/{certificate.total}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full animate-progress"
                            style={{ width: `${(certificate.progress / certificate.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

