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
      <div className="bg-[url('/promo-1.jpg')]  h-screen bg-cover bg-right bg-no-repeat">
        <div className="flex flex-row h-screen">
          <div
            onMouseEnter={() => {
              console.log("mouse enter");
              setView(true);
            }}
            onMouseLeave={() => {
              console.log("mouse leave");
              setView(false);
            }}
            className={`  my-20 w-[60vw] h-[400px] rounded-xl ml-20 hover:scale-105 transition-all duration-200 ${
              view
                ? "bg-[url('/ngo-child.jpg')] bg-auto  bg-no-repeat text-gray-200  duration-200"
                : "bg-gradient-to-br from-[#21374F]/10  to-[#21374F]/30"
            }`}
          >
            <div className="text-5xl font-bold mt-[100px] ml-2 font-poppins ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Volunteer Management System")
                    .start()
                    .pauseFor(2500)
                    .deleteAll();
                }}
                options={{ loop: true }}
              />
            </div>
            <div className="my-2 font-yellowtail text-2xl px-4 pt-10">
              Trying to create a world where everyone has a decent place to
              live..
            </div>
          </div>
          {/* <input
            placeholder="enter"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input> */}
          <div className="mt-[150px] w-[50%] h-[40vh]  grid place-items-center">
            <Link href="">
              <a
                className={`   bg-[#21374F]/90 hover:bg-[#00ffff]/50 px-8 py-2 text-white  hover:text-black hover:scale-95 duration-200`}
              >
                <div className="text-lg">Login</div>
              </a>
            </Link>
            <Link href="/signup">
              <a className=" bg-[#21374F]/90 px-8 py-2 text-white hover:bg-[#00ffff]/50 hover:text-black hover:scale-95 duration-200">
                <div className="text-lg">Register</div>
              </a>
            </Link>
          </div>
        </div>
        <div
          id="about"
          className="w-screen bg-gradient-to-tr from-gray-100 to-gray-900"
        >
          <div className="text-5xl font-bold pt-[100px] ml-2 h-screen ">
            <Typewriter
              onInit={(type) => {
                type.typeString("About Us").start().pauseFor(2500).deleteAll();
              }}
              options={{ loop: true }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
