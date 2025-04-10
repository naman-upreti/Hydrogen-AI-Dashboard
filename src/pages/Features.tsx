
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

const Features = () => {
  useEffect(() => {
    document.title = "Features | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore the powerful features of Hydrogen AI - your intelligent personal assistant.");
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-20">
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Features;
