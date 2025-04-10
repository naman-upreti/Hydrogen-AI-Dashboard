import React from 'react';
import EnhancedDashboard from './EnhancedDashboard';

const DashboardSection = () => {

  return (
    <section id="dashboard" className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          <EnhancedDashboard />
          
          {/* Enhanced Floating Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-hydrogen-purple/15 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-hydrogen-blue/15 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;