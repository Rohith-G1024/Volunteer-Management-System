import React, { useState } from "react";
import Link from "next/link";

function Sidebar({ content }) {
  const [view, setView] = useState(false);
  return (
    <div>
      <div className="w-auto h-screen bg-[url('/navbar.jpg')]">
        <div className="p-4">
          <button
            onClick={() => {
              console.log('here')
              setView(!view);
            }}
          >
           <svg className="w-8 h-8 text-sky-400"   stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          </button>
        </div>
        {content.map((item, index) => {
          return (
            <div key={index} className="group py-1 px-2">
              <Link href={item.link}>
                <a>
                  <div className="flex flex-row px-3 py-1 border-2 text-sky-400 border-emerald-700   transition-all duration-300 text-lg group-hover:bg-[url('/navbar.jpg')] hover:-lg shadow-lg shadow-sky-200 hover:duration-200 ">
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
