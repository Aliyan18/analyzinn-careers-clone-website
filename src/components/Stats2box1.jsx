import '../styleSheets/stats2.css'

export default function Stats2box1({text1,text2}){

    return(


        <div className="box">
        <div style={{fontSize:'clamp(1rem,8vw,3rem)'}}>{text1}</div>
       {text2 &&(
        <div>{text2}</div>)
       }
    </div>


    )
    
    
}