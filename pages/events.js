import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import EventHelper from "../components/EventHelper";
import axios from "axios";

const AdminEventsPage = () => {
  const shadowColor = ["shadow-cyan-500", "shadow-blue-500"];
  const side = ["left", "right"];
  const content = [
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pellentesque nibh, nec tincidunt ex. Nam ultrices lacus ut efficitur suscipit. Maecenas justo dui, finibus vitae risus at, rhoncus eleifend neque.",
      imgLink: "/hpwp.jpg",
      shareLink: "/events",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pellentesque nibh, nec tincidunt ex. Nam ultrices lacus ut efficitur suscipit. Maecenas justo dui, finibus vitae risus at, rhoncus eleifend neque.",
      imgLink: "/hpwp.jpg",
      shareLink: "/events",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pellentesque nibh, nec tincidunt ex. Nam ultrices lacus ut efficitur suscipit. Maecenas justo dui, finibus vitae risus at, rhoncus eleifend neque.",
      imgLink: "/hpwp.jpg",
      shareLink: "/events",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pellentesque nibh, nec tincidunt ex. Nam ultrices lacus ut efficitur suscipit. Maecenas justo dui, finibus vitae risus at, rhoncus eleifend neque.",
      imgLink: "/hpwp.jpg",
      shareLink: "/events",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pellentesque nibh, nec tincidunt ex. Nam ultrices lacus ut efficitur suscipit. Maecenas justo dui, finibus vitae risus at, rhoncus eleifend neque.",
      imgLink: "/hpwp.jpg",
      shareLink: "/events",
    },
  ];
  const navBarContent = [
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
  const [flag, setFlag] = useState(false);
  const [eventList, setEventList] = useState([]);
  const fetcher1 = async () => {
    const tempList = await axios.get("http://localhost:3000/api/event/view");
    console.log(tempList);
    setEventList(tempList.data.doc);
  };
  if (!flag) {
    fetcher1();
    setFlag(true);
  }
  return (
    <div>
      <Navbar content={navBarContent} />
      <div className="  bg-blue-50 min-h-screen  items-center pt-[40px] px-16">
        <div className="text-5xl font-bold mb-10">
          <Typewriter
            onInit={(typewrite) => {
              typewrite.typeString("Events").start().pauseFor(2500).deleteAll();
            }}
            options={{ loop: true }}
          />
        </div>
        <div className="justify-items-stretch">
          <div className="relative w-full max-w-lg ">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-10 mb-10 ">
          {eventList.map((item, index) => {
            return (
              <EventHelper
                side={side[index % 2]}
                shadowColor={shadowColor[index % 2]}
                {...item}
              />
            );
          })}
          <div className="justify-items-end">
            <div className="relative w-full max-w-lg ">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>

        {/* <div className="m-8 relative space-y-4">
        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="h-4 w-48 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="h-4 w-56 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="h-4 w-44 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default AdminEventsPage;
