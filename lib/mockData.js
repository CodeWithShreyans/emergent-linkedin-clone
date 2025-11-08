// Mock data for LinkedIn clone

export const currentUser = {
  id: 'user-1',
  name: 'John Doe',
  headline: 'Senior Software Engineer at Tech Corp | Full Stack Developer',
  avatar: 'https://i.pravatar.cc/150?img=12',
  coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
  location: 'San Francisco, CA',
  connections: 500,
  about: 'Passionate software engineer with 8+ years of experience building scalable web applications. Love working with modern technologies and solving complex problems.',
  experience: [
    {
      id: 'exp-1',
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: 'Leading development of cloud-based solutions'
    },
    {
      id: 'exp-2',
      title: 'Software Engineer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      startDate: 'Jun 2017',
      endDate: 'Dec 2019',
      description: 'Built and maintained web applications'
    }
  ],
  education: [
    {
      id: 'edu-1',
      school: 'Stanford University',
      degree: 'Master of Science - MS, Computer Science',
      startDate: '2015',
      endDate: '2017'
    },
    {
      id: 'edu-2',
      school: 'UC Berkeley',
      degree: 'Bachelor of Science - BS, Computer Science',
      startDate: '2011',
      endDate: '2015'
    }
  ]
};

export const users = [
  {
    id: 'user-2',
    name: 'Sarah Johnson',
    headline: 'Product Manager at Innovation Labs | AI & ML Enthusiast',
    avatar: 'https://i.pravatar.cc/150?img=5',
    location: 'New York, NY',
    connections: 850,
    mutualConnections: 45
  },
  {
    id: 'user-3',
    name: 'Michael Chen',
    headline: 'UX Designer | Creating delightful user experiences',
    avatar: 'https://i.pravatar.cc/150?img=33',
    location: 'Seattle, WA',
    connections: 320,
    mutualConnections: 23
  },
  {
    id: 'user-4',
    name: 'Emily Rodriguez',
    headline: 'Data Scientist at DataCo | Machine Learning Expert',
    avatar: 'https://i.pravatar.cc/150?img=9',
    location: 'Austin, TX',
    connections: 680,
    mutualConnections: 67
  },
  {
    id: 'user-5',
    name: 'David Kim',
    headline: 'DevOps Engineer | Cloud Architecture Specialist',
    avatar: 'https://i.pravatar.cc/150?img=14',
    location: 'Los Angeles, CA',
    connections: 420,
    mutualConnections: 12
  },
  {
    id: 'user-6',
    name: 'Jessica Martinez',
    headline: 'Marketing Director | Digital Strategy & Brand Development',
    avatar: 'https://i.pravatar.cc/150?img=47',
    location: 'Chicago, IL',
    connections: 1200,
    mutualConnections: 89
  },
  {
    id: 'user-7',
    name: 'Alex Thompson',
    headline: 'Frontend Developer | React & Vue.js Specialist',
    avatar: 'https://i.pravatar.cc/150?img=52',
    location: 'Boston, MA',
    connections: 290,
    mutualConnections: 34
  },
  {
    id: 'user-8',
    name: 'Lisa Wang',
    headline: 'HR Manager | Talent Acquisition & People Operations',
    avatar: 'https://i.pravatar.cc/150?img=26',
    location: 'San Diego, CA',
    connections: 950,
    mutualConnections: 56
  },
  {
    id: 'user-9',
    name: 'Robert Davis',
    headline: 'Backend Engineer | Node.js & Python Expert',
    avatar: 'https://i.pravatar.cc/150?img=60',
    location: 'Denver, CO',
    connections: 380,
    mutualConnections: 28
  }
];

export const posts = [
  {
    id: 'post-1',
    author: users[0],
    content: 'Excited to announce that our team just launched a new AI-powered feature that reduces processing time by 60%! 🚀 Big shoutout to the amazing engineering team for making this happen. #AI #Innovation #ProductLaunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    timestamp: '2h',
    likes: 234,
    comments: 45,
    shares: 12,
    liked: false
  },
  {
    id: 'post-2',
    author: users[1],
    content: 'Just finished redesigning our mobile app from scratch. The key takeaway? Always put user research first. Here are 5 lessons I learned along the way... 🎨✨',
    timestamp: '4h',
    likes: 189,
    comments: 23,
    shares: 8,
    liked: true
  },
  {
    id: 'post-3',
    author: users[2],
    content: 'Machine learning doesn\'t have to be complicated. I wrote a beginner-friendly guide on building your first ML model. Link in the comments! 📊 #MachineLearning #DataScience',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    timestamp: '6h',
    likes: 456,
    comments: 67,
    shares: 34,
    liked: false
  },
  {
    id: 'post-4',
    author: users[3],
    content: 'Kubernetes vs Docker Swarm in 2025: My team\'s experience migrating to k8s and the lessons we learned. Thread 🧵',
    timestamp: '8h',
    likes: 312,
    comments: 89,
    shares: 45,
    liked: true
  },
  {
    id: 'post-5',
    author: users[4],
    content: 'Content marketing isn\'t dead - it\'s just evolving. Here\'s how we increased our organic reach by 200% in 6 months using these 3 strategies... 📈',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    timestamp: '1d',
    likes: 567,
    comments: 134,
    shares: 78,
    liked: false
  },
  {
    id: 'post-6',
    author: users[5],
    content: 'React 19 Server Components are a game changer! Here\'s what you need to know before upgrading your Next.js app. 🔥 #React #WebDev',
    timestamp: '1d',
    likes: 423,
    comments: 91,
    shares: 56,
    liked: false
  },
  {
    id: 'post-7',
    author: users[6],
    content: 'Hiring is tough in 2025, but these 5 interview questions helped us find amazing talent. What\'s your go-to interview question? 💼',
    timestamp: '2d',
    likes: 289,
    comments: 156,
    shares: 23,
    liked: true
  },
  {
    id: 'post-8',
    author: users[7],
    content: 'Built a real-time chat application using WebSockets and Redis. Performance is incredible! Here\'s the architecture breakdown... ⚡',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
    timestamp: '2d',
    likes: 378,
    comments: 45,
    shares: 67,
    liked: false
  }
];

