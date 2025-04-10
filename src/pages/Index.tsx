
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardSection from "@/components/DashboardSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Sparkles, Code, CheckCircle2, Globe } from "lucide-react";

const Index = () => {
  // Add meta tags and scroll to top
  useEffect(() => {
    // Set page title
    document.title = "Hydrogen AI | Redefine Your Productivity with AI";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Hydrogen AI is an intelligent personal productivity and lifestyle assistant powered by AI. Manage tasks, track health, and optimize your life with our smart assistant.");
    }
    
    // Scroll to top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Explore Our Platform</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Discover how Hydrogen AI can transform your productivity and lifestyle with our innovative features and intelligent analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link to="/features" className="w-full">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:bg-primary/5 group transition-all">
                  <Sparkles className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">Features</div>
                    <div className="text-xs text-muted-foreground">Explore capabilities</div>
                  </div>
                  <ChevronRight size={16} className="mt-2 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/dashboard" className="w-full">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:bg-primary/5 group transition-all">
                  <CheckCircle2 className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">Dashboard</div>
                    <div className="text-xs text-muted-foreground">Control center</div>
                  </div>
                  <ChevronRight size={16} className="mt-2 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about" className="w-full">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:bg-primary/5 group transition-all">
                  <Globe className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">About Us</div>
                    <div className="text-xs text-muted-foreground">Our mission</div>
                  </div>
                  <ChevronRight size={16} className="mt-2 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact" className="w-full">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:bg-primary/5 group transition-all">
                  <Code className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium">Contact</div>
                    <div className="text-xs text-muted-foreground">Get in touch</div>
                  </div>
                  <ChevronRight size={16} className="mt-2 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          <FeaturesSection />
          <DashboardSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
