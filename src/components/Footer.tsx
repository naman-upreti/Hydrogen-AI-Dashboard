
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-purple-gradient">
                <span className="font-bold text-white text-sm">H</span>
              </div>
              <span className="font-bold text-lg">Hydrogen AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Redefining productivity with AI-powered solutions that help you work smarter and live better.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Cookies Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} />
                  <span>Security</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="font-medium mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button 
                type="submit" 
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hydrogen AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Developers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
