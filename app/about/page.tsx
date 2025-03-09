import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About HandsOn</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Making social impact accessible to everyone</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                HandsOn is a community-driven social volunteering platform that connects individuals with meaningful
                volunteer opportunities in their communities. We believe that everyone has the power to make a positive
                impact, and our mission is to make it as easy as possible for people to find and participate in
                volunteer activities that match their interests and skills.
              </p>
              <p>
                Founded in 2023, HandsOn has grown from a small local initiative to a platform that serves communities
                across the country. Our goal is to create a world where volunteering is a natural part of everyday life,
                and where communities are strengthened through the collective efforts of their members.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
              <CardDescription>The principles that guide our work</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold">Community First</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of community and the impact that can be made when people come together for a
                    common cause.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We strive to make volunteering accessible to everyone, regardless of their background, abilities, or
                    experience.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">Transparency</h3>
                  <p className="text-muted-foreground">
                    We are committed to being transparent about our operations, impact, and the way we use data.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">Empowerment</h3>
                  <p className="text-muted-foreground">
                    We aim to empower individuals to take action and make a difference in their communities.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
              <CardDescription>The people behind HandsOn</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                HandsOn is powered by a dedicated team of individuals who are passionate about social impact and
                community service. Our team brings together expertise in technology, community organizing, and nonprofit
                management to create a platform that effectively connects volunteers with opportunities to make a
                difference.
              </p>
              <p>
                We are also supported by a network of community partners, including nonprofit organizations, schools,
                and local governments, who help us identify and create meaningful volunteer opportunities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Involved</CardTitle>
              <CardDescription>Join us in making a difference</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">There are many ways to get involved with HandsOn:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sign up as a volunteer and participate in events</li>
                <li>Create and lead your own volunteer initiatives</li>
                <li>Join or create a team for ongoing projects</li>
                <li>Partner with us as an organization to recruit volunteers</li>
                <li>Spread the word about HandsOn in your community</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

