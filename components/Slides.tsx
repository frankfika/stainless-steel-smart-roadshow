
import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, ReferenceLine, ComposedChart, LabelList } from 'recharts';
import { SlideProps } from '../types';
import { CheckCircle, AlertTriangle, Zap as ZapIcon, ArrowRight } from './Icons';
import { motion, AnimatePresence } from 'motion/react';
import {
  Eye, Cpu, Database, Activity, ShieldCheck, Search, Layers, Clock, BarChart3, Zap,
  Flame, TrendingDown, Thermometer, Droplets, ChevronRight, Target, Info,
  TrendingUp, Maximize2, Settings, ArrowUpRight, Box, AlertCircle, DollarSign,
  ShieldAlert, Shield, Package, Disc, Maximize, Sparkles, Scissors,
  LayoutDashboard, Rocket, PieChart as PieChartIcon
} from 'lucide-react';
import { TechCard } from './digital-eye/TechCard';
import { DigitalEye } from './digital-eye/DigitalEye';
import { SpectralChart } from './digital-eye/SpectralChart';
import { LatencyTimeline } from './digital-eye/LatencyTimeline';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const energyData = [
  { name: '传统单预热', consumption: 100, cost: 4.1 },
  { name: 'HTAC 双预热', consumption: 77, cost: 3.1 },
];

const roiData = [
  { month: 'M0', investment: -2200, return: 0 },
  { month: 'M3', investment: -1800, return: 500 },
  { month: 'M6', investment: -1200, return: 1100 },
  { month: 'M9', investment: -600, return: 1800 },
  { month: 'M12', investment: -50, return: 2400 },
  { month: 'M14', investment: 600, return: 3100 },
];

const supplyChainData = [
  { name: '苏州本地硬件', value: 95 },
  { name: '其他', value: 5 },
];

export const Slide1: React.FC<SlideProps> = ({ isActive, onStart }) => (
  <div className={`flex flex-col items-center justify-center h-full text-center p-12 transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 grayscale"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950"></div>
    </div>
    <div className="relative z-10 max-w-6xl w-full">
      <div className="inline-block px-4 py-1 mb-8 rounded-full glass border-blue-500/40 text-blue-400 font-bold text-xs tracking-widest uppercase animate-pulse-soft">
        新质生产力 · 协同赋能方案
      </div>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1] gradient-text">
        基于数字孪生的不锈钢全产业链绿色工艺系统研发及产业化
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        利用"苏州装备供应链 + 自主AI算法"，重构传统制造业利润体系
      </p>

      {onStart && (
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl text-xl font-bold text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 mb-16"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          开始演示
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      )}

      <div className="mt-4 border-t border-slate-800 pt-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-20 text-left px-4">
          <div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">CEO / 战略规划</p>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white tracking-tight">周君</span>
              <span className="text-slate-400 text-base font-medium">前百亿基金经理/CFA/FRM</span>
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">CTO / 技术架构</p>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white tracking-tight">陈放</span>
              <span className="text-slate-400 text-base font-medium">SSE 硕士 / AI专家</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide2: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black mb-16 flex items-baseline gap-4">
      <span className="text-blue-500 text-6xl italic">02.</span> 行业背景：从印尼镍矿调研到车间痛点
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { 
          title: "检测损耗", 
          desc: "外送周期长、剪样损耗大", 
          detail: "核心依赖手工取样与异地化实验室，严重制约周转率。",
          icon: "🔬",
          color: "border-red-500/40"
        },
        { 
          title: "能源高压", 
          desc: "1050℃ 刚性热工工艺", 
          detail: "燃气成本占加工费 40% 以上，传统单预热技术已达能耗极限。",
          icon: "🔥",
          color: "border-orange-500/40"
        },
        { 
          title: "工艺瓶颈", 
          desc: "缺乏长距离在线拼焊", 
          detail: "公里级生产中断点多，窄带利用率低，缺乏变窄为宽能力。",
          icon: "⛓️",
          color: "border-yellow-500/40"
        },
        { 
          title: "效率鸿沟", 
          desc: "抛光及包装自动化极低", 
          detail: "复杂件依赖人工，末端交付数据断层，无法实现闭环数字化。",
          icon: "📉",
          color: "border-purple-500/40"
        }
      ].map((item, i) => (
        <div key={i} className={`glass p-8 rounded-3xl border-t-8 ${item.color} transform transition-all duration-500 hover:-translate-y-3`}>
          <div className="text-4xl mb-6">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-red-400 font-mono text-xs mb-4 bg-red-950/30 px-2 py-1 inline-block rounded uppercase tracking-tighter">{item.desc}</p>
          <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 italic text-slate-400 text-center">
      "在印尼调研镍矿期间的深度交流，让我们意识到实业利润正被陈旧工艺无声吞噬。"
    </div>
  </div>
);

export const Slide3: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black mb-16">核心定位：苏州硬件底座 + 自研算法内核</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="flex flex-col gap-6">
        <div className="glass p-8 rounded-[32px] border-l-8 border-slate-500 h-full">
          <div className="text-slate-500 text-xs font-black uppercase mb-4 tracking-widest">Base Layer / 硬件底座</div>
          <h3 className="text-3xl font-black mb-6">整合苏州全球领先装备供应链</h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-2"><CheckCircle /> 高精度光谱仪集成</li>
            <li className="flex items-center gap-2"><CheckCircle /> 工业级大功率激光器</li>
            <li className="flex items-center gap-2"><CheckCircle /> 先进热工陶瓷蓄热件</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 scale-105 z-10">
        <div className="bg-blue-600 p-8 rounded-[32px] shadow-[0_0_50px_rgba(37,99,235,0.3)] h-full flex flex-col justify-center text-white">
          <div className="text-blue-200 text-xs font-black uppercase mb-4 tracking-widest">Core Logic / 算法内核</div>
          <h3 className="text-3xl font-black mb-6 italic">注入自研 AI 算法</h3>
          <p className="text-blue-100 leading-relaxed mb-6">
            将投研思维降维打击：用处理海量金融数据的逻辑，重构工业视觉、节能模型与运动控制协议。
          </p>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="glass p-8 rounded-[32px] border-r-8 border-indigo-500 h-full">
          <div className="text-indigo-400 text-xs font-black uppercase mb-4 tracking-widest">Application / 场景赋能</div>
          <h3 className="text-3xl font-black mb-6">首站佛山 · 辐射全国</h3>
          <p className="text-slate-400 leading-relaxed">
            从佛山不锈钢集群起步，验证闭环后，快速迁移至全国有色金属及通用制造场景。
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Slide4: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`h-full overflow-auto slide-digital-eye transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: '#0a0a0a' }}>
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
      {/* Header */}
      <header className="mb-6 sm:mb-8 lg:mb-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 mb-3">
          <div className="w-8 h-[1px]" style={{ backgroundColor: '#10b981' }} />
          <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: '#10b981' }}>核心技术 I</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tighter mb-3 sm:mb-4">
          数字眼 <span style={{ color: '#10b981' }}>(机器视觉防呆模块)</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-sm sm:text-base lg:text-lg text-white/60 max-w-3xl leading-relaxed">
          工业级前馈感知系统：集成双层水冷装甲与 FPGA 边缘算力，实现极端环境下的物理级防呆锁死。
        </motion.p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
        <div className="md:col-span-2 lg:col-span-8"><DigitalEye /></div>
        <div className="md:col-span-2 lg:col-span-4">
          <TechCard delay={0.3} icon={Zap} title="50ms 极速拦截" subtitle="PLC 动力切断"
            description="FPGA 边缘算力即时判定，50 毫秒内运行切断底层 PLC 动力，实现最高级物理防呆锁死。"
            stats={[{ label: "响应延迟", value: "50ms" }, { label: "处理频率", value: "450MHz" }]}
            className="h-full">
            <LatencyTimeline />
          </TechCard>
        </div>
        <div className="md:col-span-1 lg:col-span-6">
          <TechCard delay={0.4} icon={Search} title="双维感知" subtitle="光谱 + GAN"
            description="光谱分析 10 秒无损快筛成分；GAN 网络对抗反光，管理物理环境。"
            stats={[{ label: "复合置信度", value: ">0.99" }, { label: "数据覆盖率", value: "99.9%" }]}>
            <SpectralChart />
          </TechCard>
        </div>
        <div className="md:col-span-1 lg:col-span-6">
          <TechCard delay={0.5} icon={Shield} title="工业级装甲" subtitle="终端设备集成"
            description="终端设备集成双层水冷与正压防尘技术，无惧 800°C 高温与车间粉尘。"
            stats={[{ label: "耐受温度", value: "800°C+" }, { label: "防护等级", value: "工业级" }]}>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: Clock, label: '24/7 全天候运行' },
                { icon: ShieldCheck, label: 'IP67 级防护' },
                { icon: Cpu, label: 'FPGA 核心' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                  <item.icon size={20} className="text-white/40 sm:w-6 sm:h-6" />
                  <span className="text-[10px] text-white/60 text-center font-mono">{item.label}</span>
                </div>
              ))}
            </div>
          </TechCard>
        </div>
      </div>
    </main>
  </div>
);

