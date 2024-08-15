import { useState, useEffect } from 'react';
import backG from '../../images/th.jpeg'; 
import Stats from './Stats.jsx'; 

export default function Header() {
    const initialStyle = {
        
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backG})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [style, setStyle] = useState(initialStyle);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setStyle(prevStyle => ({
                ...prevStyle,
                height: window.innerWidth < 1000 ? window.innerWidth<550?'40vh':'60vh' : '100vh'
                
            }));
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]); // Dependency array ensures the effect runs when windowWidth changes

    return (
        <>
            <div style={style}>
               <div style={{backgroundColor:'rgb(0,0,0,0.6)',width:'100%',height:"100%"}}>
                <Stats />
                </div>
            </div>
        </>
    );
}
