import '../styleSheets/stats2.css'
import Box from './Stats2box1.jsx'
export default function Stats2(){

    return (
        // style={{fontWeight:'150', fontSize:'20px'}} .p1

<div className="outer">
<div className="inner1">
<p className='p1'>
There's no denying that data has become vital for us
    in our everyday lives. Our Amazon and Google knowour preferences,
    our smart home devices have adapted to our everyday lives.
    The World of Social Media itself produces enough 
    data to help customize our lives. So Why shouldn't you use data,
    and scale your business exponentially!
</p>
<button > Learn more </button>
</div>



<div className="inner2">
<Box text1="5+" text2="year of experience"/>

<Box text1="$274" text2="Big Data Analytics Market 2023"/>
<Box text1="95%" text2=  'Blame Unstructured Data as a Problem'
/>
<Box text1="70%" text2="Of The World's Data is User
        Generated"/>
{/* <div className='box' style={{fontSize:'clamp(1rem,10vw,3rem)'}}>5+</div>
<div className='box'>
    <div>$274</div>
    <div>Big Data Analytics Market 2023</div>
</div>
<div className='box'>
<div>95%</div>
    <div>Blame Unstructured Data as a Problem</div>
</div>
<div className='box'>
<div>70%</div>
    <div>Of The World's Data is User
        Generated
    </div>
</div>
*/}
</div> 
</div>
    )
}