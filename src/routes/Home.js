import React from "react";
import pinkellipse from "../svgs/pinkellipse.svg";
import ellipsePhone from "../svgs/ellipsewalaphone.svg";
import apple from "../svgs/apple.svg";
import bg2 from "../svgs/bg2.svg";
import bottle from "../svgs/bottle.svg";
import halfbanana from "../svgs/halfbanana.svg";
import threebanana from "../svgs/threebanana.svg";
import percent from "../svgs/percent.svg";
import zoom from "../svgs/zoom.svg";

import { Hero } from "../components/Hero";
import { Box } from "../components/Box";
import { Service } from "../components/Service";
import { Apple } from "../components/Apple";
import { Last } from "../components/Last";
import { Brands } from "../components/Brands";
import { Calories } from "../components/Calories";

export const Home = () => {
  const style = {
    backgroundImage: `url(${bg2})`,
  };
  return (
    <div>
      <Hero />
      <div className=" flex md:flex-row flex-col justify-center pt-3 xl:px-4  items-center pb-16">
        <div className="flex relative animate-bounce">
          <img
            src={pinkellipse}
            className="circle relative  md:right-1"
            alt=""
          />
          <img
            src={ellipsePhone}
            alt=""
            className="ellipsephone absolute right-10 top-10  md:relative  md:right-36 md:top-5"
          />
          {/* right-24 top-2 */}
        </div>
        <div className="flex flex-col  gap-4 mt-8 px-4 items-center justify-center md:items-start md:mt-0 lg::px-6">
          <h1 className="font-medium text-center lg:text-left max-w-sm text-4xl ">
            Set your own targets.
          </h1>
          <p className="text-lg max-w-sm text-center lg:text-left ">
            Our Well Balanced goal is the one we recommend for most people.
            However, if you have specific dietary requirements.
          </p>
          <Apple icon={apple} bg={"bg-blue-100"} text={"text-heading"} />
        </div>
      </div>
      {/* 2nd section */}
      <div className="flex xl:flex-row xl:gap-6  flex-col   xl:justify-between mt-12 relative  ">
        <div className="mb-32 lg:mb-0">
          <h1 className="font-medium xl:text-5xl  text-3xl lg:relative z-10 absolute left-11  lg:bottom-14  lg:left-24 2xl:left-52   headcontainer2">
            Track anywhere, anytime.
          </h1>
        </div>
        <img
          src={bg2}
          alt="bg"
          className="girlbg4 sm:girlbg3   2xl:girl top-8 lg:top-0 absolute"
        />
        <Box
          pic={halfbanana}
          heading={"Banana"}
          top={"top-24 lg:top-12 xl:top-28"}
          left={"left-12 2xl:left-28"}
          details={"Without skin"}
        />
        <Box
          pic={halfbanana}
          heading={"Banana"}
          top={"top-32 lg:top-20 xl:top-36"}
          left={"left-48 2xl:left-64"}
          details={"Without skin"}
        />
        <Box
          pic={bottle}
          heading={"Taco 5 Ripe"}
          top={"top-72 lg:top-56 xl:top-72"}
          left={"left-12 2xl:left-28"}
          details={"Without skin"}
          padding={"px-5"}
        />
        <Box
          pic={threebanana}
          heading={"Flavour Mild"}
          top={"top-80 lg:top-64 xl:top-80"}
          left={"left-48 2xl:left-64"}
          details={"Without skin"}
        />

        <div className="mx-auto px-4 flex flex-col items-center mt-96 xl:mt-0">
          <h4 className="font-medium lg:text-left text-center text-2xl xl:text-3xl 2xl:text-4xl opacity-50 headcontainer2 2xl:headcontainer3 pb-10 ">
            Over 250,000 foods with photos. Plus barcode scanning App.
          </h4>
          <div className="flex flex-row justify-center flex-wrap md:flex-nowrap xl:flex-col">
            <Service
              pic={percent}
              heading={"Our Well Balanced"}
              details={
                "Goal is the one we recommend for most people. However, if you have specific dietary requirements."
              }
              color={"bg-red-300"}
            />
            <Service
              pic={zoom}
              heading={"Barcode Scanner"}
              details={
                "App on your phone or tablet. Or keep a food diary online via the website – whichever suits you best."
              }
              color={"bg-block"}
            />
          </div>
        </div>
      </div>
      {/* 3rd section */}
      <Calories/>
      {/* brands */}

      <Brands/>
      {/* last div */}
      <Last/>
    </div>
  );
};
