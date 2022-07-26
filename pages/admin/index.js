import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Head from "next/head";

const AdminLoginPage = () => {
  const sideBarContent = [
    { title: "Home", link: "/volunteer", logo: "/home.png" },
    { title: "Events", link: "/events", logo: "/events.png" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/leaderboard.png" },
    { title: "Logout", link: "/logout", logo: "/logout.png" },
  ];
  const [isLogin, setIsLogin] = useState(true);
  const sessionUsername = sessionStorage.getItem("username");
  var navBarContent = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Logout",
      link: "/logout",
    },
  ];
  return (
    <div>
      {sessionUsername.length > 0 ? (
        <div>
          <Head>
            <title>Home Page | Volunteers</title>
          </Head>
          <Navbar content={navBarContent} />
          <div className="flex flex-row">
            <Sidebar content={sideBarContent} />
            <div className="text-5xl font-bold grid h-screen place-items-center">
              Admin Home
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AdminLoginPage;
