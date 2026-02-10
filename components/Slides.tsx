
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { SlideProps } from '../types';
import { CheckCircle, AlertTriangle, Zap, ArrowRight } from './Icons';

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
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
        不锈钢全产业链<br/>
        <span className="gradient-text">绿色智能制造示范项目</span>
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
              <span className="text-slate-400 text-base font-medium">前百亿基金经理</span>
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
      “在印尼调研镍矿期间的深度交流，让我们意识到实业利润正被陈旧工艺无声吞噬。”
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
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black mb-12">技术模块一：“数字眼”——全维质控系统</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="glass p-10 rounded-3xl border-l-8 border-cyan-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic">XRF</div>
        <h3 className="text-3xl font-bold mb-8 text-cyan-400">成分智能管控</h3>
        <div className="space-y-8 relative z-10">
          <div className="flex items-center gap-6">
            <div className="text-5xl font-black text-white">R² {'>'} 0.99</div>
            <div className="text-slate-400 border-l border-slate-800 pl-6 py-1 italic">拟合优度达实验室级精度</div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="mt-1"><CheckCircle /></div>
              <p className="text-slate-400 text-lg">**10秒** 无损快筛：彻底替代昂贵耗时的外送剪样检测。</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1"><CheckCircle /></div>
              <p className="text-slate-400 text-lg">全自动系别识别：秒级锁定 200/300/400 系材质。</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="glass p-10 rounded-3xl border-l-8 border-indigo-500 relative">
        <h3 className="text-3xl font-bold mb-8 text-indigo-400">瑕疵智能拦截</h3>
        <div className="space-y-6">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-white mb-2 italic">攻克镜面反射干扰</h4>
            <p className="text-sm text-slate-400 leading-relaxed">针对不锈钢镜面反射，定制高频条形光源算法，实现划痕、坑点的高准确率检测。</p>
          </div>
          <div className="flex justify-between items-center px-4">
             <div className="text-center">
                <div className="text-2xl font-black text-indigo-400">3 道</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">视觉防线</div>
             </div>
             <div className="text-center">
                <div className="text-2xl font-black text-indigo-400">&lt; 50ms</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">响应时延</div>
             </div>
             <div className="text-center">
                <div className="text-2xl font-black text-indigo-400">99.8%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">检出率</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide5: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-5xl font-black">技术模块二：“节能心”——HTAC 绿色热能</h2>
        <p className="text-slate-400 text-xl mt-3 font-light">针对 1050℃ 固溶/热轧工艺的底层重构</p>
      </div>
      <div className="text-right glass px-10 py-6 rounded-3xl border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
        <span className="text-6xl font-black text-green-400 tracking-tighter">20-25%</span>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mt-1">额外节气率</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="h-96 glass p-10 rounded-[40px] border-slate-800 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={energyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} />
            <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
            <Tooltip cursor={{fill: '#ffffff08'}} contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }} />
            <Bar dataKey="consumption" name="能效对比" radius={[12, 12, 0, 0]}>
              {energyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#475569' : '#22c55e'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-white/[0.02] pointer-events-none select-none">ENERGY</div>
      </div>
      <div className="space-y-8">
        <div className="glass p-8 rounded-3xl border-l-8 border-green-500">
          <h4 className="font-bold text-2xl mb-3">陶瓷蓄热体黑科技</h4>
          <p className="text-slate-400 leading-relaxed text-lg">利用陶瓷蓄热体将助燃空气预热至 <span className="text-green-400 font-black">800℃</span> 以上，突破行业 600℃ 瓶颈。</p>
        </div>
        <div className="glass p-8 rounded-3xl border-l-8 border-blue-500">
          <h4 className="font-bold text-2xl mb-3">年度财务价值</h4>
          <p className="text-slate-400 leading-relaxed text-lg italic">
            单条生产线年均节省燃气费约 <span className="text-white font-black text-3xl">400 万</span> 元，直接计入净利润。
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Slide6: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black mb-16">技术模块三：“精密手”——拼焊与智后道</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="flex flex-col justify-center space-y-8">
        <div>
          <h3 className="text-3xl font-black mb-6 text-indigo-400">Coil-to-Coil 在线连续拼焊</h3>
          <p className="text-slate-400 leading-relaxed text-xl">
            解决公里级长距离生产痛点，攻克高反材质激光焊接稳定性，实现“变窄为宽”。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="glass p-8 rounded-3xl text-center border-t-4 border-indigo-500">
            <div className="text-slate-500 text-[10px] font-black uppercase mb-1">单吨毛利提升</div>
            <div className="text-4xl font-black">¥1,164</div>
          </div>
          <div className="glass p-8 rounded-3xl text-center border-t-4 border-blue-500">
             <div className="text-slate-500 text-[10px] font-black uppercase mb-1">无缝增宽率</div>
             <div className="text-4xl font-black">100%</div>
          </div>
        </div>
        <div className="glass p-6 rounded-2xl border-dashed border-slate-700">
           <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Zap /> 无人化包装矩阵</h4>
           <p className="text-sm text-slate-500">机器视觉引导的成品下线包装，实现“成品即入库”的数字化衔接。</p>
        </div>
      </div>
      <div className="relative glass rounded-[40px] p-8 border-2 border-slate-800 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
         <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="flex gap-4">
              <div className="w-16 h-40 bg-slate-800/50 rounded-xl border border-white/5 flex items-center justify-center">
                <span className="rotate-90 text-[10px] font-mono text-slate-600">NARROW_COIL</span>
              </div>
              <div className="w-16 h-40 bg-slate-800/50 rounded-xl border border-white/5 flex items-center justify-center">
                 <span className="rotate-90 text-[10px] font-mono text-slate-600">NARROW_COIL</span>
              </div>
            </div>
            <ArrowRight />
            <div className="w-48 h-44 bg-indigo-600/20 border-2 border-indigo-500/50 rounded-2xl flex items-center justify-center relative shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
               <div className="text-center">
                 <div className="text-xs font-black text-white tracking-widest uppercase mb-1">Wide Hybrid</div>
                 <div className="text-[10px] font-mono text-indigo-400">LASER_SEAM_ACTIVE</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
);

