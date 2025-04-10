import React from 'react';
import { DashboardCard } from '../ui/cards/DashboardCard';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, AlertCircle, Moon, Activity, BookOpen, Brain, Bot } from 'lucide-react';

// Mock data for analytics visualization
const taskData = {
  completed: 12,
  pending: 5,
  overdue: 2,
  total: 19
};

const healthData = {
  sleep: 7.5, // hours
  steps: 8420,
  calories: 2150
};

const knowledgeData = {
  notesAccessed: 15,
  mostSearched: ['Project Planning', 'Health Tips', 'Meeting Notes']
};

const productivityData = {
  activeTime: 6.2, // hours
  idleTime: 1.8, // hours
  focusSessions: 4
};

const aiUsageData = {
  commandsUsed: 28,
  suggestionsTaken: 14,
  timesSaved: 45 // minutes
};

type AnalyticsBlockProps = {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

const AnalyticsBlock = ({ title, icon: Icon, children }: AnalyticsBlockProps) => {
  return (
    <div className="bg-white/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-5 w-5 text-primary" />
        <h4 className="font-medium text-white">{title}</h4>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default function LifeAnalyticsCard() {
  // Calculate task completion percentage
  const taskCompletionPercentage = Math.round((taskData.completed / taskData.total) * 100);
  
  return (
    <DashboardCard
      title="Life Analytics Dashboard"
      gradient="from-gray-400 to-black"
    >
      <div className="space-y-4">
        <p className="text-white/90 text-lg mb-4">
          A comprehensive view of your life analytics in a single dashboard.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Task Analytics */}
          <AnalyticsBlock title="Task Analytics" icon={CheckCircle}>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Task Completion</span>
                <span className="text-white font-medium">{taskCompletionPercentage}%</span>
              </div>
              <Progress value={taskCompletionPercentage} className="h-2" />
              
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    <span className="text-white font-medium">{taskData.completed}</span>
                  </div>
                  <p className="text-white/60 text-xs">Completed</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3 text-yellow-400" />
                    <span className="text-white font-medium">{taskData.pending}</span>
                  </div>
                  <p className="text-white/60 text-xs">Pending</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <AlertCircle className="h-3 w-3 text-red-400" />
                    <span className="text-white font-medium">{taskData.overdue}</span>
                  </div>
                  <p className="text-white/60 text-xs">Overdue</p>
                </div>
              </div>
            </div>
          </AnalyticsBlock>
          
          {/* Health Analytics */}
          <AnalyticsBlock title="Health Analytics" icon={Activity}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Moon className="h-3 w-3 text-blue-300" />
                  <span className="text-white/80 text-sm">Sleep</span>
                </div>
                <span className="text-white font-medium">{healthData.sleep} hrs</span>
              </div>
              <Progress value={(healthData.sleep / 9) * 100} className="h-1.5" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Activity className="h-3 w-3 text-green-300" />
                  <span className="text-white/80 text-sm">Steps</span>
                </div>
                <span className="text-white font-medium">{healthData.steps.toLocaleString()}</span>
              </div>
              <Progress value={(healthData.steps / 10000) * 100} className="h-1.5" />
              
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Calories</span>
                <span className="text-white font-medium">{healthData.calories}</span>
              </div>
            </div>
          </AnalyticsBlock>
          
          {/* Knowledge Graph */}
          <AnalyticsBlock title="Knowledge Graph" icon={BookOpen}>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Notes Accessed</span>
                <span className="text-white font-medium">{knowledgeData.notesAccessed}</span>
              </div>
              
              <div className="mt-2">
                <p className="text-white/80 text-sm mb-1">Most Searched Topics:</p>
                <div className="space-y-1.5">
                  {knowledgeData.mostSearched.map((topic, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-white/90 text-xs">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnalyticsBlock>
          
          {/* Productivity Graph */}
          <AnalyticsBlock title="Productivity Stats" icon={Brain}>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Active vs. Idle Time</span>
              </div>
              
              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-500" 
                  style={{ width: `${(productivityData.activeTime / (productivityData.activeTime + productivityData.idleTime)) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-white/70">
                <span>Active: {productivityData.activeTime} hrs</span>
                <span>Idle: {productivityData.idleTime} hrs</span>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-white/80 text-sm">Focus Sessions</span>
                <span className="text-white font-medium">{productivityData.focusSessions}</span>
              </div>
            </div>
          </AnalyticsBlock>
        </div>
        
        {/* AI Assistant Usage */}
        <AnalyticsBlock title="AI Assistant Usage" icon={Bot}>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-white font-medium text-xl">{aiUsageData.commandsUsed}</p>
              <p className="text-white/60 text-xs">Commands Used</p>
            </div>
            <div className="text-center">
              <p className="text-white font-medium text-xl">{aiUsageData.suggestionsTaken}</p>
              <p className="text-white/60 text-xs">Suggestions Taken</p>
            </div>
            <div className="text-center">
              <p className="text-white font-medium text-xl">{aiUsageData.timesSaved}</p>
              <p className="text-white/60 text-xs">Minutes Saved</p>
            </div>
          </div>
        </AnalyticsBlock>
        
        <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full">
          View Full Analytics
        </button>
      </div>
    </DashboardCard>
  );
}