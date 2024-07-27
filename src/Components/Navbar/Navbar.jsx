import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const NavItem = ({ to, children }) => (
  <li className="lg:p-2 my-4 lg:my-0">
    <NavLink className="p-2" to={to}>
      {children}
    </NavLink>
  </li>
);

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-navColor lg:px-24 z-50 text-white fixed w-full top-0 left-0 duration-500 ${scrolled ? "py-3" : "py-8"}`}>
      <div className="container flex justify-between uppercase items-center font-bold flex-wrap">
        <h1 className="sm:text-3xl text-2xl">
          <Link to="">Start FrameWork</Link>
        </h1>
        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className="icon px-3 py-1 border rounded-md cursor-pointer lg:hidden"
        >
          {mobileMenu ? <GiCancel className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
        </div>
        <ul className={`list-none text-lg lg:flex flex-col basis-full lg:flex-row lg:basis-auto 
          ${mobileMenu ? "flex" : "hidden"}`}>
          <NavItem to="about">About</NavItem>
          <NavItem to="portfolio">Portfolio</NavItem>
          <NavItem to="contact">Contact</NavItem>
        </ul>
      </div>
    </div>
  );
}
