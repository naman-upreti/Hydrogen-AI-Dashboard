import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/FeatureNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const SmartTaskManager = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Smart Task Manager | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Prioritize tasks using AI based on your work patterns and deadlines.");
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
                
                <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 text-white shadow-lg">
                  <h1 className="text-3xl font-bold mb-4">Smart Task Manager</h1>
                  <p className="text-white/90 text-lg mb-6">
                    Prioritize tasks using AI based on your work patterns and deadlines.
                  </p>
                  
                  {/* Task Management Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
                      <p className="text-white/80 mb-4">
                        Manage your tasks efficiently with AI assistance.
                      </p>
                      
                      {/* Task list would go here in a real implementation */}
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/5 p-3 rounded flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border border-white/50 flex-shrink-0"></div>
                          <div>
                            <p className="text-white">Complete project proposal</p>
                            <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
                              <span>High priority</span>
                              <span>•</span>
                              <span>Due: Jun 15, 2023</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 p-3 rounded flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border border-white/50 flex-shrink-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <p className="text-white/70 line-through">Review analytics dashboard</p>
                            <div className="flex items-center gap-2 text-xs text-white/50 mt-1">
                              <span>Medium priority</span>
                              <span>•</span>
                              <span>Due: Jun 10, 2023</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 p-3 rounded flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border border-white/50 flex-shrink-0"></div>
                          <div>
                            <p className="text-white">Schedule team meeting</p>
                            <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
                              <span>Low priority</span>
                              <span>•</span>
                              <span>Due: Jun 20, 2023</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <h2 className="text-xl font-semibold mb-4">AI Task Assistant</h2>
                      <p className="text-white/80 mb-4">
                        Get help from our AI assistant to manage your tasks more effectively.
                      </p>
                      
                      <div className="bg-white/5 p-4 rounded-lg mb-4">
                        <h3 className="font-medium mb-2">How can AI help you?</h3>
                        <ul className="list-disc list-inside space-y-2 text-white/80">
                          <li>Automatically prioritize tasks based on deadlines and importance</li>
                          <li>Predict task completion times based on your work patterns</li>
                          <li>Suggest optimal scheduling for your day</li>
                          <li>Provide intelligent reminders for upcoming deadlines</li>
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                        Ask AI for Help
                      </Button>
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

export default SmartTaskManager;