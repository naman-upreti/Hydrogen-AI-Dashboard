
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleTryDemo = () => {
    navigate('/features');
    // Scroll to chat section if on the page
    setTimeout(() => {
      const chatSection = document.getElementById('ai-chat-feature');
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Effect - Enhanced with more vibrant gradient */}
      <div className="absolute inset-0 bg-hero-pattern opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-hydrogen-blue/10 to-hydrogen-purple/10 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* Badge - Enhanced with more attractive animation */}
          <div className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary animate-pulse-slow backdrop-blur-sm border border-primary/10 shadow-lg shadow-primary/5">
            Introducing Hydrogen AI
          </div>
          
          {/* Heading - Enhanced with better typography and animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto animate-fade-in [animation-delay:150ms] tracking-tight">
            Redefine Your Productivity with <span className="text-gradient bg-blue-purple-gradient">AI</span>
          </h1>
          
          {/* Subtitle - Enhanced with better typography */}
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in [animation-delay:300ms] leading-relaxed">
            The intelligent personal assistant that helps you manage your tasks, track your health, and optimize your life.
          </p>
          
          {/* CTA Buttons - Enhanced with better styling and hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:450ms]">
            <Button 
              size="lg" 
              className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:translate-y-[-2px]"
              onClick={handleGetStarted}
            >
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 hover:bg-accent/30 transition-all duration-300 hover:translate-y-[-2px]"
              onClick={handleTryDemo}
            >
              <MessageSquare className="mr-2 h-4 w-4" /> Try Demo
            </Button>
          </div>
          
          {/* Stats - Enhanced with better styling */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in [animation-delay:600ms]">
            <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-sm bg-background/40 hover:bg-background/60 transition-all duration-300 shadow-sm">
              <span className="text-3xl md:text-4xl font-bold text-gradient">50K+</span>
              <span className="text-muted-foreground mt-1">Active Users</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-sm bg-background/40 hover:bg-background/60 transition-all duration-300 shadow-sm">
              <span className="text-3xl md:text-4xl font-bold text-gradient">95%</span>
              <span className="text-muted-foreground mt-1">Satisfaction</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl backdrop-blur-sm bg-background/40 hover:bg-background/60 transition-all duration-300 shadow-sm col-span-2 md:col-span-1">
              <span className="text-3xl md:text-4xl font-bold text-gradient">24/7</span>
              <span className="text-muted-foreground mt-1">AI Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image - Enhanced with more vivid styling */}
      <div className="mt-16 md:mt-20 relative max-w-6xl mx-auto animate-fade-in [animation-delay:750ms]">
        <div className="relative rounded-xl overflow-hidden shadow-xl mx-4 border border-white/10">
          <div className="aspect-[16/9] bg-gradient-to-br from-hydrogen-dark to-hydrogen-purple rounded-xl glass p-1">
            <div className="w-full h-full bg-gradient-to-r from-hydrogen-blue/30 to-hydrogen-purple/30 rounded-lg flex items-center justify-center">
              <div className="text-center px-4 py-6 bg-background/10 backdrop-blur-xl rounded-lg shadow-inner border border-white/5">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Hydrogen AI Dashboard</h3>
                <p className="text-white/80">Your personal AI assistant is ready</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements - Enhanced with better positioning and effects */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-hydrogen-green/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute -bottom-6 -left-10 w-32 h-32 bg-hydrogen-blue/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-hydrogen-purple/20 rounded-full blur-xl animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default HeroSection;
