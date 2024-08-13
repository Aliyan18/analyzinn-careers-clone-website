import '../../styleSheets/stats2.css'

export default function Stats2box1({text1,text2}){

    return(


        <div className="box">
        <div className='innerbox'>{text1}</div>
       {text2 &&(
        <div>{text2}</div>)
       }
    </div>


    )
    
    
}