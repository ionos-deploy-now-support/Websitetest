import React, { useState } from "react";
import Logo from "/images/navbar/Logo";
import Navlink from "./Navlink";
import Menu from "/images/navbar/Menu";
import Close from "/images/navbar/Close";
import NavFooter from "./NavFooter";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar hover:bg-[rgba(0,0,0,0.8)] transition-all ease-in navbar fixed w-full h-[120px] z-[100] bg-gradient-to-b from-black to-black/[0]">
      <div className="flex p-[60px] justify-between items-center w-full h-full 2xl:px-32">
        <Logo />
        <div>
          <ul className="absolute invisible md:flex md:visible md:static">
            <Navlink hideArrow text="Home" href="/" />
            <Navlink hideArrow text="Use cases" href="/use-cases" />
            <Navlink hideArrow text="Team" href="/team" />
            <Navlink hideArrow text="Contact" href="/contact" />
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0B0B0B] ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0B0B0B] ease-in duration-500"
          }
        >
          <div className="p-10 flex w-full items-center justify-between">
            <Logo />
            <div onClick={handleNav} className="cursor-pointer">
              <Close />
            </div>
          </div>
          <div className="py-10 h-[calc(100%-350px)]">
            <ul className="flex flex-col justify-center h-full">
              <div className="w-full h-full">
                <Navlink text="Home" href="/" />
              </div>
              <div className="w-full h-full">
                <Navlink text="Use cases" href="/use-cases" />
              </div>
              <div className="w-full h-full">
                <Navlink text="Team" href="/team" />
              </div>
              <div className="w-full h-full">
                <Navlink text="Contact" href="/contact" />
              </div>
            </ul>
            <div className="fixed bottom-0 pl-10 pb-10">
              <ul>
                <NavFooter text="imprint" href="/legal/imprint" />
                <NavFooter text="privacy policy" href="/legal/privacy" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
