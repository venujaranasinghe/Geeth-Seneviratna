"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope, FaCog, FaBars } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Navigation items configuration
  const navItems = [
    { name: "Home", to: "home", icon: FaHome },
    { name: "About", to: "about", icon: FaUser },
    { name: "Services", to: "services", icon: FaCog },
    { name: "Portfolio", to: "portfolio", icon: FaBriefcase },
    { name: "Contact", to: "contact", icon: FaEnvelope },
  ]

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.to)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Menu handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Brand Logo */}
        <div className="nav-brand">
          <Link to="home" smooth={true} duration={500} className="brand-link" onClick={closeMenu}>
            <div className="brand-container">
              <span className="brand-text">Geeth</span>
              <div className="brand-dot"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="nav-menu desktop-menu">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`nav-link ${activeSection === item.to ? "active" : ""}`}
                onClick={closeMenu}
              >
                <item.icon className="nav-icon" />
                <span className="nav-text">{item.name}</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions desktop-actions">
          <Link to="contact" smooth={true} duration={500} offset={-80} className="nav-contact-btn">
            <span className="btn-text">Let's Talk</span>
            <div className="btn-shine"></div>
          </Link>

          <button className="theme-toggle" title="Toggle Theme">
            <div className="toggle-track">
              <div className="toggle-thumb"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu" aria-expanded={isMenuOpen}>
          <div className="hamburger-container">
            {isMenuOpen ? <FaTimes className="hamburger-icon" /> : <FaBars className="hamburger-icon" />}
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu} aria-hidden={!isMenuOpen} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="mobile-brand">
            <span className="brand-text">Geeth</span>
            <div className="brand-dot"></div>
          </div>
          <button className="mobile-close" onClick={closeMenu} aria-label="Close Menu">
            <FaTimes />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="mobile-nav">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`mobile-nav-link ${activeSection === item.to ? "active" : ""}`}
              onClick={closeMenu}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="mobile-nav-icon" />
              <span className="mobile-nav-text">{item.name}</span>
              <div className="mobile-nav-arrow">→</div>
            </Link>
          ))}
        </nav>

        {/* Mobile Footer */}
        <div className="mobile-footer">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="mobile-contact-btn"
            onClick={closeMenu}
          >
            <span>Let's Connect</span>
          </Link>

          <div className="mobile-social">
            <span className="mobile-social-text">Follow me</span>
            <div className="mobile-social-links">
              <a href="https://github.com/geethsenaviratne" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/geethseneviratne/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
