
import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
          <Route index element={<Contact />} />
          <Route path="/about" element={<About />} />
       </Routes>
   </BrowserRouter>
   </div>
  );
};
