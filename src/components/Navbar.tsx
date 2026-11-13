import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useInView';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      {/* scroll progress */}
      <div
        className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-500"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
      <nav className="container-x flex h-16 items-center justify-between md:h-[72px]" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 font-display text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
            NS
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-white sm:block">
            Nimrah<span className="text-violet-400">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-violet-500 to-blue-500 transition-transform duration-300 ${
                    active === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resumeFile} download={profile.resumeDownloadName} className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            type="button"
            className="icon-btn lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex h-[calc(100dvh-64px)] flex-col gap-1 pb-8 pt-4">
          {navLinks.map((link, i) => (
            <li key={link.id} style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg ${
                  active === link.id ? 'bg-violet-500/10 text-white' : 'text-slate-300'
                }`}
              >
                {link.label}
                <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a href={profile.resumeFile} download={profile.resumeDownloadName} className="btn-primary w-full">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
