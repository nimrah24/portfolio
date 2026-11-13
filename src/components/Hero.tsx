import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import NeuralBackground from './NeuralBackground';
import { GithubIcon, LinkedinIcon } from './ui';

type Token = [string, string]; // [text, tailwind class]

const k = 'text-violet-400'; // keyword
const s = 'text-emerald-300'; // string
const n = 'text-amber-300'; // number
const f = 'text-sky-400'; // function / class
const p = 'text-slate-300'; // plain
const c = 'text-slate-500 italic'; // comment

const codeLines: Token[][] = [
  [['class ', k], ['Developer', f], [':', p]],
  [['    name ', p], ['= ', k], ['"S. Nimrah Shifa"', s]],
  [['    degree ', p], ['= ', k], ['"B.E. AI & ML"', s]],
  [['    college ', p], ['= ', k], ['"SJEC, Mangaluru"', s]],
  [['    cgpa ', p], ['= ', k], ['9.08', n]],
  [['    focus ', p], ['= ', k], ['[', p], ['"ML"', s], [', ', p], ['"CV"', s], [', ', p], ['"GenAI"', s], [']', p]],
  [],
  [['    def ', k], ['solve', f], ['(self, problem):', p]],
  [['        # intelligent, practical software', c]],
  [['        return ', k], ['build', f], ['(problem)', p]],
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[460px] w-[460px] animate-blob rounded-full bg-violet-700/25 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] animate-blob rounded-full bg-blue-700/20 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 animate-blob rounded-full bg-fuchsia-700/10 blur-[100px] [animation-delay:-12s]" />
      </div>
      <div className="absolute inset-0 opacity-70">
        <NeuralBackground />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="container-x relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div className="min-w-0">
          <div className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-1.5 text-xs font-medium text-violet-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Final-year B.E. AI &amp; ML · SJEC
          </div>

          <h1 className="text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text animate-gradient-x whitespace-nowrap">Nimrah Shifa</span>
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px] text-slate-300 sm:text-base">
            {profile.tagline.map((t, i) => (
              <span key={t} className="flex items-center gap-3 whitespace-nowrap">
                {t}
                {i < profile.tagline.length - 1 && <span className="text-violet-500">|</span>}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary group">
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resumeFile} download={profile.resumeDownloadName} className="btn-ghost">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <span className="ml-2 hidden items-center gap-1.5 text-sm text-slate-500 sm:flex">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>
        </div>

        {/* Visual: code editor card */}
        <div className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none">
          <div className="absolute -inset-10 hidden animate-spin-slow rounded-full border border-dashed border-violet-500/15 lg:block" />
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/30 via-transparent to-blue-600/30 blur-2xl" />

          <div className="relative animate-float overflow-hidden rounded-2xl border border-white/10 bg-ink-900/85 shadow-2xl shadow-violet-950/50 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-slate-500">developer.py</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]" aria-label="Code snippet describing Nimrah">
              {codeLines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 inline-block w-5 select-none text-right text-slate-600">{i + 1}</span>
                  <span>
                    {line.map(([text, cls], j) => (
                      <span key={j} className={cls}>
                        {text}
                      </span>
                    ))}
                    {i === codeLines.length - 1 && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-violet-400" />}
                  </span>
                </div>
              ))}
            </pre>
          </div>

          {/* floating chips */}
          <div className="absolute -bottom-7 left-6 hidden animate-float rounded-xl border border-white/10 bg-ink-800/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:block [animation-delay:-2s]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">CGPA</p>
            <p className="font-display text-xl font-bold text-white">9.08</p>
          </div>
          <div className="absolute -right-3 -top-5 hidden animate-float rounded-xl border border-white/10 bg-ink-800/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:block [animation-delay:-4s]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">TECHNOVA 2026</p>
            <p className="font-display text-sm font-semibold text-amber-300">🏆 2nd Prize</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-slate-300 md:flex"
        aria-label="Scroll to About section"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-slate-600 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-violet-400" />
        </span>
      </a>
    </section>
  );
}
