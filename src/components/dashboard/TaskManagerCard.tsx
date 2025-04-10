import React, { useState } from 'react';
import { DashboardCard } from '../ui/cards/DashboardCard';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { CheckSquare, Plus, Clock, Calendar, BarChart, X, ArrowRight } from 'lucide-react';

type Task = {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
};

export default function TaskManagerCard() {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Complete project proposal', completed: false, priority: 'high', dueDate: '2023-06-15' },
    { id: '2', text: 'Review analytics dashboard', completed: true, priority: 'medium', dueDate: '2023-06-10' },
    { id: '3', text: 'Schedule team meeting', completed: false, priority: 'low', dueDate: '2023-06-20' },
  ]);
  
  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const task: Task = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
      priority: 'medium',
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };
  
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };
  
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;
  
  return (
    <DashboardCard
      title="Smart Task Manager"
      gradient="from-green-400 to-blue-500"
      link="/smart-task-manager"
      className="h-full"
    >
      <div className="space-y-4">
        <p className="text-white/90 text-lg mb-4">
          Prioritize tasks with AI that understands your work patterns and deadlines.
        </p>
        
        {/* Task Input */}
        <div className="flex gap-2">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <Button 
            onClick={addTask}
            className="bg-white/20 hover:bg-white/30 text-white"
            size="icon"
          >
            <Plus size={18} />
          </Button>
        </div>
        
        {/* Task List */}
        <div className="max-h-[200px] overflow-y-auto pr-1 space-y-2">
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Card className="bg-white/10 border-white/20 p-3 flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Checkbox 
                      checked={task.completed} 
                      onCheckedChange={() => toggleTask(task.id)}
                      className="border-white/50"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className={`text-white ${task.completed ? 'line-through opacity-70' : ''}`}>
                      {task.text}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-white/70 text-xs">
                      {task.dueDate && (
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{task.dueDate}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                        <span className="capitalize">{task.priority}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white/70 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Task Analytics */}
        <div className="bg-white/10 rounded-lg p-3 mt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/90 text-sm">Task Completion</span>
            <span className="text-white font-medium">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/80">
            <div>Completed: {completedTasks}</div>
            <div>Total: {tasks.length}</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between mt-2">
          <Button 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent card's onClick
              navigate('/smart-task-manager');
            }}
          >
            Learn more
          </Button>
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white gap-1 text-sm"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent card's onClick
              navigate('/smart-task-manager');
            }}
          >
            View All <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </DashboardCard>
  );
}