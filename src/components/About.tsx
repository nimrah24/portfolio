import { BrainCircuit, Code2, GraduationCap, Lightbulb, Rocket } from 'lucide-react';
import { aboutHighlights, education, profile } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { Reveal, SectionHeading, trackSpotlight } from './ui';

const icons = { code: Code2, brain: BrainCircuit, rocket: Rocket, bulb: Lightbulb };

function CgpaRing() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = inView ? circumference * (1 - profile.cgpa / 10) : circumference;

  return (
    <div ref={ref} className="relative mx-auto h-44 w-44">
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="cgpaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="url(#cgpaGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1)', filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.55))' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-5xl font-bold text-white">{profile.cgpa.toFixed(2)}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">CGPA / 10</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="About me" title={<>Engineering intelligence into <span className="gradient-text">everyday software</span></>} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-slate-400 md:text-lg">
                <p>
                  I&apos;m a <span className="font-medium text-white">final-year B.E. Artificial Intelligence and Machine Learning</span> student at{' '}
                  <span className="font-medium text-white">St Joseph Engineering College, Mangaluru</span>.
                </p>
                <p>
                  With a strong foundation in programming and software engineering, I enjoy turning ideas into working applications —
                  especially where Artificial Intelligence, Machine Learning and Computer Vision can make a real difference. I love
                  learning new technologies and applying them to solve real-world problems.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((h, i) => {
                const Icon = icons[h.icon];
                return (
                  <Reveal key={h.title} delay={i * 90}>
                    <div onMouseMove={trackSpotlight} className="glass spotlight gradient-border group h-full p-5 transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300 transition group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold">{h.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{h.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={150}>
            <div className="glass gradient-border relative h-full overflow-hidden p-7 md:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />
              <p className="relative mb-6 font-mono text-xs uppercase tracking-[0.25em] text-violet-300">Academic Snapshot</p>
              <CgpaRing />
              <ol className="relative mt-8 space-y-5 border-t border-white/[0.06] pt-6">
                {education.map((ed, i) => (
                  <li key={ed.title} className="flex gap-3">
                    <GraduationCap className={`mt-0.5 h-5 w-5 shrink-0 ${i === 0 ? 'text-violet-400' : 'text-blue-400/70'}`} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <p className="text-sm font-semibold text-white">{ed.title}</p>
                        <span className="font-mono text-xs text-violet-300">{ed.score}</span>
                      </div>
                      <p className="text-sm text-slate-400">{ed.school}</p>
                      <p className="font-mono text-xs text-slate-500">{ed.period}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
