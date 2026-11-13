import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, Mail, Phone, Send } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon, Reveal, SectionHeading, trackSpotlight } from './ui';

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = { kind: 'idle' | 'sending' | 'success' | 'error'; message?: string };

const initial: Values = { name: '', email: '', subject: '', message: '' };

/**
 * Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in .env to deliver
 * messages directly. Without it, the form opens the visitor's email client
 * with everything pre-filled, so it works out of the box on any static host.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Please add a subject.';
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
  return e;
}

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: Phone, external: false },
  { label: 'LinkedIn', value: 'in/s-nimrah-shifa', href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: 'github.com/nimrah24', href: profile.github, Icon: GithubIcon, external: true },
];

export default function Contact() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof Values]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!FORM_ENDPOINT) {
      const body = `${values.message}\n\n— ${values.name}\n${values.email}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: 'success', message: 'Opening your email app with the message ready to send.' });
      return;
    }

    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setValues(initial);
      setStatus({ kind: 'success', message: "Thanks! Your message has been sent. I'll get back to you soon." });
    } catch {
      setStatus({ kind: 'error', message: `Something went wrong. Please email me directly at ${profile.email}.` });
    }
  };

  const field = (name: keyof Values, label: string, type = 'text') => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={values[name]}
        onChange={onChange}
        autoComplete={name === 'subject' ? 'off' : name}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={`field ${errors[name] ? '!border-rose-500/60' : ''}`}
        placeholder={label}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-rose-400">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-violet-950/30 to-transparent" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let&apos;s build something <span className="gradient-text">together</span></>}
          subtitle="Open to internships, placements and software engineering opportunities. Feel free to reach out — I'd love to connect."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} delay={i * 80}>
                <a
                  href={href}
                  onMouseMove={trackSpotlight}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass spotlight gradient-border group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 text-violet-200 transition-all duration-300 group-hover:from-violet-600 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">{label}</span>
                    <span className="block truncate text-sm font-medium text-white md:text-base">{value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="glass gradient-border space-y-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {field('name', 'Your Name')}
                {field('email', 'Your Email', 'email')}
              </div>
              {field('subject', 'Subject')}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`field resize-y ${errors.message ? '!border-rose-500/60' : ''}`}
                  placeholder="Tell me about the opportunity or idea…"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={status.kind === 'sending'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                {status.kind === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status.kind === 'success' && (
                  <p className="flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> {status.message}
                  </p>
                )}
                {status.kind === 'error' && (
                  <p className="flex items-start gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-300">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {status.message}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
