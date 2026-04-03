export default function Hero() {
  const trustSignals = [
    'Structured approvals',
    'Accountable automation',
    'Readable audit trail',
  ]

  const snapshot = [
    { label: 'Validation Depth', value: 'Granular Traceability', width: 'w-[97%]' },
    { label: 'Operational Autonomy', value: 'Reduced manual friction', width: 'w-[88%]' },
    { label: 'System Integrity', value: 'Immutable State Persistence', width: 'w-[92%]' },
  ]

  const outcomes = [
    { value: 'Clarity', label: 'Every step remains visible and reviewable.' },
    { value: 'Velocity', label: 'Teams move faster without losing control.' },
    { value: 'Trust', label: 'Proof-ready systems for real operations.' },
  ]

  return (
    <section
      id="home"
      className="relative isolate min-h-screen min-h-[100svh] overflow-hidden bg-white dark:bg-[#020a0d]
        selection:bg-cyan-400/25 transition-colors duration-700"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hidden dark:block absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1418] via-[#020a0d] to-[#020a0d]" />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1100px] h-[760px] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.16),_transparent_70%)]" />
          <div className="absolute top-28 right-0 w-[420px] h-[420px] bg-cyan-400/8 blur-[120px]" />
        </div>

        <div className="dark:hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.0125),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-14">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 xl:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-black leading-[0.92] tracking-[-0.02em] mx-auto lg:mx-0">
              <span className="block w-fit mx-auto lg:mx-0 text-[clamp(2.5rem,7.2vw,5.6rem)] italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-500 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-white">
                Workflows
              </span>
              <span className="mt-1 block w-fit mx-auto lg:mx-0 text-[clamp(2.35rem,6.8vw,5.6rem)] italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-500 to-slate-900 dark:from-white dark:via-cyan-300 dark:to-white">
                Built For Trust
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We engineer elegant digital infrastructure for teams that care about speed and evidence.
              <span className="text-slate-900 dark:text-slate-300">AI-assisted execution, validation, and traceable outcomes.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a href="#products" className="group relative px-10 py-4 rounded-full bg-cyan-400 text-black font-bold text-sm overflow-hidden transition-all hover:scale-[1.03]">
                <span className="relative z-10">Explore Our Product</span>
                <span className="relative z-10 ml-2">{'->'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              {/* <a
                href="#demo"
                className="px-10 py-4 rounded-full text-sm font-bold border border-slate-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all
                  dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Watch Proof of Work
              </a> */}
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400
                    border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-cyan-300/20 to-transparent blur-2xl dark:from-cyan-300/12" />
              <div className="relative border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl rounded-[28px] p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300">Beylesys Technologies</span>
                  <span className="h-px w-12 bg-slate-300 dark:bg-white/20" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">Trust-first systems</span>
                </div>

                <div className="mt-6 space-y-4">
                  {snapshot.map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/75 dark:bg-black/20">
                      <div className="flex items-end justify-between gap-3 mb-3">
                        <p className="text-[11px] uppercase tracking-[0.14em] font-bold text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="text-sm font-black text-slate-900 dark:text-white">{item.value}</p>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                        <div className={`h-full rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500 ${item.width}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 px-4 py-4 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/75 dark:bg-black/20">
                  <p className="text-[11px] uppercase tracking-[0.17em] font-bold text-slate-400 dark:text-slate-500">Current status</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Decision-grade ledgers with approval points that keep teams confident and in control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid md:grid-cols-3 border border-slate-200 dark:border-white/10 bg-white/65 dark:bg-white/[0.02] backdrop-blur-sm">
          {outcomes.map((item, idx) => (
            <div
              key={item.value}
              className={`px-5 sm:px-7 py-7 sm:py-8 text-left transition-colors hover:bg-slate-100/80 dark:hover:bg-white/[0.04]
                ${idx !== outcomes.length - 1 ? 'md:border-r md:border-slate-200 md:dark:border-white/10' : ''}
                ${idx !== outcomes.length - 1 ? 'max-md:border-b max-md:border-slate-200 max-md:dark:border-white/10' : ''}`}
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mb-2 tracking-tight">{item.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-9 left-10 hidden xl:flex items-center gap-4 text-slate-400 dark:text-slate-600">
        <div className="w-12 h-[1px] bg-slate-200 dark:bg-white/10" />
        <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Scroll to discover</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-[#020a0d] to-transparent pointer-events-none" />
    </section>
  )
}
