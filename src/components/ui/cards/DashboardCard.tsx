import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type DashboardCardProps = {
  title: string;
  gradient: string;
  children: ReactNode;
  className?: string;
  link?: string;
};

export const DashboardCard = ({
  title,
  gradient,
  children,
  className = '',
  link
}: DashboardCardProps) => {  
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };
  
  return (
    <div 
      className={`bg-gradient-to-r ${gradient} rounded-xl p-6 text-white mb-6 shadow-lg ${link ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''} ${className}`}
      onClick={handleClick}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
}