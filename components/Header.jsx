'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, MessageSquare, User, Search, BriefcaseIcon } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { currentUser } from '@/lib/mockData';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/network', icon: Users, label: 'My Network' },
    { href: '/messages', icon: MessageSquare, label: 'Messaging' },
    { href: '/profile', icon: User, label: 'Me' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Search */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="w-9 h-9 bg-[#0A66C2] rounded flex items-center justify-center text-white font-bold text-lg">
                in
              </div>
            </Link>
            <div className="hidden md:block relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-1.5 bg-[#EEF3F8] rounded text-sm w-64 focus:outline-none focus:bg-white focus:border focus:border-gray-300"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center px-3 py-2 hover:text-[#0A66C2] transition-colors ${
                    isActive ? 'text-[#0A66C2] border-b-2 border-[#0A66C2]' : 'text-gray-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs mt-0.5">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
