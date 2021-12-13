import React,{useState} from "react";


export const Service = ({pic,heading,details,color}) => {
    const style = {
        transform: "rotate(45deg)"
    }
    const style2={
        transform: "rotate(-45deg)"
    }
    const [rotate,setrotate] = useState(false)

    return (
        
            <div className='flex space-x-6 px-3 lg:px-0 items-start  xl:mt-6'>
                <div className={`${color}  rounded-2xl px-2 py-2 hover:opacity-100   opacity-70 ${rotate ? "animate-spin":"" }  `} style={style} >
                <img src={pic} alt="" className='cursor-pointer' style={style2} onClick={()=>{setrotate(!rotate)}} />

                </div>
            <div className='mt-3'>
                <h4  className='font-semibold text-xl lg: 2xl:text-2xl '>{heading}</h4>

                <p className='2xl:headcontainer headcontainer2 text-left  text-xl font-normal  opacity-50'>{details}</p>
            </div>

            </div>
            
        
    )
}
