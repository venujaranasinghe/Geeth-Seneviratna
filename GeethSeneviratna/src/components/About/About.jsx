import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>

      <div className="about-title">
        <h1>About me</h1>
        <div className="underline"></div>
      </div>

      {/* Section Container */}
      <div className="about-section">
        {/* Right Side Image */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Left Side Content */}
        <div className="about-right">
          <div className="about-para">
            <p>As an undergraduate in Computer Science at Sri Lanka Institute of Information Technology (SLIIT), I have a strong foundation in programming languages, including C, Python, Java, and Arduino. My expertise extends to web development, database management, and front-end technologies like React and Tailwind CSS.</p>
            <p>I have a passion for creating efficient and user-friendly software solutions, whether it’s developing dynamic web applications or building innovative hardware projects with Arduino. My experience spans across diverse projects, including eCommerce platforms, smart systems, and APIs, showcasing my ability to solve complex problems through technology.</p>
            <p>I am committed to continuous learning and staying updated with industry trends, aiming to contribute to impactful projects that blend creativity, functionality, and technical excellence.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"> <p>React JS</p><hr style={{ width: "30%" }} /></div>
            <div className="about-skill"> <p>Java</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"> <p>Python</p><hr style={{ width: "20%" }} /></div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>01+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        
        {/* Vertical line */}
        <div className="vertical-line"></div>

        <div className="about-achievement">
          <h1>05+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        
        {/* Vertical line */}
        <div className="vertical-line"></div>

        <div className="about-achievement">
          <h1>01+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

    </div>
  )
}

export default About
