import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Location = () => (
  <div className="location p-4">
    <h2 className="text-3xl font-semibold mb-2">LOCATION</h2>
    <p className="text-base mb-4">2215 John Daniel Drive</p>
    <p className="text-base mb-4">Clark, MO 65243</p>
  </div>
);

const Social = () => (
  <div className="social p-4">
    <h2 className="text-3xl font-semibold mb-2">AROUND THE WEB</h2>
    <div className="icons flex justify-center items-center flex-wrap">
      <div className="iconsStyle">
        <FaFacebook />
      </div>
      <div className="iconsStyle">
        <FaTwitter />
      </div>
      <div className="iconsStyle">
        <FaLinkedinIn />
      </div>
      <div className="iconsStyle">
        <AiOutlineGlobal />
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="about p-4">
    <h2 className="text-3xl font-semibold mb-2">ABOUT FREELANCER</h2>
    <p className="text-base mb-4">
      Freelance is a free to use, licensed Bootstrap theme created by Route
    </p>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-navColor text-white text-center">
      <div className="container py-7">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
          <Location />
          <Social />
          <About />
        </div>
      </div>
      <div className="bg-[#1A252F] py-4">
        Copyright © Your Website 2021
      </div>
    </footer>
  );
}
