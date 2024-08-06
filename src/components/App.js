
import { BrowserRouter, Route,  Routes} from 'react-router-dom';
import MyNavbar from './MyNavbar.jsx'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Service.js';
function App() {
  return (
    <>
  
    <BrowserRouter>
    <MyNavbar/>
      <div className='Pages'>
        <Routes>

        <Route path='/services' element={<Services/>}></Route>
        </Routes>
      </div>
      
    </BrowserRouter>

    </>
  );
}

export default App;
