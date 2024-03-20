import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = ({ e }) => {
  return (
    <>
      <div className="border-2 border-red-500 w-full rounded-lg h-80 mb-3 p-4">
        <div className="flex">
          <Image
            src={e?.banner}
            width={200}
            height={200}
            alt="image"
            className="w-96 h-60 rounded-xl mr-3"
          />
          <div className="grid grid-rows-3 gap-2">
            {e
              ? e.gallery?.map((ele) => {
                  return (
                    <>
                      <Image
                        src={ele}
                        key={ele}
                        width={200}
                        height={200}
                        alt="image"
                        className="w-28  rounded-xl mr-3"
                      />
                    </>
                  );
                })
              : ""}
          </div>
          <div className="ml-10">
            <h2 className="font-bold text-x line-clamp-1">{e?.name}</h2>
            <p className="text-justify text-lg my-5">{e?.description}</p>

            <div className="text-2xl">
              <span className=" font-bold">Facilities : </span>
              <span>
                <ul className="flex">
                  {e
                    ? e.facilities?.map((ele) => {
                        return (
                          <>
                            <li key={ele.name} className="mr-5 mb-3 flex  items-center ">
                              <span>
                                <Image src={ele.img} width={200} height={200} className='w-10 h-10 rounded-full'/>
                              </span> 
                              <span className="ml-5">{ele.name}</span>
                            </li>
                          </>
                        );
                      })
                    : ""}
                </ul>
              </span>
              {/* <span className=" font-bold">Facilities : </span>
                <span>Free wifi, Pet Care, Swimming Pool, Beaches,  Resort</span> */}
            </div>
            <div className="flex items-center ">
              <button className="px-4 py-3 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 rounded-lg mt-3">
                Price: &#8377; {e?.price}
              </button>
              <Link
                href={`hotels/${e?._id}`}
                className="ml-12 text-xl font-bold text-red-600"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
