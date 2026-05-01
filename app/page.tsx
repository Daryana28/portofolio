"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const stats = [
  { value: "12+", label: "projects delivered for businesses, startups, and SMEs" },
  { value: "4+", label: "years building web apps, dashboards, and APIs" },
  { value: "24h", label: "average response time for new client discussions" },
];

const services = [
  {
    title: "Website Development",
    text: "Landing pages, company websites, internal systems, and admin dashboards that are fast, clean, and production-ready.",
  },
  {
    title: "Automation & API",
    text: "Backend integration, REST API, authentication, workflow automation, and data sync to reduce manual work.",
  },
  {
    title: "AI Engineering",
    text: "AI-powered feature development including model integration, workflow automation, and practical ML support for business use cases.",
  },
  {
    title: "Maintenance & Improvement",
    text: "UI audits, bug fixes, performance optimization, responsive improvements, and iterative feature development.",
  },
  {
    title: "Dashboard & Reporting",
    text: "Operational dashboards, KPI tracking, reporting modules, and visual analytics to support faster business decisions.",
  },
  {
    title: "Mobile App Development",
    text: "Cross-platform mobile app development with Flutter, focused on smooth UX, maintainable architecture, and API integration.",
  },
];

const stacks = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQL Server", logo: "/sql-server-colored.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const techLogos: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "SQL Server": "/sql-server-colored.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Computer Vision": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/npm/simple-icons@16.16.0/icons/fastapi.svg",
};

const experiences = [
  {
    role: "IT Developer",
    company: "PT Indonesia Koito",
    details:
      "Built and maintained internal applications, improved operational workflows, and delivered reliable business features across frontend and backend systems.",
  },
  {
    role: "AI Engineer",
    company: "Freelance / Project-Based",
    details:
      "Designed and integrated AI-driven features to improve automation, data processing, and decision support for product and business workflows.",
  },
];

const projects = [
  {
    title: "APD & Safety Zone Detection System",
    year: "2025",
    company: "Private Company Project",
    role: "AI Engineer",
    summary:
      "Built web and mobile versions of a computer vision system to detect APD usage, monitor forklift speed, and identify pedestrian safety-zone violations.",
    impact: "Improved safety monitoring response and enabled faster incident prevention with real-time detection insights.",
    stack: "Flutter, Python, Computer Vision, Django, MySQL",
    technologies: ["Flutter", "Python", "Computer Vision", "Django", "MySQL"],
    demoHref: "#contact",
    codeHref: "#contact",
    image: "/ApdDetection/2.jpg",
  },
  {
    title: "Production Monitoring System",
    year: "2025",
    company: "PT Indonesia Koito",
    role: "IT Developer",
    summary:
      "Developed a monitoring platform to track production status, operational metrics, and key workflow checkpoints in real time.",
    impact: "Improved production visibility, faster issue detection, and better data-driven decision making.",
    stack: "Next.js, JavaScript, TypeScript, Node.js, SQL Server",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Node.js", "SQL Server"],
    demoHref: "#contact",
    codeHref: "#contact",
    image: "/Productionmonitoring/Slide1.jpg",
  },
  {
    title: "QR System Application",
    year: "2026",
    company: "PT Indonesia Koito",
    role: "IT Developer",
    summary:
      "Built a QR-based system to support data capture, validation, and operational tracking with a cleaner and faster user workflow.",
    impact: "Improved process accuracy and reduced manual input time in day-to-day operations.",
    stack: "React, SQL Server, Node.js, JavaScript, Express.js",
    technologies: ["React", "SQL Server", "Node.js", "JavaScript", "Express.js"],
    demoHref: "#contact",
    codeHref: "#contact",
    image: "/QRSystem/Slide1.jpg",
  },
];

