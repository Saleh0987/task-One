import React from "react";
import avatar from "../../assets/avatar.svg";
import Heading from "../../Utilities/Heading/Heading";
export default function Home() {
  return (
    <>
      <div className="home min-h-screen bg-mainColor center-div lg:pt-20">
        <div>
          <img src={avatar} alt="avatar" className="size-72 mx-auto" />
          <Heading text={"START FRAMEWORK"} starbgColor={"bg-mainColor"}
            textColor={"text-white"} bgColor={"bg-white"} />
          <p className="text-center text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}