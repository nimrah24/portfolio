import { ArrowUp, Mail } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './ui';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="container-x flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-lg font-semibold text-white">
            {profile.fullName}
            <span className="text-violet-400">.</span>
          </a>
          <p className="mt-1 text-sm text-slate-500">AI/ML Student · Software Developer · Problem Solver</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn !h-10 !w-10" aria-label="GitHub">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn !h-10 !w-10" aria-label="LinkedIn">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="icon-btn !h-10 !w-10" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="#home" className="icon-btn !h-10 !w-10 ml-2" aria-label="Back to top">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="container-x mt-10 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.fullName}. Built with React, TypeScript &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
