import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <Image
      src="/assets/landing/partners/banner.png"
      alt="Leam partners"
      width="850px"
      height="400px"
      objectFit="contain"
    ></Image>
  );
};

export default Banner;
