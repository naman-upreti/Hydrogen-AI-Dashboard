import React, { useState } from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Search, CheckSquare, Heart, MessageCircle, Settings, Home, FileText, Calendar, Bell } from 'lucide-react';

type CommandOption = {
  icon: React.ElementType;
  label: string;
  section: string;
  keywords: string[];
  description: string;
};

type CommandBarProps = {
  onNavigate: (section: string) => void;
};

const CommandBar = ({ onNavigate }: CommandBarProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const commandOptions: CommandOption[] = [
    {
      icon: Home,
      label: 'Dashboard Overview',
      section: 'overview',
      keywords: ['home', 'main', 'dashboard'],
      description: 'Go to the main dashboard overview'
    },
    {
      icon: CheckSquare,
      label: 'Task Manager',
      section: 'tasks',
      keywords: ['tasks', 'todo', 'projects', 'deadlines'],
      description: 'Manage your tasks and projects'
    },
    {
      icon: Heart,
      label: 'Health Analytics',
      section: 'health',
      keywords: ['health', 'wellness', 'sleep', 'exercise', 'nutrition'],
      description: 'View your health and wellness metrics'
    },
    {
      icon: FileText,
      label: 'Knowledge Hub',
      section: 'knowledge',
      keywords: ['notes', 'knowledge', 'documents', 'information'],
      description: 'Access your personal knowledge database'
    },
    {
      icon: MessageCircle,
      label: 'AI Chat',
      section: 'chat',
      keywords: ['chat', 'ai', 'assistant', 'help', 'support'],
      description: 'Chat with your AI assistant'
    },
    {
      icon: Calendar,
      label: 'Calendar',
      section: 'calendar',
      keywords: ['calendar', 'schedule', 'events', 'appointments'],
      description: 'View your calendar and schedule'
    },
    {
      icon: Bell,
      label: 'Notifications',
      section: 'notifications',
      keywords: ['notifications', 'alerts', 'updates'],
      description: 'Check your notifications'
    },
    {
      icon: Settings,
      label: 'Settings',
      section: 'settings',
      keywords: ['settings', 'preferences', 'account', 'profile'],
      description: 'Manage your account settings'
    },
  ];

  const handleSelect = (section: string) => {
    onNavigate(section);
    setOpen(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        className="relative flex items-center w-full h-10 rounded-lg bg-muted/50 border border-border px-3 focus-within:ring-1 focus-within:ring-primary cursor-text"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 text-muted-foreground mr-2" />
        <input 
          type="text" 
          placeholder="Search or type a command..." 
          className="bg-transparent border-none w-full focus:outline-none text-sm placeholder:text-muted-foreground"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOpen(true)}
        />
        <div className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">⌘K</div>
      </div>

      {open && (
        <div className="absolute top-16 left-0 right-0 z-50 mx-auto w-full max-w-2xl">
          <Command className="rounded-lg border shadow-md">
            <CommandInput 
              placeholder="Type a command or search..." 
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                {commandOptions
                  .filter(option => 
                    option.label.toLowerCase().includes(search.toLowerCase()) ||
                    option.keywords.some(keyword => keyword.includes(search.toLowerCase()))
                  )
                  .map(option => (
                    <CommandItem
                      key={option.section}
                      onSelect={() => handleSelect(option.section)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <option.icon className="h-4 w-4" />
                      <span>{option.label}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{option.description}</span>
                    </CommandItem>
                  ))
                }
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default CommandBar;