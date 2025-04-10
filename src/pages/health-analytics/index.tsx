import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/FeatureNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity, Moon, Heart } from 'lucide-react';

const HealthAnalytics = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Health & Wellness Analytics | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Track your wellbeing with insights on sleep, exercise, and nutrition.");
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
                
                <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl p-8 text-white shadow-lg">
                  <h1 className="text-3xl font-bold mb-4">Health & Wellness Analytics</h1>
                  <p className="text-white/90 text-lg mb-6">
                    Track your wellbeing with insights on sleep, exercise, and nutrition.
                  </p>
                  
                  {/* Placeholder for future health analytics functionality */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Activity className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Activity</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Integration with fitness trackers</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Activity data visualization</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Moon className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Sleep</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Sleep quality analysis</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Sleep data visualization</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Heart className="h-6 w-6 text-white" />
                        <h2 className="text-xl font-semibold">Wellness</h2>
                      </div>
                      <p className="text-white/80 mb-4">Coming soon: Nutrition and wellness tracking</p>
                      <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-white/60">Wellness data visualization</p>
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

export default HealthAnalytics;