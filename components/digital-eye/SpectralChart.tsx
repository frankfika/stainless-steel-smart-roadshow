import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
} from 'recharts';

const data = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  actual: 40 + Math.sin(i * 0.5) * 20 + Math.random() * 2,
  predicted: 40 + Math.sin(i * 0.5) * 20,
}));

export const SpectralChart: React.FC = () => {
  return (
    <div className="w-full h-36 sm:h-48 mt-3 sm:mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis hide dataKey="name" />
          <YAxis hide domain={['auto', 'auto']} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#141414',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            itemStyle={{ color: '#10b981' }}
          />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorActual)"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#06b6d4"
            strokeDasharray="5 5"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-between mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] font-mono text-white/40">
        <span>400nm</span>
        <span>700nm</span>
      </div>
    </div>
  );
};
