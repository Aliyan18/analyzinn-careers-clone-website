
import { BrowserRouter, Route,  Routes} from 'react-router-dom';
import MyNavbar from './MyNavbar.jsx'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Service.js';
import BusinessAnalytics from './BusinessAnalytics.js';
import DigitalMarketingAnalysis from './DigitalMarketingAnalysis.js';
import AutomationAndIntegration from './AutomationAndIntegration.js';
function App() {
  return (
    <>
  
    <BrowserRouter>
    <MyNavbar/>
      <div className='Pages'>
        <Routes>

        <Route path='/services' element={<Services/>}></Route>
        <Route path="/business-analytics" element={<BusinessAnalytics/>} />
        <Route path="/digital-marketing-analytics" element={<DigitalMarketingAnalysis />} />
        <Route path="/automation-integration" element={<AutomationAndIntegration />} />
        </Routes>
      </div>
      
    </BrowserRouter>

    </>
  );
}

export default App;
