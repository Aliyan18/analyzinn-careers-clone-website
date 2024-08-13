
import '../styleSheets/testimonials.css'
import pfPic from '../images/pfPic.png'
export default function Testimonial({content}){

const style={
  backgroundImage: `url(${pfPic})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center'
}
return(
<>
<div className="test" >
    <div style={{padding:5,height:'65%', fontSize:20,display:'flex',justifyContent: 'center',
            alignItems: 'center' }}>
  {content.comment};
  </div>
<div className="author" style={{}}>
    <div className="pf" style={style}></div>
    <div>
    <div className="name">{content.author}</div>
    <div className="designation" style={{fontSize:'0.75rem'}}>Owner {content.author} companies</div>
    </div>
</div>
</div>

</>
)

}