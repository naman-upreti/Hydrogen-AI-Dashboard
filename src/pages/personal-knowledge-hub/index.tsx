import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/FeatureNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Search, Tag } from 'lucide-react';

const PersonalKnowledgeHub = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Personal Knowledge Hub | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Your second brain that organizes and retrieves information when you need it.");
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
                
                <div className="bg-gradient-to-r from-indigo-400 to-teal-500 rounded-xl p-8 text-white shadow-lg">
                  <h1 className="text-3xl font-bold mb-4">Personal Knowledge Hub</h1>
                  <p className="text-white/90 text-lg mb-6">
                    Your second brain that organizes and retrieves information when you need it.
                  </p>
                  
                  {/* Search Bar */}
                  <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-white/60" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search your knowledge base..."
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  
                  {/* Placeholder for future knowledge hub functionality */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Notes</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: AI-organized notes</p>
                      <div className="space-y-3">
                        <div className="bg-white/5 p-3 rounded">
                          <p className="text-white/90 font-medium">Project Ideas</p>
                          <p className="text-white/60 text-sm">Last edited: 2 days ago</p>
                        </div>
                        <div className="bg-white/5 p-3 rounded">
                          <p className="text-white/90 font-medium">Meeting Notes</p>
                          <p className="text-white/60 text-sm">Last edited: 5 days ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Tags</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Smart tagging system</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Work</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Personal</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Ideas</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Research</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Health</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Search className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Semantic Search</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: AI-powered semantic search</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Search visualization placeholder</p>
                      </div>
                    </div>
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

export default PersonalKnowledgeHub;