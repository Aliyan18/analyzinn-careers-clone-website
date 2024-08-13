import React, {useState} from 'react'
import "../../styleSheets/AutomationAndIntegration.css"
import image from "../../images/ai4.png"
import image1 from "../../images/ai5.png"
import image2 from "../../images/ai6.png"
import image3 from "../../images/ai7.png"
import image4 from "../../images/ai8.png"
import image5 from "../../images/ai9.png"
import AutomationAndIntegrationList from './AutomationAndIntegrationList'

const AutomationAndIntegration = () => {
  const [AI, SetAI] = useState([{
    refImage: image,
    title: 'CRM System Integrations',
    description: 'Automation of your sales processes that you are doing manually on a regular basis.'
  },
  {
    refImage: image1,
    title: 'Automation And Integration From APIs',
    description: 'Certified architects to develop and execute integration solutions by the Leverage APIs and standard connections'
  },
  {
    refImage: image2,
    title: 'ERP System Integration',
    description: 'Analyzinn provides a scalable solution to the modern connectivity problem such as SAP integration with third-party applications, Using ERP reporting software such as Power BI and Tableau.'
  },
  {
    refImage: image4,
    title: 'Payment Gateway Integration',
    description: 'Our Payment Gateway Integration Services assist in simplifying online transaction processing on your website such as Payment gateway integration for clients, such as Paypal.'
  },
  {
    refImage: image3,
    title: 'Accounting System Integration',
    description: 'We aim to offer our customers a one-stop solution for accounting, auditing, and taxation by using SAP and Xero for integration with CRM systems'
  },
  {
    refImage: image5,
    title: 'Ecommerce Integration',
    description: 'Our ECommerce integration services includes completing integration projects for companies of all sizes and shapes across various eCommerce platforms such as Website connection with eCommerce solutions such as Magento, Shopify, and WooCommerce, ETL integrations and data replication to provide a unified experience, etc.'
  }
]);
  return (
    <>
        <div className="nextcontainer2">
                <div className="text1">Explore</div>
                <div className="heading">Automation & Integration</div>
                <div className="text1"><i>Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.</i></div>
                <button> <div className="text1">free consultation today</div></button>
        </div>
        <div className="bg">
            <div className="ourServices"><br></br>Our Services</div>
            <div className="list-container2">
                <p>Our Services will help you Answer these Questions:</p>
                <ul>
                <li>Want to reduce manual work? </li>
                <li>Exploring ways on how the applications can talk and integrate?</li>
                <li>Need workflow-based automation?</li>
                <li>Are you looking for Automation and Integration Services</li>
                <li>Want to get rid of excel sheets and data management?</li>
                </ul>
            </div>
            <div className="services1-container">
              {AI.map((service, index) => (
              <AutomationAndIntegrationList
              key={index}
              image={service.refImage}
              title={service.title}
              description = {service.description}
       />
     ))}
        </div>
      </div>
    </>
  )
}
export default AutomationAndIntegration;