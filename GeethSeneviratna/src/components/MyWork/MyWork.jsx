"use client"

import { useState, useEffect, useRef } from "react"
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa"
import "./MyWork.css"

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState([])
  const portfolioRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/geethsenaviratne",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A responsive task management application built with React and Firebase, featuring real-time updates and collaborative features.",
      image: "/placeholder.svg?height=300&width=400",
      category: "frontend",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/geethsenaviratne",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A modern weather dashboard with location-based forecasts, interactive charts, and responsive design.",
      image: "/placeholder.svg?height=300&width=400",
      category: "frontend",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      github: "https://github.com/geethsenaviratne",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 4,
      title: "REST API Server",
      description:
        "A robust REST API built with Node.js and Express, featuring authentication, data validation, and comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=400",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      github: "https://github.com/geethsenaviratne",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.",
      image: "/placeholder.svg?height=300&width=400",
      category: "frontend",
      technologies: ["React", "CSS3", "Framer Motion"],
      github: "https://github.com/geethsenaviratne",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 6,
      title: "Data Analysis Tool",
      description:
        "A Python-based data analysis tool with visualization capabilities and automated reporting features.",
      image: "/placeholder.svg?height=300&width=400",
      category: "python",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      github: "https://github.com/geethsenaviratne",
      live: "https://example.com",
      featured: false,
    },
  ]

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "python", label: "Python" },
  ]

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

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else if (activeFilter === "featured") {
      setFilteredProjects(projects.filter((project) => project.featured))
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "react":
        return <FaReact />
      case "node.js":
        return <FaNodeJs />
      case "python":
        return <FaPython />
      case "mongodb":
      case "postgresql":
        return <FaDatabase />
      default:
        return null
    }
  }

  return (
    <div id="portfolio" className="portfolio-container" ref={portfolioRef}>
      {/* Background Effects */}
      <div className="portfolio-background">
        <div className="portfolio-grid"></div>
        <div className="portfolio-gradient"></div>
      </div>

      {/* Section Header */}
      <div className={`portfolio-header ${isVisible ? "visible" : ""}`}>
        <div className="section-badge">
          <span className="badge-icon">💼</span>
          <span className="badge-text">My Work</span>
        </div>
        <h2 className="section-title">Portfolio</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">A showcase of my recent projects and technical achievements</p>
      </div>

      {/* Filter Buttons */}
      <div className={`portfolio-filters ${isVisible ? "visible" : ""}`}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image-container">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              {project.featured && <div className="featured-badge">Featured</div>}
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-tag">
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className={`portfolio-stats ${isVisible ? "visible" : ""}`}>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Commitment</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
