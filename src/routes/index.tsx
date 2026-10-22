import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Coffee,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Music2,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitUrl from "@/assets/portrait.jpeg";
import resumeUrl from "@/assets/Pasupathi-Resume.pdf";
import foodcartUrl from "@/assets/foodcart.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pasupathi M — Java Full Stack Developer | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Pasupathi M, a Java Full Stack Developer specializing in robust backend architectures (Java, Servlets, JDBC, MySQL) and modern responsive web interfaces. 6-Month Intern at TAP Academy Bengaluru. Based in Bengaluru, India.",
      },
      { property: "og:title", content: "Pasupathi M — Java Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Explore full-stack Java systems, FoodCart, MoodWave, technical skills, and engineering journey by Pasupathi M.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = ["Work", "Skills", "About", "Experience", "Contact"];

const portfolioRepoUrl = "https://github.com/mpasupathi756-jpg/My_Personal_Portfolio";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/mpasupathi756-jpg", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/pasupathii", icon: Linkedin },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("mpasupathi756@gmail.com");
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Ambient Glassmorphic Glow Elements */}
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow-3" aria-hidden="true" />

      {/* Reading Progress Indicator */}
      <motion.div
        className="reading-progress"
        style={{ scaleX: reduced ? scrollYProgress : smoothProgress }}
        aria-hidden="true"
      />

      {/* Glass Header */}
      <header className="site-header">
        <div className="page-width flex h-full items-center justify-between gap-5">
          <a href="#home" className="wordmark" aria-label="Pasupathi M Home">
            <span>&lt;</span>PASUPATHI<span>/&gt;</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1.5 md:flex">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="nav-link"
                data-active={active === s.toLowerCase()}
              >
                {s}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <span className="availability">
              <i className="status-dot" />
              Open to Opportunities
            </span>

            <Button asChild size="sm" className="btn-primary-glow hidden sm:inline-flex">
              <a href="#contact">
                Let’s talk <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-3 border-b border-white/10 bg-background/95 px-6 py-6 backdrop-blur-2xl md:hidden"
          >

            {sections.map((s) => (
              <a
                href={`#${s.toLowerCase()}`}
                key={s}
                className="nav-link py-3 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {s}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild size="lg" className="btn-primary-glow w-full">
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Let’s Talk
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="hero page-width">
          <div className="hero-portrait-frame">
            <img
              className="hero-photo"
              src={portraitUrl}
              alt="Pasupathi M — Java Full Stack Developer"
              fetchPriority="high"
            />
          </div>

          <motion.div
            className="hero-content"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow glass-pill mb-4 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              A little code. A lot of possibility.
            </div>

            <h1>
              Hi, I’m <br />
              <span className="gradient-text">Pasupathi M.</span>
            </h1>

            <h2 className="hero-role">Java Full Stack Developer</h2>

            <p className="hero-description">
              Turning complex logic into dependable, scalable enterprise software.
              Trained through an intensive <strong>6-month internship at TAP Academy, Bengaluru</strong>,
              I build resilient Java backend architectures, relational databases, and
              ultra-smooth, responsive user experiences.
            </p>

            {/* Quick Stat Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="glass-pill">
                <Coffee className="h-3.5 w-3.5 text-primary" /> Core Java & OOP
              </span>
              <span className="glass-pill">
                <Server className="h-3.5 w-3.5 text-primary" /> Servlets, JSP & JDBC
              </span>
              <span className="glass-pill">
                <Database className="h-3.5 w-3.5 text-primary" /> MySQL & Relational DBs
              </span>
              <span className="glass-pill">
                <Globe className="h-3.5 w-3.5 text-primary" /> Modern Glassmorphic UI
              </span>
            </div>

            <div className="hero-actions">
              <Button asChild size="lg" className="btn-primary-glow">
                <a href="#work">
                  Explore My Work <ArrowDownRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="btn-glass">
                <a
                  href={resumeUrl}
                  download="Pasupathi-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 text-primary" /> Download Résumé
                </a>
              </Button>
            </div>

            <div className="hero-location">
              <span>
                <MapPin size={14} className="text-primary" /> Bengaluru, Karnataka, India
              </span>
              <span>
                <i className="status-dot" /> Seeking Full-Stack & Backend Roles
              </span>
            </div>
          </motion.div>

          <a href="#work" className="hero-scroll" aria-label="Scroll down to work">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        {/* Toolkit Strip */}
        <div className="stack-strip">
          <div className="toolkit-grid page-width flex flex-wrap items-center justify-between gap-x-5 gap-y-4">
            <span className="hidden text-xs font-semibold uppercase tracking-widest text-muted-foreground lg:block">
              Everyday Toolkit
            </span>
            <span className="stack-item">
              <Coffee size={20} className="text-primary" /> Java (Core & OOP)
            </span>
            <span className="stack-item">
              <Server size={19} className="text-primary" /> JSP & Servlets
            </span>
            <span className="stack-item">
              <Database size={19} className="text-primary" /> MySQL & JDBC
            </span>
            <span className="stack-item">
              <Code2 size={20} className="text-primary" /> HTML5 & CSS3
            </span>
            <span className="stack-item">
              <Github size={19} className="text-primary" /> Git & GitHub
            </span>
          </div>
        </div>

        {/* Selected Work Section */}
        <section id="work" className="section">
          <div className="page-width">
            <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="section-number">01 / SELECTED WORK</p>
                <h2>
                  Engineered with Purpose<span className="text-primary">.</span>
                </h2>
                <p className="section-subtitle">
                  Real-world architectures. Production deployments. Clean, maintainable code.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="ghost" size="sm" className="btn-glass">
                  <a
                    href={portfolioRepoUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Portfolio Source Code"
                  >
                    Portfolio Repo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="btn-glass">
                  <a
                    href="https://github.com/mpasupathi756-jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Project 1: FoodCart */}
              <Reveal>
                <article className="project-card h-full">
                  <a
                    href="https://foodcart-production-affe.up.railway.app"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open FoodCart live deployment on Railway"
                  >
                    <div className="project-image">
                      <img
                        src={foodcartUrl}
                        alt="FoodCart food ordering platform preview"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <div className="project-body">
                    <div className="flex items-center justify-between">
                      <div className="project-meta">Full Stack · Food Ordering System</div>
                      <span className="glass-pill text-xs text-primary">
                        <i className="status-dot" /> Live on Railway
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <h3>FoodCart</h3>
                      <div className="flex gap-2">
                        <Button asChild size="icon" className="btn-glass h-9 w-9">
                          <a
                            href="https://foodcart-production-affe.up.railway.app"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit FoodCart live"
                            title="Visit Live Application"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button asChild size="icon" className="btn-glass h-9 w-9">
                          <a
                            href="https://github.com/mpasupathi756-jpg"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="FoodCart GitHub repository"
                            title="View Source on GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <p>
                      A production-deployed food ordering web application connecting
                      customers, restaurants, and administrators. Built with clean MVC architecture,
                      role-based security, and full database persistence.
                    </p>

                    <ul className="project-features">
                      <li>
                        <CheckCircle2 size={16} /> Role-based session authentication & user management
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Real-time cart management & order status tracking
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Production cloud deployment on Railway with MySQL
                      </li>
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Java", "JSP", "Servlets", "JDBC", "MySQL", "MVC Architecture", "Railway"].map(
                        (t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <a
                        href="https://foodcart-production-affe.up.railway.app"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Launch Live Application <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* Project 2: MoodWave */}
              <Reveal delay={0.15}>
                <article className="project-card h-full">
                  <div
                    className="music-art"
                    aria-label="Illustrated MoodWave music project cover"
                  >
                    <div className="music-art-top">
                      <span className="flex items-center gap-2 font-semibold">
                        <Music2 size={18} className="text-primary" /> MoodWave
                      </span>
                      <span className="glass-pill text-xs">Full Stack Concept</span>
                    </div>
                    <div className="music-art-title">
                      A soundtrack <br />
                      for every feeling.
                    </div>
                    <div className="wave-bars" aria-hidden="true">
                      {Array.from({ length: 36 }, (_, i) => (
                        <i key={i} />
                      ))}
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="flex items-center justify-between">
                      <div className="project-meta">Full Stack · Music Discovery</div>
                      <span className="glass-pill text-xs text-muted-foreground">
                        Interactive System
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <h3>MoodWave</h3>
                      <div className="flex items-center gap-2">
                        <Button asChild size="icon" className="btn-glass h-9 w-9">
                          <a
                            href="https://mood-wave-gilt.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit MoodWave live"
                            title="Visit Live Application"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button asChild size="icon" className="btn-glass h-9 w-9">
                          <a
                            href="https://github.com/mpasupathi756-jpg"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="MoodWave GitHub repository"
                            title="View Source on GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <p>
                      A dynamic music streaming platform featuring mood-based discovery algorithms,
                      personalized track playlists, listening history, and real-time collaborative rooms.
                    </p>

                    <ul className="project-features">
                      <li>
                        <CheckCircle2 size={16} /> Mood-based classification & track recommendation engine
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Real-time collaborative listening spaces & queueing
                      </li>
                      <li>
                        <CheckCircle2 size={16} /> Audio visualization & responsive glass UI design
                      </li>
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Java",
                        "RESTful APIs",
                        "MySQL",
                        "Audio Visualizer",
                        "Real-time Rooms",
                        "Authentication",
                      ].map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <a
                        href="https://mood-wave-gilt.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Launch Live Application <ArrowUpRight size={14} />
                      </a>
                      <a
                        href="https://github.com/mpasupathi756-jpg"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Source Code <Github size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Technical Competencies & Architecture Section */}
        <section id="skills" className="section">
          <div className="page-width">
            <Reveal className="mb-12">
              <p className="section-number">02 / CORE EXPERTISE</p>
              <h2>
                Architectural Pillars<span className="text-primary">.</span>
              </h2>
              <p className="section-subtitle">
                How I approach full-stack software development from the database to the interface.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0.05}>
                <div className="bento-card h-full">
                  <div className="bento-icon">
                    <Coffee size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Robust Java Backend</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Object-Oriented Programming, MVC architecture, Servlets, and JDBC for reliable,
                    high-throughput request handling and clean business logic separation.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bento-card h-full">
                  <div className="bento-icon">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Relational Data & SQL</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Database schema modeling, normalized entity designs, complex join queries,
                    CRUD operations, and ACID transaction integrity with MySQL & PostgreSQL.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bento-card h-full">
                  <div className="bento-icon">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Modern Glass Web UI</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Fluid, responsive frontend layouts crafted with HTML5, CSS3, dynamic themes,
                    Framer Motion micro-animations, and intuitive user experiences.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bento-card h-full">
                  <div className="bento-icon">
                    <Workflow size={24} />
                  </div>
                  <h3 className="text-xl font-bold">DevOps & Cloud Rigor</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Git version control, Maven build workflows, Apache Tomcat servlet container
                    configuration, and production cloud hosting on platforms like Railway and Cloudflare.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="page-width grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <p className="section-number">03 / BEHIND THE CODE</p>
              <h2>
                Curious by nature.<br />
                Developer by conviction<span className="text-primary">.</span>
              </h2>

              <p className="section-subtitle mt-6">
                I’m Pasupathi M, a Computer Science engineering graduate (2026) dedicated to
                Java full-stack development. I enjoy connecting dependable backend systems with
                clean, human-centered web interfaces.
              </p>

              <p className="section-subtitle mt-4">
                Through an intensive <strong>6-month full-stack internship at TAP Academy in Bengaluru</strong>,
                a <strong>1-month frontend internship at Talent Trek</strong>, and production-grade project deployments,
                I have mastered building scalable MVC systems, role-based security, and relational databases.
                I bring a strong learner's mindset, high attention to detail, and a commitment to writing clean code.
              </p>

              <div className="mt-8 flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Button key={label} asChild size="icon" className="btn-glass">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
                <Button asChild size="sm" className="btn-glass ml-2">
                  <a href="mailto:mpasupathi756@gmail.com">
                    <Mail className="mr-2 h-4 w-4 text-primary" /> Email Me
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Detailed Skills Breakdown */}
            <Reveal delay={0.15}>
              <div className="glass-panel p-6 sm:p-8">
                <div className="skill-row">
                  <div className="skill-label">
                    <Coffee /> Core Languages
                  </div>
                  <div className="skill-values font-medium text-foreground">
                    Java (OOP, Collections, Exception Handling, Streams) · SQL · JavaScript
                  </div>
                </div>

                <div className="skill-row">
                  <div className="skill-label">
                    <Server /> Backend & Architecture
                  </div>
                  <div className="skill-values">
                    JDBC · JSP · Servlets · MVC Architecture · RESTful APIs · Object-Oriented Design · CRUD Operations
                  </div>
                </div>

                <div className="skill-row">
                  <div className="skill-label">
                    <Globe /> Frontend & UI
                  </div>
                  <div className="skill-values">
                    HTML5 · CSS3 · Multi-Theme Glassmorphism · Responsive Design · React / TypeScript
                  </div>
                </div>

                <div className="skill-row">
                  <div className="skill-label">
                    <Database /> Databases & Systems
                  </div>
                  <div className="skill-values">
                    MySQL · PostgreSQL · Apache Tomcat · Maven · Git & GitHub · Railway Cloud
                  </div>
                </div>

                <div className="skill-row">
                  <div className="skill-label">
                    <Sparkles /> AI & Modern Workflow
                  </div>
                  <div className="skill-values">
                    GitHub Copilot · Claude · ChatGPT · Gemini · VS Code · Postman
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="section">
          <div className="page-width">
            <Reveal>
              <p className="section-number">04 / THE JOURNEY</p>
              <h2>
                Experience & Education<span className="text-primary">.</span>
              </h2>
              <p className="section-subtitle">
                My professional path, internships, and academic foundation.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-12 md:grid-cols-2">
              {/* Experience Timeline */}
              <Reveal>
                <h3 className="mb-8 flex items-center gap-2 text-sm uppercase tracking-widest text-primary font-semibold">
                  <Cpu size={16} /> Professional Experience
                </h3>

                {/* TAP Academy - 6 Months Bengaluru */}
                <div className="timeline-item">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="glass-pill text-xs font-semibold text-primary">
                      6 Months Internship
                    </span>
                    <span className="glass-pill text-xs text-muted-foreground">
                      Bengaluru, Karnataka
                    </span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold">Java Full Stack Development Intern</h3>
                  <p className="font-semibold text-foreground">TAP Academy, Bengaluru</p>
                  <ul>
                    <li>
                      Completed a rigorous 6-month hands-on full-stack development program focused on Core Java,
                      Object-Oriented Programming (OOP), Multithreading, and Collections Framework.
                    </li>
                    <li>
                      Engineered enterprise Model-View-Controller (MVC) architectures using Java Servlets, JSP,
                      JDBC, and relational MySQL database systems.
                    </li>
                    <li>
                      Built secure session authentication, role-based authorization workflows, and full-stack
                      CRUD systems with Maven build automation and Apache Tomcat.
                    </li>
                  </ul>
                </div>

                {/* Talent Trek - 1 Month Remote */}
                <div className="timeline-item">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="glass-pill text-xs font-semibold text-primary">
                      1 Month Internship
                    </span>
                    <span className="glass-pill text-xs text-muted-foreground">
                      Remote
                    </span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold">Web Development Intern</h3>
                  <p className="font-semibold text-foreground">Talent Trek</p>
                  <ul>
                    <li>
                      Developed modern, responsive, mobile-first web pages and reusable UI components using
                      semantic HTML5 and CSS3.
                    </li>
                    <li>
                      Collaborated on team code repositories using Git and GitHub, ensuring high performance,
                      accessibility, and cross-browser compatibility.
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Education Timeline */}
              <Reveal delay={0.15}>
                <h3 className="mb-8 flex items-center gap-2 text-sm uppercase tracking-widest text-primary font-semibold">
                  <ShieldCheck size={16} /> Academic Background
                </h3>

                <div className="timeline-item">
                  <span className="glass-pill text-xs text-primary mb-2">2022 — 2026</span>
                  <h3 className="mt-1 text-xl font-bold">B.E. Computer Science & Engineering</h3>
                  <p className="font-semibold text-foreground">
                    CMS College of Engineering, Coimbatore
                  </p>
                  <p className="text-sm text-muted-foreground">Affiliated with Anna University, Chennai</p>
                  <p className="mt-2 inline-flex items-center gap-2 font-mono text-sm text-primary">
                    CGPA: 7.5
                  </p>
                </div>

                <div className="timeline-item">
                  <span className="glass-pill text-xs text-primary mb-2">2020 — 2022</span>
                  <h3 className="mt-1 text-lg font-bold">Higher Secondary Certificate (HSC)</h3>
                  <p className="font-semibold text-foreground">
                    Government Higher Secondary School, Dharmapuri
                  </p>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">Score: 73%</p>
                </div>

                <div className="timeline-item">
                  <span className="glass-pill text-xs text-primary mb-2">2019 — 2020</span>
                  <h3 className="mt-1 text-lg font-bold">Secondary School Leaving Certificate (SSLC)</h3>
                  <p className="font-semibold text-foreground">
                    Government High School, Dharmapuri
                  </p>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">Score: 78%</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="page-width contact-layout">
            <Reveal>
              <p className="section-number">05 / GET IN TOUCH</p>
              <h2>
                Great things start with a conversation<span className="text-primary">.</span>
              </h2>

              <p className="section-subtitle">
                Whether you have an open position, an exciting full-stack opportunity, or simply
                want to connect, my inbox is always open.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email Direct Copy Box */}
                <div className="glass-card p-5">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Direct Email
                  </span>
                  <div className="contact-email-row mt-2">
                    <a
                      href="mailto:mpasupathi756@gmail.com"
                      className="contact-link text-base sm:text-lg font-semibold"
                    >
                      <Mail className="text-primary" /> mpasupathi756@gmail.com
                    </a>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="btn-glass ml-auto h-9 w-9"
                      onClick={copyEmail}
                      aria-label={copied ? "Email copied" : "Copy email address"}
                      title={copied ? "Email copied" : "Copy email address"}
                    >
                      {copied ? <Check className="text-primary" /> : <Copy />}
                    </Button>
                  </div>
                  <span className="copy-status" role="status">
                    {copied
                      ? "✓ Email address copied to clipboard!"
                      : copyError
                      ? "Could not copy automatically. Please select the address above."
                      : ""}
                  </span>
                </div>

                {/* Phone Call Box */}
                <div className="glass-card p-5">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone / WhatsApp
                  </span>
                  <div className="mt-2 flex items-center justify-between">
                    <a
                      href="tel:+918903290586"
                      className="contact-link text-base sm:text-lg font-semibold"
                    >
                      <Phone className="text-primary" /> +91 89032 90586
                    </a>
                    <Button asChild size="sm" className="btn-glass">
                      <a href="tel:+918903290586">Call Now</a>
                    </Button>
                  </div>
                </div>

                {/* Location & Links */}
                <div className="glass-card p-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary" /> Bengaluru, Karnataka, India
                  </div>
                  <div className="flex gap-4">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon size={16} /> {label} <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.15}>
              <div className="glass-panel p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the details below and I’ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer page-width flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-foreground">
            © {new Date().getUTCFullYear()} Pasupathi M
          </span>
          <span className="text-xs text-muted-foreground">
            Java Full Stack Developer · Built with precision & care
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={portfolioRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            Portfolio Repo
          </a>
          <a
            href="https://github.com/mpasupathi756-jpg"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/pasupathii"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a href="#home" className="flex items-center gap-1.5 text-sm font-medium hover:text-primary">
            Back to Top <ArrowUp size={14} />
          </a>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {active && (
        <Button asChild size="icon" className="back-top" aria-label="Back to top">
          <a href="#home" title="Back to top">
            <ArrowUp className="h-5 w-5 text-primary" />
          </a>
        </Button>
      )}
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
  const templateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"];
  const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];
  const configured = Boolean(serviceId && templateId && publicKey);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("from_name") ?? "").trim();
    const email = String(data.get("reply_to") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email address, and message.");
      return;
    }

    if (!configured) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
      window.location.href = `mailto:mpasupathi756@gmail.com?subject=${subject}&body=${body}`;
      setStatus(
        "Opening your default email client with your message. Please click Send in your email app!"
      );
      return;
    }

    setSending(true);
    setStatus("");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          from_email: email,
          message,
          to_name: "Pasupathi M",
          to_email: "mpasupathi756@gmail.com",
        },
        { publicKey }
      );
      setStatus("Thank you! Your message has been sent successfully.");
      form.reset();
    } catch {
      setStatus("Your message could not be sent. Please email mpasupathi756@gmail.com directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Your Name
          </label>
          <input
            id="contact-name"
            name="from_name"
            className="form-field"
            placeholder="Alex Morgan"
            autoComplete="name"
            required
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="field-label">
            Email Address
          </label>
          <input
            id="contact-email"
            name="reply_to"
            type="email"
            className="form-field"
            placeholder="alex@company.com"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="field-label">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-field resize-y"
          rows={5}
          placeholder="Tell me about your project, role, or idea…"
          required
          maxLength={5000}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={sending}
        className="btn-primary-glow w-full sm:w-auto"
      >
        {sending ? "Sending…" : configured ? "Send Message" : "Compose Email"}
        {status.startsWith("Thank you") ? (
          <Check className="ml-2 h-4 w-4" />
        ) : (
          <Send className="ml-2 h-4 w-4" />
        )}
      </Button>

      {!configured && (
        <p className="text-xs text-muted-foreground leading-relaxed">
          Tip: Directly opens your email client. Prefer emailing manually? Reach out to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href="mailto:mpasupathi756@gmail.com"
          >
            mpasupathi756@gmail.com
          </a>
          .
        </p>
      )}

      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
