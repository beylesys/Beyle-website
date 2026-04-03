const testimonials = [
  { name: 'Marcus Johnson', role: 'CTO, TechVentures', avatar: 'MJ', text: 'The cloud migration was flawless. Deployment times dropped from hours to minutes. Their team is world-class.' },
  { name: 'Ananya Patel', role: 'CEO, GrowthMark', avatar: 'AP', text: 'BeyleFlow saved us 20+ hours a week in manual work alone. ROI was visible within the first month.' },
  { name: 'David Okafor', role: 'VP Product, Nexora', avatar: 'DO', text: 'BeyleAnalytics increased our conversion rate by 34% in 3 months. The AI insights are genuinely useful.' },
  { name: 'Sophie Müller', role: 'Head of IT, EuroLogix', avatar: 'SM', text: 'Their security audit uncovered 3 critical vulnerabilities we had zero visibility on. Incredibly thorough.' },
  { name: 'Carlos Rivera', role: 'Founder, SprintLabs', avatar: 'CR', text: 'MVP delivered in 8 weeks, rock solid ever since. They move fast without cutting corners.' },
  { name: 'Lisa Chen', role: 'COO, DataBridge', avatar: 'LC', text: 'The custom ML model reduced our inventory costs by 28%. They understand business problems.' },
  { name: 'Raj Mehta', role: 'Dir. Eng, Cloudify', avatar: 'RM', text: "BeyleAPI is the cleanest developer experience I've used. Docs are excellent, support is fast." },
  { name: 'Emma Wilson', role: 'CEO, Freshlaunch', avatar: 'EW', text: 'As a non-technical founder, I needed a partner I could fully trust. BeyleSys delivered beyond expectations.' },
]

const doubled = [...testimonials, ...testimonials]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-2.5 h-2.5 fill-cyan-500" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-white dark:bg-[#040c0f] overflow-hidden">
      <div className="relative z-10">

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 border-l-2 border-cyan-500/50 pl-6 sm:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 mb-4 block">
            System Feedback
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-slate-950 dark:text-white uppercase italic">
              Verified<br /><span className="text-slate-400 dark:text-slate-600">Operations.</span>
            </h2>
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-sm">
              <Stars />
              <span className="text-xs font-black text-slate-950 dark:text-white tracking-tighter italic">4.9/5.0</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Aggregate</span>
            </div>
          </div>
        </div>

        {/* Marquee row 1 */}
        <div className="relative mb-px overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-[#040c0f] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-[#040c0f] to-transparent" />
          
          <div className="flex w-max animate-marquee gap-px bg-slate-200 dark:bg-white/10 border-y border-slate-200 dark:border-white/10 group-hover:[animation-play-state:paused]">
            {doubled.slice(0, 8).map((t, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] lg:w-[350px] p-6 sm:p-8 bg-white dark:bg-[#070f12] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <Stars />
                  <span className="text-[9px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest italic">Log #{2048 + i}</span>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8 min-h-[60px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="w-8 h-8 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-950 dark:text-white text-[10px] font-black uppercase tracking-tighter">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-950 dark:text-white uppercase tracking-tight">{t.name}</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest italic">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 — Reverse */}
        <div className="relative overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-[#040c0f] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-[#040c0f] to-transparent" />
          
          <div className="flex w-max animate-marquee-reverse gap-px bg-slate-200 dark:bg-white/10 border-b border-slate-200 dark:border-white/10 group-hover:[animation-play-state:paused]">
            {doubled.slice(8).map((t, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] lg:w-[350px] p-6 sm:p-8 bg-white dark:bg-[#070f12] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <Stars />
                  <span className="text-[9px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest italic">Log #{3012 + i}</span>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8 min-h-[60px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="w-8 h-8 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-950 dark:text-white text-[10px] font-black uppercase tracking-tighter">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-950 dark:text-white uppercase tracking-tight">{t.name}</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest italic">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Banner: Ultra Minimal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400 italic">Trusted Nodes</span>
            <div className="h-px flex-1 mx-8 bg-slate-200 dark:bg-white/10" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['TechVentures','GrowthMark','Nexora','EuroLogix','SprintLabs','DataBridge','Cloudify'].map((c) => (
              <span key={c} className="text-xs font-black text-slate-950 dark:text-white tracking-tighter uppercase italic">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
