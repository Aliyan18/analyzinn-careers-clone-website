import React, { useState } from 'react'
import "../../styleSheets/Services.css"
import ServiceList from "../../components/ServiceList";
import Service from '../../components/Services';
import businessAnalyticsLogo from '../../images/businessAnalyticsLogo.png';
import digitalMarketingLogo from '../../images/digitalMarketingLogo.png';
import automationIntegrationLogo from '../../images/automationIntegrationLogo.png';
import BusinessAnalytics from './BusinessAnalytics';
import DigitalMarketingAnalysis from './DigitalMarketingAnalysis';
import AutomationAndIntegration from './AutomationAndIntegration';
import MyFooter from '../../components/MyFooter'
import { useServices } from '../../customHook/useServices'
const Services = () => {
  const [services] = useServices();
      
  return (
    <>
    <div>
        <div className="containerrrr" style={{paddingTop:150,textAlign:'center',width:'100%'}}>
            <div > Services</div>
            <div className="underline"></div>
        </div>
        <div>
       <Service/>
       </div>
       <section id="business-analytics">
        <BusinessAnalytics />
      </section>
      
      <section id="digital-marketing-analytics">
        <DigitalMarketingAnalysis />
      </section>
      
      <section id="automation-integration">
        <AutomationAndIntegration />
      </section>
   </div>

 </>
  )
}

export default Services;