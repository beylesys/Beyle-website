import { Rocket, Zap, Shield, FlaskConical, Users, Globe } from 'lucide-react'

const values = [
  { Icon: Zap, label: 'Speed' },
  { Icon: Shield, label: 'Security' },
  { Icon: FlaskConical, label: 'Research' },
  { Icon: Users, label: 'Proof' },
  { Icon: Rocket, label: 'Craft' },
  { Icon: Globe, label: 'Simplicity' },
]

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#020a0d] transition-colors duration-700"
    >
      {/* 1. REFINED ATMOSPHERIC BACKGROUND (Lower Depth) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none">
        {/* Desaturated Linear Base - Shifted from Cyan to a deep Slate/Teal mix */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d0e] via-[#020a0d] to-[#020a0d]" />
        
        {/* Dither/Noise layer remains to prevent banding */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
        
        {/* Reduced Radial Glow - Lower opacity (0.07) and tighter spread */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(6,182,212,0.07),_transparent_60%)]" />
      </div>

      {/* 2. THE DOT GRID - Fainter for a cleaner look */}
      <div
        className="absolute inset-0 dot-grid opacity-[0.12] dark:opacity-[0.04] mix-blend-screen"
        style={{ 
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className="mb-16 sm:mb-20 border-l-2 border-cyan-500/50 pl-6 sm:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500/60 mb-4 block">
            The Foundation
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-slate-950 dark:text-white max-w-2xl">
              Built by engineers,<br />
              <span className="italic font-serif gradient-text">obsessed</span> with craft.
            </h2>
            <p className="text-slate-500 dark:text-slate-500 max-w-sm text-base leading-relaxed font-medium">
              We operate as a software lab. From our base in <span className="text-slate-900 dark:text-white">Mangalore</span>, we build the tools that power modern enterprise workflows.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] sm:auto-rows-[220px] gap-4">

          {/* Main Story Cell - Ultra-minimal tint */}
          <div className="col-span-1 md:col-span-3 row-span-2 p-8 sm:p-10 flex flex-col justify-between rounded-2xl border border-slate-200/60 dark:border-white/[0.03] bg-white/40 dark:bg-white/[0.01] backdrop-blur-md group hover:border-cyan-500/20 transition-all duration-500">
            <div className="max-w-md">
              <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-8 group-hover:border-cyan-500/30 transition-all rounded-lg text-cyan-600/80">
                <Rocket size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4 uppercase tracking-tight">The Vision</h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed font-medium">
                To architect a future where AI amplifies human ambition through the power of verifiable excellence.
                We build high-trust protocols that harmonize human expertise with machine precision.
              </p>
            </div>
            <div className="flex gap-3 mt-8">
              <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-cyan-500/5 text-cyan-600/70 border border-cyan-500/10 rounded-full">Active: 2026 Cycle</span>
              <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-slate-100 dark:bg-white/5 text-slate-500/60 border border-slate-200 dark:border-white/10 rounded-full">Full-Stack Lab</span>
            </div>
          </div>

          {/* Metric: Team */}
          <div className="col-span-1 md:col-span-1 p-6 sm:p-8 flex flex-col justify-between rounded-2xl border border-slate-200/60 dark:border-white/[0.03] bg-white/40 dark:bg-white/[0.01] backdrop-blur-md">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">OFFICIAL RECOGNITION</div>
            <div>
              <div className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter">DPIIT</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase mt-2 tracking-widest text-cyan-600/60">STARTUP INDIA CERTIFIED</div>
            </div>
          </div>

          {/* Metric: Cyan Highlight - Slightly desaturated for less "pop" */}
          <div className="col-span-1 md:col-span-1 p-6 sm:p-8 flex flex-col justify-between rounded-2xl bg-cyan-600/90 dark:bg-cyan-700/80 group relative overflow-hidden shadow-lg shadow-cyan-900/20">
            <div className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/50">TECHNICAL ECOSYSTEM</div>
            <div className="relative z-10">
              <div className="text-5xl font-black text-white tracking-tighter">NITK</div>
              <div className="text-[10px] text-cyan-100/70 font-bold uppercase mt-2 tracking-widest italic">STEP-SURATHKAL INCUBATED</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30" />
          </div>

          {/* Mission Block */}
          <div className="col-span-1 md:col-span-2 p-6 sm:p-8 flex flex-col justify-center rounded-2xl border border-slate-200/60 dark:border-white/[0.03] bg-white/40 dark:bg-white/[0.01] backdrop-blur-md">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 italic">The Mission</div>
            <p className="text-xl font-bold text-slate-950 dark:text-white leading-tight tracking-tight">
              "Advancing human-AI collaboration through effortless automation backed by immutable digital proof."
            </p>
          </div>

          {/* Dynamic Values Grid */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 p-4 sm:p-5 rounded-2xl border border-slate-200/60 dark:border-white/[0.03] bg-white/70 dark:bg-white/[0.02] backdrop-blur-md relative overflow-hidden">
            <div className="relative flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Core Values</span>
              <span className="h-px flex-1 bg-slate-200/80 dark:bg-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-2.5 relative">
              {values.map((item, idx) => (
                <div
                  key={item.label}
                  className="group/item flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/75 dark:bg-black/25 px-2 py-1.5 transition-all duration-300 hover:border-cyan-500/35 dark:hover:border-cyan-300/35"
                >
                  <div className="h-7 w-7 rounded-md border border-cyan-400/30 bg-cyan-400/10 dark:bg-cyan-400/5 flex items-center justify-center shrink-0">
                    <item.Icon size={14} className="text-cyan-600 dark:text-cyan-300 transition-transform duration-300 group-hover/item:scale-110" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-[0.08em] leading-none">{item.label}</p>
                  <span className="ml-auto text-[10px] font-black tracking-[0.1em] text-slate-300 dark:text-slate-600">{`0${idx + 1}`}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
