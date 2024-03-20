"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header3 = () => {
  const [city,setcity]=useState('');

  return (
    <>
      <div className="bg-gradient-to-r from-red-400 to-red-600 h-60">
        <div className="mx-10">
          <h1 className="text-white font-bold text-4xl text-center">
            Over 174,000+ hotels and homes across 35+ countries
          </h1>
          <div className="flex  justify-center my-5">
            <input
              type="text"
              placeholder="search.."
              className="px-2 h-14  w-96  outline-none text-lg  "
              onChange={(e)=>setcity(e.target.value)}
            />
            {/* <input
              type="text"
              placeholder="search.."
              className="px-2 h-14  outline-none text-lg col-span-1"
            />
            <input
              type="text"
              placeholder="search.."
              className="px-2 h-14  outline-none text-lg col-span-1"
            /> */}

            <button className="h-14 px-3 bg-green-400 font-bold text-xl  w-48 hover:cursor-pointer hover:bg-green-600 text-white">
              <Link href={ `/hotels?city=${city}`}>Search</Link>
            </button>
          </div>
          <div className="flex">
            <button className="h-14 px-3   mx-2 col-span-1 hover:cursor-pointer text-white">
              Continue your search
            </button>
            <button className="h-14 px-3  mx-2 col-span-1 border-2 border-white hover:cursor-pointer hover:bg-gray-500 text-white rounded-xl">
              Homestay in India Hotels
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header3;
