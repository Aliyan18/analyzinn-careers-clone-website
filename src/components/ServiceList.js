import React from 'react'
 import "../styleSheets/ServiceList.css"
import { Link } from 'react-router-dom';

const ServiceList = ({title, description, logo, link}) => {
  return (
    <div className="service-card">
    <a href={link}><img src={logo} alt={`${title} logo`} className="service-logo"  /> </a>
    <a href={link}><h2 className="service-title" >{title}</h2> </a>
    <p className="service-description">{description}</p>
  </div>
  )
}

export default ServiceList;