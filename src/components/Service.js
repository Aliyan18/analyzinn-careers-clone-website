import React, { useState } from 'react'
import "../styleSheets/Services.css"
import ServiceList from "./ServiceList";

import businessAnalyticsLogo from '../images/businessAnalyticsLogo.png';
import digitalMarketingLogo from '../images/digitalMarketingLogo.png';
import automationIntegrationLogo from '../images/automationIntegrationLogo.png';
import BusinessAnalytics from './BusinessAnalytics';


const Services = () => {
    const [services, setServices] = useState([{
        title: 'Business Analytics',
        description: 'Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.',
        logo: businessAnalyticsLogo
      },
      {
        title: 'Digital Marketing & Analytics',
        description: 'Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time.',
        logo: digitalMarketingLogo
      },
      {
        title: 'Automation & Integration',
        description: 'Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.',
        logo: automationIntegrationLogo
      }]);
      
  return (
    <>
    <div>
        <div className="container">
            Services
            <div className="underline"></div>
        </div>
        <div className="services-container">
      {services.map((service, index) => (
        <ServiceList 
          key={index}
          title={service.title}
          description={service.description}
          logo = {service.logo}
        />
      ))}
       
    </div>
    <BusinessAnalytics/>
    </div>
   
 </>
  )
}

export default Services;