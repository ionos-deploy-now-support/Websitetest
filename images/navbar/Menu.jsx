import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <Image
      src="/assets/navbar/menu.png"
      alt="menu button"
      width="40px"
      height="40px"
      objectFit="contain"
    ></Image>
  );
};

export default Menu;
