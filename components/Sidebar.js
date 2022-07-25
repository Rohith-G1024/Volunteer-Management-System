import React, { useState } from "react";
import Link from "next/link";

function Sidebar({ content }) {
  const [view, setView] = useState(true);
  return (
    <div>
      <div className="w-auto h-screen bg-blue-100">
        <div className="p-4">
          <button
            onClick={() => {
              setView(!view);
            }}
          >
            Click
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
