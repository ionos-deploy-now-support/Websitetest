import React from "react";
import Logo from "/images/navbar/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-center relative z-10 w-full pt-10 pb-4 bg-black">
      <div>
        <div className="flex">
          <div className="mx-8 flex items-center">
            <div>
              <Logo />
            </div>
          </div>
          <div className="mx-4 lg:mx-8">
            <div>
              <Link href="/legal/imprint">Imprint</Link>
            </div>
            <div>
              <Link href="/legal/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="mx-4 lg:mx-8">
            <div>
              <Link href="/">Home</Link>{" "}
            </div>
            <div>
              <Link href="/">Use cases</Link>{" "}
            </div>
            <div>
              <Link href="/">Team</Link>{" "}
            </div>
            <div>
              <Link href="/">Contact</Link>{" "}
            </div>
          </div>
        </div>
        <p className="w-full text-center mt-4 text-xs">Copyright © 2023 LEAM</p>
      </div>
    </div>
  );
};

export default Footer;
