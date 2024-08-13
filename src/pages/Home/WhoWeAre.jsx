import { useNavigate } from "react-router"


export default function WhoWeAre(){
const navigate=useNavigate();
    const style={
    display:'flex',
    flexDirection:'column',
textAlign:'center',
alignItems:'center',
justifyContent:'center',
backgroundColor:'black',
color:'white',
paddingTop:50,
paddingBottom:50,
paddingLeft:100,
paddingRight:100
}
function handleClick(){
navigate('/about')
}

return (
<div style={style}>
<h1>WHO WE ARE</h1>
<div style={{fontWeight:'200',marginBottom:'50px',marginTop:'20px'}}>Consulting Firm Powered by Analytics! <br />
We support leaders to EVOLVE their organizations using our proven analytics consulting services.</div>
We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue, and accelerate innovation!
<button onClick={handleClick} style={{width:"10%",marginTop:'50px'}}>Find Out More</button>
</div>

)
}