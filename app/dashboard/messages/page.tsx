"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(0)
  const [messageInput, setMessageInput] = useState("")

  // Mock data for chats
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Are you coming to the park cleanup event tomorrow?",
      time: "10:30 AM",
      unread: true,
      messages: [
        {
          id: 1,
          sender: "Sarah Johnson",
          content: "Hi there! I'm organizing the park cleanup event tomorrow.",
          time: "10:15 AM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Sarah Johnson",
          content: "Are you coming to the park cleanup event tomorrow?",
          time: "10:30 AM",
          isMe: false,
        },
      ],
    },
    {
      id: 2,
      name: "Green Warriors Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We need 5 more volunteers for Saturday's event.",
      time: "Yesterday",
      unread: false,
      messages: [
        {
          id: 1,
          sender: "Michael Chen",
          content: "Hey team! Just a reminder about our meeting tomorrow.",
          time: "Yesterday, 3:45 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Jessica Williams",
          content: "I'll be there!",
          time: "Yesterday, 4:00 PM",
          isMe: false,
        },
        {
          id: 3,
          sender: "Michael Chen",
          content: "We need 5 more volunteers for Saturday's event.",
          time: "Yesterday, 4:15 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 3,
      name: "David Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for offering to help with my request!",
      time: "Monday",
      unread: false,
      messages: [
        {
          id: 1,
          sender: "David Rodriguez",
          content: "Hello! I posted a help request for tutoring.",
          time: "Monday, 2:30 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Me",
          content: "Hi David, I saw your request and I'd be happy to help with tutoring.",
          time: "Monday, 3:00 PM",
          isMe: true,
        },
        {
          id: 3,
          sender: "David Rodriguez",
          content: "Thanks for offering to help with my request!",
          time: "Monday, 3:15 PM",
          isMe: false,
        },
      ],
    },
  ])

  const handleSendMessage = () => {
    if (!messageInput.trim()) return

    const newMessage = {
      id: chats[activeChat].messages.length + 1,
      sender: "Me",
      content: messageInput,
      time: "Just now",
      isMe: true,
    }

    const updatedChats = [...chats]
    updatedChats[activeChat].messages.push(newMessage)
    updatedChats[activeChat].lastMessage = messageInput
    updatedChats[activeChat].time = "Just now"

    setChats(updatedChats)
    setMessageInput("")
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat List */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {chats.map((chat, index) => (
                <div
                  key={chat.id}
                  className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    activeChat === index ? "bg-gray-50 dark:bg-gray-800" : ""
                  }`}
                  onClick={() => setActiveChat(index)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={chat.avatar} alt={chat.name} />
                      <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {chat.unread && <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-600"></span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card className="md:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={chats[activeChat].avatar} alt={chats[activeChat].name} />
                <AvatarFallback>{chats[activeChat].name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <CardTitle>{chats[activeChat].name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chats[activeChat].messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isMe ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    {!message.isMe && <div className="font-medium text-sm mb-1">{message.sender}</div>}
                    <p>{message.content}</p>
                    <div className={`text-xs mt-1 ${message.isMe ? "text-blue-100" : "text-gray-500"}`}>
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

