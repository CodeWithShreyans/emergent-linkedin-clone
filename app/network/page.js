'use client'

import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, X, Check } from 'lucide-react';
import { connections, connectionRequests, suggestions } from '@/lib/mockData';

export default function NetworkPage() {
  const [requests, setRequests] = useState(connectionRequests);
  const [suggestedUsers, setSuggestedUsers] = useState(suggestions);
  const [activeTab, setActiveTab] = useState('connections');

  const handleAccept = (userId) => {
    setRequests(requests.filter(req => req.id !== userId));
  };

  const handleReject = (userId) => {
    setRequests(requests.filter(req => req.id !== userId));
  };

  const handleConnect = (userId) => {
    setSuggestedUsers(suggestedUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-3">
            <h3 className="font-semibold text-sm mb-3">Manage my network</h3>
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('connections')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50 transition-colors ${
                  activeTab === 'connections' ? 'bg-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Connections</span>
                </div>
                <span className="text-sm text-gray-600">{connections.length}</span>
              </button>
              <button
                onClick={() => setActiveTab('requests')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50 transition-colors ${
                  activeTab === 'requests' ? 'bg-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Invitations</span>
                </div>
                <span className="text-sm text-gray-600">{requests.length}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9">
          {/* Connection Requests */}
          {activeTab === 'requests' && requests.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <h2 className="font-semibold text-lg mb-4">
                Invitations ({requests.length})
              </h2>
              <div className="space-y-4">
                {requests.map((request) => (
                  <div key={request.id} className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={request.avatar} />
                      <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm hover:text-[#0A66C2] hover:underline cursor-pointer">
                        {request.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">{request.headline}</p>
                      {request.message && (
                        <p className="text-xs text-gray-700 mt-2 bg-gray-50 p-2 rounded">
                          {request.message}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2">{request.requestDate}</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Button
                          onClick={() => handleReject(request.id)}
                          variant="outline"
                          size="sm"
                          className="rounded-full"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Ignore
                        </Button>
                        <Button
                          onClick={() => handleAccept(request.id)}
                          size="sm"
                          className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full"
                        >
                          <Check className="w-4 h-4 mr-1" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* People You May Know */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <h2 className="font-semibold text-lg mb-4">People you may know</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedUsers.map((user) => (
                <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-3">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-sm hover:text-[#0A66C2] hover:underline cursor-pointer mb-1">
                      {user.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{user.headline}</p>
                    <p className="text-xs text-gray-500 mb-3">{user.reason}</p>
                    <Button
                      onClick={() => handleConnect(user.id)}
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50"
                    >
                      <UserPlus className="w-4 h-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Connections */}
          {activeTab === 'connections' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="font-semibold text-lg mb-4">
                {connections.length} Connections
              </h2>
              <div className="space-y-4">
                {connections.map((connection) => (
                  <div key={connection.id} className="flex items-center space-x-3 pb-4 border-b last:border-b-0">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={connection.avatar} />
                      <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm hover:text-[#0A66C2] hover:underline cursor-pointer">
                        {connection.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">{connection.headline}</p>
                      <p className="text-xs text-gray-500 mt-1">Connected {connection.connectedDate}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Message
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
