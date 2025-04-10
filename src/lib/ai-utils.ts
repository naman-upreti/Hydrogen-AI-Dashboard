/**
 * Utility functions for AI-related features
 */

import { Task, AISuggestion } from './models';

/**
 * Analyzes AI message text to extract potential tasks
 * @param text The AI message text to analyze
 * @returns Array of potential tasks extracted from the message
 */
export function extractTasksFromAIMessage(text: string): Omit<Task, 'id' | 'createdAt'>[] {
  const tasks: Omit<Task, 'id' | 'createdAt'>[] = [];
  
  // Look for task-like patterns in the message
  // This is a simple implementation - in a real app, this would use more sophisticated NLP
  
  // Pattern: lines starting with "- [ ]" or "* [ ]" (markdown task format)
  const markdownTaskRegex = /[-*]\s?\[\s?\]\s?(.+)$/gm;
  let match;
  
  while ((match = markdownTaskRegex.exec(text)) !== null) {
    if (match[1] && match[1].trim()) {
      tasks.push({
        text: match[1].trim(),
        completed: false,
        priority: 'medium',
        source: 'ai'
      });
    }
  }
  
  // Pattern: lines starting with action verbs followed by content
  // This is a simplified version - a real implementation would use more sophisticated NLP
  const actionVerbs = ['create', 'schedule', 'review', 'complete', 'finish', 'prepare', 'send', 'write', 'call', 'email'];
  
  const lines = text.split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();
    // Skip if already matched as markdown task
    if (trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) continue;
    
    for (const verb of actionVerbs) {
      if (trimmedLine.toLowerCase().startsWith(verb)) {
        tasks.push({
          text: trimmedLine,
          completed: false,
          priority: 'medium',
          source: 'ai'
        });
        break;
      }
    }
  }
  
  return tasks;
}

/**
 * Analyzes AI message text to extract potential suggestions
 * @param text The AI message text to analyze
 * @returns Array of potential suggestions extracted from the message
 */
export function extractSuggestionsFromAIMessage(text: string): Omit<AISuggestion, 'id' | 'timestamp'>[] {
  const suggestions: Omit<AISuggestion, 'id' | 'timestamp'>[] = [];
  
  // Look for suggestion patterns in the message
  // This is a simple implementation - in a real app, this would use more sophisticated NLP
  
  // Pattern: lines starting with "Suggestion:" or "I suggest"
  const suggestionRegex = /(suggestion:|i suggest|you could|you might|consider|try to|it's recommended to)\s+(.+?)(?:\.|$)/gi;
  let match;
  
  while ((match = suggestionRegex.exec(text)) !== null) {
    if (match[2] && match[2].trim()) {
      suggestions.push({
        text: match[2].trim(),
        type: 'general'
      });
    }
  }
  
  return suggestions;
}

/**
 * Determines if an AI message contains actionable content
 * @param text The AI message text to analyze
 * @returns Boolean indicating if the message contains actionable content
 */
export function hasActionableContent(text: string): boolean {
  const tasks = extractTasksFromAIMessage(text);
  const suggestions = extractSuggestionsFromAIMessage(text);
  
  return tasks.length > 0 || suggestions.length > 0;
}