"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, X, Bell, ChevronDown, LogOut, User, Settings, Award, Clock, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // For demo purposes
  const [isScrolled, setIsScrolled] = useState(false)
  const [notifications, setNotifications] = useState(3) // Mock notification count
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const notificationRef = useRef(null)
  const profileRef = useRef(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Toggle login state for demo purposes
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    setShowProfileMenu(false)
  }

  // Toggle notification panel
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    if (showProfileMenu) setShowProfileMenu(false)
  }

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu)
    if (showNotifications) setShowNotifications(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/80"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <HeartIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HandsOn</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/help-requests" className="text-sm font-medium hover:text-primary transition-colors">
              Help Requests
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary transition-colors">
              Teams
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
              Leaderboard
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {isLoggedIn ? (
            <>
              {/* Notification Button */}
              <div className="relative" ref={notificationRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative focus-ring"
                  onClick={toggleNotifications}
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white badge-pulse">
                      {notifications}
                    </Badge>
                  )}
                </Button>

                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-card border border-border scale-in-animation">
                    <div className="p-3 border-b border-border">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      <div className="p-3 hover:bg-muted/50 cursor-pointer border-b border-border">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">Your hours have been verified</div>
                          <div className="text-sm text-muted-foreground">
                            Your 3 hours for Community Park Cleanup have been verified.
                          </div>
                          <div className="text-xs text-muted-foreground">2 hours ago</div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-muted/50 cursor-pointer border-b border-border">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">New team invitation</div>
                          <div className="text-sm text-muted-foreground">
                            You've been invited to join "Green Warriors" team.
                          </div>
                          <div className="text-xs text-muted-foreground">Yesterday</div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-muted/50 cursor-pointer">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">Certificate earned!</div>
                          <div className="text-sm text-muted-foreground">
                            You've earned the "20 Hours of Service" certificate.
                          </div>
                          <div className="text-xs text-muted-foreground">3 days ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border-t border-border">
                      <Button variant="ghost" className="w-full text-primary text-sm">
                        View all notifications
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Button */}
              <div className="relative" ref={profileRef}>
                <Button variant="ghost" className="flex items-center gap-2 focus-ring" onClick={toggleProfileMenu}>
                  <Avatar className="h-8 w-8 avatar-enhanced">
                    <AvatarImage src="https://i.pravatar.cc/150?u=jane" alt="User" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm">Jane Smith</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`}
                  />
                </Button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-card border border-border scale-in-animation">
                    <div className="p-3 border-b border-border">
                      <h3 className="font-semibold">My Account</h3>
                    </div>
                    <div className="py-1">
                      <Link href="/dashboard">
                        <div className="flex items-center px-4 py-2 text-sm hover:bg-muted/50 cursor-pointer">
                          <User className="mr-2 h-4 w-4 text-primary" />
                          <span>Dashboard</span>
                        </div>
                      </Link>
                      <Link href="/dashboard/messages">
                        <div className="flex items-center px-4 py-2 text-sm hover:bg-muted/50 cursor-pointer">
                          <MessageSquare className="mr-2 h-4 w-4 text-primary" />
                          <span>Messages</span>
                        </div>
                      </Link>
                      <Link href="/profile/edit">
                        <div className="flex items-center px-4 py-2 text-sm hover:bg-muted/50 cursor-pointer">
                          <Settings className="mr-2 h-4 w-4 text-primary" />
                          <span>Edit Profile</span>
                        </div>
                      </Link>
                      <Link href="/dashboard/certificates">
                        <div className="flex items-center px-4 py-2 text-sm hover:bg-muted/50 cursor-pointer">
                          <Award className="mr-2 h-4 w-4 text-primary" />
                          <span>Certificates</span>
                        </div>
                      </Link>
                      <Link href="/dashboard/log-hours">
                        <div className="flex items-center px-4 py-2 text-sm hover:bg-muted/50 cursor-pointer">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          <span>Log Hours</span>
                        </div>
                      </Link>
                    </div>
                    <div className="border-t border-border py-1">
                      <div
                        className="flex items-center px-4 py-2 text-sm hover:bg-muted/50 cursor-pointer text-red-500 dark:text-red-400"
                        onClick={toggleLogin}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={toggleLogin} className="hover:bg-primary/10">
                Log In
              </Button>
              <Link href="/register">
                <Button size="sm" className="btn-enhanced">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex items-center justify-center rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/events"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/help-requests"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Help Requests
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Teams
            </Link>
            <Link
              href="/leaderboard"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button className="w-full btn-enhanced" onClick={() => setIsMenuOpen(false)}>
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setIsLoggedIn(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setIsLoggedIn(true)
                      setIsMenuOpen(false)
                    }}
                  >
                    Log In
                  </Button>
                  <Link href="/register">
                    <Button className="w-full btn-enhanced" onClick={() => setIsMenuOpen(false)}>
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

