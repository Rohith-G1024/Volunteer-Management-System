import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [view, setView] = useState(false);
  const [value, setValue] = useState("");
  const content = [
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
  ];
  return (
    <>
      <Head>
        <title>Sristhi - NGO</title>
      </Head>
      <Navbar className="fixed z-10" content={content} />
      <div className="bg-[url('/navbar.jpg')]  h-screen bg-cover bg-right bg-no-repeat">
        <div className="flex flex-row ">
          <div
            onMouseEnter={() => {
              console.log("mouse enter");
              setView(true);
            }}
            onMouseLeave={() => {
              console.log("mouse leave");
              setView(false);
            }}
            className={` my-10 w-[93vw]   text-white h-[300px] rounded-xl ml-10  text-center  scale-105 transition-all duration-200 ${
              view
                 
                ? "bg-[url('/together.jpeg')] bg-cover  bg-no-repeat text-sky-400  duration-200"
                :"bg-[url('/ngo-child.jpg')] bg-auto  bg-no-repeat text-gray-200  duration-200"
            }`}
          >
            <div className="text-5xl font-bold mt-[100px] ml-2 font-poppins ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" Volunteer Management System")
                    .start()
                    .pauseFor(2500)
                    .deleteAll();
                }}
                options={{ loop: true }}
              />
            </div>
           
          </div>
          
          {/* <input
            placeholder="enter"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input> */}
       
        </div>
         <div className="flex flex-row ">
          <div
            onMouseEnter={() => {
              console.log("mouse enter");
              setView(true);
            }}
            onMouseLeave={() => {
              console.log("mouse leave");
              setView(false);
            }}
            className={`  my-5 w-[100vw] h-[350px] rounded-xl    hover:scale-105 transition-all duration-200 ${
              view
                ? "bg-[url('/sw.jpeg')] bg-cover bg-no-repeat text-black  duration-200"
                : "bg-[url('/sw.jpg')] bg-cover  bg-no-repeat text-sky-400 duration-200"
            }`}
          >
           
            <div className="  font-yellowtail text-2xl px-4 pt-   text-center mt-20">
              Trying to create a world where everyone has a decent place to
              live..
            </div>
          </div>
          <div className="mt-[70px] w-[50%] h-[20vh]  grid place-items-center">
            <Link href="/login">
              <a
                className="text-lg text-[#0ea5e9] px-2 w-[50vh] text-center py-1 ring-2 ring-[#0ea5e9]   bg-navbar -lg shadow-lg shadow-cyan-500     group-hover:    hover:rounded hover:scale-105 transition-all duration-200" >
                <div className="text-lg">Login</div>
              </a>
            </Link>
            <Link href="/signup">
              <a className="text-lg w-[50vh] text-center text-sky-400 px-2 py-1 ring-2 ring-[#0ea5e9] bg-navbar  -lg shadow-lg shadow-cyan-500     group-hover:    hover:rounded hover:scale-105 transition-all duration-200" ><div className="text-lg">Register</div>
              </a>
            </Link>
          </div>
          {/* <input
            placeholder="enter"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input> */}
            
        </div>
        <div
          id="about"
          className="w-screen bg-cover bg-[url('/g1.jpg')]"
        >
          <div className="text-5xl text-center text-sky-400 font-yellowtail font-bold pt-[40px] ml-5   ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("About Us..")
                  .start()
                  .pauseFor(2500)
                  .deleteAll();
              }}
              options={{ loop: true }}
            />
          </div >
          <div className="    font-yellowtail text-sky-400 text-2xl  text-center  "> <br/>
           <div class="text-center">  
              Our website is run by the humble volunteers, for the people </div>
              <br/>
              <div class=" grid grid-flow-col h-[120px] w-[200px] gap-2 mix-blend-multiply  mx-[45%]">
                <img src="/wa.jpeg"></img>
                <img src="/mail.jpg"></img>
              </div>
              <div class=""> <b>Contact Us</b> : <i>8497876914 </i></div>
              <div class=""> <b>Text Us </b>: <i> srishtingo@gmail.com </i></div>
            </div>
                 
                
          </div>
      </div>
    </>
  );
};

export default HomePage;
