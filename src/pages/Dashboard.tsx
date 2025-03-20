
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

// Sample data
const recentActivities = [
  { id: 1, type: 'practice', title: 'Completed Basic Signs Practice', time: '2 hours ago' },
  { id: 2, type: 'translation', title: 'Translated 5 phrases to ASL', time: '5 hours ago' },
  { id: 3, type: 'lesson', title: 'Completed Lesson 3: Everyday Phrases', time: '1 day ago' },
  { id: 4, type: 'community', title: 'Posted in ASL Community Forum', time: '2 days ago' },
];

const upcomingLessons = [
  { id: 1, title: 'Advanced Conversational Signs', time: 'Tomorrow, 10:00 AM', difficulty: 'Intermediate' },
  { id: 2, title: 'Professional Workplace Signs', time: 'Wednesday, 2:00 PM', difficulty: 'Advanced' },
  { id: 3, title: 'Medical Terminology in Sign Language', time: 'Friday, 11:00 AM', difficulty: 'Advanced' },
];

const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-border shadow-subtle">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
                <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-lg">
                  S
                </span>
                <span>Signa Connect</span>
              </Link>
              
              <div className="hidden md:flex ml-10 space-x-8">
                <Link to="/dashboard" className="text-accent text-sm font-medium">Dashboard</Link>
                <Link to="/learn" className="text-foreground/70 hover:text-accent text-sm font-medium">Learn</Link>
                <Link to="/translate" className="text-foreground/70 hover:text-accent text-sm font-medium">Translate</Link>
                <Link to="/community" className="text-foreground/70 hover:text-accent text-sm font-medium">Community</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-foreground/70 hover:text-accent hover:bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    U
                  </div>
                  <span className="hidden md:block text-sm font-medium">User</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-foreground/70">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-8 animate-fadeIn">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">{greeting}, User!</h1>
            <p className="text-foreground/70">Here's your sign language learning progress</p>
          </div>
          <Button to="/translate" size="sm">
            Start Translating
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Overall Progress</h3>
                <p className="text-3xl font-bold mt-2">68%</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="w-full h-2 bg-secondary rounded overflow-hidden">
              <div className="h-full bg-accent" style={{ width: "68%" }}></div>
            </div>
            <p className="text-foreground/70 text-sm mt-3">25 lessons completed out of 40</p>
          </div>
          
          <div className="glass-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Weekly Streak</h3>
                <p className="text-3xl font-bold mt-2">5 days</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${day <= 5 ? 'bg-accent text-white' : 'bg-secondary text-foreground/60'}`}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][day - 1]}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-foreground/70 text-sm mt-3">Keep going! 2 more days for perfect week</p>
          </div>
          
          <div className="glass-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Vocabulary</h3>
                <p className="text-3xl font-bold mt-2">215 words</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Beginner</span>
                <span className="text-sm text-foreground/70">100/100</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded overflow-hidden">
                <div className="h-full bg-accent" style={{ width: "100%" }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Intermediate</span>
                <span className="text-sm text-foreground/70">85/150</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded overflow-hidden">
                <div className="h-full bg-accent" style={{ width: "56%" }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Advanced</span>
                <span className="text-sm text-foreground/70">30/200</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded overflow-hidden">
                <div className="h-full bg-accent" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg border border-border shadow-subtle p-6">
              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full mr-4 flex items-center justify-center ${
                      activity.type === 'practice' ? 'bg-blue-100 text-blue-500' :
                      activity.type === 'translation' ? 'bg-purple-100 text-purple-500' :
                      activity.type === 'lesson' ? 'bg-green-100 text-green-500' :
                      'bg-orange-100 text-orange-500'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        {activity.type === 'practice' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        ) : activity.type === 'translation' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        ) : activity.type === 'lesson' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        )}
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-foreground/70">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" size="sm">View All Activity</Button>
              </div>
            </div>
          </div>
          
          {/* Upcoming Lessons */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Upcoming Lessons</h2>
            <div className="bg-white rounded-lg border border-border shadow-subtle p-6">
              <div className="space-y-4">
                {upcomingLessons.map((lesson) => (
                  <div key={lesson.id} className="p-4 rounded-lg border border-border hover:border-accent/50 hover:shadow-subtle transition-all">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{lesson.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary">
                        {lesson.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mt-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {lesson.time}
                    </p>
                    <div className="mt-3">
                      <Button variant="ghost" size="sm" className="w-full">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="outline" size="sm" className="w-full">
                  View All Lessons
                </Button>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-lg border border-border shadow-subtle p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Practice
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  Chat
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add New
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
