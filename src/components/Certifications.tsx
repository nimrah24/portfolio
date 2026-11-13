import { BadgeCheck } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { Reveal, SectionHeading, trackSpotlight } from './ui';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute right-10 top-1/2 h-80 w-80 rounded-full bg-violet-700/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Continuous <span className="gradient-text">learning</span></>}
          subtitle="Courses and programs that broadened my skills across full-stack, GenAI, data and security."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 90}>
              <div
                onMouseMove={trackSpotlight}
                className="glass spotlight gradient-border group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-violet-200 transition-all duration-300 group-hover:from-violet-500 group-hover:to-blue-500 group-hover:text-white group-hover:shadow-glow">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  {cert.year && <span className="chip">{cert.year}</span>}
                </div>
                <h3 className="text-base font-semibold leading-snug md:text-lg">{cert.title}</h3>
                <p className="mt-auto pt-4 font-mono text-xs uppercase tracking-wider text-violet-300">{cert.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
