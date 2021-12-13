import React, { useState } from 'react'
import jahaz from "../svgs/jahaz.svg";
import koko from "../svgs/koko.svg";
import thumb from "../svgs/thumb.svg";

export const Brands = () => {
    const [bounce,setbounce] = useState(false)
    const [ping,setping] = useState(false)
    const [spin,setspin] = useState(false)
    return (
        <div className="flex mx-auto px-12 md:px-24 justify-between items-center mt-16">
        <img src={jahaz} alt="brands" className={`brands cursor-pointer ${spin? "animate-spin":""}`} onClick={()=>{setspin(!spin)}} />
        <img src={koko} alt="brands" className={`brands cursor-pointer ${bounce? "animate-bounce":""}`} onClick={()=>{setbounce(!bounce)}} />
        <img src={thumb} alt="brands" className={`brands cursor-pointer ${ping? " animate-ping":""}`} onClick={()=>{setping(!ping)}} />
      </div>
    )
}
