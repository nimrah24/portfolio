import { Briefcase, CalendarDays, CheckCircle2, Globe } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal, SectionHeading, trackSpotlight } from './ui';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title={<>Internship <span className="gradient-text">experience</span></>} />

        <ol className="relative ml-3 border-l border-white/10 md:ml-6">
          {experience.map((job, i) => (
            <li key={job.role} className="relative pb-4 pl-8 md:pl-12">
              {/* timeline node */}
              <span className="absolute -left-[13px] top-7 grid h-6 w-6 place-items-center rounded-full border border-violet-400/50 bg-ink-950">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 shadow-glow" />
                <span className="absolute inset-0 animate-ping rounded-full border border-violet-400/40" />
              </span>

              <Reveal delay={i * 100}>
                <div onMouseMove={trackSpotlight} className="glass spotlight gradient-border p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-glow">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold md:text-2xl">{job.role}</h3>
                        <p className="mt-0.5 font-medium text-violet-300">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                      <span className="chip gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-violet-300" /> {job.period}
                      </span>
                      <span className="chip gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-blue-300" /> {job.mode}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 text-sm leading-relaxed text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <li key={t} className="chip border-violet-400/15 bg-violet-500/[0.07] text-violet-200">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
