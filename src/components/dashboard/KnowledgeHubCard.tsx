import { DashboardCard } from '../ui/cards/DashboardCard';
import { useNavigate } from 'react-router-dom';

export default function KnowledgeHubCard() {
  const navigate = useNavigate();
  
  return (
    <DashboardCard
      title="Personal Knowledge Hub"
      gradient="from-indigo-400 to-teal-500"
      link="/personal-knowledge-hub"
    >
      <div className="space-y-4">
        <p className="text-white/90 text-lg">
          Your second brain that organizes and retrieves information when you need it.
        </p>
        <button 
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent card's onClick
            navigate('/personal-knowledge-hub');
          }}
        >
          Learn more
        </button>
      </div>
    </DashboardCard>
  );
}