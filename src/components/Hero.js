import React from "react";
import bggirl from "../svgs/bggirl.svg";
import girl from "../svgs/girl.svg";
import menu from "../svgs/menu.svg";
import banana from "../svgs/banana.svg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className=" flex   justify-between ">
        <div className="mx-auto pl-2 pr-2 md:pl-8 my-8">
          <div className="flex justify-between md:justify-around md:space-x-3   items-center">
            <Link
              to="/"
              className="font-bold text-lg xl:text-2xl md:mr-4 hover:text-pink-400 xl:mr-16 2xl::mr-36"
            >
              nufruit
            </Link>
            <button className="flex justify-center items-center hover:bg-pink-400  font-semibold w-32 py-2 lg:w-40  lg:py-3 text-base xl:text-lg rounded-lg bg-white border border-gray-300">
              <img
                src={menu}
                alt="icon"
                className="mr-3 icon xl:w-auto animate-ping outline-black  xl:h-auto"
              />{" "}
              Our app
            </button>
          </div>
          <div className="flex flex-col pt-24   ">
            <h1 className="font-bold 2xl:text-6xl text-3xl xl:text-4xl text-heading headcontainer 2xl::headcontainer ">
              Life
              <br />
              Changing weight loss.
            </h1>
            <div className="flex space-x-4">
              <h4 className="text-2xl: xl:text-2xl text-subheading py-4">
                Tracking made easy
              </h4>
              <img src={banana} alt="banana" className=" animate-pulse" />
            </div>
            <button className="sm:h-16 sm:w-44 h-12 w-40 bg-heading rounded-2xl hover:bg-pink-400 shadow-2xl text-white font-medium text-lg">
              Start Now
            </button>
          </div>
        </div>
        <img
          src={girl}
          alt="girl "
          className="hidden md:flex  animate-pulse md:girl3 md:right-3 lg:girl2 xl:girl absolute lg:right-28 lg:top-10 xl:right-8 xl:top-2 2xl::right-16 2xl::bottom-2 2xl::girlbg"
        />

        <img
          src={bggirl}
          alt="bg"
          className="hidden md:flex  md:girlbg4 lg:girlbg3 xl:girlbg2 2xl::girlbg "
        />
      </div>
    </>
  );
};
