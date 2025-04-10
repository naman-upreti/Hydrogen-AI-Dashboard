import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AISuggestion } from '../models';

interface AISuggestionContextType {
  suggestions: AISuggestion[];
  addSuggestion: (text: string, type: 'task' | 'reminder' | 'insight' | 'general', data?: any) => void;
  removeSuggestion: (id: string) => void;
  clearSuggestions: () => void;
}

const AISuggestionContext = createContext<AISuggestionContextType | undefined>(undefined);

export const useAISuggestionContext = () => {
  const context = useContext(AISuggestionContext);
  if (context === undefined) {
    throw new Error('useAISuggestionContext must be used within an AISuggestionProvider');
  }
  return context;
};

interface AISuggestionProviderProps {
  children: ReactNode;
}

export const AISuggestionProvider = ({ children }: AISuggestionProviderProps) => {
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);

  const addSuggestion = (text: string, type: 'task' | 'reminder' | 'insight' | 'general', data?: any) => {
    const suggestion: AISuggestion = {
      id: Date.now().toString(),
      text,
      type,
      data,
      timestamp: new Date()
    };
    
    setSuggestions(prev => [...prev, suggestion]);
  };
  
  const removeSuggestion = (id: string) => {
    setSuggestions(prev => prev.filter(suggestion => suggestion.id !== id));
  };

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const value = {
    suggestions,
    addSuggestion,
    removeSuggestion,
    clearSuggestions
  };

  return <AISuggestionContext.Provider value={value}>{children}</AISuggestionContext.Provider>;
};