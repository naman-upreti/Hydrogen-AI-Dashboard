import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import CommandBar from './CommandBar';
import TaskManagerCard from './TaskManagerCard';
import HealthAnalyticsCard from './HealthAnalyticsCard';
import KnowledgeHubCard from './KnowledgeHubCard';
import LifeAnalyticsCard from './LifeAnalyticsCard';
import AIChatAssistantCard from './AIChatAssistantCard';
import ChatInterface from '../ChatInterface';
import { DashboardCard } from '../ui/cards/DashboardCard';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

const EnhancedDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Dashboard Overview</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Info size={18} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is your main dashboard overview</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <DashboardCard 
              title="Welcome to Hydrogen AI"
              gradient="from-hydrogen-blue to-hydrogen-purple"
            >
              <p className="text-white/90 text-lg">Your intelligent AI assistant is ready to help you. Start a conversation to explore its capabilities.</p>
            </DashboardCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="col-span-1">
                <TaskManagerCard />
              </div>
              <div className="col-span-1">
                <HealthAnalyticsCard />
              </div>
              <div className="col-span-1">
                <KnowledgeHubCard />
              </div>
              <div className="col-span-1">
                <AIChatAssistantCard />
              </div>
            </div>
          </div>
        );
      case 'tasks':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Task Manager</h2>
            <TaskManagerCard />
          </div>
        );
      case 'health':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Health & Wellness</h2>
            <HealthAnalyticsCard />
          </div>
        );
      case 'knowledge':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Knowledge Hub</h2>
            <KnowledgeHubCard />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Life Analytics</h2>
            <LifeAnalyticsCard />
          </div>
        );
      case 'chat':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">AI Chat Assistant</h2>
            <ChatInterface />
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>
            <DashboardCard 
              title="User Settings"
              gradient="from-gray-400 to-gray-600"
            >
              <p className="text-white/90 text-lg">Manage your account settings and preferences.</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Dark Mode</span>
                  <div className="w-10 h-5 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Notifications</span>
                  <div className="w-10 h-5 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p>Select a section from the sidebar to view content.</p>
          </div>
        );
    }
  };

  return (
    <div className="border border-border rounded-2xl overflow-hidden shadow-2xl bg-card/95 backdrop-blur-sm">
      <div className="flex h-[calc(100vh-200px)] min-h-[600px]">
        {/* Sidebar */}
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Command Bar */}
            <CommandBar onNavigate={handleSectionChange} />
            
            {/* Content Area */}
            {renderContent()}
            
            {/* Life Analytics Dashboard */}
            {activeSection === 'overview' && (
              <div className="mt-6">
                <LifeAnalyticsCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDashboard;