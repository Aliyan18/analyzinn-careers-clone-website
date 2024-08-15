import MyNavbar from '../../components/MyNavbar.jsx'
import Header from './Header.jsx'
import MyFooter from '../../components/MyFooter.jsx'
import Stats2 from './Stats2.jsx'
import Testimonials from '../../components/Testimonials.jsx'
// import '../styleSheets/App.css';
import Service from '../../components/Services.jsx'
import WhoWeAre from './WhoWeAre.jsx'
import WhychooseUs from './WhyChooseUs.jsx'
import ContactForm from '../../components/ContactForm';

export default function Home(){



    return(<>
          <div>
        <Header/>
        
        </div>
<Stats2></Stats2>
<WhoWeAre></WhoWeAre>

<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'100'}}>
    <h1 >Our Services</h1>
 <Service></Service></div> 
 <WhychooseUs></WhychooseUs>
<Testimonials style={{margin:'10px'}}></Testimonials>
  <div style={{width:'100%'}}>
<ContactForm text={"Request Info"} display={true}></ContactForm>
</div> 
 {/* <MyFooter/>  */}

        </>
    )
}