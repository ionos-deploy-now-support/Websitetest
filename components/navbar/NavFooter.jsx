import React from "react";
import Link from "next/link";

const NavFooter = (props) => {
  return (
    <Link href={props.href}>
      <li className="w-full h-[40px] leading-[40px] text-white text-sm mx-2">
        {props.text}
      </li>
    </Link>
  );
};

export default NavFooter;
