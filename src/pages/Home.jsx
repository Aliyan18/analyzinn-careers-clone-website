import MyNavbar from '../components/MyNavbar.jsx'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats2 from '../components/Stats2'
import Testimonials from '../components/Testimonials.jsx'
import '../styleSheets/App.css';

export default function Home(){



    return(<>
          <div>
        <MyNavbar/>
        <Header/>
        
        </div>
<Stats2></Stats2>
<Testimonials></Testimonials>
        <Footer></Footer>
        </>
    )
}