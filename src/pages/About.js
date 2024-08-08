import React from 'react';
import MyNavbar from '../components/MyNavbar'
import Aboutsection from '../components/Aboutsection';
import WhyAnalyzinn from '../components/WhyAnalyzinn';
import Footer from '../components/Footer'; 
import Testimonials from '../components/Testimonials.jsx'


export default function ContactPage() {
  return (
    <>
      <div>
      <MyNavbar/>
        <Aboutsection />
        <WhyAnalyzinn />
      </div>
      <Testimonials></Testimonials>
      <Footer /> 
    </>
  );
}
