import React from "react";

const Product = (props) => {
  return (
    <div className="mb-16">
      <div className="h-[calc(15vh-5px)] flex items-center">
        <p className="w-full text-center leading-[calc(15vh-5px)] md:leading-normal font-bold text-xl md:text-2xl">
          {props.title}
        </p>
      </div>
      <div className="flex px-8 mt-6">
        <div className="min-h-full w-[10px] bg-white mr-8"></div>
        <div className="">
          <p className="text-left text-xl md:text-lg lg:text-xl leading-8">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
