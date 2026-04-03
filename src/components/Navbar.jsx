import { useEffect, useState } from 'react'
import logo from '../assets/Beylesys technologies.png'

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#services' },
]

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white/70 backdrop-blur-md border-b border-slate-200
        dark:bg-[#040c0f]/80 dark:border-white/10"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-3">

            {/* Logo: Industrial Design */}
            <a href="#home" className="flex items-center min-w-0">
              <img
                src={logo}
                alt="Beylesys Technologies"
                width={240}
                height={74}
                style={{ width: 'clamp(130px, 18vw, 240px)', height: '40px' }}
                className="block object-contain object-left shrink-0"
              />
            </a>

            {/* Desktop Navigation: Floating Pill Style */}
            <div className="hidden xl:flex items-center bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-1 py-1 rounded-full">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-10 h-10 flex items-center justify-center border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all text-slate-500 hover:text-slate-950 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>

              <a href="#contact"
                className="hidden xl:inline-flex items-center px-6 py-2 border border-cyan-500 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 hover:border-cyan-400 transition-all"
              >
                Contact Us
              </a>

              {/* Mobile Trigger */}
              <button onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center text-slate-950 dark:text-white"
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <span className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu: Full Surface Overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${mobileOpen ? 'visible' : 'invisible'}`}
      >
        <div className={`absolute inset-0 bg-white dark:bg-[#040c0f] transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col min-h-full max-h-full overflow-y-auto pt-20 px-5 sm:px-8 pb-12">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  className={`text-2xl sm:text-3xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white hover:text-cyan-500 transition-colors ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto border-t border-slate-200 dark:border-white/10 pt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 italic">Secure Channel</p>
              <a href="#contact" onClick={() => setMobileOpen(false)}
                className="block w-full py-5 bg-cyan-500 text-black text-xs font-bold tracking-[0.3em] uppercase text-center hover:bg-cyan-400 transition-colors"
              >
                Start Connection
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
