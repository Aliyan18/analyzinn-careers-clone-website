import React from 'react';
import Aboutsection from './Aboutsection';
import WhyAnalyzinn from './WhyAnalyzinn';
import Footer from '../../components/MyFooter'; 
import Testimonials from '../../components/Testimonials.jsx'
import MyFooter from '../../components/MyFooter'

export default function ContactPage() {
  return (
    <>
      <div>
        <Aboutsection />
        <WhyAnalyzinn />
      </div>
      <div>
      <Testimonials></Testimonials>
</div>
    </>
  );
}
