import React, { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function VolunteerHomePage(props) {
  const sideBarContent = [
    { title: "Home", link: "/volunteer", logo: "/favicon.ico" },
    { title: "Events", link: "/volunteer/events", logo: "/favicon.ico" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/favicon.ico" },
    { title: "Logout", link: "/logout", logo: "/favicon.ico" },
  ];
  const [isLogin, setIsLogin] = useState(true);
  const isLoginMail = sessionStorage.getItem("email");
  var navBarContent = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Events",
      link: "/events",
    },
    { title: "Login", link: "/login" },
  ];
  useEffect(() => {
    if (isLogin) {
      navBarContent.push({ title: "Logout", link: "/" });
    } else {
      navBarContent.push({ title: "Login", link: "/login" });
    }
  }, [isLogin]);
  return (
    <div>
      <Head>
        <title>Home Page | Volunteers</title>
      </Head>
      <Navbar content={navBarContent} />
      <div className="flex flex-row">
        <Sidebar content={sideBarContent} />
        {isLoginMail}
      </div>
    </div>
  );
}

export default VolunteerHomePage;
