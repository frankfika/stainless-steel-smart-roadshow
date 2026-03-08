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
      className={`glass-panel p-6 flex flex-col gap-4 relative overflow-hidden group ${className}`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={80} />
      </div>

      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          <p className="text-xs font-mono uppercase tracking-widest" style={{ color: '#10b981' }}>{subtitle}</p>
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed">
        {description}
      </p>

      {children}

      {stats && (
        <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t border-white/5">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-[10px] uppercase text-white/40 font-mono">{stat.label}</p>
              <p className="text-xl font-bold font-mono" style={{ color: '#10b981' }}>{stat.value}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
