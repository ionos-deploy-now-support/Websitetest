import React from "react";

const ProductButton = (props) => {
  return (
    <a
      href={props.href}
      className="border-2 p-2 pb-3 px-10 text-lg hover:bg-white hover:text-black transition-all ease-in"
    >
      more
    </a>
  );
};

export default ProductButton;
