import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ShieldAlert } from 'lucide-react';

export const DigitalEye: React.FC = () => {
  const [defectsFound, setDefectsFound] = useState(0);
  const [lastInterception, setLastInterception] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setDefectsFound(prev => prev + 1);
        setLastInterception(Date.now());
        setTimeout(() => setLastInterception(null), 1000);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video glass-panel overflow-hidden bg-black flex items-center justify-center">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Scanning Line */}
      <motion.div
        className="scan-line"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Central Visual */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-48 h-48 rounded-full flex items-center justify-center relative"
          style={{ border: '2px solid rgba(16, 185, 129, 0.3)' }}
        >
          <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <Eye size={64} className="glow-text" style={{ color: '#10b981' }} />
          </div>

          {/* Rotating Rings */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ borderTop: '2px solid #06b6d4' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="mt-8 flex gap-8">
          <div className="text-center">
            <p className="text-[10px] uppercase text-white/40 mb-1">运行状态</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10b981' }} />
              <span className="text-xs font-mono" style={{ color: '#10b981' }}>实时扫描中</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase text-white/40 mb-1">拦截总数</p>
            <span className="text-xs font-mono">{defectsFound.toString().padStart(4, '0')}</span>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase text-white/40 mb-1">系统延迟</p>
            <span className="text-xs font-mono" style={{ color: '#06b6d4' }}>48.2ms</span>
          </div>
        </div>
      </div>

      {/* Alert Overlay */}
      <AnimatePresence>
        {lastInterception && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 bg-red-500/10 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm shadow-lg shadow-red-500/50">
              <ShieldAlert size={18} />
              <span>检测到瑕疵 - 已拦截 [50ms]</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner Tags */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-white/40">
        边缘算力单元 V3.1
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/40">
        拟合优度 R^2: 0.9984
      </div>
    </div>
  );
};
