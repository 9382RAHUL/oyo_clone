import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [list, setlist] = useState([]);
  const [price, setprice] = useState(3400);
  const [checkedlist,setcheckedlist]=useState([]);

  const handlecheckedlist=async()=>{
    const {data}=await axios.get(`/api/facilities/search?val=${checkedlist}`)
    if(data?.hotels){
      // let newarr=data.hotels;
      setlist(data.hotels);
    }
  }
  useEffect(()=>{
    if(checkedlist){
      handlecheckedlist();
    }
  },[checkedlist])

  const handleprice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price} `);
    if (data?.hotels) {
      // console.log(data.hotels);
      setlist(data.hotels);
    }
  };
  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters
            price={price}
            setprice={setprice}
            handleprice={handleprice}
            checkedlist={checkedlist}
            setcheckedlist={setcheckedlist}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
                return (
                  <>
                  <div className="m-5 col-span-9" key={e._id}>
                    <Hotel e={e} />
                  </div>
                  </>
                )
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className="m-5 col-span-9" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}
export default Hotels;
