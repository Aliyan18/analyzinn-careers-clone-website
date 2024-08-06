import React,{useState} from 'react'
import '../styleSheets/BusinessAnalytics.css'
import BusinessAnalyticsList from "./BusinessAnalyticsList";

import image from "../images/dba3.png";

const BusinessAnalytics = () => {

    const [businessAnalytics, SetBA] = useState([{
        title: 'Problems We Solve',
        description: 'Lack of consolidation in your data & the inability to extract meaningful information. Multiple data sources without a unified reporting mechanism for critical insights and visualizations, leading to manual data cleaning & reporting. Unintegrated CRMs and core business software lead to multiple silos of data without holistic visibility. Data Analytics, for any business or application, delivers more refined, highly accurate & intelligent actionable insights which foster a culture of data-driven decisions & growth.',
        
      },
      {
        title: 'Why You Need Our Services?',
        description: 'More likely to promote data democratization, making it accessible for all. More efficient in their decision making & data processes. Quicker in identifying potential losses, security breaches, crisis & opportunities. Faster to respond to changes in data & important business metrics.',
        
      },
      {
        title: 'EVOLVE Through Data Comprehension?',
        description: 'Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.',
        
      }
    ]);
  return (
    <>
    <div className="nextcontainer1">
        <div className="text1">Welcome to the World of</div>
        <div className="heading">Data & Business Analytics</div>
        <div className="text2">We support leaders to EVOLVE their organizations using our proven business analyzinn services — <br></br> helping you achieve a competitive advantage with actionable insights.</div>
        <button> <div className="text1">Request a free consultation today</div>
</button>
    </div>
    <div className="image-container">
        <img src={image} alt="Data and Business Analytics" className="image" />
      </div>
     <div className="services-container">
     {businessAnalytics.map((service, index) => (
       <BusinessAnalyticsList 
         key={index}
         title={service.title}
         description={service.description}
       />
     ))}
    <div/>  
    
  </div>
  <div className="list-container">
        <p>ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time, so you can:</p>
        <ul>
          <li>Understand your customers & offer Superior Customer Experience</li>
          <li>Identify opportunities and threats & Market Better</li>
          <li>Respond to business needs proactively</li>
          <li>Innovate faster with relevant data</li>
          <li>Gain competitive advantage & make informed and optimized decisions</li>
        </ul>
      </div>
   </>
  );
};

export default BusinessAnalytics;