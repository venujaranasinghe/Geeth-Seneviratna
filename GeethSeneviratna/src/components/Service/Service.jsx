import React from 'react'
import './Service.css'
import services_data from '../../assets/services_data'

const Service = () => {
  return (
    <div id='services' className='service'>
        <div className="service-title">
            <h1>My Services</h1>
            <div className="underline"></div>
        </div>

        <div className="service-container">
          {services_data.map((service, index) => {
            return (
              <div key={index} className="service-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="service-readmore">
                <button className="readmore-btn">
                  Read More <span className="arrow">→</span>
                </button>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Service
