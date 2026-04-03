import { DollarSign, Zap, Target, TrendingUp } from 'lucide-react'

const stats = [
  { val: '$180M+', label: 'Client Revenue',  Icon: DollarSign },
  { val: '99.97%', label: 'Platform Uptime', Icon: Zap },
  { val: '< 2hrs', label: 'Response Cycle',  Icon: Target },
  { val: '34%',    label: 'Efficiency Gain', Icon: TrendingUp },
]

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32 bg-white dark:bg-[#040c0f] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16 sm:mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-6 block italic">
            Performance Metrics
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.9] uppercase italic">
            Results that speak.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 overflow-hidden rounded-sm mb-px">
          {stats.map((item) => (
            <div key={item.label} className="group p-8 sm:p-10 lg:p-12 bg-white dark:bg-[#070f12] hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors text-center">
              <div className="flex justify-center mb-6">
                <item.Icon size={20} className="text-slate-300 dark:text-slate-600 group-hover:text-cyan-500 transition-colors" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white mb-3 tracking-tighter italic">
                {item.val}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.3em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-8 sm:p-12 md:p-24 bg-slate-50 dark:bg-[#070f12] border border-slate-200 dark:border-white/10 border-t-0 rounded-sm overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-4xl text-cyan-500 font-serif italic mb-8 block leading-none">"</span>
            <p className="text-xl sm:text-2xl md:text-4xl font-black text-slate-950 dark:text-white leading-[1.1] tracking-tighter uppercase italic">
              The only metric that matters is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-300 dark:from-cyan-400 dark:to-cyan-200">
                whether your clients succeed
              </span>
              . Everything else is secondary noise.
            </p>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-slate-200 dark:bg-white/10" />
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.4em]">
                Alex Carter <span className="mx-2 opacity-30">/</span> Lab Director
              </p>
              <div className="h-px w-8 bg-slate-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  )
}
