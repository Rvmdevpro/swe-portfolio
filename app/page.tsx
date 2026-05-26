'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Engineer II',
    company: 'McDonald’s',
    period: 'Aug 2025 — Present',
    bullets: [
      'Built analytics instrumentation frameworks across Angular/TypeScript kiosk applications and .NET backend services.',
      'Developed AWS-based proof-of-concepts using Docker containerization and scalable cloud workflows.',
      'Served as a Security Champion advocating secure development practices and AppSec collaboration.',
      'Worked with Snyk remediation efforts and dependency security improvements.',
    ],
  },
  {
    title: 'Software Engineer I',
    company: 'McDonald’s',
    period: 'Mar 2023 — Aug 2025',
    bullets: [
      'Developed REST API workflows using Postman and Swagger/OpenAPI.',
      'Built Cypress end-to-end automated testing workflows.',
      'Contributed to kiosk modernization and backend-for-frontend architecture initiatives.',
      'Enhanced internal engineering tooling and scalable integration workflows.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'McDonald’s',
    period: 'Summer 2022',
    bullets: [
      'Built backend-for-frontend proof-of-concepts supporting kiosk decoupling initiatives.',
      'Automated CI/CD workflow tasks and engineering tooling improvements.',
      'Improved internal tooling for kiosk bundle generation and workflow efficiency.',
    ],
  },
];

const skillSections = [
  {
    title: 'Front-end',
    color: 'from-emerald-400 to-green-500',
    skills: [
      'React',
      'Next.js',
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Back-end',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      'NestJS',
      '.NET',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Prisma',
      'Swagger/OpenAPI',
    ],
  },
  {
    title: 'Database',
    color: 'from-pink-400 to-purple-500',
    skills: ['PostgreSQL', 'SQL', 'Supabase'],
  },
  {
    title: 'Cloud & DevOps',
    color: 'from-orange-400 to-red-500',
    skills: [
      'AWS',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Git',
      'GitHub',
      'Bitbucket',
      'TeamCity',
      'Vercel',
    ],
  },
  {
    title: 'Security',
    color: 'from-yellow-400 to-amber-500',
    skills: [
      'Snyk',
      'OWASP',
      'CodeQL',
      'Dependabot',
      'Gitleaks',
      'OWASP ZAP',
      'Application Security',
      'Secure SDLC',
      'Dependency Scanning',
      'Helmet.js',
      'Rate Limiting',
      'CORS Hardening',
    ],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0d10] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute left-[-120px] top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute right-[-120px] top-[500px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-wider text-emerald-400">
            Ruben
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#experience" className="transition hover:text-emerald-400">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-emerald-400">
              Project
            </a>
            <a href="#skills" className="transition hover:text-emerald-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-emerald-400">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-400"
          >
            Software Engineer II
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
          >
            Hi, I&apos;m Ruben.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl"
          >
            Full-stack software engineer focused on scalable web applications,
            cloud-native tooling, and secure software development practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <a
              href="#experience"
              className="rounded-full bg-emerald-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-emerald-300"
            >
              View Experience
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex justify-center gap-6 text-gray-400"
          >
            <a
              href="https://github.com/Rvmdevpro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub className="h-7 w-7 transition hover:scale-110 hover:text-emerald-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/ruben-velez-846071218/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="h-7 w-7 transition hover:scale-110 hover:text-emerald-400" />
            </a>

            <a href="mailto:rubprodev@gmail.com" aria-label="Send email">
              <Mail className="h-7 w-7 transition hover:scale-110 hover:text-emerald-400" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
            About
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Building modern applications with security in mind.
          </h2>

          <p className="max-w-4xl text-lg leading-9 text-gray-300">
            I’m a Software Engineer II currently building enterprise-scale kiosk
            applications and backend services at McDonald’s. My experience spans
            frontend engineering, cloud-native tooling, CI/CD automation,
            backend APIs, and application security collaboration.
          </p>
        </motion.div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Experience
          </p>

          <h2 className="mb-16 text-5xl font-bold">Professional Experience</h2>

          <div className="space-y-10">
            {experiences.map((experience) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
              >
                <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">{experience.title}</h3>

                    <p className="text-lg text-emerald-400">
                      {experience.company}
                    </p>
                  </div>

                  <p className="text-gray-400">{experience.period}</p>
                </div>

                <ul className="space-y-4 text-lg leading-8 text-gray-300">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Featured Project
          </p>

          <h2 className="mb-10 text-5xl font-bold">Nido</h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-2xl shadow-emerald-950/20"
          >
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                'Next.js',
                'NestJS',
                'TypeScript',
                'PostgreSQL',
                'Prisma',
                'Supabase',
                'CI/CD',
                'Security',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mb-5 text-4xl font-bold">
              Housing and roommate marketplace web application.
            </h3>

            <p className="mb-8 max-w-4xl text-lg leading-9 text-gray-300">
              Nido is a full-stack platform built to help users browse, create,
              filter, favorite, and message around housing and roommate listings.
              It includes authentication, listing management, protected messaging
              flows, CI/CD workflows, and security-focused tooling integrations.
            </p>

            <a
              href="https://nido-frontend-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-emerald-300"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-5xl font-bold text-emerald-400"
        >
          Skills
        </motion.h2>

        <div className="space-y-24">
          {skillSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-10 flex items-center gap-5">
                <div
                  className={`h-16 w-2 rounded-full bg-gradient-to-b ${section.color}`}
                />

                <h3 className="text-4xl font-bold">{section.title}</h3>
              </div>

              <div className="flex flex-wrap gap-5">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/30 px-6 py-4 text-xl text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

            <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-28 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>

          <h2 className="mb-6 text-5xl font-bold">
            Let&apos;s build something great.
          </h2>

          <p className="mb-10 text-xl text-gray-300">
            Interested in collaborating, building software, or discussing
            engineering and security?
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/ruben-velez-846071218/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#0A66C2] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#0958a8]"
            >
              <FaLinkedin className="h-6 w-6" />
              LinkedIn
            </a>

            <a
              href="mailto:rubprodev@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-emerald-300"
            >
              <Mail className="h-6 w-6" />
              Email
            </a>

            <a
              href="tel:+17875508027"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400"
            >
              787-550-8027
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}