const articles = [
  {
    title: "What I learned from building safety monitoring systems",
    excerpt:
      "In production environments, useful systems must be accurate, stable, and easy for teams to use every day. I focus on practical implementation, not just technical complexity.",
  },
  {
    title: "How I approach web and mobile project delivery",
    excerpt:
      "My process starts from business flow mapping, then architecture planning, development, testing, and deployment. This keeps projects predictable and easier to maintain.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.45em] text-cyan-300/80">
        <span className="h-px w-8 bg-cyan-400/50" />
        {eyebrow}
        <span className="h-px w-8 bg-cyan-400/50" />
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{subtitle}</p>
    </div>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3.75 7.5h16.5v9h-16.5z" />
      <path d="m4.5 8.25 7.5 6 7.5-6" />
    </svg>
  );
}

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    brief: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(contactForm.brief || "-");
    return `mailto:daryana2899@gmail.com?subject=${subject}&body=${body}`;
  }, [contactForm]);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <main className="relative isolate overflow-hidden bg-[#0d131a] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.22),transparent_52%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#1a222b_0%,#0d131a_36%,#0d131a_100%)]" />

      <header className="sticky top-0 z-30 border-b border-white/8 bg-[#0d131a]/85 backdrop-blur">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12 2xl:px-16">
          <a href="#home" className="text-base font-semibold tracking-[0.2em] text-cyan-300">
            {"<dev/>"} Daryana
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300 sm:gap-5">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="#services" className="transition hover:text-cyan-300">
              Services
            </a>
            <a href="#experience" className="transition hover:text-cyan-300">
              Experience
            </a>
            <a href="#works" className="transition hover:text-cyan-300">
              Works
            </a>
            <a
              href="https://github.com/Daryana28"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="hero-grid grid min-h-[calc(100vh-72px)] w-full gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-20 2xl:px-16"
      >
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-cyan-200">
            Available For Global Clients
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Full-stack developer & AI engineer for businesses that need fast, polished, and scalable digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build landing pages, admin dashboards, company websites, and custom systems with
            a strong focus on performance, visual quality, and smooth user experience across
            desktop and mobile.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Hire Me
              <ArrowUpRightIcon />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              View Portfolio
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/8 bg-white/5 px-5 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="text-3xl font-semibold text-cyan-300">{item.value}</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex items-start justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-[#111922] p-5 shadow-[0_24px_100px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.25),transparent_70%)]" />
            <div className="relative flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-cyan-300/30 bg-cyan-400/10">
                <Image
                  src="/daryana.jpg"
                  alt="Portrait of Daryana"
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Profile</p>
                <h2 className="mt-1 text-2xl font-semibold">Daryana</h2>
                <p className="mt-1 text-sm text-slate-300">Full-stack developer • AI engineer • Web & system builder</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-[#0c1218] p-5">
              <div className="grid gap-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Speciality</p>
                  <p className="mt-2 leading-7">
                    Next.js, React, Laravel, Node.js, REST API, AI integration, responsive
                    frontend, and custom dashboards for business operations.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Value</p>
                  <p className="mt-2 leading-7">
                    Clear communication, predictable execution, and delivery quality that is ready
                    to present to clients or internal stakeholders.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Fast Response", "Clean UI", "API Ready", "Mobile First"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:daryana2899@gmail.com"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/35 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <MailIcon />
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-topography px-5 py-24 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="About"
              title="About Me"
              subtitle="I am an IT Developer and AI Engineer who focuses on building practical systems that solve real operational problems. I prioritize clean implementation, reliable performance, and measurable outcomes."
            />
            <div className="mt-10 rounded-[2rem] border border-white/8 bg-[#1a222b]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-8">
              <p className="text-lg font-semibold text-cyan-300">Hi, I&apos;m Daryana.</p>
              <div className="mt-4 space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
                <p>
                  I am a developer experienced in web apps, landing pages, company websites,
                  internal systems, and custom features that require both clean UI and reliable logic.
                </p>
                <p>
                  For general business use cases, this page is designed to answer the key client questions
                  immediately: what can be delivered, how the process works, and why the output is trustworthy.
                </p>
                <p>
                  My focus is not just coding. I build solutions that feel good to use, load fast,
                  and look professional when presented to decision-makers.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl sm:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111922] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <Image
                src="/daryana.jpg"
                alt="Daryana working portrait"
                width={840}
                height={720}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-auto w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-24 sm:px-8 lg:px-12 2xl:px-16">
        <div className="w-full">
          <SectionTitle
            eyebrow="Experience"
            title="Professional Experience"
            subtitle="Hands-on experience in corporate and project-based environments, focused on practical delivery and measurable outcomes."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-[2rem] border border-white/8 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/75">Role</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{experience.role}</h3>
                <p className="mt-2 text-base text-cyan-200">{experience.company}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{experience.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-8 lg:px-12 2xl:px-16">
        <div className="w-full">
          <SectionTitle
            eyebrow="Services"
            title="Services clients request most often"
            subtitle="From focused landing pages to complex systems with dashboards and API integration, I adapt implementation to your business scope."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="absolute right-5 top-4 text-5xl font-semibold text-white/5">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-4 rounded-[2rem] border border-white/8 bg-[#121922] p-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {stacks.map((item) => (
              <div
                key={item.name}
                className="skill-card rounded-[1.5rem] border border-white/8 bg-[#0d131a] p-4 text-center"
              >
                <div className="skill-logo-wrap mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1016] shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={34}
                    height={34}
                    loading="lazy"
                    className="skill-logo-image h-8 w-8 object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-100">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="section-dots px-5 py-24 sm:px-8 lg:px-12 2xl:px-16">
        <div className="w-full">
          <SectionTitle
            eyebrow="Selected Works"
            title="Project History"
            subtitle="A curated record of projects I have delivered across internal systems, web platforms, and AI-driven workflows."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/8 bg-[#131b24] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              >
                <div className="border-b border-white/8 px-6 py-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">Project Record</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {project.role} • {project.company} • {project.year}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="project-image-wrap aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#0d131a]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={840}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="project-image h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{project.summary}</p>
                  <p className="mt-3 text-sm leading-7 text-cyan-100/80">
                    <span className="font-semibold text-cyan-200">Impact:</span> {project.impact}
                  </p>
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      {project.stack}
                    </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {techLogos[tech] ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={techLogos[tech]}
                              alt={`${tech} logo`}
                              width={14}
                              height={14}
                              loading="lazy"
                              className="h-3.5 w-3.5 object-contain"
                            />
                          ) : null}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="px-5 py-24 sm:px-8 lg:px-12 2xl:px-16">
        <div className="w-full">
          <SectionTitle
            eyebrow="Insights"
            title="How I Work and Deliver Results"
            subtitle="This section shares my practical perspective from real projects in IT development and AI engineering, so clients can understand how I think and execute."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-[2rem] border border-white/8 bg-white/5 p-6 transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/75">Article</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{article.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{article.excerpt}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Discuss this approach
                  <ArrowUpRightIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-14 pt-24 sm:px-8 lg:px-12 2xl:px-16">
        <div className="w-full overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(20,29,38,0.98),rgba(9,14,19,0.98))] p-8 shadow-[0_25px_100px_rgba(0,0,0,0.35)] sm:p-10">
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s Build Your Next Project"
            subtitle="Need a reliable IT Developer and AI Engineer for web apps, dashboards, automation, or internal systems? I&apos;m available to collaborate and deliver production-ready results."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5 text-sm leading-7 text-slate-300">
              <p>
                I&apos;m open for freelance collaborations and long-term opportunities. Share your
                project goals, timeline, and technical needs, and I&apos;ll propose the best implementation approach.
              </p>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Contact Info</p>
                <p className="mt-4">
                  Email:{" "}
                  <a
                    href="mailto:daryana2899@gmail.com"
                    className="text-cyan-300 transition hover:text-cyan-200"
                  >
                    daryana2899@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+6283815989660" className="text-cyan-300 transition hover:text-cyan-200">
                    +62 838-1598-9660
                  </a>
                </p>
                <p>Location: Indonesia</p>
                <p>
                  Focus: Website development integrated with AI features (automation, computer vision,
                  and intelligent workflows)
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Daryana28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 transition hover:text-cyan-200"
                  >
                    github.com/Daryana28
                  </a>
                </p>
              </div>
            </div>
            <form className="grid gap-4" action="#" onSubmit={handleContactSubmit}>
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Name</span>
                <input
                  type="text"
                  placeholder="Client name"
                  value={contactForm.name}
                  onChange={(event) =>
                    setContactForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-[#0b1117] px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="email@company.com"
                  value={contactForm.email}
                  onChange={(event) =>
                    setContactForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="rounded-2xl border border-white/10 bg-[#0b1117] px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Project brief</span>
                <textarea
                  rows={5}
                  placeholder="Describe your project goals"
                  value={contactForm.brief}
                  onChange={(event) =>
                    setContactForm((prev) => ({ ...prev, brief: event.target.value }))
                  }
                  className="rounded-[1.5rem] border border-white/10 bg-[#0b1117] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message
                <MailIcon />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
