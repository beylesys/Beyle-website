import { Mail, MapPin } from 'lucide-react'

const socials = [
  { label: 'X', href: 'https://x.com/Beylesys' },
  { label: 'Instagram', href: 'https://www.instagram.com/beylesys/' },
  { label: 'Discord', href: 'https://discord.gg/gFABgqUr' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Beylesys' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beylesys-technologies/' },
  { label: 'Reddit', href: '#' },
]

const nav = [
  { heading: 'Product', links: [{ label: 'Lekka', href: 'https://beylesys.com/', external: true }] },
  { heading: 'Company', links: [{ label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }] },
  { heading: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }] },
]

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#020a0d] border-t border-slate-200 dark:border-white/[0.05] transition-colors duration-700 overflow-hidden">

      {/* Background atmosphere */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05),_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main row */}
        <div className="py-12 lg:py-16 grid lg:grid-cols-5 gap-8 lg:gap-16">

          {/* Brand block */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-6">
              <span className="font-black text-base text-slate-900 dark:text-white tracking-tight">
                Beylesys<span className="text-cyan-500">Technologies</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed mb-8 max-w-xs font-medium">
              Proof over promises.<br />We ship software that earns its keep.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@beylesys.com"
                className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group break-all"
              >
                <Mail size={13} className="flex-shrink-0 group-hover:text-cyan-500 transition-colors" />
                contact@beylesys.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500">
                <MapPin size={13} className="flex-shrink-0" />
                Bejai, Mangalore
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="px-3 h-8 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest
                    text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-white/[0.07]
                    hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {nav.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-600 mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map(({ label, href, external }) => (
                    <li key={label}>
                      <a href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 dark:border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Beylesys Technologies. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 italic">
            Built in Mangalore.
          </p>
        </div>
      </div>
    </footer>
  )
}
