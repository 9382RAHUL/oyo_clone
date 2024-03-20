import React, { useEffect } from "react";
import Script from "next/script";
import axios from "axios";
import { useRouter} from "next/router";
// import {useParams} from "next/navigation"
const Payment = () => {
    const router=useRouter();
    // const params=useParams();
    const makepayment=async()=>{
        const val={
            id:router.query?.id,
            // id:params._id,
        }
        const {data}=await axios.post(`/api/rajorpay`,val);
        console.log(data);

       
            const options = {
                key: process.env.RAZORPAY_KEY,
                name: "Aditya",
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                description: "Thank You !",
                handler: function (response) {},
                prefill: {
                  name: "Aditya",
                  email: "adi@gmail.com",
                  contact: 987654321,
                },
              };
            const paymentobj=new window.Razorpay(options);
            paymentobj.open();
    }
    useEffect(()=>{
        makepayment();
    },[])
  return (
    <>
<Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;



// key id:  rzp_test_TZOTeZ9NPM3nsM
//key secret:ogcRQaaoe9l0eRJrU0pXAzXo