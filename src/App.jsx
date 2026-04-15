import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Mail,
  ChevronDown,
  Star,
  GitFork,
  Sparkles
} from 'lucide-react'
import './App.css'

// ==========================================
// EDIT THIS SECTION WITH YOUR PERSONAL DETAILS
// ==========================================
const PERSONAL_DETAILS = {
  name: "Priyanshu Joshi",
  tagline: "Developer & Student",
  bio: "I craft digital experiences with code. Passionate about automation and building interactive web applications. Always exploring the intersection of technology and creativity.",
  location: "India",
  email: "prince200926@gmail.com",
  github: "prince200926-lab",
  // Add your skills here
  skills: [
    { name: "Python", level: 90 },
    { name: "HTML/CSS", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
  ]
}

// ==========================================
// EDIT THIS SECTION WITH YOUR PROJECTS
// ==========================================
const PROJECTS = [
  {
    id: 1,
    name: "RFID System",
    description: "JavaScript-based RFID management system for tracking and authentication",
    tech: ["JavaScript", "Node.js"],
    stars: 2,
    fork: false,
    github: "https://github.com/prince200926-lab/rfid",
    demo: null,
    featured: true
  },
  {
    id: 2,
    name: "IPL Tracker",
    description: "Interactive IPL cricket statistics and match tracking application",
    tech: ["JavaScript", "HTML", "CSS"],
    stars: 1,
    fork: false,
    github: "https://github.com/prince200926-lab/IPL",
    demo: null,
    featured: true
  },
  {
    id: 3,
    name: "Face Attendance System",
    description: "Python GUI integrated attendance system using face recognition",
    tech: ["Python", "OpenCV", "Dlib"],
    stars: 0,
    fork: true,
    github: "https://github.com/prince200926-lab/Face-attendance-system",
    demo: null,
    featured: true
  },
  {
    id: 4,
    name: "Bot Main",
    description: "Automation bot with various utility features",
    tech: ["Python"],
    stars: 0,
    fork: false,
    github: "https://github.com/prince200926-lab/bot-main-",
    demo: null,
    featured: false
  },
  {
    id: 5,
    name: "p5 Projects",
    description: "Creative coding experiments with p5.js",
    tech: ["HTML", "JavaScript", "p5.js"],
    stars: 0,
    fork: false,
    github: "https://github.com/prince200926-lab/p5",
    demo: null,
    featured: false
  },
  {
    id: 6,
    name: "Capstone Project",
    description: "Academic capstone project demonstrating full-stack capabilities",
    tech: ["Python"],
    stars: 0,
    fork: false,
    github: "https://github.com/prince200926-lab/Capstone",
    demo: null,
    featured: false
  }
]

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const letterAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  return (
    <div className="portfolio">
      {/* Custom Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150
        }}
      />

      {/* Navigation */}
      <motion.nav
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-brand">
          <Terminal size={20} />
          <span>PJ</span>
        </div>
        <div className="nav-links">
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-grid">
          <div className="grid-line horizontal" />
          <div className="grid-line vertical" />
        </div>

        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-eyebrow" variants={fadeInUp}>
            <Sparkles size={14} />
            <span>Portfolio 2026</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            {"Priyanshu Joshi".split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterAnimation}
                transition={{ delay: i * 0.03, duration: 0.5 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p className="hero-tagline" variants={fadeInUp}>
            Developer & Creator
          </motion.p>

          <motion.p className="hero-description" variants={fadeInUp}>
            I craft digital experiences with code. Passionate about automation,
            face recognition systems, and building interactive web applications.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeInUp}>
            <button
              className="btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <Code2 size={18} />
              View Projects
            </button>
            <a
              href={`https://github.com/${PERSONAL_DETAILS.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Code size={18} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={24} className="bounce" />
        </motion.div>

        {/* Decorative Elements */}
        <div className="hero-accent top-right" />
        <div className="hero-accent bottom-left" />
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">01</span>
            <h2>About</h2>
          </motion.div>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="about-lead">
                {/* EDIT THIS - Your main bio */}
                I'm a developer based in India with a focus on building
                practical applications that solve real problems.
              </p>
              <p>
                {/* EDIT THIS - More details about yourself */}
                My work spans from face recognition systems and automation bots
                to interactive web applications. I'm particularly interested in
                the intersection of hardware and software, as demonstrated by my
                RFID project.
              </p>
              <p>
                {/* EDIT THIS - Your interests/goals */}
                When I'm not coding, I'm exploring new technologies, contributing
                to open-source projects, and continuously learning to expand my skill set.
              </p>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-item">
                <span className="stat-value">19</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">3+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">4</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">02</span>
            <h2>Projects</h2>
          </motion.div>

          <div className="projects-grid">
            {PROJECTS.filter(p => p.featured).map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card featured"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Code2 size={24} />
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View on GitHub"
                    >
                      <Code size={18} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-stats">
                  {project.stars > 0 && (
                    <span className="stat">
                      <Star size={14} /> {project.stars}
                    </span>
                  )}
                  {project.fork && (
                    <span className="stat">
                      <GitFork size={14} /> Fork
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="projects-more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>More Projects</h3>
            <div className="projects-list">
              {PROJECTS.filter(p => !p.featured).map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-row"
                >
                  <div className="project-row-info">
                    <span className="project-row-name">{project.name}</span>
                    <span className="project-row-desc">{project.description}</span>
                  </div>
                  <div className="project-row-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-dot" title={tech} />
                    ))}
                  </div>
                  <ExternalLink size={16} className="project-row-arrow" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">03</span>
            <h2>Skills</h2>
          </motion.div>

          <div className="skills-grid">
            <motion.div
              className="skills-chart"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Technical Proficiency</h3>
              <div className="skills-bars">
                {PERSONAL_DETAILS.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skills-categories"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="skill-category">
                <div className="category-icon">
                  <Code2 size={24} />
                </div>
                <h4>Languages</h4>
                <p>JavaScript, Python, HTML/CSS</p>
              </div>

              <div className="skill-category">
                <div className="category-icon">
                  <Cpu size={24} />
                </div>
                <h4>Specialties</h4>
                <p>Face Recognition, RFID Systems, Automation</p>
              </div>

              <div className="skill-category">
                <div className="category-icon">
                  <Globe size={24} />
                </div>
                <h4>Web</h4>
                <p>React, Node.js, p5.js</p>
              </div>

              <div className="skill-category">
                <div className="category-icon">
                  <Terminal size={24} />
                </div>
                <h4>Tools</h4>
                <p>Git, GitHub, VS Code</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">04</span>
            <h2>Contact</h2>
          </motion.div>

          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-text">
              <h3>Let's work together</h3>
              <p>
                {/* EDIT THIS - Your contact message */}
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="contact-links">
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="contact-card"
              >
                <Mail size={24} />
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{PERSONAL_DETAILS.email}</span>
                </div>
              </a>

              <a
                href={`https://github.com/${PERSONAL_DETAILS.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <Code size={24} />
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">@{PERSONAL_DETAILS.github}</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Terminal size={16} />
            <span>Priyanshu Joshi</span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} — Built with React + Vite
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
