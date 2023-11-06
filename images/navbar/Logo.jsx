import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/navbar/logo.png"
      alt="LEAM logo"
      width="80px"
      height="80px"
    ></Image>
  );
};

export default Logo;
