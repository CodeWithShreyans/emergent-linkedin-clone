'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, MessageSquare, User, Search, Sparkles, X } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { currentUser } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/network', icon: Users, label: 'My Network' },
    { href: '/messages', icon: MessageSquare, label: 'Messaging' },
    { href: '/profile', icon: User, label: 'Me' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/modify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Modification request sent successfully', data);
        setPrompt('');
        setIsModalOpen(false);
      } else {
        console.error('Failed to send modification request:', data.error);
      }
    } catch (error) {
      console.error('Error sending modification request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo and Search */}
            <div className="flex items-center space-x-2 flex-1">
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

            {/* Modify With AI Button - Center */}
            <div className="flex items-center justify-center flex-1">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">Modify With AI</span>
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-1 flex-1 justify-end">
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Modify With AI</h2>
              </div>
              <p className="text-sm text-gray-600">
                Tell us what you'd like to modify in your LinkedIn clone
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  What do you wanna modify?
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Change the header color to green, add a new section to the profile..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  rows="4"
                  required
                />
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  variant="outline"
                  className="flex-1 rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !prompt.trim()}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
