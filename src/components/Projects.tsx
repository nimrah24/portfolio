import { ArrowUpRight, CalendarDays, Eye, FileSearch, ShieldCheck, Trophy } from 'lucide-react';
import { projects, profile, type Project } from '../data/portfolio';
import { GithubIcon, Reveal, SectionHeading, trackSpotlight } from './ui';

const icons = { shield: ShieldCheck, eye: Eye, file: FileSearch, calendar: CalendarDays };

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.icon];
  const featured = index === 0;

  return (
    <article
      onMouseMove={trackSpotlight}
      className={`glass spotlight gradient-border group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow md:p-8 ${
        featured ? 'bg-gradient-to-br from-violet-600/[0.08] via-transparent to-blue-600/[0.06]' : ''
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-violet-500/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/30 to-blue-600/30 text-violet-200">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <span className="font-display text-5xl font-bold leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-violet-400/20">
          0{index + 1}
        </span>
      </div>

      {project.badge && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
          <Trophy className="h-3.5 w-3.5" /> {project.badge}
        </span>
      )}

      <h3 className="text-xl font-bold tracking-tight md:text-2xl">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-violet-300">{project.subtitle}</p>
      <p className="mt-2 font-mono text-xs text-slate-500">
        {project.date}
        {project.team && <> · {project.team}</>}
      </p>

      <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-400">
        {project.points.map((pt) => (
          <li key={pt} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
            {pt}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="chip border-violet-400/15 bg-violet-500/[0.07] text-violet-200">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
          <a
            href={project.github || profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-violet-300"
          >
            <GithubIcon className="h-4 w-4" /> {project.github ? 'View Code' : 'View on GitHub'}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Featured projects"
          title={<>Things I&apos;ve <span className="gradient-text">built</span></>}
          subtitle="Applied AI, computer vision and software projects focused on safety, automation and real-world impact."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
            <GithubIcon className="h-4 w-4" /> More on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
