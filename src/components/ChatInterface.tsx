
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ChevronUp, ChevronDown, CheckSquare, Plus, AlertCircle, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { sendMessageToGroq } from "@/lib/api";
import { useTaskContext } from "@/lib/contexts/TaskContext";
import { useAISuggestionContext } from "@/lib/contexts/AISuggestionContext";
import { extractTasksFromAIMessage, extractSuggestionsFromAIMessage, hasActionableContent } from "@/lib/ai-utils";
import { Badge } from "@/components/ui/badge";

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  hasActionableContent?: boolean;
  processed?: boolean;
};

const ChatInterface = () => {
  // Access task and suggestion contexts
  const { addTask } = useTaskContext();
  const { addSuggestion, suggestions } = useAISuggestionContext();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Hydrogen AI assistant. How can I help you analyze your data or organize your tasks today?',
      sender: 'ai',
      timestamp: new Date(),
      hasActionableContent: false,
      processed: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined chat suggestions
  const chatSuggestions = [
    "What can you help me with?",
    "Tell me about your capabilities",
    "How does Hydrogen AI work?",
    "Show me an example of what you can do"
  ];

  // AI response function using Groq API
  const generateAIResponse = async (userMessage: string) => {
    setIsProcessing(true);
    
    try {
      // Send message to Groq API and get response
      const responseText = await sendMessageToGroq(userMessage);
      
      // Check if the response contains actionable content
      const containsActionableContent = hasActionableContent(responseText);
      
      const newMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date(),
        hasActionableContent: containsActionableContent,
        processed: false,
      };
      
      setMessages(prev => [...prev, newMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Sorry, there was an error communicating with the AI service. Please try again later.',
        sender: 'ai',
        timestamp: new Date(),
        hasActionableContent: false,
        processed: true,
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    await generateAIResponse(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleSuggestionClick = async (suggestion: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: suggestion,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    await generateAIResponse(suggestion);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  // Extract tasks from AI message and add them to the task manager
  const extractAndAddTasks = (messageId: string, messageText: string) => {
    const extractedTasks = extractTasksFromAIMessage(messageText);
    
    if (extractedTasks.length > 0) {
      // Add each extracted task to the task context
      extractedTasks.forEach(task => {
        addTask(task.text, task.priority, task.dueDate, 'ai');
      });
      
      // Mark the message as processed and show success feedback
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { 
          ...msg, 
          processed: true,
          text: `${msg.text}\n\n✅ ${extractedTasks.length} task${extractedTasks.length > 1 ? 's' : ''} added to your task manager.`
        } : msg
      ));
      
      // Clear the selected message
      setSelectedMessageId(null);
      
      return extractedTasks.length;
    }
    
    return 0;
  };
  
  // Extract suggestions from AI message and add them to the suggestions context
  const extractAndAddSuggestions = (messageId: string, messageText: string) => {
    const extractedSuggestions = extractSuggestionsFromAIMessage(messageText);
    
    if (extractedSuggestions.length > 0) {
      // Add each extracted suggestion to the suggestions context
      extractedSuggestions.forEach(suggestion => {
        addSuggestion(suggestion.text, suggestion.type, suggestion.data);
      });
      
      // Mark the message as processed and show success feedback
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { 
          ...msg, 
          processed: true,
          text: `${msg.text}\n\n✨ ${extractedSuggestions.length} suggestion${extractedSuggestions.length > 1 ? 's' : ''} saved.`
        } : msg
      ));
      
      // Clear the selected message
      setSelectedMessageId(null);
      
      return extractedSuggestions.length;
    }
    
    return 0;
  };
  
  // Handle clicking on a message to select it for action
  const handleMessageSelect = (messageId: string) => {
    setSelectedMessageId(selectedMessageId === messageId ? null : messageId);
  };

  // Auto-scroll to the most recent message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Card className="h-full w-full flex flex-col overflow-hidden border-primary/20 shadow-xl">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="bg-gradient-to-r from-primary to-hydrogen-purple p-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={20} className="animate-pulse-slow" />
            <div className="font-medium">Hydrogen AI Chat</div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleMinimize} className="text-white hover:bg-white/10">
            {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </div>
        
        <div className={`transition-all duration-300 ease-in-out ${isMinimized ? 'max-h-0 opacity-0 overflow-hidden' : 'flex-1 opacity-100'}`}>
          <div className="p-4 flex-1 overflow-y-auto space-y-4 max-h-[400px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 flex gap-2 ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : selectedMessageId === msg.id
                        ? 'bg-muted/80 border border-primary/30'
                        : 'bg-muted'
                  } ${msg.sender === 'ai' && msg.hasActionableContent && !msg.processed ? 'cursor-pointer' : ''}`}
                  onClick={() => msg.sender === 'ai' && msg.hasActionableContent && !msg.processed && handleMessageSelect(msg.id)}
                >
                  {msg.sender === 'ai' && (
                    <div className="flex-shrink-0 mt-1">
                      <Bot size={16} className="text-primary" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p>{msg.text}</p>
                    <div className="flex items-center justify-between mt-1">
                      <div
                        className={`text-xs ${
                          msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      
                      {/* Show badge for actionable content */}
                      {msg.sender === 'ai' && msg.hasActionableContent && !msg.processed && (
                        <Badge variant="outline" className="text-xs bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
                          <Lightbulb size={12} className="mr-1" /> Actionable
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action buttons for selected AI message with actionable content */}
                    {selectedMessageId === msg.id && msg.sender === 'ai' && msg.hasActionableContent && !msg.processed && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs flex items-center gap-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 border-green-500/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            const count = extractAndAddTasks(msg.id, msg.text);
                            if (count === 0) {
                              // If no tasks found, show a message
                              alert('No tasks found in this message');
                            }
                          }}
                        >
                          <CheckSquare size={14} />
                          Add to Tasks
                        </Button>
                        
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs flex items-center gap-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            const count = extractAndAddSuggestions(msg.id, msg.text);
                            if (count === 0) {
                              // If no suggestions found, show a message
                              alert('No suggestions found in this message');
                            }
                          }}
                        >
                          <Lightbulb size={14} />
                          Save Suggestions
                        </Button>
                      </div>
                    )}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="flex-shrink-0 mt-1">
                      <User size={16} className="text-primary-foreground/70" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-xs">Hydrogen AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggestions */}
          {messages.length < 3 && (
            <div className="px-4 py-2">
              <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {chatSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground px-2 py-1 rounded-full transition-colors"
                    disabled={isProcessing}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything about your data or tasks..."
                className="flex-1"
                disabled={isProcessing}
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={handleSend} disabled={input.trim() === '' || isProcessing} className="bg-primary hover:bg-primary/90 transition-colors">
                      <Send size={18} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send message</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
