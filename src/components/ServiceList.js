import React from 'react'
import "../styleSheets/ServiceList.css"

const ServiceList = ({title, description, logo}) => {
  return (
    <div className="service-card">
    <img src={logo} alt={`${title} logo`} className="service-logo" />
    <h2 className="service-title">{title}</h2>
    <p className="service-description">{description}</p>
  </div>
  )
}

export default ServiceList;