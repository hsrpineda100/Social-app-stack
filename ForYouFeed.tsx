'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@db/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@db/components/ui/avatar'

type Post = {
  id: number
  username: string
  content: string
  likes: number
}

export default function ForYouFeed() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // In a real app, you'd fetch posts from an API
    setPosts([
      { id: 1, username: 'user1', content: 'Hello world!', likes: 10 },
      { id: 2, username: 'user2', content: 'This is a great app!', likes: 15 },
      { id: 3, username: 'user3', content: 'Check out my new photo!', likes: 20 },
    ])
  }, [])

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.username}`} />
                <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{post.username}</span>
            </div>
            <p>{post.content}</p>
            <div className="mt-2 text-sm text-gray-500">{post.likes} likes</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

