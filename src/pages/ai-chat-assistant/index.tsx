import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/FeatureNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import ChatInterface from "@/components/ChatInterface";

const AIChatAssistant = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "AI Chat Assistant | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get real-time answers, suggestions, and help with a conversational AI interface.");
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-20 flex-1">
          <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2"
                    onClick={() => navigate('/dashboard')}
                  >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                  </Button>
                </div>
                
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl p-8 text-white shadow-lg">
                  <h1 className="text-3xl font-bold mb-4">AI Chat Assistant</h1>
                  <p className="text-white/90 text-lg mb-6">
                    Get real-time answers, suggestions, and help with a conversational AI interface.
                  </p>
                  
                  {/* Chat Interface */}
                  <div className="bg-white/10 rounded-lg p-6 mt-8">
                    <ChatInterface />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AIChatAssistant;