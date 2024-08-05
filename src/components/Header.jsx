
import backG from '../images/backG.jpg'; 

export default function Header(){
const style={
    position:'absolute',
    top:0,
    width:'100%',
    height:'auto'
}

return(
<>
<img src={backG} alt="image" style={style}/>
</>
)

}