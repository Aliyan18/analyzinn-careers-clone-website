import MyNavbar from '../components/MyNavbar';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer'; 


export default function Contact(){
  return (

    <>
    <div>
    <MyNavbar/>
    <ContactForm />
    <ContactInfo />
    </div>
    <Footer /> 
  </>
  );
};