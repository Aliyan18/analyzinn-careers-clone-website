import backG from '../../images/backG2.jpeg'
import '../../styleSheets/WhyChooseUs.css'
import clock from '../../images/clock.png'
import network from '../../images/network.png'
import team from '../../images/team.png'
import tech from '../../images/tech.png'
import chat from '../../images/chat.png'
import robot from '../../images/robot.png'

export default function WhychooseUs(){
    const style={
        backgroundImage: `url(${backG})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display:'flex',
         flexDirection:'column',
         justifyContent:'center',
        alignItems:'center',
        color:'white',
        marginTop:30,
        height:'100vh'
      }
const boxes=[{icon:clock,heading:'Perfection Anytime',content:'We never compromise on anything less than perfection.You will find us as one of the industry\'s Perfectionists.'},
{icon:chat,heading:'24/7 Communication',content:' Our Global team ensures we are available to communicate anytime. Regardless of Day & Time.'},
{icon:team,heading:'Our Team',content:'With our Employees working in over 5 Countries, we are never asleep!'},
{icon:robot,heading:'Fine Automation',content:'We understand the importance of Automation, and have deployed several Automation mechanisms to ensure the most efficient use of Energy.'},
{icon:tech,heading:'Advance Technology',content:'We Understand that with every passing day, technology advances. We Make the most of the latest Tools and Software to Give you the best Result!'},
{icon:network,heading:'Licensed Staff',content:'Our Team Regularly Undergoes Training & Certifications to ensure we bring you our Best'}]

    return(
<div style={style}>
<div style={{height:'100%',width:'100%',backgroundColor:'rgb(0,0,0,0.7)', display:'flex',
         flexDirection:'column',
         justifyContent:'center',
        alignItems:'center',
        color:'white',paddingTop:20}}>

<h6>Why Choose Us</h6>
<h2>What Sets Us Apart</h2>
<div className='outermost'>
   
        {boxes.map((item)=>(
             <div className='outer1'>
            <div style={{height:50,width:50,display:'flex',alignItems:'center',paddingLeft:'45%',paddingTop:'1vw'}}><img src={item.icon}/></div>
            <div style={{fontWeight:550,paddingTop:'1vw'}}>{item.heading}</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',margin:'0 auto',padding:'1.5vw'}}>{item.content} 
        </div>
        </div>
)
        )}
            {/* <div style={{height:50,width:50,display:'flex',alignItems:'center',paddingLeft:'40%'}}><img src={clock}/></div>
         <div>Perfection Anytime</div>
        <div>We never compromise on anything less than perfection.
            You will find us as one of the industry's Perfectionists. 
    
        </div>
        </div>

        <div className='outer1'>

        <div>icon</div>
        <div>24/7 Communication</div>
        <div>Our Global team ensures we are available
            to communicate anytime. Regardless of Day & Time.
        </div>    </div>

       

        <div className='outer1'>

        <div>icon</div>
        <div>Our Team</div>
        <div>WIth our Employees working in over 5 Countries, we are never asleep!</div>
        </div>    

        <div className='outer1'>

        <div>icon</div>
        <div>Fine Automation</div>
        <div>We understand the importance of Automation, and have 
            deployed several Automation mechanisms to ensure the most efficient use of Energy.
        </div>    </div>

        <div className='outer1'>

        <div>icon</div>
        <div>Advance Technology</div>
        <div>We Understand that with every passing day, technology advances. We Make the most of the latest Tools and Software to Give you the best Result!</div>
    <div></div>    </div>

    <div className='outer1'>

    <div>Licensed Staff</div>
    <div>Our Team Regularly Undergoes Training & Certifications to ensure we bring you our Best</div>
    </div> */}
</div>
</div>
</div>
    )
}