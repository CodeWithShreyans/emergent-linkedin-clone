'use client'

import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ThumbsUp, MessageSquare, Share2, Send, MoreHorizontal, Globe } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-2">
      {/* Post Header */}
      <div className="p-3 flex items-start justify-between">
        <div className="flex items-start space-x-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm hover:text-[#0A66C2] hover:underline cursor-pointer">
              {post.author.name}
            </h3>
            <p className="text-xs text-gray-600">{post.author.headline}</p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <span>{post.timestamp}</span>
              <span className="mx-1">•</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        <button className="text-gray-600 hover:bg-gray-100 p-1 rounded">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-3 pb-2">
        <p className="text-sm text-gray-800 whitespace-pre-line">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="w-full">
          <img src={post.image} alt="Post content" className="w-full object-cover" />
        </div>
      )}

      {/* Engagement Stats */}
      <div className="px-3 py-2 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[#0A66C2] hover:underline">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#0A66C2] rounded-full flex items-center justify-center">
              <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
            </div>
          </div>
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="cursor-pointer hover:text-[#0A66C2] hover:underline">
            {post.comments} comments
          </span>
          <span className="cursor-pointer hover:text-[#0A66C2] hover:underline">
            {post.shares} shares
          </span>
        </div>
      </div>

      <Separator />

      {/* Action Buttons */}
      <div className="px-2 py-1 flex items-center justify-around">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 px-4 py-2 rounded hover:bg-gray-100 transition-colors ${
            liked ? 'text-[#0A66C2]' : 'text-gray-600'
          }`}
        >
          <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-[#0A66C2]' : ''}`} />
          <span className="text-sm font-medium">Like</span>
        </button>
        <button
          onClick={() => setShowCommentInput(!showCommentInput)}
          className="flex items-center space-x-1 px-4 py-2 rounded hover:bg-gray-100 text-gray-600 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm font-medium">Comment</span>
        </button>
        <button className="flex items-center space-x-1 px-4 py-2 rounded hover:bg-gray-100 text-gray-600 transition-colors">
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Share</span>
        </button>
        <button className="flex items-center space-x-1 px-4 py-2 rounded hover:bg-gray-100 text-gray-600 transition-colors">
          <Send className="w-5 h-5" />
          <span className="text-sm font-medium">Send</span>
        </button>
      </div>

      {/* Comment Input */}
      {showCommentInput && (
        <>
          <Separator />
          <div className="p-3 flex items-start space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
