import { ScanLine, RefreshCw, BarChart2, FileCheck, Package, Users } from 'lucide-react'

const features = [
  {
    name: 'AI Capture', tag: 'Core', Icon: ScanLine,
    desc: 'Upload an invoice, receipt, or payment voucher. The AI reads the document, identifies what kind of entry it is, and drafts it for you — you review and confirm.',
    features: ['OCR + intent detection', 'Auto-classification', 'Batch processing', 'Voucher fallback chat'],
    price: null, featured: true, badge: 'Flagship',
  },
  {
    name: 'Reconciliation', tag: 'Banking', Icon: RefreshCw,
    desc: 'Import your bank statement and match transactions to your books. The AI suggests matches; you confirm or adjust manually.',
    features: ['AI match suggestions', 'Statement import', 'Manual overrides'],
    badge: null,
  },
  {
    name: 'Reports', tag: 'Analytics', Icon: BarChart2,
    desc: 'P&L, Balance Sheet, Trial Balance, AR/AP aging, DSO/DPO — standard financial reports with drill-down and export.',
    features: ['P&L & Balance Sheet', 'AR/AP aging', 'Excel & PDF export'],
    badge: null,
  },
  {
    name: 'Compliance', tag: 'India', Icon: FileCheck,
    desc: 'Schedule III mapping, GSTR-1 and GSTR-3B preparation, and TDS tracking — built specifically for Indian statutory requirements.',
    features: ['Schedule III', 'GSTR-1 & 3B', 'TDS management'],
    badge: 'India-First',
  },
  {
    name: 'Inventory', tag: 'Stock', Icon: Package,
    desc: 'Track stock with batch and serial numbers, manage Bills of Materials, run production orders, and enforce FEFO.',
    features: ['Batch & serial', 'BOM + production', 'ABC/XYZ analysis'],
    badge: null,
  },
  {
    name: 'CA Portal', tag: 'Multi-Client', Icon: Users,
    desc: 'Chartered accountants can manage their full client list — review, close books, and collaborate across workspaces from one login.',
    features: ['Client portfolio', 'Role-based access', 'Close workflows'],
    badge: null,
  },
]

export default function Products() {
  const featured = features[0]
  const rest = features.slice(1)

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-white dark:bg-[#020a0d] transition-colors duration-700 overflow-hidden">

      {/* 1. REFINED BACKGROUND (Midnight Atmosphere) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020a0d] via-[#080d0e] to-[#020a0d]" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(6,182,212,0.05),_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* --- Header Section --- */}
        <div className="mb-16 sm:mb-20 border-l-2 border-cyan-500/50 pl-6 sm:pl-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500/60">
              Product Suite
            </span>
            <span className="h-px w-8 bg-slate-200 dark:bg-white/10" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600">
              Beyle Lekka
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-slate-950 dark:text-white max-w-2xl">
              Beyle Lekka.<br />
              <span className="italic font-serif gradient-text">Smart Accounting.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-500 max-w-sm text-base leading-relaxed font-medium">
              BADDI (Beylesys Analytical Data Driven Intelligence) is our AI accounting intelligence layer, built to help Indian businesses move from raw documents to compliant GST-ready books with speed, clarity, and control.
            </p>
          </div>
        </div>

        {/* Featured Product - Elevated Glass */}
        <div className="relative border border-slate-200 dark:border-white/[0.05] bg-white/50 dark:bg-white/[0.01] backdrop-blur-md rounded-sm mb-px overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <div className="p-8 sm:p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.05]">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-500/60 uppercase tracking-widest">{featured.tag}</span>
                <span className="px-3 py-1 bg-cyan-600 dark:bg-cyan-500/80 text-white dark:text-black text-[11px] font-black uppercase tracking-tighter">{featured.badge}</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <featured.Icon size={28} className="text-cyan-600 dark:text-cyan-500/80" />
                <h3 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tighter uppercase italic">{featured.name}</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-500 text-base sm:text-lg leading-relaxed mb-10 max-w-md font-medium">{featured.desc}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {featured.features.map((f) => (
                  <span key={f} className="px-4 py-1.5 border border-slate-200 dark:border-white/[0.08] text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 bg-white dark:bg-white/5">
                    {f}
                  </span>
                ))}
              </div>
              <div>
                <a href="https://beylelekka.beylesys.com/" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-8 sm:px-10 py-4 bg-cyan-500 text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all duration-300">
                  Try Lekka →
                </a>
              </div>
            </div>

            {/* AI Visualization Side */}
            <div className="p-8 sm:p-10 bg-slate-50/50 dark:bg-black/20 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-10 dark:opacity-5" />
              <div className="relative z-10 border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] backdrop-blur-xl p-6 rounded-sm shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/30" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                    <div className="w-2 h-2 rounded-full bg-green-500/30" />
                  </div>
                  <span className="text-[11px] font-bold text-cyan-500/80 uppercase tracking-[0.2em]">Voucher Draft Ready</span>
                </div>

                {/* Uploaded file */}
                <div className="flex items-center gap-3 px-3 py-2 border border-slate-100 dark:border-white/[0.05] bg-white dark:bg-white/[0.01] mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-tight">invoice_aug_2024.pdf</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-cyan-600/70 mt-0.5">Uploaded</div>
                  </div>
                </div>

                {/* Voucher draft */}
                <div className="px-3 py-3 border border-slate-100 dark:border-white/[0.05] bg-white dark:bg-white/[0.01] mb-5 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">AI-generated voucher</div>
                  {[
                    ['Type', 'Purchase Invoice'],
                    ['Party', 'Beylesys Traders'],
                    ['Amount', '₹ 18,400'],
                    ['Account', 'Purchases A/c'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">{k}</span>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                    Confirm
                  </button>
                  <button className="flex-1 py-2 border border-slate-200 dark:border-white/[0.08] text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Edit
                  </button>
                  <button className="flex-1 py-2 border border-slate-200 dark:border-white/[0.08] text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Cancel
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Secondary Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-200 dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] overflow-hidden rounded-sm">
          {rest.map((p) => (
            <div key={p.name} className="group p-6 sm:p-8 flex flex-col bg-white/95 dark:bg-[#020a0d]/90 backdrop-blur-sm hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-500">
              <div className="flex items-start justify-between mb-8">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{p.tag}</span>
                {p.badge && <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-cyan-500/5 text-cyan-600/70 dark:text-cyan-500/60 border border-cyan-500/10">{p.badge}</span>}
              </div>
              <p.Icon size={20} className="text-slate-400 dark:text-slate-600 group-hover:text-cyan-500/70 transition-colors mb-4" />
              <h3 className="text-lg font-black text-slate-950 dark:text-white mb-2 tracking-tighter uppercase">{p.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed flex-1 mb-5 font-medium">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.features.map((f) => (
                  <span key={f} className="text-[11px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest px-2 py-1 border border-slate-200 dark:border-white/[0.05]">{f}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/[0.05]">
                {/* <button className="text-[9px] font-bold uppercase tracking-widest text-cyan-600/80 dark:text-cyan-500/60 hover:text-cyan-400 transition-colors">Learn more →</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
