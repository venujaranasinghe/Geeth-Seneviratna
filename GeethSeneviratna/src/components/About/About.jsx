"use client"

import { useState, useEffect, useRef } from "react"
import "./About.css"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const [countersAnimated, setCountersAnimated] = useState(false)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const countersRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, observerOptions)

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSkillsAnimated(true)
        }
      })
    }, observerOptions)

    const countersObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCountersAnimated(true)
        }
      })
    }, observerOptions)

    if (aboutRef.current) aboutObserver.observe(aboutRef.current)
    if (skillsRef.current) skillsObserver.observe(skillsRef.current)
    if (countersRef.current) countersObserver.observe(countersRef.current)

    return () => {
      aboutObserver.disconnect()
      skillsObserver.disconnect()
      countersObserver.disconnect()
    }
  }, [])

  const skills = [
    { name: "HTML & CSS", level: 85, category: "Frontend" },
    { name: "React JS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Programming" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "Python", level: 65, category: "Programming" },
    { name: "Database", level: 60, category: "Backend" },
  ]

  const achievements = [
    { number: "02+", label: "Years of Learning", icon: "🎓" },
    { number: "10+", label: "Projects Completed", icon: "💻" },
    { number: "05+", label: "Technologies Mastered", icon: "⚡" },
    { number: "∞", label: "Passion for Coding", icon: "❤️" },
  ]

  const experiences = [
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
  ]

  return (
    <div id="about" className="about-container">
      {/* Background Effects */}
      <div className="about-background">
        <div className="about-grid"></div>
        <div className="about-gradient"></div>
      </div>

      {/* Section Header */}
      <div className={`about-header ${isVisible ? "visible" : ""}`} ref={aboutRef}>
        <div className="section-badge">
          <span className="badge-icon">👨‍💻</span>
          <span className="badge-text">Get to know me</span>
        </div>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Passionate developer crafting digital experiences with modern technologies
        </p>
      </div>

      {/* Main Content */}
      <div className={`about-content ${isVisible ? "visible" : ""}`}>
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-image-container">
              <div className="profile-glow"></div>
              <img src="/src/assets/profile_img.jpg" alt="Geeth Seneviratne" className="profile-image" />
              <div className="profile-overlay">
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Geeth Seneviratne</h3>
              <p className="profile-role">Computer Science Student</p>
              <div className="profile-location">
                <span className="location-icon">📍</span>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          {/* About Text */}
          <div className="about-text">
            <div className="text-block">
              <h3 className="text-title">My Journey</h3>
              <p className="text-content">
                As an undergraduate in <span className="highlight">Computer Science</span> at Sri Lanka Institute of
                Information Technology (SLIIT), I have built a strong foundation in programming languages including C,
                Python, Java, and Arduino development.
              </p>
            </div>

            <div className="text-block">
              <h3 className="text-title">What I Do</h3>
              <p className="text-content">
                My expertise spans <span className="highlight">web development</span>, database management, and
                front-end technologies like React and Tailwind CSS. I'm passionate about creating efficient and
                user-friendly software solutions.
              </p>
            </div>

            <div className="text-block">
              <h3 className="text-title">My Vision</h3>
              <p className="text-content">
                I'm committed to continuous learning and staying updated with industry trends, aiming to contribute to
                impactful projects that blend <span className="highlight">creativity, functionality, and technical
                excellence</span>.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="experience-section">
            <h3 className="experience-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-institution">{exp.institution}</p>
                    <span className="timeline-period">{exp.period}</span>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className={`skills-section ${skillsAnimated ? "animated" : ""}`} ref={skillsRef}>
        <div className="skills-header">
          <h3 className="skills-title">Technical Skills</h3>
          <p className="skills-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: skillsAnimated ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
              <div className="skill-percentage">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className={`achievements-section ${countersAnimated ? "animated" : ""}`} ref={countersRef}>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
              <div className="achievement-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`about-cta ${isVisible ? "visible" : ""}`}>
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
      </div>
    </div>
  )
}

export default About
