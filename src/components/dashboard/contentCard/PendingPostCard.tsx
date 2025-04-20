"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface PendingPostProps {
  author: string
  time: string
  content: {
    type: "text" | "image" | "audio"
    text?: string
    imageUrl?: string
    audioUrl?: string
  }
  onApprove: () => void
  onDecline: () => void
}

function PendingPostCard({ author, time, content, onApprove, onDecline }: PendingPostProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src="/dPerson.png" alt={author} width={32} height={32} />
          </div>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-xs text-gray-500">{time}</div>
          </div>
        </div>

        {content.type === "text" && <p className="text-sm text-gray-700 mb-4">{content.text}</p>}

        {content.type === "image" && (
          <div className="mb-4">
            <Image
              src={"/video.png"}
              alt="Post image"
              width={300}
              height={150}
              className="w-full h-auto rounded-md"
            />
          </div>
        )}

        {content.type === "audio" && (
          <div className="mb-4">
            <Image
              src="/audio.png"
              alt="Audio waveform"
              width={100}
              height={10}
              className="w-full h-12"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2 p-2 border-t">
        <Button variant="outline" size="sm" onClick={onDecline} className="rounded-full px-4">
          Decline
        </Button>
        <Button size="sm" onClick={onApprove} className="bg-green-600 hover:bg-green-700 rounded-full px-4">
          Approve
        </Button>
      </div>
    </div>
  )
}

export default function PendingPosts() {
  // Sample data to match the image
  const pendingPosts = [
    {
      id: 1,
      author: "Allison Mat",
      time: "12:40",
      content: {
        type: "text" as const,
        text: "He is a awesome people. We always to be as a to remember him. We miss him to much.",
      },
    },
    {
      id: 2,
      author: "Allison Mat",
      time: "12:40",
      content: {
        type: "text" as const,
        text: "He is a awesome people. We always to be as a to remember him. We miss him to much.",
      },
    },
    {
      id: 3,
      author: "Allison Mat",
      time: "12:40",
      content: {
        type: "image" as const,
        imageUrl: "/placeholder.svg?height=150&width=300",
      },
    },
    {
      id: 4,
      author: "Allison Mat",
      time: "12:40",
      content: {
        type: "image" as const,
        imageUrl: "/placeholder.svg?height=150&width=300",
      },
    },
    {
      id: 5,
      author: "Allison Mat",
      time: "12:40",
      content: {
        type: "audio" as const,
      },
    },
    {
      id: 6,
      author: "Allison Mat",
      time: "12:40",
      content: {
        type: "audio" as const,
      },
    },
  ]

  const handleApprove = (id: number) => {
    console.log(`Approved post ${id}`)
    // Add your approval logic here
  }

  const handleDecline = (id: number) => {
    console.log(`Declined post ${id}`)
    // Add your decline logic here
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Pending post</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pendingPosts.map((post) => (
          <PendingPostCard
            key={post.id}
            author={post.author}
            time={post.time}
            content={post.content}
            onApprove={() => handleApprove(post.id)}
            onDecline={() => handleDecline(post.id)}
          />
        ))}
      </div>
    </div>
  )
}
