import React from "react";
import Image from "next/image";

const Close = () => {
  return (
    <Image
      src="/assets/navbar/close.png"
      alt="close button"
      width="30px"
      height="30px"
      objectFit="contain"
    ></Image>
  );
};

export default Close;
