import { useState, useRef, useEffect } from 'react'
import { MapPin, Mail, Clock, Zap, ChevronDown } from 'lucide-react'

const topics = ['Lekka Support', 'Partnership', 'Press / Media', 'General Inquiry']

function TopicSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const select = (val) => {
    onChange({ target: { name: 'subject', value: val } })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full px-4 py-4 rounded-sm text-sm transition-all text-left flex items-center justify-between
          bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/[0.05]
          ${value ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}
          ${open ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' : ''}`}
      >
        <span>{value || 'Select a topic'}</span>
        <ChevronDown size={14} className={`flex-shrink-0 text-slate-400 dark:text-slate-600 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0a1a1f] shadow-lg rounded-sm overflow-hidden">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => select(t)}
              className={`w-full px-4 py-3 text-left text-sm transition-colors
                hover:bg-slate-50 dark:hover:bg-white/[0.04]
                ${value === t ? 'text-cyan-500 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'}`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const inputCls = `w-full px-4 py-4 rounded-sm text-sm outline-none transition-all
  bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/[0.05]
  text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600
  focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-white dark:focus:bg-white/[0.03]`

const contactInfo = [
  { Icon: MapPin, label: 'Location', val: 'Bejai, Mangalore' },
  { Icon: Mail, label: 'Email', val: 'contact@beylesys.com' },
  { Icon: Clock, label: 'Availability', val: 'Mon–Fri · 9 AM – 6 PM IST' },
]

const socials = [
  { label: 'X', href: 'https://x.com/Beylesys' },
  { label: 'Instagram', href: 'https://www.instagram.com/beylesys/' },
  { label: 'Discord', href: 'https://discord.gg/gFABgqUr' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Beylesys' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beylesys-technologies/' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/BeylesysTechnologies/' },
]

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => setSubmitted(true))
      .catch(error => console.error("Transmission Error:", error));
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white dark:bg-[#020a0d] transition-colors duration-700 overflow-hidden">

      {/* 1. ATMOSPHERIC BACKGROUND (Dark Mode Only) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020a0d] via-[#080d0e] to-[#020a0d]" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.06),_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className="mb-16 sm:mb-20 border-l-2 border-cyan-500/50 pl-6 sm:pl-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500/60 mb-4 block">
            Connectivity
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 dark:text-white leading-[0.9] tracking-tighter mb-6">
            Get in<br />
            <span className="italic font-serif gradient-text text-5xl sm:text-6xl md:text-8xl leading-none">touch.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-500 max-w-md text-base leading-relaxed font-medium">
            Questions about Lekka, partnership ideas, or just want to say hi — drop us a message.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-5 gap-px bg-slate-200 dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] overflow-hidden rounded-sm">

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col bg-white/95 dark:bg-[#020a0d]/90 backdrop-blur-sm">
            {contactInfo.map((item, idx) => (
              <div key={item.label} className={`p-6 sm:p-8 flex items-start gap-6 group hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors ${idx !== contactInfo.length - 1 ? 'border-b border-slate-200 dark:border-white/[0.05]' : ''}`}>
                <item.Icon size={16} className="text-slate-400 dark:text-slate-600 group-hover:text-cyan-500/70 transition-colors mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{item.label}</p>
                  <p className="text-sm text-slate-900 dark:text-slate-200 font-bold tracking-tight break-words">{item.val}</p>
                </div>
              </div>
            ))}

            <div className="p-6 sm:p-8 mt-auto bg-slate-50/50 dark:bg-white/[0.01] border-t border-slate-200 dark:border-white/[0.05]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-6 italic">Network Directory</p>
              <div className="grid grid-cols-2 gap-2">
                {socials.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] hover:border-cyan-500/30 transition-all text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-500/80"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-16 bg-white/95 dark:bg-[#020a0d]/90 backdrop-blur-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center mb-8">
                  <Zap size={32} className="text-cyan-500/70" />
                </div>
                <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-4 tracking-tighter uppercase">Signal Received</h3>
                <p className="text-slate-500 dark:text-slate-500 mb-10 max-w-xs font-medium">Message archived and queued for review. Expect a response soon.</p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', subject: '', message: '' }) }}
                  className="px-8 py-3 border border-cyan-500/30 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all"
                >
                  New Transmission →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="space-y-8">
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { name: 'name', label: 'Name', ph: 'Full Name', type: 'text', req: true },
                    { name: 'email', label: 'Email', ph: 'name@domain.com', type: 'email', req: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3 italic">{f.label} *</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required={f.req} placeholder={f.ph} className={inputCls} />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3 italic">Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company (optional)" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3 italic">Topic</label>
                    <TopicSelect value={form.subject} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3 italic">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="What's on your mind?"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button type="submit"
                  className="w-full py-5 bg-cyan-500 text-black text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-cyan-400 transition-all duration-300"
                >
                  Transmit Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
