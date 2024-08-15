import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Services from './pages/Service/Service';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
     <MyFooter/>
      </BrowserRouter>
    </>
  );
}
