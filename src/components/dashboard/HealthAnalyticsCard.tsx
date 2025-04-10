import { DashboardCard } from '../ui/cards/DashboardCard';
import { useNavigate } from 'react-router-dom';

export default function HealthAnalyticsCard() {
  const navigate = useNavigate();
  
  return (
    <DashboardCard
      title="Health & Wellness Analytics"
      gradient="from-yellow-400 to-red-500"
      link="/health-analytics"
    >
      <div className="space-y-4">
        <p className="text-white/90 text-lg">
          Track your wellbeing with insights on sleep, exercise, and nutrition.
        </p>
        <button 
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent card's onClick
            navigate('/health-analytics');
          }}
        >
          Learn more
        </button>
      </div>
    </DashboardCard>
  );
}