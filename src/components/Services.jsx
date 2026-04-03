import { ScanLine, MessageSquare, RefreshCw, BarChart2, FileCheck, Package } from 'lucide-react'

const services = [
  {
    Icon: ScanLine,
    title: 'Document Upload',
    desc: 'Upload a purchase bill, sales invoice, or receipt. The AI reads it and drafts a voucher. You confirm or edit before anything is saved.',
  },
  {
    Icon: MessageSquare,
    title: 'Natural Language Entry',
    desc: 'Type what happened — like "paid ₹5,000 to Beylesys Traders" — and the AI drafts the journal entry. You confirm and it posts to your ledger.',
  },
  {
    Icon: RefreshCw,
    title: 'Sales & Purchase Returns',
    desc: 'Create debit notes and credit notes with invoice linkage. The system handles return quantities, value impact, and related stock/accounting updates.',
  },
  {
    Icon: BarChart2,
    title: 'Period Close',
    desc: 'Run month-end close with checklist, validation flags, and lock controls so books are finalized cleanly before reporting and filing.',
  },
  {
    Icon: FileCheck,
    title: 'TDS Management',
    desc: 'Track TDS payees, sections, and deductions across vouchers. Keep compliance data ready for review and statutory reporting.',
  },
  {
    Icon: Package,
    title: 'CA Portal & Multi-Client Workspace',
    desc: 'Work with your CA in shared workspaces, assign clients, and maintain audit-ready visibility across books, reports, and compliance tasks.',
  },
]


export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#ffffff] dark:bg-[#050505] overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-16 sm:mb-20 border-l-2 border-cyan-500/50 pl-6 sm:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 mb-4 block">
            What It Does
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 dark:text-white leading-[0.9] tracking-tighter max-w-xl">
              Your books,<br /><span className="italic font-serif gradient-text">handled.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-base leading-relaxed font-medium">
              Beyle Lekka covers the core accounting work for Indian businesses — from posting entries to filing GST.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 overflow-hidden rounded-sm mb-px">
          {services.map((service) => (
            <div key={service.title} className="group p-8 sm:p-10 bg-white/95 dark:bg-[#070f12]/90 backdrop-blur-sm hover:bg-white dark:hover:bg-white/[0.04] transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-all">
                <service.Icon size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-3 tracking-tighter uppercase italic">{service.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-6">{service.desc}</p>
              {/* <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 group-hover:gap-4 transition-all">
                Learn more <span>→</span>
              </div> */}
            </div>
          ))}
        </div>

        <div className="relative border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#070f12]/80 backdrop-blur-md p-8 sm:p-10 md:p-16 rounded-sm overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 dark:text-white mb-4 tracking-tighter uppercase italic">Want to see it in action?</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-lg text-base font-medium">
                Watch Lekka in action — then jump in and try it yourself.
              </p>
            </div>
            <a href="https://beylelekka.beylesys.com/" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto text-center flex-shrink-0 px-10 sm:px-12 py-5 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
