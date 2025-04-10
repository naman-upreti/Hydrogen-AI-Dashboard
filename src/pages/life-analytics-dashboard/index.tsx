import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/FeatureNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart2, PieChart, LineChart } from 'lucide-react';

const LifeAnalyticsDashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Life Analytics Dashboard | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A comprehensive view of your life analytics in a single dashboard.");
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
                
                <div className="bg-gradient-to-r from-gray-400 to-black rounded-xl p-8 text-white shadow-lg">
                  <h1 className="text-3xl font-bold mb-4">Life Analytics Dashboard</h1>
                  <p className="text-white/90 text-lg mb-6">
                    A comprehensive view of your life analytics in a single dashboard.
                  </p>
                  
                  {/* Placeholder for future life analytics functionality */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart2 className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Task Analytics</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Task completion metrics</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Task analytics visualization</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <PieChart className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Time Distribution</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Time usage analysis</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Time distribution visualization</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <LineChart className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Productivity Trends</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Productivity analysis</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Productivity trends visualization</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overall Life Score */}
                  <div className="bg-white/10 rounded-lg p-6 mt-6">
                    <h2 className="text-xl font-semibold mb-4">Life Score</h2>
                    <p className="text-white/80 mb-4">Coming soon: Comprehensive life score based on all metrics</p>
                    <div className="w-full bg-white/5 h-8 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-white/60">
                      <span>0</span>
                      <span>75</span>
                      <span>100</span>
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

export default LifeAnalyticsDashboard;