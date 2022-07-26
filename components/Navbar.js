import React from "react";
import Link from "next/link";

function Navbar({ content }) {
  return (
    <div>
      <div className="w-[100vw] h-[80px] bg-gray-300">
        <div className="flex flex-row">
          <div className="ml-5 px-2 py-2">
            <Link href="/">
              <a>
                <img
                  className="hover:scale-105 duration-200"
                  src="/sristhi-logo.jpg"
                  height={50}
                  width={50}
                ></img>
              </a>
            </Link>
          </div>
          <div className="flex flex-row"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
