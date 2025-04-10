
import React from 'react';
import { Shield, Zap, Code, BarChart3 } from 'lucide-react';

const benefits = [
  {
    title: "Privacy Focused",
    description: "Your data stays private with our secure architecture and strict privacy controls.",
    icon: Shield
  },
  {
    title: "Lightning Fast",
    description: "Built for speed with optimized algorithms that deliver responses in milliseconds.",
    icon: Zap
  },
  {
    title: "Open Integration",
    description: "Connect Hydrogen AI with your favorite tools and workflows via our APIs.",
    icon: Code
  },
  {
    title: "Data Insights",
    description: "Transform your personal data into actionable insights for better decisions.",
    icon: BarChart3
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About <span className="text-gradient">Hydrogen AI</span></h2>
          <p className="section-subtitle">
            We're building the next generation of AI-powered productivity tools to help you achieve more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-muted-foreground mb-6">
              Hydrogen AI was founded with a simple mission: to create an AI assistant that truly understands personal productivity and helps people accomplish more with less stress.
            </p>
            <p className="text-muted-foreground mb-8">
              We combine cutting-edge AI with intuitive design to create tools that adapt to your unique workflows and help you optimize your time, health, and personal growth.
            </p>
            
            {/* Technology Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                Neural Networks
              </span>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                Natural Language Processing
              </span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                Computer Vision
              </span>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border/40 rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
