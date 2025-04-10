
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

const About = () => {
  useEffect(() => {
    document.title = "About | Hydrogen AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Hydrogen AI - your intelligent personal assistant powered by artificial intelligence.");
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-20">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
