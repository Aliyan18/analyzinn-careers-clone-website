import React from 'react'
 import "../../styleSheets/AutomationAndIntegrationList.css"

const AutomationAndIntegrationList = ({image, title, description}) => {
  return (
    <div className="serviceai-card">
    <img src={image} alt="Data Marketing Analytics" className='imageeai'/>
    <h2 className="serviceai-title">{title}</h2>
    <p className="serviceai-description">{description}</p>   
  </div>
  )
}

export default AutomationAndIntegrationList;