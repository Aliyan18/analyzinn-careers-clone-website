
import '../styleSheets/testimonials.css'
export default function Testimonial({content}){


return(
<>
<div className="test">
    <div>
  {content.comment};
  </div>
<div className="author">
    <div className="pf"></div>
    <div className="name">{content.author}</div>
</div>
</div>

</>
)

}