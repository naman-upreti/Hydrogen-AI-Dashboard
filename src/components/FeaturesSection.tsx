
import React from 'react';
import { CheckSquare, Brain, BarChart3, MessageCircle, Database, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "task-manager",
    title: "Smart Task Manager",
    description: "Prioritize tasks with AI that understands your work patterns and deadlines.",
    icon: CheckSquare,
    color: "bg-blue-500",
    link: "/dashboard"
  },
  {
    id: "health-analytics",
    title: "Health & Wellness Analytics",
    description: "Track your wellbeing with insights on sleep, exercise, and nutrition.",
    icon: BarChart3,
    color: "bg-green-500",
    link: "/dashboard"
  },
  {
    id: "ai-chat",
    title: "AI Chat Assistant",
    description: "Get answers, suggestions, and help with a conversational AI interface.",
    icon: MessageCircle,
    color: "bg-purple-500",
    link: "/dashboard"
  },
  {
    id: "knowledge-hub",
    title: "Personal Knowledge Hub",
    description: "Your second brain that organizes and retrieves information when you need it.",
    icon: Brain,
    color: "bg-amber-500",
    link: "/dashboard"
  },
  {
    id: "analytics-dashboard",
    title: "Life Analytics Dashboard",
    description: "Visualize your productivity, habits, and improvements over time.",
    icon: Database,
    color: "bg-cyan-500",
    link: "/dashboard"
  },
  {
    id: "api-integrations",
    title: "API Integrations Ready",
    description: "Connect with all your favorite tools and services seamlessly.",
    icon: Globe,
    color: "bg-indigo-500",
    link: "/dashboard"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 opacity-80 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-hydrogen-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-hydrogen-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-hydrogen-green/5 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/5">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Empowering Intelligence with <span className="text-gradient">Next-Gen AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hydrogen AI combines powerful capabilities to streamline your life, boost productivity, and deliver intelligent insights when you need them most.
          </p>
        </div>
        
        {/* Enhanced Features Grid with Better Animation and Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              id={feature.id === "ai-chat" ? "ai-chat-feature" : feature.id}
              className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full group hover:shadow-xl hover:translate-y-[-4px] overflow-hidden"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon size={24} />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                <Link 
                  to={feature.link} 
                  className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-all duration-200 hover:gap-2"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Added Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl mx-auto p-6 rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/10">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to experience the power of AI?</h3>
            <p className="text-muted-foreground mb-6">Start your journey with Hydrogen AI today and unlock new levels of productivity.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-1 shadow-lg shadow-primary/10">
                <Link to="/dashboard">Get Started <ArrowRight size={16} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-1">
                <Link to="/dashboard">Try AI Chat <MessageCircle size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
