'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Image, Calendar, FileText, Briefcase } from 'lucide-react';
import { currentUser } from '@/lib/mockData';

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 mb-2">
      <div className="flex items-center space-x-2 mb-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={currentUser.avatar} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <button className="flex-1 text-left px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 text-sm text-gray-600 font-medium">
          Start a post
        </button>
      </div>
      <div className="flex items-center justify-around">
        <button className="flex items-center space-x-1 px-3 py-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
          <Image className="w-5 h-5 text-[#378FE9]" />
          <span className="text-sm font-medium">Media</span>
        </button>
        <button className="flex items-center space-x-1 px-3 py-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
          <Calendar className="w-5 h-5 text-[#C37D16]" />
          <span className="text-sm font-medium">Event</span>
        </button>
        <button className="flex items-center space-x-1 px-3 py-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
          <FileText className="w-5 h-5 text-[#E16745]" />
          <span className="text-sm font-medium">Article</span>
        </button>
      </div>
    </div>
  );
}