const temperatureChartData = [
  { time: "0s", temp: 550 }, { time: "10s", temp: 620 }, { time: "20s", temp: 780 },
  { time: "30s", temp: 920 }, { time: "40s", temp: 1050 }, { time: "50s", temp: 1078 },
  { time: "60s", temp: 1082 }, { time: "70s", temp: 1079 }, { time: "80s", temp: 1080 },
  { time: "90s", temp: 1081 },
];

const TemperatureChart = () => (
  <div className="w-full h-56 mt-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-4 relative overflow-hidden">
    <div className="flex justify-between items-start mb-3 relative z-10">
      <div>
        <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">固溶退火温控监测</h3>
        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">固溶退火实时监测</p>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-md">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-mono text-red-500 font-bold">1080°C 绝对红线</span>
      </div>
    </div>
    <div className="h-36 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={temperatureChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
          <YAxis domain={[400, 1200]} axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
          <Tooltip contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '8px', fontSize: '12px' }} itemStyle={{ color: '#ef4444' }} />
          <ReferenceLine y={1080} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'right', value: '1080°', fill: '#ef4444', fontSize: 10 }} />
          <Area type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorTemp)" dot={{ r: 3, fill: '#ef4444', strokeWidth: 0 }} activeDot={{ r: 5, fill: '#fff', stroke: '#ef4444', strokeWidth: 2 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const Slide5: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`h-full overflow-auto transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: '#09090b' }}>
    <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" style={{ position: 'absolute' }} />
    <main className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10 border-l-4 border-orange-500 pl-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">核心技术 II</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-3">
          节能心 <span className="text-zinc-500 font-light italic text-2xl lg:text-4xl ml-4">(突破极限的苏州方案)</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Engineering & HTAC */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 group">
          <div className="h-full bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Flame size={100} className="text-orange-500" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Thermometer className="text-orange-500" size={20} />
              </div>
              <h2 className="text-xl font-semibold">工程置换与 HTAC 升级</h2>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-1.5"><ChevronRight size={16} className="text-orange-500" /></div>
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-zinc-100 font-medium">协同姑苏科技：</span> 避开钢带高温氧化的冶金红线。不动炉体，仅升级换热预热段。
                </p>
              </div>
              <div className="bg-zinc-950/50 rounded-2xl p-5 border border-zinc-800/50">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">预热目标</span>
                  <span className="text-3xl font-mono text-orange-500">800°C+</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-orange-600 to-orange-400" />
                </div>
                <p className="mt-3 text-sm text-zinc-500">利用尾气将 <strong className="text-zinc-300">"助燃空气"</strong> 强行加热至极值，实现超高热回收率。</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Control */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-5">
          <div className="h-full bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Cpu className="text-emerald-500" size={20} />
              </div>
              <h2 className="text-xl font-semibold">AI 物理相变反控</h2>
            </div>
            <div className="space-y-6">
              <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <Activity size={14} className="text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-500">自研算法内核</span>
                </div>
                <p className="text-sm text-zinc-400">搭载动态空燃比算法，深度融合姑苏科技 <span className="text-zinc-200 font-mono">硬件底层</span> 系统。</p>
              </div>
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-emerald-500/20 rounded-full" />
                <div className="pl-5 space-y-3">
                  <div className="flex items-center gap-2"><Zap size={14} className="text-emerald-500" /><span className="text-sm text-zinc-300">全面接管阀门控制</span></div>
                  <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-500" /><span className="text-sm text-zinc-300">微秒级寻优算法</span></div>
                  <div className="flex items-center gap-2"><Target size={14} className="text-emerald-500" /><span className="text-sm text-zinc-300">1080°C 绝对红线监控</span></div>
                </div>
              </div>
              <TemperatureChart />
            </div>
          </div>
        </motion.div>

        {/* Commercial Impact */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="lg:col-span-12">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[100px] -z-10" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <TrendingDown className="text-emerald-400" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">商业成效</h2>
                </div>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  像精算师一样，在 <span className="text-orange-500 font-mono">1080°C</span> 绝对红线上微秒级寻优 <span className="text-zinc-100 font-semibold underline decoration-orange-500/50 underline-offset-8">"黄金交叉点"</span>。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-auto">
                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl text-center min-w-[200px]">
                  <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">节气空间</div>
                  <div className="text-4xl font-bold text-emerald-400 mb-1">20-25%</div>
                  <div className="text-zinc-500 text-sm">节气空间</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl text-center min-w-[200px]">
                  <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">年省气费</div>
                  <div className="text-4xl font-bold text-zinc-100 mb-1">400<span className="text-xl ml-1 text-zinc-500">万</span></div>
                  <div className="text-zinc-500 text-sm">单线年省气费</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
        <div>苏州方案 / HTAC 升级 / AI 相变控制</div>
        <div>© 2026 姑苏科技 x 自研算法内核</div>
      </motion.div>
    </main>
  </div>
);

