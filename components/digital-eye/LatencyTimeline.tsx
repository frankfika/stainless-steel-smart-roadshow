import React from 'react';
import { motion } from 'motion/react';

export const LatencyTimeline: React.FC = () => {
  const steps = [
    { label: '图像采集', color: '#10b981' },
    { label: '预处理', color: '#10b981' },
    { label: 'AI 推理', color: '#06b6d4' },
    { label: '逻辑判定', color: '#10b981' },
    { label: '物理拦截', color: '#ef4444' },
  ];

  return (
    <div className="mt-3 sm:mt-4">
      <div className="w-full h-[2px] mb-3 sm:mb-4" style={{ backgroundColor: '#10b981' }} />
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded text-[9px] sm:text-[10px] font-mono border"
            style={{
              borderColor: step.color + '40',
              color: step.color,
              backgroundColor: step.color + '10',
            }}
          >
            {step.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
