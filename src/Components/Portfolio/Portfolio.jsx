import React, { useState } from "react";
import Heading from "../../Utilities/Heading/Heading";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import { FaPlus } from "react-icons/fa";

const Card = ({ imgSrc, onClick }) => (
  <div
    onClick={onClick}
    className="rounded-lg overflow-hidden relative group cursor-pointer">
    <img src={imgSrc} className="w-full" alt="poet" />
    <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor 
    flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85">
      <FaPlus className="text-8xl text-white"/>
    </div>
  </div>
);

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");
  const imgs = [img1, img2, img3, img1, img2, img3];

  
  return (
    <div className="min-h-screen py-24">

      <div className="container">

        {/* Heading */}
        <div className="w-fit mx-auto">
          <Heading
            text={"PORTFOLIO COMPONENT"}
            bgColor={"bg-navColor"}
            textColor={"text-navColor"}
            starbgColor={"bg-white"}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {imgs.map((img, index) => (
          <Card
            key={index}
            imgSrc={img}
            onClick={() => {
              setShow(true);
              setSrc(img);}} />
        ))}
            
        <div onClick={(e) => e.target.id === "screen" && setShow(false)}
          id="screen"
            className={`screen bg-navColor/25 fixed top-0 left-0 h-full w-full flex 
                justify-center items-center z-50 
            ${show ? "" : "hidden"}`}
        >
          <img src={src} className="w-3/4 md:w-2/5" alt="projectImg" />
        </div>
        </div>
        
      </div>


    </div>
  );
}