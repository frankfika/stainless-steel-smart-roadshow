import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stats?: { label: string; value: string }[];
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

export const TechCard: React.FC<TechCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  stats,
  className = '',
  delay = 0,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`glass-panel p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 relative overflow-hidden group ${className}`}
    >
      <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-14 h-14 sm:w-20 sm:h-20" />
      </div>

      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="p-1.5 sm:p-2 rounded-lg" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight">{title}</h3>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest" style={{ color: '#10b981' }}>{subtitle}</p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
        {description}
      </p>

      {children}

      {stats && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-auto pt-3 sm:pt-4 border-t border-white/5">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-[9px] sm:text-[10px] uppercase text-white/40 font-mono">{stat.label}</p>
              <p className="text-lg sm:text-xl font-bold font-mono" style={{ color: '#10b981' }}>{stat.value}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
