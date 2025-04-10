
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleCheck, Activity, Calendar, User, Settings, MessageCircle } from 'lucide-react';
import ChatInterface from './ChatInterface';

// Mock navigation items for dashboard visuals
const navItems = [
  { icon: Activity, label: 'Dashboard', active: true },
  { icon: MessageCircle, label: 'AI Chat' }
];

const DashboardSection = () => {
  const navigate = useNavigate();
  const [selectedNav, setSelectedNav] = useState('Dashboard');
  const [showChat, setShowChat] = useState(false);

  const handleNavClick = (label: string) => {
    setSelectedNav(label);
    if (label === 'AI Chat') {
      setShowChat(true);
    } else {
      setShowChat(false);
    }
  };

  return (
    <section id="dashboard" className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative">
          <div className="border border-border rounded-2xl overflow-hidden shadow-2xl bg-card/95 backdrop-blur-sm">
            {/* Dashboard Header */}
            <div className="p-4 border-b border-border bg-gradient-to-r from-hydrogen-blue/10 to-hydrogen-purple/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-purple-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="font-medium text-foreground/90">Hydrogen AI</span>
              </div>
              <div className="flex items-center gap-4">
                {navItems.map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => handleNavClick(item.label)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${(selectedNav === item.label) || (item.active && selectedNav === 'Dashboard')
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'}`}
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="p-6">
              <div className="bg-gradient-to-r from-hydrogen-blue to-hydrogen-purple rounded-xl p-6 text-white mb-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Welcome to Hydrogen AI</h3>
                <p className="text-white/90 text-lg">Your intelligent AI assistant is ready to help you. Start a conversation to explore its capabilities.</p>
              </div>
              {/* Smart Task Manager Section */}
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 text-white mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Smart Task Manager</h3>
                <p className="text-white/90 text-lg">Prioritize tasks with AI that understands your work patterns and deadlines.</p>
                <button 
                  className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  onClick={() => navigate('/smart-task-manager')}
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
              
              {/* Health & Wellness Analytics Section */}
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl p-6 text-white mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Health & Wellness Analytics</h3>
                <p className="text-white/90 text-lg">Track your wellbeing with insights on sleep, exercise, and nutrition.</p>
                <button 
                  className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
                  onClick={() => navigate('/health-analytics')}
                >Learn more</button>
              </div>
              
              {/* AI Chat Assistant Section */}
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl p-6 text-white mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">AI Chat Assistant</h3>
                <p className="text-white/90 text-lg">Get answers, suggestions, and help with a conversational AI interface.</p>
                <button 
                  className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
                  onClick={() => navigate('/ai-chat-assistant')}
                >Learn more</button>
              </div>
              
              {/* Personal Knowledge Hub Section */}
              <div className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-xl p-6 text-white mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Personal Knowledge Hub</h3>
                <p className="text-white/90 text-lg">Your second brain that organizes and retrieves information when you need it.</p>
                <button 
                  className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
                  onClick={() => navigate('/personal-knowledge-hub')}
                >Learn more</button>
              </div>
              
              {/* Life Analytics Dashboard Section */}
              <div className="bg-gradient-to-r from-gray-400 to-black rounded-xl p-6 text-white mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Life Analytics Dashboard</h3>
                <p className="text-white/90 text-lg">A comprehensive view of your life analytics in a single dashboard.</p>
                <button 
                  className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
                  onClick={() => navigate('/life-analytics-dashboard')}
                >Learn more</button>
              </div>
              <ChatInterface />
            </div>
          </div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-hydrogen-purple/15 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-hydrogen-blue/15 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
