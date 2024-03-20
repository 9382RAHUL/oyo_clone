"use client"
import Header1 from "@/components/Header1";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import Link from "next/link";
const SingleHotel = ({ hotel }) => {
 const [auth,setauth]=useState(false);
 useEffect(()=>{
  const cookies=Cookies.get("user");
  if(cookies){
    setauth(true);
    return;
  }
  setauth(false);
 },[])
  return (
    <>
    <Head>
      <title>{hotel?.name}</title>
    </Head>
      
      <Header1 />

      <div
        className="w-7/12  mx-auto my-12
       "
      >
        <Image
          src={hotel?.banner}
          width={2000}
          height={2000}
          alt="image"
          className="w-full rounded h-login-height  my-3"
        />
        <div>
          <h3 className="text-3xl font-bold"> {hotel?.name}</h3>
          <p className="text-xl text-justify my-5">{hotel?.description}</p>
          <button className="px-12 py-3 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 rounded-lg mt-3 font-bold">
            Price: &#8377; {hotel?.price}
          </button>
          <p className="text-3xl font-bold my-5"> Facilities : </p>
          <ul className="flex text-xl justify-between">
            {hotel
              ? hotel.facilities?.map((ele) => {
                  return (
                    <>
                      <li
                        key={ele.name}
                        className="mr-5 mb-3 flex  items-center "
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            alt="image"
                            height={200}
                            className="w-10 h-10 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    </>
                  );
                })
              : ""}
          </ul>
          {auth ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className=" px-12 py-3 rounded-lg bg-red-400 my-5 text-lg">
                Book Now
              </button>
            </Link>
          ) : (
            <span className=" text-2xl">
              Please{" "}
              <Link href={"/login"} className=" text-blue-500">
                Log in
              </Link>{" "}
              to get new Offers !
            </span>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export async function getServerSideProps(ctx) {
  // console.log(ctx.query.id);
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
