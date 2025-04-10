// Shared models for application-wide use

/**
 * Task model representing a user task in the system
 */
export type Task = {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: Date;
  source?: 'manual' | 'ai';
};

/**
 * AI suggestion model for representing suggestions from the AI
 */
export type AISuggestion = {
  id: string;
  text: string;
  type: 'task' | 'reminder' | 'insight' | 'general';
  data?: any; // Additional data specific to the suggestion type
  timestamp: Date;
};