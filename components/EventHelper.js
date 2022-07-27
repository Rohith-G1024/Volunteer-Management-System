import React, { useState, useEffect } from "react";
import Link from "next/link";
const { useAnimation, motion } = require("framer-motion");
const { useInView } = require("react-intersection-observer");

function EventHelper({ shadowColor, side, title, imgLink, desc, status }) {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [done, setDone] = useState(false);
  const animation = useAnimation();
  const [copyText, setCopyText] = useState("");

  useEffect(() => {
    if (side === "left") {
      if (inView && !done) {
        animation.start({
          delay: 1,
          x: 0,
          opacity: 1,
          transition: { ease: "easeOut", duration: 0.75 },
          //transition:{type:"spring",duration:1,bounce:0.3}
        });
        setDone(!done);
        //console.log("left done")
      }
      if (inView && done) {
        animation.set({
          x: 0,
          opacity: 1,
        });
      }
      if (!inView && !done) {
        animation.start({
          x: "-100vw",
          opacity: 0,
        });
      }
      if (!inView && done) {
        animation.set({
          x: 0,
          opacity: 1,
        });
      }
    }
    //console.log(inView)
  }, [inView]);

  useEffect(() => {
    if (side === "right") {
      if (inView && !done) {
        animation.start({
          delay: 1,
          x: 0,
          opacity: 1,
          transition: { ease: "easeOut", duration: 0.75 },
          //transition:{type:"spring",duration:1,bounce:0.3}
        });
        //console.log("right done")
        setDone(!done);
      }
      if (inView && done) {
        animation.set({
          x: 0,
          opacity: 1,
        });
      }
      if (!inView && !done) {
        animation.start({
          x: "calc(100vw - 30%)",
          opacity: 0,
        });
      }
      if (!inView && done) {
        animation.set({
          x: 0,
          opacity: 1,
        });
      }
    }
  }, [inView]);

  return (
    <div className="py-4" ref={ref}>
      <motion.div
        animate={animation}
        className={`bg-white rounded-lg opacity-70  shadow-xl ${shadowColor} min-h-[45vh] w-[92vw] mix-blend-multiply   text-center `}
      >
        <div className="flex flex-row justify-around group">
          <div className="p-3 -ml-[10px] group-hover:scale-90 transition-all duration-300">
            <img src={imgLink} alt={title} width={500} height={500} />
          </div>
          <div className="py-3 mt-[20px] my-[80px]">
            <div
              className={`px-3 ml-[30vw] group-hover:rotate-[15deg] transition-all duration-300 -mt-[40px] mb-[20px]  ${
                status === "ongoing" ? "bg-green-400" : "bg-blue-500"
              }`}
            >
              {status}{" "}
            </div>
            <div className="text-3xl font-bold pb-10 group-hover:scale-105 group-hover:text-blue-700 transition-all duration-200">
              {title}
            </div>
            <div className="text-lg w-[40vw]">{desc}</div>
            <div className=" p-3 ml-[30vw] w-[10vw]">
              {/* <div
                onClick={(e) => {
                  e.preventDefault();
                  setCopyText({ shareLink });
                  copy(copyText);
                  alert(`You have copied "${copyText}"`);
                }}
              >
                <a className="text-blue-800 hover:underline">Share this</a>
              </div> */}
              <Link href={imgLink}>
                <a
                  target="_blank"
                  className="text-blue-800 flex flex-row gap-2 hover:underline"
                >
                  <img className="" src="/share.png" width={20} height={20} />
                  <span>Share this</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EventHelper;
