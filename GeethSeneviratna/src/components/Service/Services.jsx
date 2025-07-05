"use client"

import { useState, useEffect, useRef } from "react"
import { FaCode, FaMobile, FaDatabase, FaCloud, FaCog, FaRocket } from "react-icons/fa"
import "./Services.css"

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const servicesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern technologies like React, HTML5, CSS3, and JavaScript.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
      color: "#10b981",
    },
    {
      icon: FaMobile,
      title: "Frontend Development",
      description: "Building beautiful and intuitive user interfaces with focus on user experience and modern design principles.",
      features: ["React Development", "Tailwind CSS", "Component Libraries", "Interactive UI/UX"],
      color: "#3b82f6",
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs with secure database integration and efficient data management.",
      features: ["API Development", "Database Design", "Server Configuration", "Data Security"],
      color: "#8b5cf6",
    },
    {
      icon: FaCloud,
      title: "System Integration",
      description: "Integrating various systems and third-party services to create seamless and efficient workflows.",
      features: ["Third-party APIs", "System Architecture", "Cloud Services", "Automation"],
      color: "#f59e0b",
    },
    {
      icon: FaCog,
      title: "Problem Solving",
      description: "Analyzing complex problems and providing innovative technical solutions with clean, maintainable code.",
      features: ["Algorithm Design", "Code Optimization", "Debugging", "Technical Consulting"],
      color: "#ef4444",
    },
    {
      icon: FaRocket,
      title: "Project Development",
      description: "Full-cycle project development from concept to deployment, ensuring quality and timely delivery.",
      features: ["Project Planning", "Agile Development", "Testing & QA", "Deployment"],
      color: "#06b6d4",
    },
  ]

  return (
    <div id="services" className="services-container" ref={servicesRef}>
      {/* Background Effects */}
      <div className="services-background">
        <div className="services-grid"></div>
        <div className="services-gradient"></div>
      </div>

      {/* Section Header */}
      <div className={`services-header ${isVisible ? "visible" : ""}`}>
        <div className="section-badge">
          <span className="badge-icon">⚡</span>
          <span className="badge-text">What I Offer</span>
        </div>
        <h2 className="section-title">My Services</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Comprehensive solutions for your digital needs with modern technologies and best practices
        </p>
      </div>

      {/* Services Grid */}
      <div className={`services-grid-container ${isVisible ? "visible" : ""}`}>
        <div className="services-grid-layout">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`service-card ${activeService === index ? "active" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="service-icon-container" style={{ "--service-color": service.color }}>
                  <IconComponent className="service-icon" />
                  <div className="icon-glow"></div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <div className="feature-dot"></div>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-overlay" style={{ "--service-color": service.color }}></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Process Section */}
      <div className={`process-section ${isVisible ? "visible" : ""}`}>
        <div className="process-header">
          <h3 className="process-title">My Development Process</h3>
          <p className="process-subtitle">How I bring your ideas to life</p>
        </div>

        <div className="process-timeline">
          {[
            { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
            { step: "02", title: "Planning", description: "Creating detailed project roadmap and architecture" },
            { step: "03", title: "Development", description: "Building your solution with clean, efficient code" },
            { step: "04", title: "Testing", description: "Thorough testing to ensure quality and performance" },
            { step: "05", title: "Deployment", description: "Launching your project and providing ongoing support" },
          ].map((process, index) => (
            <div key={index} className="process-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="process-step">{process.step}</div>
              <div className="process-content">
                <h4 className="process-item-title">{process.title}</h4>
                <p className="process-item-description">{process.description}</p>
              </div>
              {index < 4 && <div className="process-connector"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`services-cta ${isVisible ? "visible" : ""}`}>
        <div className="cta-content">
          <h3 className="cta-title">Ready to Start Your Project?</h3>
          <p className="cta-text">Let's discuss how I can help bring your ideas to life</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">
              <span>Get Started</span>
              <div className="button-shine"></div>
            </a>
            <a href="#portfolio" className="cta-secondary">
              <span>View My Work</span>
              <div className="button-shine"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
