import React from "react";
import Heading from "../../Utilities/Heading/Heading";

export default function About() {
  return (
    <>
      <div className="home min-h-screen bg-mainColor center-div pt-20">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
            <Heading text={"ABOUT COMPONENT"}
              starbgColor={"bg-mainColor"} textColor={"text-white"} bgColor={"bg-white"} />
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex justify-center items-center flex-wrap flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <p className="text-white lg:w-1/3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="text-white lg:w-1/3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
