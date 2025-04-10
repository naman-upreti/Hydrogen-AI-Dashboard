import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Task } from '../models';

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string, priority?: 'low' | 'medium' | 'high', dueDate?: string, source?: 'manual' | 'ai') => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, updates: Partial<Omit<Task, 'id'>>) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  // Initialize with sample tasks or load from localStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('hydrogen-tasks');
    if (savedTasks) {
      try {
        // Parse the saved tasks and ensure dates are properly converted back to Date objects
        const parsedTasks = JSON.parse(savedTasks);
        return parsedTasks.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }));
      } catch (error) {
        console.error('Error parsing saved tasks:', error);
        return [];
      }
    }
    
    // Default tasks if none are saved
    return [
      { 
        id: '1', 
        text: 'Complete project proposal', 
        completed: false, 
        priority: 'high', 
        dueDate: '2023-06-15',
        createdAt: new Date(),
        source: 'manual'
      },
      { 
        id: '2', 
        text: 'Review analytics dashboard', 
        completed: true, 
        priority: 'medium', 
        dueDate: '2023-06-10',
        createdAt: new Date(),
        source: 'manual'
      },
      { 
        id: '3', 
        text: 'Schedule team meeting', 
        completed: false, 
        priority: 'low', 
        dueDate: '2023-06-20',
        createdAt: new Date(),
        source: 'manual'
      },
    ];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('hydrogen-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string, priority: 'low' | 'medium' | 'high' = 'medium', dueDate?: string, source: 'manual' | 'ai' = 'manual') => {
    if (text.trim() === '') return;
    
    const task: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      dueDate,
      createdAt: new Date(),
      source
    };
    
    setTasks([...tasks, task]);
  };
  
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id: string, updates: Partial<Omit<Task, 'id'>>) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const value = {
    tasks,
    addTask,
    toggleTask,
    removeTask,
    updateTask
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};