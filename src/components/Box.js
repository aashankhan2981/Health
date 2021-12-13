import React from 'react'

export const Box = ({pic,heading,details,top,left,padding}) => {
    console.log(padding)
    return (
        <div className={`bg-white  ${padding || "px-2" }   absolute ${top} ${left} rounded-xl`}>
                <img src={pic} alt="" className='mx-auto mt-2' />
                <h1 className='mt-2 text-center font-medium text-sm' >{heading}</h1>
                <p className='text-center text-sm opacity-50 py-1'>{details}</p>
            </div>
    )
}
