"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Database,
  ExternalLink,
  Code2 as Github,
  GraduationCap,
  Layers3,
  BriefcaseBusiness as Linkedin,
  Mail,
  Menu,
  MousePointer2,
  Pizza,
  Send,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";

const email = "hifzayasmeen79@gmail.com";
const githubUrl = "https://github.com/hifzayasmeen";
const linkedinUrl = "https://www.linkedin.com/in/hifza-yasmeen/";

const skillGroups: {
  title: string;
  icon: LucideIcon;
  skills: string[];
}[] = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "AI automation", "API design"],
  },
];

const timelineItems = [
  {
    date: "September 2026 · Full-stack project",
    title: "Pizza Palace — ordering, payments & real-time operations",
    description:
      "Built a MERN platform spanning a guided pizza builder, simulated checkout, live order updates, and an admin inventory and order dashboard.",
    icon: Pizza,
  },
  {
    date: "August 2026 · LMS platform APIs",
    title: "EduCore — learning management backend",
    description:
      "Developed LMS services for role-based access, courses, assignments, submissions, certificates, notifications, and student-progress analytics.",
    icon: GraduationCap,
  },
  {
    date: "Ongoing · Learning & exploration",
    title: "Full-stack engineering and intelligent automation",
    description:
      "Continuing to explore scalable product experiences, dependable APIs, and practical AI-powered workflows.",
    icon: Sparkles,
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectPreview({ kind }: { kind: "pizza" | "educore" }) {
  const isPizza = kind === "pizza";
  const previews = isPizza
    ? [
        { icon: Pizza, tint: "", name: "Classic" },
        { icon: Sparkles, tint: "purple", name: "Signature" },
        { icon: Zap, tint: "blue", name: "Build yours" },
      ]
    : [
        { icon: BookOpenCheck, tint: "purple", name: "Courses" },
        { icon: GraduationCap, tint: "blue", name: "Learners" },
        { icon: Layers3, tint: "", name: "Progress" },
      ];

  return (
    <div
      className={`project-preview${isPizza ? "" : " educore"}`}
      role="img"
      aria-label={`${isPizza ? "Pizza ordering" : "Learning management"} product interface preview`}
    >
      <div className="preview-grid" aria-hidden="true" />
      <div className="preview-window" aria-hidden="true">
        <div className="preview-bar">
          <span className="preview-brand">
            {isPizza ? <Pizza size={10} /> : <GraduationCap size={11} />}
            {isPizza ? "PIZZA PALACE" : "EDUCORE LMS"}
          </span>
          <span>{isPizza ? "MENU · ORDERS · ADMIN" : "LEARNING DASHBOARD"}</span>
        </div>
        <div className="preview-body">
          <div className="preview-sidebar">
            <b />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="preview-main">
            <div className="preview-greeting">
              {isPizza ? "Find your next favourite" : "Your learning overview"}
            </div>
            <div className="preview-cards">
              {previews.map(({ icon: Icon, tint, name }) => (
                <div className="preview-item" key={name}>
                  <div className={`preview-art ${tint}`}>
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div className="preview-line" />
                  <div className="preview-line short" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="preview-overlay-label">
        <MousePointer2 size={12} />
        {isPizza ? "A taste of the ordering experience" : "Learning, made manageable"}
      </span>
    </div>
  );
}

function ProjectCard({
  kind,
  number,
  title,
  type,
  description,
  tags,
  repo,
  demo,
}: {
  kind: "pizza" | "educore";
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: { label: string; url: string };
}) {
  return (
    <Reveal className="glass-card project-card">
      <ProjectPreview kind={kind} />
      <div className="project-content">
        <div className="project-meta">
          <span className="project-type">{type}</span>
          <span className="project-number">{number}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags" aria-label="Technologies">
          {tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a className="project-link" href={repo} target="_blank" rel="noreferrer">
            <Github size={14} />
            Source code
            <ArrowUpRight size={12} />
          </a>
          {demo && (
            <a className="project-link" href={demo.url} target="_blank" rel="noreferrer">
              <ExternalLink size={13} />
              {demo.label}
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function PortfolioPage() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const [copyFailed, setCopyFailed] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formError, setFormError] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyFailed(false);
      setCopyStatus("Email copied to your clipboard.");
    } catch {
      setCopyFailed(true);
      setCopyStatus(`Couldn't copy automatically. You can email ${email} directly.`);
    }
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("senderEmail") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !senderEmail || !message) {
      setFormError(true);
      setFormStatus("Please complete all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${senderEmail}\n\n${message}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormError(false);
    setFormStatus("Your email draft is ready. Review it in your email app to send.");
    event.currentTarget.reset();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const navClass = menuOpen ? "nav-links is-open" : "nav-links";

  return (
    <>
      <header className="topbar-wrap">
        <nav className="site-shell topbar" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Hifza Yasmeen home">
            <span className="brand-mark" aria-hidden="true">
              HY
            </span>
            <span>
              Hifza Yasmeen
              <span className="brand-subtitle">Full-Stack Developer</span>
            </span>
          </a>
          <div className={navClass} id="mobile-navigation">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#journey" onClick={closeMenu}>
              Journey
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowUpRight size={14} />
            </a>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      <main id="home">
        <section className="site-shell hero" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Full-Stack Developer &amp; AI Automation Enthusiast
            </span>
            <h1 id="hero-title">
              Building high-performance web apps &amp;{" "}
              <span className="gradient-text">intelligent systems.</span>
            </h1>
            <p>
              I&apos;m Hifza Yasmeen — I bring thoughtful interfaces, dependable
              backend systems, and practical automation together to create
              digital experiences that work beautifully.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={15} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowRight size={14} />
              </a>
            </div>
            <div className="social-links" aria-label="Social profiles">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <Github size={15} /> GitHub <ArrowUpRight size={11} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={11} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            role="img"
            aria-label="Developer profile illustration"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-glow" aria-hidden="true" />
            <div className="orbit" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true">
              <span className="orbit-dot" />
            </div>
            <div className="floating-note note-top">
              <Code2 size={14} />
              From idea to interface
            </div>
            <div className="profile-card">
              <div className="profile-topline">
                <span>Developer profile</span>
                <span className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="profile-content">
                <div className="profile-intro">
                  <div className="avatar-mark" aria-hidden="true">
                    HY
                  </div>
                  <div>
                    <h2>Hifza Yasmeen</h2>
                    <p>Building for the web, thinking beyond it.</p>
                  </div>
                </div>
                <div className="profile-code" aria-label="Code-inspired profile card">
                  <span className="code-muted">const</span> <span className="code-blue">builder</span> = {"{"}
                  <br />
                  &nbsp; stack: <span className="code-violet">&quot;full-stack&quot;</span>,
                  <br />
                  &nbsp; focus: <span className="code-violet">&quot;useful innovation&quot;</span>,
                  <br />
                  &nbsp; mindset: <span className="code-violet">&quot;always learning&quot;</span>
                  <br />
                  {"}"};
                </div>
                <div className="profile-stack" aria-label="Core technologies">
                  {["React", "TypeScript", "Node.js", "Python"].map((item) => (
                    <span className="mini-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="floating-note note-bottom">
              <Workflow size={14} />
              Intelligent automation
            </div>
          </motion.div>
        </section>

        <section className="site-shell section" id="about" aria-labelledby="about-title">
          <Reveal className="section-heading">
            <div>
              <p className="section-kicker">A little about me</p>
              <h2 id="about-title">Curious by nature.<br />Builder by choice.</h2>
            </div>
            <p>
              I enjoy taking a problem from its first sketch to a dependable,
              polished experience — and learning something new at every layer.
            </p>
          </Reveal>
          <div className="about-grid">
            <Reveal className="glass-card about-copy" delay={0.08}>
              <h3>Engineering with a product mindset</h3>
              <p>
                I&apos;m a full-stack developer who cares about the details
                people feel: clear interfaces, useful interactions, and
                backends that make products reliable. My work spans modern
                JavaScript applications, API design, databases, and
                AI-powered automation.
              </p>
              <p>
                I&apos;m continually learning, iterating, and looking for
                practical ways to turn ambitious ideas into approachable
                software.
              </p>
            </Reveal>
            <Reveal className="glass-card about-facts" delay={0.15}>
              <div className="fact-card">
                <BriefcaseBusiness size={17} />
                <strong>Product-minded</strong>
                <span>From concept through delivery</span>
              </div>
              <div className="fact-card">
                <Terminal size={17} />
                <strong>End-to-end</strong>
                <span>Interfaces, APIs &amp; data</span>
              </div>
              <div className="fact-card">
                <Sparkles size={17} />
                <strong>AI curious</strong>
                <span>Automation with purpose</span>
              </div>
              <div className="fact-card">
                <Zap size={17} />
                <strong>Always growing</strong>
                <span>Learn, build, improve</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="site-shell section" id="skills" aria-labelledby="skills-title">
          <Reveal className="section-heading">
            <div>
              <p className="section-kicker">Tools of the trade</p>
              <h2 id="skills-title">My technology stack</h2>
            </div>
            <p>
              A versatile toolkit for creating responsive products and
              connecting the systems behind them.
            </p>
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, skills }, index) => (
              <Reveal className="glass-card skill-group" delay={index * 0.06} key={title}>
                <div className="skill-group-head">
                  <span className="skill-icon">
                    <Icon size={16} />
                  </span>
                  <h3>{title}</h3>
                </div>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="site-shell section projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <Reveal className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2 id="projects-title">Built to solve real problems.</h2>
            </div>
            <p>
              A couple of hands-on projects that bring together product
              thinking, full-stack engineering, and operational detail.
            </p>
          </Reveal>
          <div className="projects-grid">
            <ProjectCard
              kind="pizza"
              number="01 / 02"
              type="Full-stack commerce"
              title="Pizza Palace"
              description="A full-stack ordering platform with a guided pizza builder, interactive cart, simulated checkout, live order tracking, and an admin dashboard for orders and inventory."
              tags={["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"]}
              repo="https://github.com/hifzayasmeen/pizza-delivery-app"
              demo={{
                label: "Live application",
                url: "https://frontend-psi-eight-mdfmorzmqy.vercel.app",
              }}
            />
            <ProjectCard
              kind="educore"
              number="02 / 02"
              type="Learning platform · backend"
              title="EduCore LMS"
              description="Backend services for a learning platform: JWT authentication, Student/Instructor/Team Lead/Admin roles, course and assignment APIs, submissions, certificates, notifications, and progress analytics."
              tags={["Node.js", "Express", "PostgreSQL", "JWT", "REST APIs", "Role-based access"]}
              repo="https://github.com/hifzayasmeen/educore-lms-backend-full"
              demo={{
                label: "Live API",
                url: "https://educore-lms-backend-full-6qi7.vercel.app",
              }}
            />
          </div>
        </section>

        <section className="site-shell section" id="journey" aria-labelledby="journey-title">
          <Reveal className="section-heading">
            <div>
              <p className="section-kicker">Experience &amp; learning</p>
              <h2 id="journey-title">A journey made by building.</h2>
            </div>
            <p>
              Selected project milestones and areas of ongoing exploration.
            </p>
          </Reveal>
          <div className="timeline">
            {timelineItems.map(({ date, title, description, icon: Icon }, index) => (
              <Reveal className="timeline-item" delay={index * 0.07} key={title}>
                <span className="timeline-marker" aria-hidden="true" />
                <div className="glass-card timeline-content">
                  <span className="timeline-date">{date}</span>
                  <h3>
                    <Icon
                      aria-hidden="true"
                      size={14}
                      style={{ display: "inline", marginRight: 7, verticalAlign: "-2px" }}
                    />
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="timeline-footnote">
            This timeline highlights project work; internship and certification
            details can be added when available.
          </p>
        </section>

        <section className="site-shell section" id="contact" aria-labelledby="contact-title">
          <Reveal className="contact-panel">
            <div className="contact-copy">
              <p className="section-kicker">Let&apos;s build something</p>
              <h2 id="contact-title">
                Have an idea?
                <br />
                Let&apos;s talk.
              </h2>
              <p>
                Have a project, a collaboration in mind, or just want to say
                hello? I&apos;d love to hear from you.
              </p>
              <button className="email-copy" type="button" onClick={copyEmail}>
                {copyFailed ? <Mail size={14} /> : copyStatus ? <Check size={14} /> : <Copy size={14} />}
                {email}
                {!copyStatus && <Copy size={12} />}
              </button>
              <p className={`form-status${copyFailed ? " error" : ""}`} aria-live="polite">
                {copyStatus}
              </p>
              <div className="contact-socials" aria-label="Contact links">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <Linkedin size={17} />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <Github size={17} />
                </a>
                <a href={`mailto:${email}`} aria-label="Email Hifza">
                  <Mail size={17} />
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <label className="field-label">
                  Your name
                  <input
                    autoComplete="name"
                    name="name"
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label className="field-label">
                  Email address
                  <input
                    autoComplete="email"
                    name="senderEmail"
                    placeholder="jane@example.com"
                    required
                    type="email"
                  />
                </label>
              </div>
              <label className="field-label">
                How can I help?
                <textarea
                  name="message"
                  placeholder="Tell me a little about your project or idea..."
                  required
                  rows={4}
                />
              </label>
              <button className="button button-primary form-submit" type="submit">
                Prepare an email <Send size={14} />
              </button>
              <p className="form-note">
                This opens a pre-filled draft in your email app; the site
                doesn&apos;t store or send your message.
              </p>
              <p
                className={`form-status${formError ? " error" : ""}`}
                aria-live="polite"
                role="status"
              >
                {formStatus}
              </p>
            </form>
          </Reveal>
        </section>
      </main>

      <footer className="site-shell footer">
        <span>© {new Date().getFullYear()} Hifza Yasmeen. Designed with care.</span>
        <div className="footer-socials">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={11} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={11} />
          </a>
          <a href="#home">
            Back to top <ArrowUpRight size={11} />
          </a>
        </div>
      </footer>
    </>
  );
}
