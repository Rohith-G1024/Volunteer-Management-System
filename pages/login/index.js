import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Navbar from "../../components/Navbar";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);

  async function onSubmit() {
    if (email === " " || password === " ") {
      alert("Please enter your email and password");
    }
    const requestBody = {
      email: email,
      password: password,
    };
    console.log("req", requestBody);
    //request api here
    const res = await axios.get("/api/login", {
      params: {
        email: email,
        password: password,
      },
    });
    console.log(res);
    if (res.status === 200) {
      // alert("Login Successful");
      var data = res.data.doc;
      sessionStorage.setItem("email", data.email);
      if (data.isPc) {
        return Router.push("/pc");
      } else {
        if (data.type === 1) {
          return Router.push("/volunteer");
        } else if (data.type === 2) {
          return Router.push("/volunteer");
        } else if (data.type === 3) {
          return Router.push("/volunteer");
        }
      }

      console.log(res.data.doc);
    } else {
      alert("Login Failed");
    }
    // const data = await res.json();
    // console.log("response_data", data);
  }

  const navBarContent = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "#about",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Sign Up",
      link: "/signup",
    },
  ];

  return (
    <div>
      <Navbar content={navBarContent} />
      <div className="bg-[url('/navbar.jpg')] bg-cover w-screen pt-[40px] h-screen pb-[10vh]">
        <div className="rounded ring-2 ring-sky-400 bg-blue-100 ml-[30vw] w-[40vw] mt-[9vh] place-items-center h-auto py-[5vh] bg-[url('/navbar.jpg')] bg-cover">
          <div className="relative px-3 py-4 grid place-items-center text-3xl font-bold font-yellowtail text-sky-400  ">
          <svg class="absolute -mt-[120px]  mx-[800px] border-2  border-sky bg-lgbackground3 text-sky w-20 h-20 bg-transparent blur-none "  fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
   
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="px-5 py-2 ">
          
              <input
                className="px-2 mb-2 py-1  mx-[9vw]  item-align-center text-center placeholder placeholder-black ring-2 ring-sky-400 rounded-sm  w-[350px] h-[60px]   bg-white text-black"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder={"test@gmail.com"}
              />
                 <svg class="absolute w-8 h-8 text-white -mt-[6vh] mx-[27vw] " stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
           
            </div>
            <div className="px-5 py-2 ">
              <div className="flex flex-row relative">
                
                  
                  <span>
                    {view ? (
                      <svg
                        onClick={() => {
                          setView(!view);
                        }}
                        class=" absolute w-7 h-7  text-grey mt-3 mx-[27vw]" 
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
                      </svg>
                    ) : (
                      <svg
                        onClick={() => {
                          setView(!view);
                        }}
                        class="absolute w-7 h-7  text-grey mt-3 mx-[27vw] " 
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </span>
                
              </div>
              <input
                type={view ? "text" : "password"}
                className="px-2 mb-2 py-1 rounded-sm  mx-[9vw]      item-align-center text-center placeholder placeholder-black ring-2 ring-sky-400   w-[350px] h-[60px]   bg-white text-black"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder={"Password"}
              ></input>
            </div>
            <input
              type="submit"
              className=" bg[url('/navbar.jpg')] ring-1 ring-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black font-bold py-2 px-4 rounded-sm mx-[18vw]"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
