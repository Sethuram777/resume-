import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Database,
  Globe,
  Cpu,
  GraduationCap,
  Trophy,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const EMAIL = "sethu7ram@gmail.com";
const GITHUB = "https://github.com/Sethuram777";
const LINKEDIN = "https://linkedin.com/in/sethuram";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Sethuram AL</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Aspiring Software Developer passionate about Java, Data Structures &amp; Algorithms, and Full Stack Development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:shadow-card"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:shadow-glow hover:scale-110 transition-all" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:shadow-glow hover:scale-110 transition-all" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${EMAIL}`} className="grid h-10 w-10 place-items-center rounded-full glass hover:shadow-glow hover:scale-110 transition-all" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full rounded-3xl shadow-glow animate-fade-up"
          />
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-hero-gradient opacity-30 blur-2xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>
      </div>  
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="About" title="A bit about me" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-3xl glass p-8 shadow-card">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am a Information technology Engineering student with a strong interest in software development,
              problem-solving, and web technologies. I enjoy building practical applications and continuously
              improving my programming skills through projects and coding challenges. My primary focus areas
              include <span className="text-foreground font-semibold">Java</span>, <span className="text-foreground font-semibold">Data Structures &amp; Algorithms</span>,
              <span className="text-foreground font-semibold"> Web Development</span>, and <span className="text-foreground font-semibold">Database Management Systems</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {[
              { k: "Focus", v: "Java + DSA" },
              { k: "Role", v: "Aspiring Dev" },
              { k: "Field", v: "IT" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl glass p-5 shadow-card">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-display text-xl font-bold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    icon: Cpu,
    title: "Core Subjects",
    items: [
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "Object-Oriented Programming", level: 90 },
      { name: "Database Management Systems", level: 82 },
      { name: "Operating Systems", level: 78 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Skills" title="What I work with" subtitle="A snapshot of the tools, languages and concepts I'm comfortable using." />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-3xl glass p-6 shadow-card transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-hero-gradient text-primary-foreground shadow-glow">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-hero-gradient transition-all"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Anti-Sleep Alert System",
    tag: "Computer Vision · ML",
    description:
      "Real-time driver drowsiness detection using computer vision and machine learning. Monitors eye movements and alerts drivers when fatigue is detected to improve road safety.",
    tech: ["Python", "OpenCV", "ML"],
  },
  {
    title: "Personal Portfolio Website",
    tag: "Frontend",
    description:
      "Designed and developed a responsive portfolio website to showcase skills, projects, education and professional achievements.",
    tech: ["React", "Tailwind", "TypeScript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl glass p-7 shadow-card transition-all hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-hero-gradient opacity-20 blur-2xl transition-all group-hover:opacity-40" />
              <div className="relative">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  0{i + 1} · {p.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  View on GitHub <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const achievements = [
    "Strong understanding of Data Structures and Algorithms",
    "Active problem solver on coding platforms",
    "Experience building academic and personal projects",
  ];
  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Education & Achievements" title="Background" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl glass p-7 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-hero-gradient text-primary-foreground shadow-glow">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>
            <div className="mt-6 rounded-2xl border border-border p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Currently Pursuing</div>
              <div className="mt-2 font-display text-lg font-bold">Bachelor of Engineering (B.Tech)</div>
              <div className="text-sm text-muted-foreground">Information Technology &amp; Engineering</div>
            </div>
          </div>

          <div className="rounded-3xl glass p-7 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-hero-gradient text-primary-foreground shadow-glow">
                <Trophy className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Achievements</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl bg-muted/50 p-3 text-sm">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] glass p-10 text-center shadow-glow md:p-16">
          <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-10" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            Let's <span className="text-gradient">build something</span> together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            I'm open to internships, collaborations, and interesting problems to solve. Drop a line anytime.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-hero-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            {EMAIL} <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Github, label: "GitHub", value: "Sethuram777", href: GITHUB },
              { icon: Linkedin, label: "LinkedIn", value: "sethuram", href: LINKEDIN },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-4 text-left transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-hero-gradient group-hover:text-primary-foreground">
                  <c.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-semibold">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-hero-gradient text-primary-foreground text-xs">S</span>
          Sethuram AL
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Sethuram AL. Crafted with care.</p>
        <div className="flex items-center gap-2">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass hover:shadow-glow transition" aria-label="GitHub"><Github className="h-3.5 w-3.5" /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass hover:shadow-glow transition" aria-label="LinkedIn"><Linkedin className="h-3.5 w-3.5" /></a>
          <a href={`mailto:${EMAIL}`} className="grid h-9 w-9 place-items-center rounded-full glass hover:shadow-glow transition" aria-label="Email"><Mail className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}
