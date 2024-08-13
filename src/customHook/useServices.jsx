// useServices.js
import { useState } from 'react';
import businessAnalyticsLogo from '../images/businessAnalyticsLogo.png';
import digitalMarketingLogo from '../images/digitalMarketingLogo.png';
import automationIntegrationLogo from '../images/automationIntegrationLogo.png';
// Define your custom hook
export function useServices() {
    const [services, setServices] = useState([{
        title: 'Business Analytics',
        description: 'Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.',
        logo: businessAnalyticsLogo,
        link: '#business-analytics'
      },
      {
        title: 'Digital Marketing & Analytics',
        description: 'Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time.',
        logo: digitalMarketingLogo,
        link: '#digital-marketing-analytics'
      },
      {
        title: 'Automation & Integration',
        description: 'Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.',
        logo: automationIntegrationLogo,
        link: '#automation-integration'
        
      }]);

  // Return the services and setter function
  return [services, setServices];
}
