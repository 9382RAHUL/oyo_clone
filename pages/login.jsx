'use client'
import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Login = () => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [login,setlogin]=useState(false);

  const router= useRouter();
  // const handleSignUp=async()=>{
  //   const res=await axios.post(`/api/user/register`,{
  //     name,
  //     email,
  //     password,
  //    })
  //    if(res?.data){
  //     // console.log(res);
  //     Cookies.set('user',res.data.token)
  //       alert(res.data.msg);
  //       router.push("/");
  //    }
  // }
  const handleSignUp = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });
      if (res && res.data) {
        Cookies.set('user', res.data.token);
        alert(res.data.msg);
        router.back();
      } else {
        // Handle case where response data is missing
        console.error('Response data is missing or empty');
        // Optionally, you can display a user-friendly error message
        // setError('An error occurred during signup. Please try again.');
      }
    } catch (error) {
      // Handle errors
      console.error('Error during signup:', error);
      // Optionally, you can display a user-friendly error message
      // setError('An error occurred during signup. Please try again.');
    }
  };
  

  // const handleSignUp = async () => {
  //   try {
  //     const res = await axios.post(`/api/user/register`, {
  //       name,
  //       email,
  //       password,
  //     });
  //     // Handle response data if needed
  //     console.log('Response:', res.data);
  //     if(res?.data){
  //       //     // console.log(res);
  //           Cookies.set('user',res.data.token)
  //             alert(res.data.msg);
  //             router.push("/");
  //          }
  //   } catch (error) {
  //     // Handle errors
  //     console.error('Error during signup:', error);
  //     // Optionally, you can also display a user-friendly message to the user
  //     // For example: setError('An error occurred during signup. Please try again.');
  //   }
  // };
  
  const handleLogin= async()=>{
   const res=await axios.post(`/api/user/login`,{
    email,
    password,
   })
   if(res?.data){
    // console.log(res);
    Cookies.set('user',res.data.token,{expires:7})
      alert(res.data.msg);
      router.back();
   }
  }
  const handleToggle=()=>{
    setlogin(!login);
  }

  return (
    <>
      <Head>
        <title>OYO: Login !</title>
      </Head>
      <div className="bg-login-background bg-cover bg-center bg-no-repeat  ">
        <div className="flex items-center">
          <span className="font-bold text-6xl text-gray-700 p-6">OYO</span>
         <p className="font-bold text-2xl text-white"> Hotels and homes across 800 cities, 24+ countries</p>
        </div>
        <div className="flex h-screen justify-center items-center ">
          <div className="flex justify-center items-center w-9/12">
            <div>
              <h1 className="font-bold text-5xl text-white">
                There’s a smarter way to OYO around
              </h1>
              <p className="text-2xl text-white mt-10">
                Sign up with your phone number and get exclusive access to
                discounts and savings on OYO stays and with our many travel
                partners.
              </p>
            </div>
            <div className="border-2 pb-40 w-screen  ml-24 bg-white ">
              <p className="h-8 bg-gradient-to-r from-red-500 to bg-orange-500 text-center ">
                Sign up & Get ₹500 OYO Money
              </p>
              <div className="px-10">
                <h1 className="font-bold text-5xl my-5">Login/SignUp</h1>
                <p className="font-bold text-lg mb-1">
                  Please enter your phone number to continue
                </p>
              {
                login?" ":  <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full h-12 mb-2 my-2 outline-none border-black border"
                  onChange={(e)=>setname(e.target.value)}
                /> 
              }
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full h-12 mb-2 my-2 outline-none border-black border"
                  onChange={(e)=>setemail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full h-12 mb-2 my-2 outline-none border-black border"
                  onChange={(e)=>setpassword(e.target.value)}
                />
                <button onClick={login?handleLogin:handleSignUp} className="px-4 py-3 m-auto w-60 mb-10 bg-gray-400 rounded-md font-bold hover:cursor-pointer hover:bg-slate-600 text-white">
                {login?"Login":"Sign Up"}
                </button>
                <p className="flex ">
                  <span className="mr-3 font-bold ">
                   {login?"Don't have an account yet":" Already have an account"}
                  </span>
                  <span className="font-bold  border-b-2 border-red-500 text-red-400 hover:text-red-600 cursor-pointer" onClick={handleToggle}>
                    {login?"Sign Up":"Login"}
                  </span>
                </p>
                {/* <div className="flex ">
                  <p className="mr-3 font-bold ">
                    Prefer to Sign in with password instead?
                  </p>
                  <button className="font-bold  text-red-600">
                    Click here
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


// "use client";
// import Head from "next/head";
// import { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, setLogin] = useState(false);

//   const router = useRouter();

//   // const handleSignup = async () => {
//   //   const res = await axios.post(`/api/user/register`, {
//   //     name,
//   //     email,
//   //     password,
//   //   });
//   //   if (res?.data) {
//   //     Cookies.set("user", res.data.token, { expires: 7 });
//   //     alert(res.data.msg);
//   //     router.push("/");
//   //   }
//   // };
//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('/api/user/register', {
//         name,
//         email,
//         password,
//       });
  
//       if (response.data) {
//         Cookies.set('user', response.data.token, { expires: 7 });
//         alert(response.data.msg);
//         router.push('/');
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle error here
//     }
//   };

//   const handleToggle = () => {
//     setLogin(!login);
//   };

//   // const handleLogin = async () => {
//   //   const res = await axios.post(`/api/user/login`, {
//   //     email,
//   //     password,
//   //   });
//   //   if (res?.data) {
//   //     Cookies.set("user", res.data.token, { expires: 7 });
//   //     alert(res.data.msg);
//   //     router.back();
//   //   }
//   // };

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await axios.post('/api/user/login', {
//         email,
//         password,
//       });
  
//       if (response.data) {
//         const { token, msg } = response.data;
//         Cookies.set('user', token, { expires: 7 });
//         alert(msg);
//         // router.back();
//         router.push("/");
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred during login. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <Head>
//         <title>OYO - Login !</title>
//       </Head>
//       <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
//         <div className=" absolute w-full top-10 px-20 flex items-center text-white">
//           <h2 className="text-5xl font-bold mr-5">OYO</h2>
//           <p className=" font-bold text-2xl  ">
//             Hotels and homes across 800 cities, 24+ countries
//           </p>
//         </div>
//         <div className="flex justify-center items-center w-9/12">
//           <div className=" text-white">
//             <p className=" font-bold text-5xl text-justify">
//               There’s a smarter way to OYO around
//             </p>
//             <p className=" text-2xl mt-5 text-justify">
//               Sign up with your phone number and get exclusive access to
//               discounts and savings on OYO stays and with our many travel
//               partners.
//             </p>
//           </div>
//           <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
//             <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
//               Sign up & Get ₹500 OYO Money
//             </p>
//             <div className="px-10">
//               <h3 className=" text-5xl font-bold my-5">Login / Signup</h3>
//               <p className=" font-bold text-lg mb-1">
//                 Please enter your phone number to continue
//               </p>
//               {login ? (
//                 ""
//               ) : (
//                 <input
//                   type="text"
//                   placeholder="Enter your name..."
//                   className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               )}
//               <input
//                 type="email"
//                 placeholder="Enter your email..."
//                 className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Enter yourt password..."
//                 className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
//                 onClick={login ? handleLogin : handleSignup}
//               >
//                 {login ? "Login " : " Sign Up"}
//               </button>
//               <p className=" my-1 text-xl">
//                 <span>
//                   {login
//                     ? "Don`t have an account ?"
//                     : "Already have an account ?"}
//                 </span>
//                 <span
//                   className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
//                   onClick={handleToggle}
//                 >
//                   {" "}
//                   {login ? "Sign Up" : "Login"}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
