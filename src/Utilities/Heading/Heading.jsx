import React from "react";
import { FaStar } from "react-icons/fa";

export default function Heading({ text, starbgColor, textColor, bgColor }) {
  return (
    <>
      <h2 className={`text-center ${textColor} my-6 sm:text-4xl text-2xl font-bold`}>
        {text}
      </h2>
      <div className="flex items-center justify-center w-3/5 mx-auto mb-6">
        <div className={`h-1 ${bgColor} flex-grow`}></div>
        <FaStar className={`mx-4 ${textColor} ${starbgColor}`} />
        <div className={`h-1 ${bgColor} flex-grow`}></div>
      </div>
    </>
  );
}
