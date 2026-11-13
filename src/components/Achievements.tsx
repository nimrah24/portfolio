import { Award, Sparkles } from 'lucide-react';
import { achievement } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { Reveal, SectionHeading } from './ui';

const sparkles = [
  { top: '8%', left: '18%', size: 14, delay: '0s' },
  { top: '20%', left: '82%', size: 10, delay: '0.6s' },
  { top: '62%', left: '8%', size: 9, delay: '1.2s' },
  { top: '78%', left: '86%', size: 13, delay: '0.3s' },
  { top: '42%', left: '92%', size: 7, delay: '1.6s' },
  { top: '4%', left: '58%', size: 8, delay: '0.9s' },
];

function Trophy({ active }: { active: boolean }) {
  return (
    <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
      {/* rotating light rays */}
      <div
        className="absolute inset-0 animate-spin-slow rounded-full opacity-60"
        style={{
          background:
            'repeating-conic-gradient(from 0deg, rgba(251,191,36,0.16) 0deg 8deg, transparent 8deg 24deg)',
          maskImage: 'radial-gradient(circle, #000 25%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle, #000 25%, transparent 70%)',
        }}
      />
      <div className="absolute inset-10 rounded-full bg-amber-400/20 blur-3xl" />

      {sparkles.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute animate-twinkle text-amber-200"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
          aria-hidden="true"
        >
          <path fill="currentColor" d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
        </svg>
      ))}

      <svg
        viewBox="0 0 120 120"
        className={`relative h-full w-full transition-all duration-1000 ease-out ${
          active ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-75 opacity-0'
        }`}
        role="img"
        aria-label="Second prize trophy"
      >
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fef3c7" />
            <stop offset="0.35" stopColor="#fbbf24" />
            <stop offset="0.7" stopColor="#d97706" />
            <stop offset="1" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="goldDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d97706" />
            <stop offset="1" stopColor="#78350f" />
          </linearGradient>
          <clipPath id="cupClip">
            <path d="M36 26 H84 V46 C84 61 74 71 60 71 C46 71 36 61 36 46 Z" />
          </clipPath>
        </defs>
        <g className="animate-float" style={{ transformOrigin: 'center' }}>
          {/* handles */}
          <path d="M37 32 H27 a4 4 0 0 0 -4 4 v3 c0 10 7 17 17 18" fill="none" stroke="url(#gold)" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M83 32 H93 a4 4 0 0 1 4 4 v3 c0 10 -7 17 -17 18" fill="none" stroke="url(#gold)" strokeWidth="4.5" strokeLinecap="round" />
          {/* cup */}
          <path d="M36 26 H84 V46 C84 61 74 71 60 71 C46 71 36 61 36 46 Z" fill="url(#gold)" />
          <rect x="34" y="22" width="52" height="6" rx="3" fill="url(#goldDark)" />
          {/* shine */}
          <g clipPath="url(#cupClip)">
            <rect className="shine-bar animate-shine" x="40" y="18" width="10" height="60" fill="rgba(255,255,255,0.55)" />
          </g>
          <text x="60" y="54" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="Space Grotesk, sans-serif" fill="#78350f">
            2
          </text>
          {/* stem & base */}
          <path d="M55 71 h10 v10 h-10 z" fill="url(#goldDark)" />
          <path d="M47 81 h26 l4 8 H43 z" fill="url(#gold)" />
          <rect x="38" y="89" width="44" height="12" rx="3" fill="url(#goldDark)" />
          <rect x="48" y="92.5" width="24" height="5" rx="1.5" fill="#fde68a" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}

export default function Achievements() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Achievements" title={<>Recognition &amp; <span className="gradient-text">awards</span></>} />

        <Reveal>
          <div
            ref={ref}
            className="glass gradient-border relative overflow-hidden bg-gradient-to-br from-amber-500/[0.06] via-transparent to-violet-600/[0.08] p-6 md:p-12"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />

            <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
              <Trophy active={inView} />

              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200">
                  <Award className="h-4 w-4" /> 2026 · Project Exhibition
                </span>
                <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                  Second Prize – <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">TECHNOVA 2026</span>
                </h3>
                <p className="mt-3 font-medium text-slate-300">{achievement.event}</p>
                <p className="mt-1 font-mono text-xs text-slate-500">
                  {achievement.date} · {achievement.team}
                </p>
                <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{achievement.description}</p>
                <a href="#projects" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white">
                  <Sparkles className="h-4 w-4" /> See the SafeHop project
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
