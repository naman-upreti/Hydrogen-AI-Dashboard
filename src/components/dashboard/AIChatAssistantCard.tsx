import { DashboardCard } from '../ui/cards/DashboardCard';
import { useNavigate } from 'react-router-dom';

export default function AIChatAssistantCard() {
  const navigate = useNavigate();
  
  return (
    <DashboardCard
      title="AI Chat Assistant"
      gradient="from-purple-400 to-pink-500"
      link="/ai-chat-assistant"
    >
      <div className="space-y-4">
        <p className="text-white/90 text-lg">
          Your intelligent companion that learns from your interactions and provides personalized assistance.
        </p>
        <button 
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent card's onClick
            navigate('/ai-chat-assistant');
          }}
        >
          Chat now
        </button>
      </div>
    </DashboardCard>
  );
}