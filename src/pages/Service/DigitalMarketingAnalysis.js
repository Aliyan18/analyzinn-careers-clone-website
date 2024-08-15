import React, {useState} from 'react'
import "../../styleSheets/DigitalMarketingAnalysis.css"

import image from "../../images/dma11.png"
import image1 from "../../images/dma2.png"
import image2 from "../../images/dma3.png"
import image3 from "../../images/dma41.png"
import image4 from "../../images/dma55.png"
import image5 from "../../images/dma66.png"
import DigitalMarketingAnalysisList from './DigitalMarketingAnalysisList'




const DigitalMarketingAnalysis = () => {
    const [DMA, SetDMA] = useState([{
        refImage: image,
        title: 'SEO(Search Engine Optimization)'
      },
      {
        refImage: image1,
        title: 'Social Media Marketing'
      },
      {
        refImage: image2,
        title: 'Pay Per Click Marketing'
      },
      {
        refImage: image3,
        title: 'Email Marketing'
      },
      {
        refImage: image4,
        title: 'Website/ Logo Design, Landing Pages'
      },
      {
        refImage: image5,
        title: 'Content Writing'
      }

    ]);
  return (
    <div className="background">
        <div className="nextcontainer">
            <div className="text1">Dive In</div>
            <div className="headinggg">Digital Marketing Analytics</div>
            <div className="textt1"><i>We support leaders to EVOLVE their organizations using our proven Digital marketing analyzinn services — helping you achieve a competitive advantage with actionable insights.</i></div>
            <button> <div className="text1">free consultation today</div></button>
        </div>
        <br></br> <br></br> <br></br> 
        
        <div className="services-containerdma">
     {DMA.map((service, index) => (
       <DigitalMarketingAnalysisList
            key={index}
            image={service.refImage}
            title={service.title}
       />
     ))}
    </div>
    <div className='lastheading'>How can you access our Digital Marketing Strategies?</div>
    <div className="list-container1">
        <p>ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time, so you can:</p>
        <ul>
          <li>Understand your customers & offer Superior Customer Experience</li>
          <li>Identify opportunities and threats & Market Better</li>
          <li>Respond to business needs proactively</li>
          <li>Innovate faster with relevant data</li>
          <li>Gain competitive advantage & make informed and optimized decisions</li>
        </ul>
    </div>
    </div>
  )
}

export default DigitalMarketingAnalysis;