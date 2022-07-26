import React from "react";
import Link from "next/link";

function NavBarOption({ item }) {
  return (
    <div className="px-10 py-4">
      <Link href={item.link}>
        <a>
          <div className="text-lg px-3 py-2 hover:bg-gray-400 hover:rounded hover:scale-105 transition-all duration-200">
            {item.title}
          </div>
        </a>
      </Link>
    </div>
  );
}

function Navbar({ content }) {
  return (
    <div>
      <div className="w-screen h-[80px] bg-gray-300">
        <div className="flex flex-row justify-between">
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
          <div className="flex flex-row mr-[5vw]">
            {content.map((item, index) => {
              return <NavBarOption key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
