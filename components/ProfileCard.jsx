'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { currentUser } from '@/lib/mockData';
import Link from 'next/link';

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Cover Image */}
      <div className="h-14 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      
      {/* Profile Info */}
      <div className="relative px-4 pb-3">
        <Avatar className="w-16 h-16 absolute -top-8 border-2 border-white">
          <AvatarImage src={currentUser.avatar} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="pt-10">
          <Link href="/profile" className="hover:underline">
            <h3 className="font-semibold text-sm">{currentUser.name}</h3>
          </Link>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{currentUser.headline}</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-600">Connections</span>
          <span className="font-semibold text-[#0A66C2]">{currentUser.connections}</span>
        </div>
        <Link href="/network" className="text-xs font-semibold text-gray-800 hover:text-[#0A66C2] mt-2 block">
          Grow your network
        </Link>
      </div>
      
      <div className="border-t border-gray-200 px-4 py-3 hover:bg-gray-50 cursor-pointer">
        <p className="text-xs text-gray-600">Access exclusive tools & insights</p>
        <div className="flex items-center mt-1">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-sm mr-1"></div>
          <span className="text-xs font-semibold">Try Premium for free</span>
        </div>
      </div>
    </div>
  );
}
