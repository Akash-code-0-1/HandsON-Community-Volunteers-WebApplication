import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Heart, Users, Award, MapPin, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Join the movement</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:glow-text">
                  Make an <span className="gradient-text">Impact</span> in Your Community
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join HandsOn - the platform that connects volunteers with meaningful social impact opportunities.
                  Create change together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-all btn-enhanced dark:glow-effect">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5 dark:border-primary/30 dark:hover:bg-primary/10"
                  >
                    Explore Events
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  <span>5,000+ Volunteers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  <span>1,200+ Events</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <div className="absolute -z-10 w-3/4 h-3/4 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-30"></div>
              <img
                alt="Volunteers working together"
                className="animate-float aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl dark:glow-effect"
                height="310"
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1100&auto=format&fit=crop"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-background dark:bg-gray-950 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary dark:glow-text">5K+</h3>
              <p className="text-sm text-muted-foreground">Active Volunteers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary dark:glow-text">1.2K+</h3>
              <p className="text-sm text-muted-foreground">Events Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary dark:glow-text">50K+</h3>
              <p className="text-sm text-muted-foreground">Volunteer Hours</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary dark:glow-text">120+</h3>
              <p className="text-sm text-muted-foreground">Communities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 section-bg-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:glow-text">How HandsOn Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform makes volunteering easy, rewarding, and impactful.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <div className="grid gap-1 card-hover-effect enhanced-card p-6">
                <Calendar className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Discover & Join Events</h3>
                <p className="text-muted-foreground">
                  Browse and join volunteer events in your community with one-click registration.
                </p>
              </div>
              <div className="grid gap-1 card-hover-effect enhanced-card p-6">
                <Heart className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Community Help Requests</h3>
                <p className="text-muted-foreground">Post requests for help or offer assistance to those in need.</p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1 card-hover-effect enhanced-card p-6">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Form Teams</h3>
                <p className="text-muted-foreground">
                  Create or join teams for long-term initiatives and collaborative projects.
                </p>
              </div>
              <div className="grid gap-1 card-hover-effect enhanced-card p-6">
                <Award className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Track Your Impact</h3>
                <p className="text-muted-foreground">
                  Log volunteer hours, earn points, and get recognition for your contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="w-full py-12 md:py-24 bg-muted/50 dark:bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:glow-text">Upcoming Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join these upcoming volunteer opportunities in your community
              </p>
            </div>
          </div>

          <div className="card-grid">
            {/* Event Card 1 */}
            <div className="card-hover-effect enhanced-card overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=400&auto=format&fit=crop"
                  alt="Community Park Cleanup"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                  Environment
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Park Cleanup</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Join us for a day of cleaning up Central Park to make it more enjoyable for everyone.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>09:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <span>Central Park, New York</span>
                  </div>
                </div>
                <Link href="/events">
                  <Button className="w-full btn-enhanced">View Details</Button>
                </Link>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="card-hover-effect enhanced-card overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=400&auto=format&fit=crop"
                  alt="Food Drive for Local Shelter"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Humanitarian
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Food Drive for Local Shelter</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Help collect and distribute food to those in need at our local homeless shelter.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span>June 20, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>10:00 AM - 02:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <span>Community Center, Brooklyn</span>
                  </div>
                </div>
                <Link href="/events">
                  <Button className="w-full btn-enhanced">View Details</Button>
                </Link>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="card-hover-effect enhanced-card overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=400&auto=format&fit=crop"
                  alt="Teach Basic Computer Skills"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Education
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Teach Basic Computer Skills</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Volunteer to teach basic computer skills to seniors at the community center.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span>June 25, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>01:00 PM - 03:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <span>Senior Center, Queens</span>
                  </div>
                </div>
                <Link href="/events">
                  <Button className="w-full btn-enhanced">View Details</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button variant="outline" size="lg" className="group dark:border-primary/30 dark:hover:bg-primary/10">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background section-bg-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:glow-text">
                What Our Volunteers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from people who have made an impact with HandsOn
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="card-hover-effect enhanced-card p-6">
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <img
                    src="https://i.pravatar.cc/150?u=sarah"
                    alt="Sarah Johnson"
                    className="rounded-full w-12 h-12 object-cover avatar-enhanced"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Environmental Volunteer</p>
                </div>
              </div>
              <p className="text-foreground italic">
                "HandsOn has transformed how I contribute to my community. The platform makes it so easy to find events
                that match my interests and schedule. I've met amazing people and made a real difference."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card-hover-effect enhanced-card p-6">
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <img
                    src="https://i.pravatar.cc/150?u=michael"
                    alt="Michael Chen"
                    className="rounded-full w-12 h-12 object-cover avatar-enhanced"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Team Leader</p>
                </div>
              </div>
              <p className="text-foreground italic">
                "As a team leader, I appreciate how HandsOn streamlines volunteer management. The tracking features and
                team dashboard help us stay organized and motivated. We've accomplished so much more together."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card-hover-effect enhanced-card p-6">
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <img
                    src="https://i.pravatar.cc/150?u=jessica"
                    alt="Jessica Williams"
                    className="rounded-full w-12 h-12 object-cover avatar-enhanced"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Jessica Williams</h4>
                  <p className="text-sm text-muted-foreground">Nonprofit Coordinator</p>
                </div>
              </div>
              <p className="text-foreground italic">
                "HandsOn has been a game-changer for our nonprofit. We can easily post events and help requests, and the
                verification system ensures accountability. Our volunteer engagement has increased by 200%!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 dark:glow-text">
                Ready to Make a Difference?
              </h2>
              <p className="text-primary-foreground/80 md:text-xl mb-6">
                Join thousands of volunteers who are creating positive change in their communities. Start your
                volunteering journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 btn-enhanced">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=400&auto=format&fit=crop"
                alt="Volunteers making a difference"
                className="rounded-lg shadow-2xl dark:glow-effect"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