export const connections = [
  {
    ...users[0],
    connectedDate: '2 years ago'
  },
  {
    ...users[1],
    connectedDate: '1 year ago'
  },
  {
    ...users[2],
    connectedDate: '6 months ago'
  },
  {
    ...users[3],
    connectedDate: '3 months ago'
  },
  {
    ...users[4],
    connectedDate: '1 month ago'
  }
];

export const connectionRequests = [
  {
    ...users[5],
    requestDate: '2 days ago',
    message: 'Hi John, I\'d love to connect with you. I\'m also working in the tech industry and would love to exchange ideas!'
  },
  {
    ...users[6],
    requestDate: '1 week ago',
    message: 'Hello! We have many mutual connections. Would love to connect!'
  },
  {
    ...users[7],
    requestDate: '2 weeks ago',
    message: null
  }
];

export const suggestions = [
  {
    ...users[5],
    reason: 'Works at Innovation Labs'
  },
  {
    ...users[6],
    reason: '89 mutual connections'
  },
  {
    ...users[7],
    reason: 'Also studied at Stanford University'
  }
];

export const conversations = [
  {
    id: 'conv-1',
    user: users[0],
    lastMessage: 'Thanks for sharing that article! Really helpful insights.',
    timestamp: '10m ago',
    unread: true
  },
  {
    id: 'conv-2',
    user: users[1],
    lastMessage: 'Let me know when you\'re free for a quick call',
    timestamp: '1h ago',
    unread: false
  },
  {
    id: 'conv-3',
    user: users[2],
    lastMessage: 'I\'d love to collaborate on that project!',
    timestamp: '3h ago',
    unread: true
  },
  {
    id: 'conv-4',
    user: users[3],
    lastMessage: 'Great meeting you at the conference!',
    timestamp: '1d ago',
    unread: false
  },
  {
    id: 'conv-5',
    user: users[4],
    lastMessage: 'Have you checked out the new React docs?',
    timestamp: '2d ago',
    unread: false
  }
];

export const messages = {
  'conv-1': [
    {
      id: 'msg-1',
      senderId: 'user-2',
      content: 'Hey John! Did you see the article I shared about AI trends?',
      timestamp: '2:30 PM'
    },
    {
      id: 'msg-2',
      senderId: 'user-1',
      content: 'Yes! Just read it. Really insightful stuff about the future of ML.',
      timestamp: '2:45 PM'
    },
    {
      id: 'msg-3',
      senderId: 'user-2',
      content: 'Right? I think we could apply some of those concepts to our current project.',
      timestamp: '2:47 PM'
    },
    {
      id: 'msg-4',
      senderId: 'user-1',
      content: 'Absolutely. Let\'s schedule a meeting next week to discuss this further.',
      timestamp: '2:50 PM'
    },
    {
      id: 'msg-5',
      senderId: 'user-2',
      content: 'Thanks for sharing that article! Really helpful insights.',
      timestamp: '3:15 PM'
    }
  ],
  'conv-2': [
    {
      id: 'msg-6',
      senderId: 'user-3',
      content: 'Hi! I wanted to get your thoughts on the new design system.',
      timestamp: '11:00 AM'
    },
    {
      id: 'msg-7',
      senderId: 'user-1',
      content: 'I think it looks great! The component library is very comprehensive.',
      timestamp: '11:30 AM'
    },
    {
      id: 'msg-8',
      senderId: 'user-3',
      content: 'Let me know when you\'re free for a quick call',
      timestamp: '12:00 PM'
    }
  ],
  'conv-3': [
    {
      id: 'msg-9',
      senderId: 'user-4',
      content: 'Your recent post about data science was amazing!',
      timestamp: '9:00 AM'
    },
    {
      id: 'msg-10',
      senderId: 'user-1',
      content: 'Thank you! Glad you found it helpful.',
      timestamp: '9:30 AM'
    },
    {
      id: 'msg-11',
      senderId: 'user-4',
      content: 'I\'d love to collaborate on that project!',
      timestamp: '10:00 AM'
    }
  ]
};
