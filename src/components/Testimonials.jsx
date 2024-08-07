import { useEffect, useState } from "react"
import Testimonial from './Testimonial'
import '../styleSheets/testimonials.css'

export default function Testimonials(){
const comments=[{comment:'it is always good to work with a group of professionals',author:'Systems Limited'},
{comment:'Delighted to work with a highly diligent team and service was extra-ordinary.',author:'Netsol limited'},
{comment:'highly profiecient, great responsivess and good attention to deatil',author:'Aliyan'}]

const displayedComments=[{comment:'it is always good to work with a group of professionals',author:'Systems Limited'},
{comment:'Delighted to work with a highly diligent team and service was extra-ordinary.',author:'Netsol limited'},
{comment:'highly profiecient, great responsivess and good attention to deatil',author:'Aliyan'}]

const [state,setState]=useState(displayedComments);

const [value,setValue]=useState(displayedComments.length);

function wrapper(){
   
}
function handleNext(e){
    e.preventDefault();
   
    
    setState((prevdisplayedComments)=>{
        console.log(value);
        let newdisplayedComments=[...prevdisplayedComments]
        newdisplayedComments.shift();
        newdisplayedComments.push(comments[value%comments.length]);
        return newdisplayedComments; 

        
})
setValue(prevValue=>(prevValue+1)%comments.length);
}
// useEffect((      
// })),[value,comments])

    return(
    <>
    <h3 style={{marginTop:'5vw'}}>Testimonials</h3>
    <div className="slider">
    {state.map(el=><Testimonial  content={el}/>)}
    <button onClick={handleNext}>Next</button>
    </div>
    
    </> 
    
        )
}