export const Slide7: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl font-black mb-12 leading-[1.2]">
      自研 SCG 智能管控系统：<br/>
      <span className="text-blue-500 text-3xl md:text-4xl font-bold">融合投研敏锐度与自研 AI 算法，定义不锈钢行业的“数字大脑”</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-2 glass rounded-3xl p-10 border border-slate-800">
         <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 italic">
              SCG 智能管控平台
            </h3>
            <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-mono font-bold border border-blue-500/20">AGENT_01: MTC_VALIDATOR</span>
         </div>
         <div className="space-y-6">
            <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
              <h4 className="font-bold text-white mb-4">OCR 智能解析 MTC 质保书</h4>
              <div className="flex items-center gap-8 font-mono">
                <div className="text-center p-4 glass rounded-xl flex-1 border-white/5">
                  <div className="text-[10px] text-slate-500 mb-1">PDF/SCAN</div>
                  <div className="text-sm font-bold text-slate-300">原始单据</div>
                </div>
                <div className="text-blue-500 animate-pulse">➔</div>
                <div className="text-center p-4 bg-blue-500/10 rounded-xl flex-1 border border-blue-500/20">
                  <div className="text-[10px] text-blue-400 mb-1">AI_EXTRACTION</div>
                  <div className="text-sm font-bold text-blue-200">结构化参数</div>
                </div>
                <div className="text-green-500 animate-pulse">➔</div>
                <div className="text-center p-4 bg-green-500/10 rounded-xl flex-1 border border-green-500/20">
                  <div className="text-[10px] text-green-400 mb-1">VERIFIED</div>
                  <div className="text-sm font-bold text-green-200">三方交叉比对</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 glass p-6 rounded-2xl border-t-2 border-blue-500">
                <h5 className="font-bold text-sm mb-1 uppercase">AI 基因降维打击</h5>
                <p className="text-xs text-slate-500">将大模型处理序列数据的逻辑应用于复杂工业时序协议解析。</p>
              </div>
              <div className="flex-1 glass p-6 rounded-2xl border-t-2 border-indigo-500">
                <h5 className="font-bold text-sm mb-1 uppercase">全流程数据闭环</h5>
                <p className="text-xs text-slate-500">从入库快筛到末端交付，每一卷钢都有不可篡改的“数字身份证”。</p>
              </div>
            </div>
         </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="glass p-10 rounded-3xl h-full flex flex-col justify-center items-center text-center border-b-8 border-blue-500">
           <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
           </div>
           <h4 className="text-2xl font-black mb-4">数字化大脑</h4>
           <p className="text-slate-500 text-sm leading-relaxed">
             自 ChatGPT 诞生起深度研究模型逻辑，实现从文字处理到物理工厂控制的完美跨越。
           </p>
        </div>
      </div>
    </div>
  </div>
);

export const Slide8: React.FC<SlideProps> = ({ isActive }) => (
  <div className="p-16 h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black mb-12">商业模式：轻量化切入与极速 ROI</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="h-96 glass p-8 rounded-3xl border-slate-800">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={roiData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }} />
            <Area type="monotone" dataKey="return" name="累计收益" stroke="#3b82f6" fillOpacity={1} fill="url(#colorReturn)" strokeWidth={4} />
            <Area type="monotone" dataKey="investment" name="剩余投入" stroke="#ef4444" fill="#ef444411" strokeWidth={2} strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-center text-[10px] text-slate-500 mt-6 font-mono tracking-widest">14 MONTHS PAYBACK CYCLE PROJECTED (10K RMB)</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="glass p-10 rounded-3xl border-l-8 border-blue-500 hover:bg-blue-500/5 transition-colors group">
          <h4 className="text-2xl font-black mb-4 text-blue-400 italic">入门级模块：只需 30 万</h4>
          <p className="text-slate-400 text-lg leading-relaxed">
            无需全产线改造。仅投入成分管控模块，<span className="text-white font-bold">拦截一车混料</span> 或 <span className="text-white font-bold">省下 3 个月外检费</span> 即可实现回本。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="glass p-8 rounded-3xl text-center border-t-2 border-slate-700">
            <div className="text-slate-500 text-[10px] font-black uppercase mb-1">成本对比</div>
            <div className="text-3xl font-black text-red-500">-70%</div>
            <div className="text-[10px] text-slate-500 uppercase">Vs 进口设备</div>
          </div>
          <div className="glass p-8 rounded-3xl text-center border-t-2 border-slate-700">
             <div className="text-slate-500 text-[10px] font-black uppercase mb-1">预估回本期</div>
             <div className="text-3xl font-black text-green-400">14月</div>
             <div className="text-[10px] text-slate-500 uppercase">全案回报期</div>
          </div>
        </div>
      </div>
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
                <p className="text-slate-400 text-xs">天隆科技</p>
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
                <p className="text-slate-400 text-xs">鑫龙激光</p>
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
             “两位战友结识于投资一线，决定由‘看项目’转为‘做项目’，深耕工业底层。”
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
