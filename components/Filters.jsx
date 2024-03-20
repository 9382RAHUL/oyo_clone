"use client";

import axios from "axios";

import React, { useEffect, useState } from "react";

const Filters = ({price,setprice,handleprice,checkedlist,setcheckedlist}) => {
  const [list, setlist] = useState([]);
  const fetchfacilities = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/facilities`);
        console.log(data);
      if (data?.facilties) {
        // console.log(data.facilities);
        setlist(data.facilties);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchfacilities();
  }, []);
  const handlecheckedlist=(e)=>{
    let newlist=[];
    if(e.target.checked){
      newlist.push(e.target.value);
      setcheckedlist(newlist);
      return;
    }
    newlist=newlist.filter((i)=>i!==e.target.value)
    setcheckedlist(newlist);
// console.log(e.target.value)
  }
  return (
    <>
      <div className="border-2  border-red-500 rounded-md h-auto px-3 py-5 m-6 ">
        <label htmlFor="price" className="font-bold">
          Price:
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={0}
          max={3000}
          onChange={(e)=>setprice(e.target.value)}
          className="ml-5"
          defaultValue={price?price:0}
        
        />
        <span className="ml-10">&#8377; {price?price:""}</span>
        <div>
          <button className="w-40 h-10 bg-green-500 cursor-pointer my-3" onClick={handleprice}>Search</button>
        </div>
        <div className="my-10">
          <h3>Filter by facilties:</h3>
          {list?.map((e) => {
            return (
              <div key={e} className="grid grid-cols-4 mt-4">
                <label htmlFor="checkbox" className="col-span-2">{e}</label>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  onChange={handlecheckedlist}
                  value={e}
                  className="w-5 h-5 ml-3 col-span-2"
                />
              </div>
            );
          })}

          {/* <p className='flex items-center mt-4'>
                    <label htmlFor="checkbox">Free Wifi</label>
                    <input type="checkbox" id="checkbox" name='checkbox' className='w-5 h-5 ml-3'/>
                </p>
                <p className='flex items-center mt-4'>
                    <label htmlFor="checkbox">Free Wifi</label>
                    <input type="checkbox" id="checkbox" name='checkbox' className='w-5 h-5 ml-3'/>
                </p> */}
        </div>
      </div>
    </>
  );
};

export default Filters;

// "use client";

// import axios from "axios";

// import React, { useEffect, useState } from "react";

// const Filters = () => {
//   const [list, setList] = useState([]);
  
//   const fetchFacilities = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:3000/api/facilities`);
//       if (data?.facilities) {
//         setList(data.facilities); // Set the list state with fetched data
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchFacilities();
//   }, []);

//   return (
//     <>
//       <div className="border-2  border-red-500 rounded-md h-auto px-3 py-5 m-6 ">
//         <label htmlFor="price" className="font-bold">
//           Price:
//         </label>
//         <input
//           type="range"
//           name="price"
//           id="price"
//           min={0}
//           max={3000}
//           className="ml-5"
//         />
//         <span className="ml-10">&#8377; 50</span>
//         <div className="my-10">
//           <h3>Filter by facilities:</h3>
//           {list?.map((facility) => (
//             <div key={facility} className="flex items-center mt-4">
//               <label htmlFor={facility}>{facility}</label>
//               <input
//                 type="checkbox"
//                 id={facility}
//                 name={facility}
//                 className="w-5 h-5 ml-3"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filters;

