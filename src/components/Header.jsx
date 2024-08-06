import backG from '../images/th.jpeg'; 
import Stats from './Stats.jsx'; 

export default function Header() {
    const style = {
        position: 'relative',
        top: -100,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backG})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
    }

    return (
        <>
            <div style={style}>

                <Stats></Stats>
          
                  </div>
        </>
    )
}
