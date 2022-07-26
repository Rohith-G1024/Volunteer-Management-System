import React, { useState } from "react";
import Link from "next/link";

function Sidebar({ content }) {
  const [view, setView] = useState(false);
  return (
    <div>
      <div className="w-auto h-screen bg-blue-100">
        <div className="p-4">
          <button
            onClick={() => {
              setView(!view);
            }}
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </button>
        </div>
        {content.map((item, index) => {
          return (
            <div key={index} className="group py-3 px-2">
              <Link href={item.link}>
                <a>
                  <div className="flex flex-row px-3 py-1  rounded-xl transition-all duration-300 text-lg group-hover:bg-blue-200">
                    <div className={`pt-1 ${view ? "pr-2" : ""}`}>
                      <img height={20} width={20} src={item.logo}></img>
                    </div>
                    <div className={`${!view && "hidden"} `}>{item.title}</div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
