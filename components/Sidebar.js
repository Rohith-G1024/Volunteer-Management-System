import React from "react";
import Link from "next/link";

function Sidebar({ content }) {
  return (
    <div>
      <div className="w-auto h-screen bg-red-100">
        {content.map((item, index) => {
          return (
            <div key={index} className="group py-3 px-2">
              <Link href={item.link}>
                <a>
                  <div className="px-3 py-1 rounded-xl transition-all duration-300 text-lg group-hover:bg-red-200">
                    {item.title}
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
