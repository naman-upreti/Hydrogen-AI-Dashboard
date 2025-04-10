
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Feature-specific pages
import SmartTaskManager from "./pages/smart-task-manager";
import HealthAnalytics from "./pages/health-analytics";
import AIChatAssistant from "./pages/ai-chat-assistant";
import PersonalKnowledgeHub from "./pages/personal-knowledge-hub";
import LifeAnalyticsDashboard from "./pages/life-analytics-dashboard";

// Context providers
import { TaskProvider } from "./lib/contexts/TaskContext";
import { AISuggestionProvider } from "./lib/contexts/AISuggestionContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TaskProvider>
      <AISuggestionProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features" element={<Features />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Feature-specific routes */}
              <Route path="/smart-task-manager" element={<SmartTaskManager />} />
              <Route path="/health-analytics" element={<HealthAnalytics />} />
              <Route path="/ai-chat-assistant" element={<AIChatAssistant />} />
              <Route path="/personal-knowledge-hub" element={<PersonalKnowledgeHub />} />
              <Route path="/life-analytics-dashboard" element={<LifeAnalyticsDashboard />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AISuggestionProvider>
    </TaskProvider>
  </QueryClientProvider>
);

export default App;