export const Slide6: React.FC<SlideProps> = ({ isActive }) => {
  const [correctionData, setCorrectionData] = useState<any[]>([]);
  const [profitCounter, setProfitCounter] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setCorrectionData(prev => {
        const newData = [...prev, {
          time: new Date().toLocaleTimeString(),
          deviation: (Math.random() - 0.5) * 0.4,
          correction: (Math.random() - 0.5) * 0.4,
        }].slice(-20);
        return newData;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => { setProfitCounter(prev => prev + 1.2); }, 500);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className={`h-full overflow-auto slide-precision-hand transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: '#0A0A0B' }}>
      <div className="relative z-10 grid-bg flex flex-col p-4 md:p-6 gap-4 max-w-[1600px] mx-auto h-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-zinc-500 text-[10px] font-mono tracking-[0.2em] uppercase">精密制造系统</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter flex items-center gap-3">
              核心技术三：精密手
              <span className="text-[#00F0FF] text-base font-mono font-normal tracking-normal hidden md:inline">/ 精密手</span>
            </h1>
            <p className="text-zinc-500 mt-1 max-w-2xl text-sm">解锁海外高溢价订单，通过视觉引导与毫秒级算法，实现工业制造的极致精度。</p>
          </div>
          <div className="glass p-4 rounded-xl" style={{ backgroundColor: 'rgba(0,240,255,0.05)', borderColor: 'rgba(0,240,255,0.3)' }}>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-mono">海外溢价</div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono" style={{ color: '#00FF66' }}>+1164</span>
              <span className="text-xs text-zinc-500 font-mono">元/吨</span>
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
          {/* Left: Vision-Guided Welding */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden relative" style={{ backgroundColor: '#151619', border: '1px solid #2A2C32' }}>
              <div className="px-4 py-2 flex items-center justify-between" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderBottom: '1px solid #2A2C32' }}>
                <div className="flex items-center gap-2">
                  <Eye size={14} style={{ color: '#00F0FF' }} />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">视觉引导连续拼焊</span>
                </div>
                <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(0,255,102,0.5)' }} /><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(0,240,255,0.5)' }} /></div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Vision Feed */}
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden" style={{ border: '1px solid #2A2C32' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1" style={{ backgroundColor: '#2A2C32' }}>
                        <motion.div animate={{ x: [0, 5, -5, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0" style={{ backgroundColor: '#00F0FF', boxShadow: '0 0 15px rgba(0,240,255,0.8)' }} />
                      </div>
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-500/50 shadow-[0_0_10px_red]" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(0,240,255,0.3)' }}>
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#00F0FF' }} />
                      </div>
                    </div>
                    <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
                      <div className="flex justify-between items-start">
                        <div className="bg-black/60 backdrop-blur-md p-1.5 rounded text-[9px] font-mono" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                          <div className="flex items-center gap-1" style={{ color: '#00F0FF' }}>
                            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#00F0FF' }} />实时画面
                          </div>
                          <div className="text-white/60 mt-0.5">4K @ 120fps</div>
                        </div>
                        <div className="bg-black/60 backdrop-blur-md p-1.5 rounded text-[9px] font-mono text-right" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                          <div style={{ color: '#FFB800' }}>偏差：0.024mm</div>
                          <div style={{ color: '#00FF66' }}>延迟：0.8ms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Algorithm Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                        <Cpu size={16} style={{ color: '#00F0FF' }} />动态轨迹纠偏与能量控制
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">前置视觉死死盯住焊缝形变。算法实现毫秒级"打方向盘"与功率微调。</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="p-2 bg-white/5 rounded-lg" style={{ border: '1px solid #2A2C32' }}>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-mono">纠偏速度</div>
                        <div className="text-lg font-bold font-mono" style={{ color: '#00F0FF' }}>0.8<span className="text-xs text-zinc-500 ml-1">ms</span></div>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg" style={{ border: '1px solid #2A2C32' }}>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-mono">最大连续</div>
                        <div className="text-lg font-bold font-mono" style={{ color: '#00FF66' }}>2<span className="text-xs text-zinc-500 ml-1">km</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Real-time Chart */}
                <div className="mt-4 h-32 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={correctionData}>
                      <defs>
                        <linearGradient id="colorDev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.3}/><stop offset="95%" stopColor="#00F0FF" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2A2C32" vertical={false} />
                      <XAxis dataKey="time" hide /><YAxis hide domain={[-1, 1]} />
                      <Tooltip contentStyle={{ backgroundColor: '#151619', border: '1px solid #2A2C32', fontSize: '10px', fontFamily: 'monospace' }} />
                      <Area type="monotone" dataKey="deviation" stroke="#00F0FF" fillOpacity={1} fill="url(#colorDev)" strokeWidth={2} isAnimationActive={false} />
                      <Line type="monotone" dataKey="correction" stroke="#FFB800" strokeWidth={1} dot={false} isAnimationActive={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            {/* Profit Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(0,255,102,0.1), transparent)', border: '1px solid rgba(0,255,102,0.2)' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: '#00FF66' }}>单吨毛利增加 1164 元</h3>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">经济效益 / ROI</p>
                  </div>
                  <div className="text-3xl font-bold font-mono" style={{ color: '#00FF66' }}>+1164<span className="text-sm ml-1">元</span></div>
                </div>
              </div>
              <div className="p-4 rounded-xl flex flex-col justify-center items-center text-center" style={{ backgroundColor: '#151619', border: '1px solid #2A2C32' }}>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-mono">总增值</div>
                <div className="text-2xl font-bold font-mono" style={{ color: '#00FF66' }}>{profitCounter.toFixed(2)}<span className="text-xs text-zinc-500 ml-1">k</span></div>
              </div>
            </div>
          </div>

          {/* Right: Flexible Polishing */}
          <div className="lg:col-span-4">
            <div className="rounded-xl h-full flex flex-col" style={{ backgroundColor: '#151619', border: '1px solid #2A2C32' }}>
              <div className="px-4 py-2 flex items-center justify-between" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderBottom: '1px solid #2A2C32' }}>
                <div className="flex items-center gap-2">
                  <Target size={14} style={{ color: '#00F0FF' }} />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">360° 柔性抛光</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="relative aspect-square bg-black/40 rounded-xl mb-4 flex items-center justify-center overflow-hidden" style={{ border: '1px solid #2A2C32' }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-36 h-36 rounded-full flex items-center justify-center" style={{ border: '2px dashed rgba(0,240,255,0.2)' }}>
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }}
                      className="w-24 h-24 rounded-2xl flex items-center justify-center relative" style={{ backgroundColor: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.4)' }}>
                      <Box size={36} style={{ color: '#00F0FF' }} />
                      <div className="absolute top-0 left-0 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#00F0FF' }} />
                      <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full translate-x-1/2 translate-y-1/2" style={{ backgroundColor: '#00F0FF' }} />
                    </motion.div>
                  </motion.div>
                  <div className="absolute top-3 left-3 text-[10px] font-mono"><div style={{ color: '#00F0FF' }}>模式: 自动抛光 V2</div><div className="text-white/40">表面复杂度: 高</div></div>
                  <div className="absolute bottom-3 right-3 text-right text-[10px] font-mono"><div style={{ color: '#00FF66' }}>光洁度: 0.2μm Ra</div><div className="text-white/40">合规性: 100%</div></div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-lg" style={{ border: '1px solid #2A2C32' }}>
                    <h4 className="text-sm font-bold mb-1 flex items-center gap-2"><ShieldCheck size={14} style={{ color: '#00FF66' }} />复杂海外工艺品订单</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">引入视觉引导机器人，拿下复杂海外工艺品订单。实现全自动无死角柔性抛光。</p>
                  </div>
                  {[{ label: '表面覆盖率', value: '360.00°' }, { label: '人工干预', value: '0.0%' }, { label: '质量一致性', value: '99.98%' }].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-black/20 rounded" style={{ border: '1px solid #2A2C32' }}>
                      <span className="text-[10px] font-mono text-zinc-500">{item.label}</span>
                      <span className="text-xs font-mono" style={{ color: '#00F0FF' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const generateTimeSeries = (points: number, min: number, max: number) => {
  return Array.from({ length: points }, (_, i) => ({
    time: `${i}:00`,
    value: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
};

const SCGStatCard = ({ title, value, unit, icon: Icon, trend, color }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="p-3 rounded-xl flex flex-col justify-between h-28 relative overflow-hidden group"
    style={{ background: 'rgba(20, 20, 25, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
    <div className="flex justify-between items-start">
      <div className="p-1.5 rounded-lg bg-white/5"><Icon className={`w-4 h-4 ${color}`} /></div>
      {trend && <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-white/5 ${trend > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{trend > 0 ? '+' : ''}{trend}%</span>}
    </div>
    <div>
      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium mb-0.5">{title}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-xl font-bold tracking-tight">{value}</h3>
        <span className="text-[10px] text-slate-500 font-mono">{unit}</span>
      </div>
    </div>
  </motion.div>
);

export const Slide7: React.FC<SlideProps> = ({ isActive }) => {
  const [time, setTime] = useState(new Date());
  const [tempData, setTempData] = useState(generateTimeSeries(20, 1070, 1090));
  const [prodData, setProdData] = useState(generateTimeSeries(20, 33, 40));
  const [profit, setProfit] = useState(124.5);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setTime(new Date());
      setTempData(prev => [...prev.slice(1), { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 20) + 1070 }]);
      setProdData(prev => [...prev.slice(1), { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 7) + 33 }]);
      setProfit(p => +(p + (Math.random() - 0.45) * 0.5).toFixed(2));
    }, 3000);
    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div className={`h-full overflow-auto slide-scg transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: '#0a0a0c' }}>
      <div className="flex h-full w-full text-slate-200 overflow-hidden font-sans">
        {/* Compact Sidebar */}
        <aside className="w-48 flex-shrink-0 flex flex-col z-20" style={{ background: 'rgba(20, 20, 25, 0.8)', backdropFilter: 'blur(12px)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00f2ff, #7000ff)' }}>
                <Layers className="text-white w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-sm tracking-tight leading-none">数字孪生大脑</h1>
                <p className="text-[9px] font-mono mt-0.5 tracking-widest" style={{ color: '#00f2ff' }}>v2.4.0</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {[
              { label: '控制中心', icon: LayoutDashboard, active: true },
              { label: '全域物联感知', icon: Activity },
              { label: '核心 AI 模型池', icon: Cpu },
              { label: 'ROI 驾驶舱', icon: TrendingUp },
              { label: '数据中心', icon: Database },
              { label: '系统配置', icon: Settings },
            ].map((item) => (
              <div key={item.label} className={cn("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all",
                item.active ? "text-white" : "text-slate-500")}
                style={item.active ? { backgroundColor: 'rgba(0,242,255,0.1)', border: '1px solid rgba(0,242,255,0.2)' } : {}}>
                <item.icon className={cn("w-4 h-4", item.active ? "text-cyan-400" : "text-slate-600")} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <ShieldCheck className="text-emerald-500 w-4 h-4" />
              <div className="text-[9px]"><p className="text-emerald-500 font-bold uppercase">系统安全</p><p className="text-slate-400">节点正常</p></div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          {/* Header */}
          <header className="h-12 flex items-center justify-between px-6 z-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(20, 20, 25, 0.8)' }}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">实时流：12万吨产线</span></div>
              <div className="h-3 w-px bg-white/10" />
              <div className="text-[10px] font-mono text-slate-500">{time.toLocaleDateString()} | {time.toLocaleTimeString()}</div>
            </div>
          </header>

          {/* Dashboard */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {/* Stats Row */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <SCGStatCard title="单吨净利润" value={`¥${profit}`} unit="元" icon={TrendingUp} trend={4.2} color="text-cyan-400" />
              <SCGStatCard title="日均节能" value="1,240" unit="kW/h" icon={Zap} trend={12.5} color="text-amber-400" />
              <SCGStatCard title="缺陷率" value="0.02" unit="%" icon={AlertTriangle} trend={-18.4} color="text-rose-400" />
              <SCGStatCard title="生产负荷" value="94.8" unit="%" icon={Activity} trend={2.1} color="text-emerald-400" />
            </section>

            {/* Digital Twin & IoT */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Digital Twin */}
              <div className="lg:col-span-2 rounded-xl p-4 flex flex-col" style={{ background: 'rgba(20, 20, 25, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg" style={{ backgroundColor: 'rgba(0,242,255,0.1)' }}><Layers className="w-4 h-4" style={{ color: '#00f2ff' }} /></div>
                    <div><h2 className="text-sm font-bold tracking-tight">1:1 高保真数字孪生</h2><p className="text-[10px] text-slate-500">实时产线仿真 (12万吨)</p></div>
                  </div>
                </div>
                <div className="flex-1 relative bg-black/20 rounded-lg border border-white/5 overflow-hidden min-h-[160px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-xl h-32 relative">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
                      {[
                        { x: '5%', label: '原料', icon: Package, status: 'ok' },
                        { x: '16%', label: '酸洗', icon: Droplets, status: 'ok' },
                        { x: '27%', label: '冷轧', icon: Disc, status: 'active' },
                        { x: '38%', label: '退火', icon: Thermometer, status: 'active' },
                        { x: '49%', label: '矫直', icon: Maximize, status: 'ok' },
                        { x: '60%', label: '表面', icon: Sparkles, status: 'ok' },
                        { x: '71%', label: '裁切', icon: Scissors, status: 'ok' },
                        { x: '82%', label: '检验', icon: Eye, status: 'active' },
                        { x: '93%', label: '包装', icon: Box, status: 'ok' },
                      ].map((m, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                          style={{ left: m.x }} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                          <div className={cn("w-8 h-12 rounded-md border flex flex-col items-center justify-center gap-0.5 transition-all",
                            m.status === 'active' ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(0,242,255,0.2)]" : "border-white/10 bg-white/5")}>
                            <m.icon className={cn("w-4 h-4", m.status === 'active' ? "text-cyan-400 animate-pulse" : "text-slate-500")} />
                          </div>
                          <span className="text-[7px] font-mono mt-1 text-slate-500 whitespace-nowrap">{m.label}</span>
                        </motion.div>
                      ))}
                      {[...Array(6)].map((_, i) => (
                        <motion.div key={i} initial={{ left: '-5%', opacity: 0 }} animate={{ left: '105%', opacity: [0, 1, 1, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: i * 0.7, ease: 'linear' }}
                          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00f2ff', boxShadow: '0 0 8px rgba(0,242,255,1)' }} />
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 space-y-1">
                    {[{ l: '产量', v: '3.8 t/h' }, { l: '线速度', v: '38.5 m/min' }, { l: '温度', v: '1080°C' }].map((d, i) => (
                      <div key={i} className="p-1.5 rounded-md text-[9px]" style={{ background: 'rgba(20,20,25,0.8)', border: '1px solid rgba(0,242,255,0.2)' }}>
                        <p className="text-slate-500 uppercase">{d.l}</p><p className="font-mono" style={{ color: '#00f2ff' }}>{d.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* IoT Charts */}
              <div className="rounded-xl p-4 flex flex-col" style={{ background: 'rgba(20, 20, 25, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 rounded-lg bg-amber-500/10"><Activity className="w-4 h-4 text-amber-500" /></div>
                  <div><h2 className="text-sm font-bold">全域物联感知</h2><p className="text-[10px] text-slate-500">毫秒级抓取</p></div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="h-28 w-full">
                    <p className="text-[9px] text-slate-500 uppercase mb-1 flex justify-between"><span>温度曲线</span><span className="text-amber-500 font-mono">实时</span></p>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={tempData}>
                        <defs><linearGradient id="colorValue7" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/><stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/></linearGradient></defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} itemStyle={{ color: '#f59e0b' }} />
                        <Area type="monotone" dataKey="value" stroke="#f59e0b" fillOpacity={1} fill="url(#colorValue7)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="h-28 w-full">
                    <p className="text-[9px] text-slate-500 uppercase mb-1 flex justify-between"><span>产量 (t/h)</span><span className="font-mono" style={{ color: '#00f2ff' }}>稳定</span></p>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={prodData.map(d => ({ ...d, value: d.value / 10 }))}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} itemStyle={{ color: '#00f2ff' }} />
                        <Line type="stepAfter" dataKey="value" stroke="#00f2ff" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Model Pool & ROI Logs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
              <div className="rounded-xl p-4" style={{ background: 'rgba(20, 20, 25, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 rounded-lg" style={{ backgroundColor: 'rgba(112,0,255,0.1)' }}><Cpu className="w-4 h-4" style={{ color: '#7000ff' }} /></div>
                  <h2 className="text-sm font-bold">核心 AI 模型池</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { name: '退火炉空燃比优化', efficiency: 98.4, desc: '动态极值搜索' },
                    { name: '表面处理 GAN 识别', efficiency: 94.2, desc: '对抗式缺陷检测' },
                    { name: '冷轧多维轨迹纠偏', efficiency: 99.1, desc: '高精度轧制控制' },
                    { name: '成品率智能预测', efficiency: 92.5, desc: '全流程损耗分析' },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-xs font-semibold text-slate-200">{m.name}</span></div>
                        <span className="text-[9px] text-slate-500 mt-0.5">{m.desc}</span>
                      </div>
                      <div className="text-right"><div className="text-xs font-mono" style={{ color: '#00f2ff' }}>{m.efficiency}%</div><div className="text-[9px] text-slate-500">优化率</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(20, 20, 25, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10"><BarChart3 className="w-4 h-4 text-emerald-500" /></div>
                  <h2 className="text-sm font-bold">ROI 智能日志</h2>
                </div>
                <div className="space-y-2">
                  {[
                    { time: '14:22:01', event: '退火炉空燃比已优化', impact: '+¥12.4/吨', type: 'success' },
                    { time: '14:21:45', event: '表面处理发现轻微缺陷', impact: '已自动标记', type: 'info' },
                    { time: '14:20:30', event: '冷轧负荷波动', impact: '已自动平衡', type: 'warning' },
                    { time: '14:18:12', event: '酸洗液浓度补偿', impact: '+¥4.2/吨', type: 'success' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-slate-500">{log.time}</span>
                        <span className="text-xs text-slate-300">{log.event}</span>
                      </div>
                      <div className={cn("text-[9px] font-bold px-1.5 py-0.5 rounded-md",
                        log.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : log.type === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-cyan-500/10 text-cyan-400')}>
                        {log.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

const CAPEX_DATA = [
  { name: '激光装备 (B)', value: 900, color: '#10b981', icon: Zap, desc: '激光装备' },
  { name: '孪生底座 (D)', value: 650, color: '#3b82f6', icon: Layers, desc: '孪生底座' },
  { name: '热工技改 (C)', value: 500, color: '#f59e0b', icon: Flame, desc: '热工技改' },
  { name: '视觉算力 (A)', value: 150, color: '#8b5cf6', icon: Cpu, desc: '视觉算力' },
];

const TOTAL_CAPEX = 2200;

const ROI_TIMELINE = Array.from({ length: 18 }, (_, i) => {
  const month = i + 1;
  const recoveryPerMonth = TOTAL_CAPEX / 14;
  const cumulativeRecovery = Math.min(TOTAL_CAPEX, month * recoveryPerMonth);
  const recoveryVal = Math.round(cumulativeRecovery);
  const shouldShowLabel = month === 1 || month === 6 || month === 10 || month === 14 || month === 18;
  return { month: `M${month}`, recovery: recoveryVal, remaining: Math.max(0, Math.round(TOTAL_CAPEX - (month * recoveryPerMonth))), label: shouldShowLabel ? recoveryVal : null };
});

export const Slide8: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`h-full overflow-auto transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: '#050505' }}>
    <div className="p-4 md:p-6 font-sans text-zinc-300 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-emerald-500 mb-1">
            <Activity size={16} /><span className="text-xs font-mono tracking-widest uppercase">工业智能系统 v4.0</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            2200万 CAPEX <span className="text-zinc-500">投资回报分析</span>
          </motion.h1>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-2xl flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500"><TrendingUp size={20} /></div>
          <div><div className="text-xs text-zinc-500 uppercase font-mono">全案回收期</div><div className="text-xl font-bold text-white">14个月 <span className="text-sm font-normal text-emerald-500">极速回本</span></div></div>
        </motion.div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Composition + ROI */}
        <section className="lg:col-span-7 space-y-5">
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Target size={18} className="text-emerald-500" />CAPEX 构成分布</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={CAPEX_DATA} cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={5} dataKey="value">
                      {CAPEX_DATA.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {CAPEX_DATA.map((item, idx) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-500/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${item.color}20`, color: item.color }}><item.icon size={16} /></div>
                      <div><div className="text-sm font-medium text-zinc-200">{item.name}</div><div className="text-[9px] text-zinc-500 uppercase">{item.desc}</div></div>
                    </div>
                    <div className="text-right"><div className="text-base font-bold text-white">{item.value}万</div><div className="text-[9px] text-emerald-500 font-mono">{(item.value / 22).toFixed(1)}%</div></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Clock size={18} className="text-blue-500" />投资回收期预测</h2>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ROI_TIMELINE}>
                  <defs><linearGradient id="colorRecovery8" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/><stop offset="95%" stopColor="#10b981" stopOpacity={0}/></linearGradient></defs>
                  <XAxis dataKey="month" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="recovery" stroke="#10b981" fillOpacity={1} fill="url(#colorRecovery8)" strokeWidth={3}>
                    <LabelList dataKey="label" position="top" offset={12} fill="#10b981" fontSize={10} formatter={(val: number) => val ? `${val}万` : ''} />
                  </Area>
                  <Area type="monotone" dataKey="remaining" stroke="#3f3f46" fill="transparent" strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <span>第 0 月</span><span className="text-emerald-500 font-bold">盈亏平衡 (第 14 月)</span><span>第 18 月</span>
            </div>
          </div>
        </section>

        {/* Right: Highlights */}
        <section className="lg:col-span-5 space-y-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-zinc-900/40 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-emerald-500 rounded-xl text-black"><Zap size={24} /></div>
                <div className="text-right"><div className="text-xs text-emerald-400 font-mono uppercase">入门级解决方案</div><div className="text-3xl font-bold text-white">30万</div></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">轻量化模块</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">推出 30 万轻量模块，拦截一车混料或省下三个月外检费即可实现该模块独立回本。</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-emerald-400"><AlertCircle size={14} /><span>拦截混料/省外检费 = 独立回本</span></div>
                <div className="flex items-center gap-2 text-sm text-zinc-300"><DollarSign size={14} /><span>优化首年现金流结构</span></div>
              </div>
            </div>
          </motion.div>
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5">
            <h3 className="text-base font-semibold text-white mb-4">核心回本逻辑</h3>
            <div className="space-y-4">
              {[
                { label: '材料止损', desc: '消除剪样损耗，AOI 拦截废品', value: '¥ 300 万', color: 'bg-emerald-500' },
                { label: '能源节省', desc: '双蓄热改造节气 20% 以上', value: '¥ 400 万', color: 'bg-blue-500' },
                { label: '人工节省', desc: '包装/搬运/质检自动化减员约 20 人', value: '¥ 200 万', color: 'bg-amber-500' },
                { label: '增值溢价', desc: '7%比例产能做宽板带来毛利提升', value: '¥ 900 万', color: 'bg-purple-500' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start gap-3">
                  <div className="flex gap-3"><div className={`h-1 w-6 ${item.color} mt-2.5 rounded-full shrink-0`} /><div><div className="text-white font-medium text-sm">{item.label}</div><div className="text-xs text-zinc-500 leading-relaxed">{item.desc}</div></div></div>
                  <div className={`font-bold whitespace-nowrap text-sm ${item.color.replace('bg-', 'text-')}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);

export const Slide9: React.FC<SlideProps> = ({ isActive }) => (
  <div className="px-16 py-10 h-full flex flex-col items-center justify-center overflow-hidden">
    <div className="max-w-6xl w-full">
      {/* Badge */}
      <div className="inline-block px-5 py-1.5 mb-6 rounded-full glass border-cyan-500/40 text-cyan-400 font-bold text-xs tracking-widest uppercase">
        ● PROJECT STRATEGY 2026
      </div>

      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">项目当前进展与苏州产业链协同布局</h2>
      <p className="text-lg text-blue-400 mb-12 font-light max-w-4xl">
        以自研研发中心为"大脑"，联动苏州域内优质装备供应商，构建"算法驱动"+精密装备"的<br/>一体化智能制造生态。
      </p>

      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="w-10 h-1 bg-blue-500 rounded-full inline-block"></span>
          <h3 className="text-2xl font-black">核心进度里程碑</h3>
        </div>
        <span className="text-slate-500 text-sm font-mono">更新日期：2026年Q1</span>
      </div>

      {/* Timeline */}
      <div className="glass rounded-3xl border border-slate-700/50 p-12">
        <div className="relative flex items-center justify-between">
          {/* Progress line background */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2 rounded-full" style={{ top: '40px' }}></div>
          {/* Progress line filled */}
          <div className="absolute left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ top: '40px', width: '50%' }}></div>

          {/* Milestone 1 - Completed */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-mono rounded border border-slate-700 mb-3">2026 Q1</span>
            <h4 className="text-xl font-black text-white mb-2">战略签约</h4>
            <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">与佛山头部不锈钢企业正式签署项目合作框架协议</p>
          </div>

          {/* Milestone 2 - Current */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-pulse-soft">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold rounded border border-cyan-500/40 mb-3">2026 Q1 (当前)</span>
            <h4 className="text-xl font-black text-white mb-2">研发投入</h4>
            <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">核心算法逻辑模拟与系统架构设计正式开启</p>
          </div>

          {/* Milestone 3 - Future */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            <span className="px-3 py-1 bg-slate-800 text-slate-500 text-xs font-mono rounded border border-slate-700 mb-3">下一步计划</span>
            <h4 className="text-xl font-black text-white mb-2">集成测试</h4>
            <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">锁走苏州核心装备供应商，进入系统集成与产线实测阶段</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide10: React.FC<SlideProps> = ({ isActive }) => (
  <div className="px-16 py-10 h-full flex flex-col overflow-hidden">
    <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-1 bg-blue-500 rounded-full inline-block"></span>
            <h2 className="text-3xl font-black">苏州市域"大脑+躯干"协同体系</h2>
          </div>
          <p className="text-slate-500 text-sm ml-[52px]">供应商谈判进行中 · 涵盖苏州全域核心制造集群</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-slate-400 text-sm">中心研发</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-500"></span>
            <span className="text-slate-400 text-sm">拟邀供应商</span>
          </div>
        </div>
      </div>

      {/* Main diagram */}
      <div className="glass rounded-3xl border border-slate-700/50 p-10 flex-1 relative">
        <div className="flex h-full">
          {/* Left panel - Core capabilities */}
          <div className="w-[220px] mr-8 flex-shrink-0">
            <div className="glass rounded-2xl border border-slate-700/50 p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <h4 className="text-blue-400 font-black text-sm">核心枢纽职能</h4>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-white font-black text-sm">AI 视觉算法</p>
                  <p className="text-slate-500 text-xs">Computer Vision</p>
                </div>
                <div>
                  <p className="text-white font-black text-sm">HTAC 节能调控算法</p>
                  <p className="text-slate-500 text-xs">Energy Optimization</p>
                </div>
                <div>
                  <p className="text-white font-black text-sm">SCG 数字化管控平台</p>
                  <p className="text-slate-500 text-xs">Smart Control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Brain + Supplier nodes */}
          <div className="flex-1 relative flex items-center justify-center">
            {/* Central brain node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-40 h-40 rounded-2xl border-2 border-blue-500/60 bg-slate-900/80 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <span className="text-blue-400 text-[10px] font-mono tracking-widest mb-1">THE BRAIN / 大脑</span>
                <span className="text-white text-lg font-black">自研研发中心</span>
                <span className="text-slate-500 text-xs mt-1">苏州</span>
                <div className="flex gap-1.5 mt-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </div>
              </div>
            </div>

            {/* Supplier nodes positioned around the brain */}
            {/* Top-left: 自动化与流转 */}
            <div className="absolute left-[10%] top-[10%]">
              <div className="glass rounded-xl border border-yellow-500/40 p-4 min-w-[140px] text-center relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <h5 className="text-yellow-400 font-black text-xs mb-2">自动化与流转</h5>
                <p className="text-slate-400 text-xs">博众精工</p>
                <p className="text-slate-400 text-xs">汇川技术</p>
              </div>
              {/* Dashed line to center */}
              <div className="absolute right-[-40px] bottom-[-40px] w-[60px] h-[60px] border-r-2 border-b-2 border-dashed border-yellow-500/30 rounded-br-xl"></div>
            </div>

            {/* Top-right: 在线质控模块 */}
            <div className="absolute right-[10%] top-[10%]">
              <div className="glass rounded-xl border border-slate-600/60 p-4 min-w-[140px] text-center relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-slate-500/60"></div>
                <h5 className="text-blue-400 font-black text-xs mb-2">在线质控模块</h5>
                <p className="text-slate-400 text-xs">天瑞仪器</p>
                <p className="text-slate-400 text-xs">天准科技</p>
              </div>
              <div className="absolute left-[-40px] bottom-[-40px] w-[60px] h-[60px] border-l-2 border-b-2 border-dashed border-slate-500/30 rounded-bl-xl"></div>
            </div>

            {/* Bottom-left: 绿色热能模块 */}
            <div className="absolute left-[10%] bottom-[10%]">
              <div className="glass rounded-xl border border-slate-600/60 p-4 min-w-[140px] text-center relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-slate-500/60"></div>
                <h5 className="text-blue-400 font-black text-xs mb-2">绿色热能模块</h5>
                <p className="text-slate-400 text-xs">新长光热能</p>
              </div>
              <div className="absolute right-[-40px] top-[-40px] w-[60px] h-[60px] border-r-2 border-t-2 border-dashed border-slate-500/30 rounded-tr-xl"></div>
            </div>

            {/* Bottom-right: 精密加工模块 */}
            <div className="absolute right-[10%] bottom-[10%]">
              <div className="glass rounded-xl border border-slate-600/60 p-4 min-w-[140px] text-center relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-slate-500/60"></div>
                <h5 className="text-blue-400 font-black text-xs mb-2">精密加工模块</h5>
                <p className="text-slate-400 text-xs">德龙激光</p>
                <p className="text-slate-400 text-xs">领创激光</p>
              </div>
              <div className="absolute left-[-40px] top-[-40px] w-[60px] h-[60px] border-l-2 border-t-2 border-dashed border-slate-500/30 rounded-tl-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide11: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black mb-16 italic">团队基因：懂产业的投研战友</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="glass p-10 rounded-[48px] relative overflow-hidden group border border-slate-800 hover:border-blue-500/30 transition-all">
        <div className="absolute top-0 right-0 p-12 text-9xl opacity-[0.03] font-black italic select-none">CEO</div>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4">
             <h3 className="text-5xl font-black">周君</h3>
             <span className="text-blue-400 font-bold">创始人 / CEO</span>
          </div>
          <p className="text-slate-200 font-mono text-lg font-bold mb-8 italic">理工硕士 · 前百亿级私募基金经理</p>
          <p className="text-slate-400 leading-relaxed text-xl font-light">
            具备顶级产业风控视野与资本运作经验。以投资人的财务严谨度筛选供应链，确保每一分投入都有可量化的 ROI。
          </p>
        </div>
      </div>
      <div className="glass p-10 rounded-[48px] relative overflow-hidden group border border-slate-800 hover:border-indigo-500/30 transition-all">
        <div className="absolute top-0 right-0 p-12 text-9xl opacity-[0.03] font-black italic select-none">CTO</div>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4">
            <h3 className="text-5xl font-black">陈放</h3>
            <span className="text-indigo-400 font-bold">联合创始人 / CTO</span>
          </div>
          <p className="text-slate-200 font-mono text-lg font-bold mb-8 italic">SSE 硕士 · AI 与嵌入式专家</p>
          <p className="text-slate-400 leading-relaxed text-xl font-light">
            曾任科技一级私募投资总监，主导多家独角兽项目。致力于将顶级 AI 算法转化为产线端每一行高可靠代码。
          </p>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center">
       <div className="inline-block px-10 py-5 glass rounded-full border-dashed border-blue-500/40">
          <p className="text-xl italic text-slate-300">
             "两位战友结识于投资一线，决定由'看项目'转为'做项目'，深耕工业底层。"
          </p>
       </div>
    </div>
  </div>
);

export const Slide12: React.FC<SlideProps> = ({ isActive }) => (
  <div className="px-16 py-10 h-full flex flex-col items-center justify-center text-center overflow-hidden">
    <div className="max-w-5xl w-full">
      <h2 className="text-6xl font-black mb-4 tracking-tighter italic gradient-text">苏州研发 · 赋能全国</h2>
      <p className="text-xl text-slate-400 mb-8 font-light">打造"苏州硬件 + 自研算法"的组合拳，定义新质生产力</p>

      {/* Dual-node connection diagram */}
      <div className="glass rounded-3xl border border-blue-500/20 p-8 mb-6">
        <div className="flex items-center justify-center gap-8">
          {/* Suzhou node */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-blue-500/60 bg-blue-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path></svg>
            </div>
            <span className="text-xl font-black text-white">苏州相城</span>
            <span className="px-3 py-1 bg-slate-800/80 text-slate-400 text-xs font-mono rounded border border-slate-700">研发大脑 + 供应链中心</span>
          </div>

          {/* Connection arrows */}
          <div className="flex flex-col items-center gap-1 px-4">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">{'<'}---</span>
              <span className="px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded text-xs font-mono text-slate-400">数据回流 DATA_FEEDBACK</span>
              <span className="text-blue-500">---{'>'}</span>
            </div>
          </div>

          {/* Foshan node */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-indigo-500/60 bg-indigo-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path><circle cx="12" cy="10" r="1" fill="#818cf8"></circle></svg>
            </div>
            <span className="text-xl font-black text-white">佛山/全国</span>
            <span className="px-3 py-1 bg-slate-800/80 text-slate-400 text-xs font-mono rounded border border-slate-700">应用场景 + 数据反馈</span>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-6 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
          <p className="text-slate-400 italic text-sm">"根植苏州高端制造土壤，通过算法赋能，收割全国传统产业升级红利。"</p>
        </div>
      </div>

      {/* Two bottom cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
        <div className="glass p-8 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
          <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full inline-block"></span>
            产业链深度协同
          </h4>
          <p className="text-slate-400 text-base mb-5">核心硬件 <span className="text-white font-black text-2xl">95%</span> 采购自苏州本地顶尖供应商，如光谱、激光、热工、工业控制等领域领军企业。</p>
          <div className="flex flex-wrap gap-2">
            {['光谱', '激光', '热工', '工业控制'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-500 text-[10px] font-bold rounded border border-slate-700">{tag}</span>
            ))}
          </div>
        </div>
        <div className="glass p-8 rounded-2xl border border-indigo-500/30">
          <h4 className="text-2xl font-black mb-4 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-indigo-500 rounded-full inline-block"></span>
            全国落户规划
          </h4>
          <p className="text-slate-400 text-base leading-relaxed">
            在 <span className="text-white font-black">相城</span> 设立算法研发总部，利用苏州最优数字经济环境，辐射全国万亿级有色金属加工市场。
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="group cursor-pointer pt-4">
        <h3 className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-700 italic">期待与各位共建数字工业未来</h3>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-5 shadow-[0_0_20px_rgba(37,99,235,0.8)] group-hover:w-60 transition-all duration-700"></div>
        <p className="mt-5 text-slate-500 font-mono text-xs tracking-[0.5em] uppercase">Suzhou Algorithm Center / National Industrial Node</p>
      </div>
    </div>
  </div>
);

const FINANCIAL_DATA = [
  { year: '第一年', revenue: 1000, cogs: 650, grossProfit: 350, grossMargin: 35.0, opex: 270, netProfit: 80, netMargin: 8.0, arrRatio: 15 },
  { year: '第二年', revenue: 2800, cogs: 1624, grossProfit: 1176, grossMargin: 42.0, opex: 650, netProfit: 526, netMargin: 18.8, arrRatio: 35 },
  { year: '第三年', revenue: 6500, cogs: 3380, grossProfit: 3120, grossMargin: 48.0, opex: 1200, netProfit: 1920, netMargin: 29.5, arrRatio: 60 },
];

const formatCurrency = (value: number) => '¥' + new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 0 }).format(value);

export const Slide13: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`h-full overflow-auto slide-financial transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
    style={{ backgroundColor: '#020617', backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(30, 58, 138, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(15, 23, 42, 0.2) 0%, transparent 50%)' }}>
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto space-y-5">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">财务预测与商业扩张模型</h1>
          <p className="mt-2 text-slate-400 max-w-2xl text-base">从标杆落地到算法订阅的演进路径：三年损益核心指标预测与毛利结构优化分析。</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20 flex items-center gap-1.5">
            <ShieldCheck size={14} />首年即盈利
          </div>
          <div className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium border border-indigo-500/20 flex items-center gap-1.5">
            <Zap size={14} />ARR 驱动增长
          </div>
        </div>
      </header>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: '落地即盈利', desc: <>第一年凭借 <span className="font-semibold text-white">1000万</span> 真实订单跑通标杆，产生 <span className="font-semibold text-white">80万</span> 净利润。</>, icon: ShieldCheck, color: 'emerald', tag: '安全' },
          { title: '毛利率攀升', desc: <>随着软件占比提升，综合毛利稳步跨越 <span className="font-semibold text-white">45%</span>。从单一交付向 ARR 演进。</>, icon: TrendingUp, color: 'indigo', tag: '增长' },
          { title: '规模化效应', desc: <>第三年营收目标 <span className="font-semibold text-white">6500万</span>，净利润率提升至 <span className="font-semibold text-white">29.5%</span>。</>, icon: Rocket, color: 'amber', tag: '规模' },
        ].map((item, i) => (
          <div key={i} className={`glass-card p-5 border-l-4 border-l-${item.color}-500`}>
            <div className="flex justify-between items-start mb-3">
              <div className={`p-1.5 bg-${item.color}-500/10 text-${item.color}-400 rounded-lg`}><item.icon size={20} /></div>
              <span className={`text-[10px] font-bold text-${item.color}-400 bg-${item.color}-500/10 px-1.5 py-0.5 rounded`}>{item.tag}</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="glass-card p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3">
          <div><h2 className="text-xl font-bold text-white">营收增长与毛利演进</h2><p className="text-slate-400 text-sm">双轴图</p></div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-indigo-500 rounded-sm"></div><span className="text-xs text-slate-400">营收 (万元)</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-rose-500 rounded-full"></div><span className="text-xs text-slate-400">毛利率 (%)</span></div>
          </div>
        </div>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={FINANCIAL_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} tickFormatter={(v) => formatCurrency(v)} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} tickFormatter={(v) => `${v}%`} domain={[0, 60]} />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B' }} formatter={(value: any, name: string) => {
                if (name === 'revenue') return [formatCurrency(value as number), '总营收'];
                if (name === 'grossMargin') return [`${value}%`, '毛利率'];
                return [value, name];
              }} />
              <Bar yAxisId="left" dataKey="revenue" name="revenue" radius={[6, 6, 0, 0]} barSize={50}>
                {FINANCIAL_DATA.map((_, index) => (<Cell key={`cell-${index}`} fill={index === 2 ? '#6366F1' : '#4F46E5'} fillOpacity={0.8} />))}
              </Bar>
              <Line yAxisId="right" type="monotone" dataKey="grossMargin" name="grossMargin" stroke="#F43F5E" strokeWidth={4}
                dot={{ r: 6, fill: '#F43F5E', strokeWidth: 2, stroke: '#0F172A' }} activeDot={{ r: 8, strokeWidth: 0 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* P&L Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><div className="p-1.5 bg-slate-800 rounded-lg text-slate-400"><BarChart3 size={16} /></div><h2 className="text-lg font-bold text-white">三年损益表预测 (P&L)</h2></div>
          <div className="text-[10px] text-slate-500 font-mono">单位: 万元</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="bg-slate-800/20">
              <th className="table-header w-1/4">财务指标</th>
              {FINANCIAL_DATA.map(d => (<th key={d.year} className="table-header">{d.year}</th>))}
            </tr></thead>
            <tbody>
              <tr><td className="table-cell font-semibold text-white">营业总收入</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell text-indigo-400 font-bold">{formatCurrency(d.revenue)}</td>))}</tr>
              <tr className="bg-indigo-500/5"><td className="table-cell pl-8 text-slate-500 italic">ARR 订阅占比</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell text-indigo-400 font-mono text-xs">{d.arrRatio}%</td>))}</tr>
              <tr><td className="table-cell text-slate-400">营业成本 (COGS)</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell text-slate-500">{formatCurrency(d.cogs)}</td>))}</tr>
              <tr className="table-row-highlight"><td className="table-cell">毛利润</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell">{formatCurrency(d.grossProfit)}</td>))}</tr>
              <tr><td className="table-cell text-slate-400">毛利率</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell"><span className={cn("text-xs px-1.5 py-0.5 rounded-full font-bold", d.grossMargin > 45 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-slate-800 text-slate-400 border border-slate-700")}>{d.grossMargin}%</span></td>))}</tr>
              <tr><td className="table-cell text-slate-400">期间费用 (OpEx)</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell text-slate-500">{formatCurrency(d.opex)}</td>))}</tr>
              <tr className="table-row-highlight border-t-2 border-slate-700"><td className="table-cell text-emerald-400">净利润</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell text-emerald-400">{formatCurrency(d.netProfit)}</td>))}</tr>
              <tr><td className="table-cell text-slate-400">净利率</td>{FINANCIAL_DATA.map(d => (<td key={d.year} className="table-cell font-mono text-emerald-400">{d.netMargin}%</td>))}</tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Expansion Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-4"><div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400"><PieChartIcon size={16} /></div><h2 className="text-lg font-bold text-white">收入结构演进</h2></div>
          <div className="space-y-4">
            {FINANCIAL_DATA.map((d) => (
              <div key={d.year} className="space-y-1.5">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-400">{d.year}</span>
                  <span className="text-indigo-400">订阅 {d.arrRatio}% / 交付 {100 - d.arrRatio}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-indigo-500" style={{ width: `${d.arrRatio}%` }}></div>
                  <div className="h-full bg-slate-700" style={{ width: `${100 - d.arrRatio}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
            <p className="text-[10px] text-slate-500 leading-relaxed italic">* 第三年订阅制收入 (ARR) 将成为核心增长引擎，带动边际成本大幅下降。</p>
          </div>
        </div>
        <div className="glass-card p-5 bg-indigo-950/20 border-indigo-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 blur-3xl rounded-full -mr-24 -mt-24"></div>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10"><ArrowUpRight className="text-emerald-400" />商业扩张逻辑</h2>
          <div className="space-y-4 relative z-10">
            {[
              { num: 1, title: '标杆跑通 (第一年)', desc: '聚焦头部KA客户，深度定制化交付，验证商业闭环。', color: 'emerald' },
              { num: 2, title: '产品标准化 (第二年)', desc: '沉淀通用AI模块，降低单客交付成本，毛利率提升至 42%。', color: 'indigo' },
              { num: 3, title: 'ARR 规模化 (第三年)', desc: '全面转向订阅制，软件占比超 60%，利润爆发式增长。', color: 'purple' },
            ].map((s) => (
              <div key={s.num} className="flex gap-3">
                <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-${s.color}-500/20 border border-${s.color}-500/50 flex items-center justify-center text-${s.color}-400 font-bold text-sm`}>{s.num}</div>
                <div><h4 className="font-bold text-slate-100 text-sm">{s.title}</h4><p className="text-slate-400 text-xs mt-0.5">{s.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">扩张目标</span>
              <span className="text-emerald-400 font-mono text-base">6.5倍 营收增长</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
