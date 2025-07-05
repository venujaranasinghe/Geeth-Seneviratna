"use client"

import { useState, useEffect, useRef } from "react"
import "./About.css"

const About = () => {
  // State management
  const [visibilityState, setVisibilityState] = useState({
    header: false,
    content: false,
    skills: false,
    achievements: false,
  })

  // Refs for intersection observers
  const sectionRefs = {
    header: useRef(null),
    content: useRef(null),
    skills: useRef(null),
    achievements: useRef(null),
  }

  // Data configuration
  const aboutData = {
    personal: {
      name: "Geeth Seneviratne",
      role: "Computer Science Student",
      location: "Colombo, Sri Lanka",
      image: "/src/assets/profile_img.jpg",
      status: "Available for opportunities",
    },

    textBlocks: [
      {
        title: "My Journey",
        content:
          "As an undergraduate in Computer Science at Sri Lanka Institute of Information Technology (SLIIT), I have built a strong foundation in programming languages including C, Python, Java, and Arduino development.",
        highlights: ["Computer Science"],
      },
      {
        title: "What I Do",
        content:
          "My expertise spans web development, database management, and front-end technologies like React and Tailwind CSS. I'm passionate about creating efficient and user-friendly software solutions.",
        highlights: ["web development"],
      },
      {
        title: "My Vision",
        content:
          "I'm committed to continuous learning and staying updated with industry trends, aiming to contribute to impactful projects that blend creativity, functionality, and technical excellence.",
        highlights: ["creativity, functionality, and technical excellence"],
      },
    ],

    experiences: [
      {
        title: "Computer Science Student",
        institution: "SLIIT",
        period: "2023 - Present",
        description: "Pursuing Bachelor's degree with focus on software development and emerging technologies.",
      },
      {
        title: "Self-Taught Developer",
        institution: "Personal Projects",
        period: "2022 - Present",
        description: "Building web applications and exploring new technologies through hands-on projects.",
      },
    ],

    skills: [
      { name: "HTML & CSS", level: 85, category: "Frontend" },
      { name: "React JS", level: 75, category: "Frontend" },
      { name: "JavaScript", level: 80, category: "Programming" },
      { name: "Java", level: 70, category: "Programming" },
      { name: "Python", level: 65, category: "Programming" },
      { name: "Database", level: 60, category: "Backend" },
    ],

    achievements: [
      { number: "02+", label: "Years of Learning", icon: "🎓" },
      { number: "10+", label: "Projects Completed", icon: "💻" },
      { number: "05+", label: "Technologies Mastered", icon: "⚡" },
      { number: "∞", label: "Passion for Coding", icon: "❤️" },
    ],
  }

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }

    const createObserver = (key) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibilityState((prev) => ({ ...prev, [key]: true }))
          }
        })
      }, observerOptions)
    }

    // Create observers for each section
    const observers = {}
    Object.keys(sectionRefs).forEach((key) => {
      if (sectionRefs[key].current) {
        observers[key] = createObserver(key)
        observers[key].observe(sectionRefs[key].current)
      }
    })

    // Cleanup
    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect())
    }
  }, [])

  // Render helpers
  const renderTextBlock = (block, index) => (
    <div key={index} className="text-block">
      <h3 className="text-title">{block.title}</h3>
      <p className="text-content">
        {block.content.split(new RegExp(`(${block.highlights.join("|")})`, "gi")).map((part, i) =>
          block.highlights.some((highlight) => part.toLowerCase() === highlight.toLowerCase()) ? (
            <span key={i} className="highlight">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </p>
    </div>
  )

  const renderExperience = (exp, index) => (
    <div key={index} className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4 className="timeline-title">{exp.title}</h4>
        <p className="timeline-institution">{exp.institution}</p>
        <span className="timeline-period">{exp.period}</span>
        <p className="timeline-description">{exp.description}</p>
      </div>
    </div>
  )

  const renderSkill = (skill, index) => (
    <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-category">{skill.category}</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: visibilityState.skills ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 0.1}s`,
          }}
        />
      </div>
      <div className="skill-percentage">{skill.level}%</div>
    </div>
  )

  const renderAchievement = (achievement, index) => (
    <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="achievement-icon">{achievement.icon}</div>
      <div className="achievement-number">{achievement.number}</div>
      <div className="achievement-label">{achievement.label}</div>
      <div className="achievement-glow"></div>
    </div>
  )

  return (
    <div id="about" className="about-container">
      {/* Background Effects */}
      <div className="about-background">
        <div className="about-grid"></div>
        <div className="about-gradient"></div>
      </div>

      {/* Section Header */}
      <header className={`about-header ${visibilityState.header ? "visible" : ""}`} ref={sectionRefs.header}>
        <div className="section-badge">
          <span className="badge-icon">👨‍💻</span>
          <span className="badge-text">Get to know me</span>
        </div>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Passionate developer crafting digital experiences with modern technologies</p>
      </header>

      {/* Main Content */}
      <main className={`about-content ${visibilityState.content ? "visible" : ""}`} ref={sectionRefs.content}>
        {/* Profile Section */}
        <aside className="profile-section">
          <div className="profile-card">
            <div className="profile-image-container">
              <div className="profile-glow"></div>
              <img
                src={aboutData.personal.image || "/placeholder.svg"}
                alt={aboutData.personal.name}
                className="profile-image"
              />
              <div className="profile-overlay">
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>{aboutData.personal.status}</span>
                </div>
              </div>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{aboutData.personal.name}</h3>
              <p className="profile-role">{aboutData.personal.role}</p>
              <div className="profile-location">
                <span className="location-icon">📍</span>
                <span>{aboutData.personal.location}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Section */}
        <section className="content-section">
          {/* About Text */}
          <div className="about-text">{aboutData.textBlocks.map(renderTextBlock)}</div>

          {/* Experience Timeline */}
          <div className="experience-section">
            <h3 className="experience-title">Experience</h3>
            <div className="timeline">{aboutData.experiences.map(renderExperience)}</div>
          </div>
        </section>
      </main>

      {/* Skills Section */}
      <section className={`skills-section ${visibilityState.skills ? "animated" : ""}`} ref={sectionRefs.skills}>
        <header className="skills-header">
          <h3 className="skills-title">Technical Skills</h3>
          <p className="skills-subtitle">Technologies I work with</p>
        </header>
        <div className="skills-grid">{aboutData.skills.map(renderSkill)}</div>
      </section>

      {/* Achievements Section */}
      <section
        className={`achievements-section ${visibilityState.achievements ? "animated" : ""}`}
        ref={sectionRefs.achievements}
      >
        <div className="achievements-grid">{aboutData.achievements.map(renderAchievement)}</div>
      </section>

      {/* Call to Action */}
      <footer className={`about-cta ${visibilityState.content ? "visible" : ""}`}>
        <div className="cta-content">
          <h3 className="cta-title">Let's Work Together</h3>
          <p className="cta-text">Ready to bring your ideas to life with clean code and creative solutions</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">
              <span>Get In Touch</span>
              <div className="button-shine"></div>
            </a>
            <a href="/resume.pdf" className="cta-secondary" download>
              <span>Download CV</span>
              <div className="button-shine"></div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
