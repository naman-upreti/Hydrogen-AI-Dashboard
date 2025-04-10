
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import DashboardSection from "@/components/DashboardSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

const Dashboard = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Dashboard | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience the powerful dashboard of Hydrogen AI - your intelligent personal assistant.");
    }
    
    // Scroll to top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-20">
          <DashboardSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
