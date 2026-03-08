import React from 'react';
import { motion } from 'motion/react';

export const LatencyTimeline: React.FC = () => {
  const steps = [
    { label: '图像采集', time: '5ms', color: '#10b981' },
    { label: '预处理', time: '10ms', color: '#10b981' },
    { label: 'AI 推理', time: '25ms', color: '#06b6d4' },
    { label: '逻辑判定', time: '5ms', color: '#10b981' },
    { label: '物理拦截', time: '5ms', color: '#ef4444' },
  ];

  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-between items-end h-24 gap-1">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 flex flex-col items-center group">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(parseInt(step.time) / 50) * 100}%` }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              className="w-full rounded-t-sm opacity-60 group-hover:opacity-100 transition-opacity relative"
              style={{ backgroundColor: step.color }}
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/60">
                {step.time}
              </span>
            </motion.div>
            <span className="text-[10px] mt-2 text-white/40 whitespace-nowrap rotate-[-45deg] origin-top-left">
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <div className="flex justify-between text-[10px] font-mono text-white/20 mb-1">
          <span>0ms</span>
          <span>总计: 50ms</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full"
            style={{ backgroundColor: '#10b981' }}
          />
        </div>
      </div>
    </div>
  );
};
