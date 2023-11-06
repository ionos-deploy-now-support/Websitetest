import React from "react";
import Image from "next/image";

const Lamp = () => {
  return (
    <Image
      src="/assets/demex/lamp.png"
      alt="lamp"
      width="744px"
      height="720px"
      objectFit="contain"
    ></Image>
  );
};

export default Lamp;
