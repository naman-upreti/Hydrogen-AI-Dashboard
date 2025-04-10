import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

const FeatureNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isFeatureMenuOpen) setIsFeatureMenuOpen(false);
  };

  const toggleFeatureMenu = () => {
    setIsFeatureMenuOpen(!isFeatureMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const mainNavLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const featureLinks = [
    { name: 'Smart Task Manager', href: '/smart-task-manager' },
    { name: 'Health & Wellness Analytics', href: '/health-analytics' },
    { name: 'AI Chat Assistant', href: '/ai-chat-assistant' },
    { name: 'Personal Knowledge Hub', href: '/personal-knowledge-hub' },
    { name: 'Life Analytics Dashboard', href: '/life-analytics-dashboard' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isFeatureActive = () => {
    return featureLinks.some(link => location.pathname === link.href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-purple-gradient">
            <span className="font-bold text-white text-lg">H</span>
          </div>
          <span className="font-bold text-xl">Hydrogen AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`transition-colors ${isActive(link.href) ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Features Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleFeatureMenu}
              className={`flex items-center gap-1 transition-colors ${isFeatureActive() ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
            >
              Features <ChevronDown size={16} className={`transition-transform ${isFeatureMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isFeatureMenuOpen && (
              <div className="absolute top-full mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2 z-50">
                {featureLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-2 transition-colors ${isActive(link.href) ? 'bg-muted text-primary font-medium' : 'hover:bg-muted'}`}
                    onClick={() => setIsFeatureMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Button variant="outline" size="sm" onClick={toggleTheme} className="ml-2">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Button>Get Started</Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {mainNavLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`py-2 transition-colors ${isActive(link.href) ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Features Section */}
            <div className="border-t border-border pt-2 mt-2">
              <h3 className="font-medium py-2">Features</h3>
              <div className="flex flex-col gap-2 pl-2">
                {featureLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`py-2 transition-colors ${isActive(link.href) ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Button className="mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default FeatureNavbar;