'use client'

import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Send, Image, Smile, MoreHorizontal, Search } from 'lucide-react';
import { conversations, messages, currentUser } from '@/lib/mockData';

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');
  const [conversationMessages, setConversationMessages] = useState(
    messages[selectedConversation.id] || []
  );

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: `msg-${Date.now()}`,
        senderId: currentUser.id,
        content: messageText,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      };
      setConversationMessages([...conversationMessages, newMessage]);
      setMessageText('');
    }
  };

  const handleSelectConversation = (conv) => {
    setSelectedConversation(conv);
    setConversationMessages(messages[conv.id] || []);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" style={{ height: 'calc(100vh - 140px)' }}>
        <div className="grid grid-cols-12 h-full">
          {/* Conversations List */}
          <div className="col-span-12 md:col-span-4 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg mb-3">Messaging</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 bg-[#EEF3F8] rounded text-sm focus:outline-none focus:bg-white focus:border focus:border-gray-300"
                />
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => handleSelectConversation(conv)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedConversation.id === conv.id ? 'bg-gray-100' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={conv.user.avatar} />
                        <AvatarFallback>{conv.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conv.unread && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm truncate">{conv.user.name}</h3>
                        <span className="text-xs text-gray-500">{conv.timestamp}</span>
                      </div>
                      <p className={`text-xs truncate ${
                        conv.unread ? 'font-semibold text-gray-800' : 'text-gray-600'
                      }`}>
                        {conv.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-12 md:col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={selectedConversation.user.avatar} />
                  <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm">{selectedConversation.user.name}</h3>
                  <p className="text-xs text-gray-600">{selectedConversation.user.headline}</p>
                </div>
              </div>
              <button className="text-gray-600 hover:bg-gray-100 p-2 rounded">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversationMessages.map((msg) => {
                const isCurrentUser = msg.senderId === currentUser.id;
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isCurrentUser && (
                      <Avatar className="w-8 h-8 mr-2">
                        <AvatarImage src={selectedConversation.user.avatar} />
                        <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        isCurrentUser
                          ? 'bg-[#0A66C2] text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-end space-x-2">
                <div className="flex-1 border border-gray-300 rounded-lg focus-within:border-[#0A66C2] transition-colors">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Write a message..."
                    className="w-full px-4 py-2 text-sm focus:outline-none resize-none"
                    rows="3"
                  />
                  <div className="flex items-center justify-between px-4 pb-2">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-600 hover:text-gray-800">
                        <Image className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Smile className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white h-10 w-10 p-0 rounded-full"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
