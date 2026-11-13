import { BrainCircuit, Code2, Database, Layers, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeading, trackSpotlight } from './ui';

const icons = { code: Code2, brain: BrainCircuit, database: Database, layers: Layers, wrench: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-700/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Technical skills"
          title={<>The <span className="gradient-text">toolkit</span> I build with</>}
          subtitle="From core computer-science fundamentals to modern AI frameworks."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            // Two wide cards on top (AI/ML gets prominence), three below on large screens.
            const span = i < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
            return (
              <Reveal key={group.title} delay={i * 80} className={`${span} ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div onMouseMove={trackSpotlight} className="glass spotlight gradient-border group h-full p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
                  <div className="mb-5 flex items-center gap-3.5">
                    <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${group.accent} text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                      <p className="font-mono text-xs text-slate-500">{group.skills.length} skills</p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="chip cursor-default hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
