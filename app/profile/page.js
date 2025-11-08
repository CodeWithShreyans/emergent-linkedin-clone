'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, GraduationCap, Edit, Camera, Plus } from 'lucide-react';
import { currentUser, posts } from '@/lib/mockData';
import PostCard from '@/components/PostCard';

export default function ProfilePage() {
  const userPosts = posts.filter(post => post.author.id === currentUser.id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Profile Card */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-2">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative">
          {currentUser.coverImage && (
            <img src={currentUser.coverImage} alt="Cover" className="w-full h-full object-cover" />
          )}
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100">
            <Camera className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="relative">
            <Avatar className="w-32 h-32 -mt-16 border-4 border-white mb-4">
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <button className="absolute left-24 top-0 bg-white p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <Camera className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{currentUser.name}</h1>
              <p className="text-gray-700 mt-1">{currentUser.headline}</p>
              <div className="flex items-center space-x-1 text-sm text-gray-600 mt-2">
                <MapPin className="w-4 h-4" />
                <span>{currentUser.location}</span>
                <span className="mx-2">•</span>
                <span className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">
                  {currentUser.connections} connections
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="rounded-full">
                <Edit className="w-4 h-4 mr-1" />
                Edit profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">About</h2>
          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-700">{currentUser.about}</p>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-6">
          {currentUser.experience.map((exp) => (
            <div key={exp.id} className="flex space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-700">{exp.company}</p>
                <p className="text-xs text-gray-600 mt-1">
                  {exp.startDate} - {exp.endDate} • {exp.location}
                </p>
                <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-6">
          {currentUser.education.map((edu) => (
            <div key={edu.id} className="flex space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-sm text-gray-700">{edu.degree}</p>
                <p className="text-xs text-gray-600 mt-1">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Activity</h2>
        <div className="space-y-2">
          {userPosts.length > 0 ? (
            userPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-sm text-gray-600">No posts yet</p>
          )}
        </div>
      </div>
    </div>
  )
}
