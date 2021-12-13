import React from 'react'
import { Apple } from './Apple'
import calories from "../svgs/calories-tracking.svg";
import apple from "../svgs/apple.svg";

export const Calories = () => {
    return (
        <div className="mt-16 px-4  maindiv flex flex-col  lg:flex-row-reverse  justify-center gap-16 items-center">
        <div className="px-16 pb-16 relative rounded-full overflow-hidden bg-block">
          <img src={calories} alt="calories " className=" circle" />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="font-medium text-3xl lg:text-5xl headcontainer2">
            Calories tracking.
          </h1>
          <p className="text-2xl lg:text-left text-center py-5 text-subheading headcontainer">
            Our Well Balanced goal is the one we recommend for most people.
            However, if you have specific dietary requirements.
          </p>
          <Apple icon={apple} bg={"bg-blue-100"} text={"text-heading"} />
        </div>
      </div>
    )
}
