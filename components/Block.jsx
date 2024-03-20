import Image from "next/image";
import React from "react";

const Block = ({title,para}) => {
  return (
    <>
      <div className="w-60 border-r border-gray-300 h-full items-center flex">
        <Image
          src={"/mercedes.png"}
          alt="mercedes"
          width={200}
          height={200}
          className="w-10 h-10 rounded-full mr-5"
        />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-1 ">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default Block;
