import React from 'react'

export const Apple = ({icon,bg,text}) => {
    return (
        <>
            <button className={`${bg} shadow-xl  flex items-center justify-center gap-4 ${text} w-40 h-14 rounded-2xl  `}>
            <img src={icon} className="animate-pulse " alt="" />
            Get on the
            <br />
            App Store
            
          </button>
        </>
    )
}
