import React from 'react'
import "../styleSheets/DigitalMarketingList.css"

const DigitalMarketingAnalysisList = ({image, title}) => {
  return (
    <div className="servicedma-card">
    <img src={image} alt="Data Marketing Analytics" className='imageedma'/>
    <h2 className="servicedma-title">{title}</h2>   
  </div>
  )
}

export default DigitalMarketingAnalysisList;