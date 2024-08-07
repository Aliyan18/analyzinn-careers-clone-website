import '../styleSheets/stats.css'
export default function stats(){
   console.log()
    const style={}
   //use relative font size and use media queries for background pic component
    return(
        <>
{/* style={{fontSize:'clamp(2px,15px,15px)'}}
style={{fontSize:'clamp(5px,60px,60px)'}}
style={{fontSize:'clamp(2px,15px,15px)'}} */}
      
        <div className="introText" >
            <p className='p1'>WITH YEARS OF EXPERIENCE</p>
       <p className='p2'>Grow Your Business 
       with Data-driven Decision-Making!
       </p>
          <p className='p3'>
            "Data, The Goldmine of the 21st century",
            Reach out to us to know how your data can grow your business.
            </p> 
        </div>
        </>
    )
}