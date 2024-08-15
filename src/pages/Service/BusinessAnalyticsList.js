import React from 'react'
 import "../../styleSheets/BusinessAnalyticsList.css"

const ServiceList = ({title, description}) => {
  return (
    <div className="serviceba-card">
    <h2 className="serviceba-title">{title}</h2>
    <p className="serviceba-description">{description}</p>
  </div>
  )
}

export default ServiceList;