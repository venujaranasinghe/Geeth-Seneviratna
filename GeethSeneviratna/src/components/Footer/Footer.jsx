"use client"

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaHeart, FaArrowUp } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/geethseneviratne/", label: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/geethsenaviratne", label: "GitHub" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/invites/contact/?igsh=1vbja1sbj1gxj&utm_content=1ub3bq1",
      label: "Instagram",
    },
  ]

  return (
    <footer className="footer-container">
      {/* Background Effects */}
      <div className="footer-background">
        <div className="footer-grid"></div>
        <div className="footer-gradient"></div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-container">
              <h3 className="brand-name">Geeth Seneviratne</h3>
              <div className="brand-dot"></div>
            </div>
            <p className="brand-description">
              Computer Science student passionate about creating innovative digital solutions through clean code and
              creative problem-solving.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.label}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4 className="services-title">Services</h4>
            <ul className="services-list">
              <li>
                <span className="service-item">Web Development</span>
              </li>
              <li>
                <span className="service-item">Frontend Development</span>
              </li>
              <li>
                <span className="service-item">Backend Development</span>
              </li>
              <li>
                <span className="service-item">Problem Solving</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="contact-title">Get In Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:geeth@example.com" className="contact-link">
                  geeth@example.com
                </a>
              </p>
              <p className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">Colombo, Sri Lanka</span>
              </p>
              <div className="availability">
                <div className="status-dot"></div>
                <span className="status-text">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} Geeth Seneviratne. Made with <FaHeart className="heart-icon" /> in Sri Lanka
            </p>
          </div>

          <div className="footer-actions">
            <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
