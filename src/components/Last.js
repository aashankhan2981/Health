import React from 'react'
import twophone from "../svgs/phonestwo.svg";
import whiteapple from "../svgs/white-apple.svg";
import { Apple } from './Apple';

export const Last = () => {
    return (
        
        <div className="flex flex-col lg:flex-row-reverse gap-4 bg-fotter rounded-2xl mx-5 lg:mx-10 justify-between items-center px-12 2xl:px-28  my-24 ">
        <div>
          <img src={twophone} alt="phones" className="girl2 2xl:girlbg2" />
        </div>
        <div>
          <h1 className="font-medium text-2xl 2xl:text-4xl headcontainer2 mb-11 lg:mt-0 mt-8 text-left ">
            Join free for 7 days
          </h1>
          <div className="mb-8 lg:mb-0">
            <Apple icon={whiteapple} bg={"bg-heading"} text={"text-white"} />
          </div>
        </div>
      </div>
        
    )
}
