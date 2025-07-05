"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaTwitter, FaDownload, FaArrowRight } from "react-icons/fa"
import "./Hero1.css"

const Hero1 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(timer)
    }
  }, [])

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/geethseneviratne/", className: "linkedin", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com", className: "twitter", label: "Twitter" },
    { icon: FaFacebook, url: "https://www.facebook.com/share/1YfSjfV2Tu/", className: "facebook", label: "Facebook" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/invites/contact/?igsh=1vbja1sbj1gxj&utm_content=1ub3bq1",
      className: "instagram",
      label: "Instagram"
    },
    { icon: FaGithub, url: "https://github.com/geethsenaviratne", className: "github", label: "GitHub" },
  ]

  return (
    <div id="home" className="hero-container">
      {/* Enhanced Background */}
      <div className="background-effects">
        <div
          className="mouse-gradient"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(75, 85, 99, 0.12) 0%, transparent 70%)`,
          }}
        />

        {/* Enhanced floating elements */}
        <div className="floating-elements">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`floating-dot ${i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced geometric patterns */}
        <div className="geometric-bg">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>

        <div className="grid-overlay" />
        
        {/* Ambient light effect */}
        <div className="ambient-light"></div>
      </div>

      {/* Status indicator */}
      <div className="status-indicator">
        <div className="status-dot"></div>
        <span className="status-text">Available for opportunities</span>
      </div>

      {/* Time display */}
      <div className="time-display">
        <span className="time-text">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span className="location-text">Colombo, LK</span>
      </div>

      {/* Enhanced Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-glow" />
          <div className="profile-frame">
            <img src="/src/assets/profile_img.jpg" alt="Geeth Seneviratne" className="profile-image" />
            <div className="profile-overlay"></div>
          </div>
          <div className="profile-border"></div>
          <div className="profile-info">
            <div className="profile-badge">
              <span>CS Student</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Enhanced Professional Greeting */}
        <div className={`greeting-section ${isVisible ? "visible" : ""}`}>
          <div className="greeting-wrapper">
            <span className="greeting-line"></span>
            <h2 className="greeting-text">
              <span className="greeting-wave">👋</span>
              Hello, I'm
            </h2>
            <span className="greeting-line"></span>
          </div>
        </div>

        {/* Enhanced Name and Title */}
        <div className={`name-section ${isVisible ? "visible" : ""}`}>
          <h1 className="main-name">
            <span className="first-name">Geeth</span>
            <span className="last-name">Seneviratne</span>
          </h1>
          <div className="title-container">
            <div className="title-badge">
              <span className="title-icon">💻</span>
              <span className="title-text">Computer Science Undergraduate</span>
            </div>
            <div className="experience-badge">
              <span className="experience-text">2nd Year Student</span>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Description */}
        <div className={`description-section ${isVisible ? "visible" : ""}`}>
          <p className="description-text">
            Passionate about crafting <span className="highlight-text">innovative digital solutions</span> through clean code and creative problem-solving.
            <br />
            <span className="institution">
              <span className="institution-icon">🎓</span>
              Sri Lanka Institute of Information Technology
            </span>
          </p>
          
          {/* Skills preview */}
          <div className="skills-preview">
            <div className="skill-tag">React</div>
            <div className="skill-tag">Node.js</div>
            <div className="skill-tag">Python</div>
            <div className="skill-tag">JavaScript</div>
          </div>
        </div>

        {/* Enhanced Professional Actions */}
        <div className={`actions-section ${isVisible ? "visible" : ""}`}>
          <div className="actions-container">
            <Link to="contact" smooth={true} duration={500} offset={-50} className="primary-button">
              <div className="button-bg"></div>
              <span className="button-text">Let's Connect</span>
              <FaArrowRight className="button-icon" />
              <div className="button-shine"></div>
            </Link>

            <button className="secondary-button">
              <div className="button-bg"></div>
              <FaDownload className="button-icon" />
              <span className="button-text">Download CV</span>
              <div className="button-shine"></div>
            </button>
          </div>
          
          {/* Quick stats */}
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Passion</span>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Social Links */}
        <div className={`social-section ${isVisible ? "visible" : ""}`}>
          <div className="social-wrapper">
            <div className="social-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Let's Connect</span>
              <span className="divider-line"></span>
            </div>

            <div className="social-grid">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.className}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    title={social.label}
                  >
                    <div className="social-bg"></div>
                    <IconComponent className="social-icon" />
                    <div className="social-hover"></div>
                    <span className="social-tooltip">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="scroll-section">
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <div className="scroll-dot"></div>
          </div>
          <span className="scroll-text">Scroll to explore my journey</span>
        </div>
      </div>
    </div>
  )
}

export default Hero1
