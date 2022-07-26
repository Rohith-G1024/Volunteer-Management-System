import React, { useState, useEffect } from "react";
const { useAnimation, motion } = require("framer-motion");
const { useInView } = require("react-intersection-observer");

function EventHelper({ shadowColor, side, title }) {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [done, setDone] = useState(false);
  const animation = useAnimation();

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
        <div className="flex flex-row justify-around">
          <div>{title}</div>
          <div>{title}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default EventHelper;
