"use client"

import { useState, useEffect, useRef } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import "./Contact.css"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setSubmitStatus("")
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "geeth@example.com",
      link: "mailto:geeth@example.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+94 77 123 4567",
      link: "tel:+94771234567",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/geethseneviratne/", label: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/geethsenaviratne", label: "GitHub" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <div id="contact" className="contact-container" ref={contactRef}>
      {/* Background Effects */}
      <div className="contact-background">
        <div className="contact-grid"></div>
        <div className="contact-gradient"></div>
      </div>

      {/* Section Header */}
      <div className={`contact-header ${isVisible ? "visible" : ""}`}>
        <div className="section-badge">
          <span className="badge-icon">📧</span>
          <span className="badge-text">Get In Touch</span>
        </div>
        <h2 className="section-title">Contact Me</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Let's discuss your project and bring your ideas to life</p>
      </div>

      {/* Contact Content */}
      <div className={`contact-content ${isVisible ? "visible" : ""}`}>
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-header">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-subtitle">I'm always open to discussing new opportunities and interesting projects.</p>
          </div>

          <div className="contact-details">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <a key={index} href={info.link} className="contact-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="contact-icon">
                    <IconComponent />
                  </div>
                  <div className="contact-text">
                    <div className="contact-label">{info.title}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="social-section">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
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

          <div className="availability-status">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span className="status-text">Available for new projects</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span className="btn-text">{isSubmitting ? "Sending..." : "Send Message"}</span>
              <div className="btn-shine"></div>
            </button>

            {submitStatus === "success" && (
              <div className="success-message">
                <span>✅ Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
