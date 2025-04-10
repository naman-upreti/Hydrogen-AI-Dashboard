import React from 'react';
import { Home, CheckSquare, Heart, MessageCircle, Settings, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
};

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              'flex items-center gap-3 w-full p-3 rounded-lg transition-all',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Icon size={18} />
            <span className="font-medium">{label}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

type DashboardSidebarProps = {
  activeSection: string;
  onSectionChange: (section: string) => void;
};

const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Overview', section: 'overview' },
    { icon: CheckSquare, label: 'Tasks', section: 'tasks' },
    { icon: Heart, label: 'Health', section: 'health' },
    { icon: MessageCircle, label: 'Chat', section: 'chat' },
    { icon: Settings, label: 'Settings', section: 'settings' },
  ];

  return (
    <div className="h-full w-64 border-r border-border bg-card/95 p-4 flex flex-col gap-6">
      <div className="flex items-center gap-3 px-3">
        <div className="w-8 h-8 rounded-full bg-blue-purple-gradient flex items-center justify-center">
          <span className="text-white font-bold text-sm">H</span>
        </div>
        <span className="font-medium text-foreground/90">Hydrogen AI</span>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-muted/50 border-none rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary"
        />
      </div>

      <nav className="space-y-1.5">
        {navItems.map((item) => (
          <NavItem
            key={item.section}
            icon={item.icon}
            label={item.label}
            active={activeSection === item.section}
            onClick={() => onSectionChange(item.section)}
          />
        ))}
      </nav>

      <div className="mt-auto p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-medium text-sm">U</span>
          </div>
          <div>
            <p className="text-sm font-medium">User Profile</p>
            <p className="text-xs text-muted-foreground">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;