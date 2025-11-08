'use client'

import CreatePost from '@/components/CreatePost';
import PostCard from '@/components/PostCard';
import ProfileCard from '@/components/ProfileCard';
import { posts } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-12 lg:col-span-4">
          <ProfileCard />
        </div>

        {/* Main Feed */}
        <div className="col-span-12 lg:col-span-5">
          <CreatePost />
          <div className="space-y-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <h3 className="font-semibold text-sm mb-3">LinkedIn News</h3>
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <h4 className="text-sm font-semibold">Tech layoffs continue</h4>
                <p className="text-xs text-gray-600 mt-1">2d ago • 12,453 readers</p>
              </div>
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <h4 className="text-sm font-semibold">AI adoption accelerates</h4>
                <p className="text-xs text-gray-600 mt-1">3d ago • 8,234 readers</p>
              </div>
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <h4 className="text-sm font-semibold">Remote work debate</h4>
                <p className="text-xs text-gray-600 mt-1">4d ago • 15,678 readers</p>
              </div>
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <h4 className="text-sm font-semibold">Startup funding trends</h4>
                <p className="text-xs text-gray-600 mt-1">5d ago • 6,891 readers</p>
              </div>
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <h4 className="text-sm font-semibold">Green tech investments</h4>
                <p className="text-xs text-gray-600 mt-1">1w ago • 9,432 readers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
