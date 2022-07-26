import React, { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Router from "next/router";

function Login() {
  return Router.push("/");
}

function VolunteerHomePage(props) {
  const sideBarContent = [
    { title: "Home", link: "/volunteer", logo: "/favicon.ico" },
    { title: "Events", link: "/volunteer/events", logo: "/favicon.ico" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/favicon.ico" },
    { title: "Logout", link: "/logout", logo: "/favicon.ico" },
  ];
  const [isLogin, setIsLogin] = useState(true);
  console.log(typeof window ==='undefined');
  if (typeof window==='undefined'){
    return Router.push("/login");
  }
  const sessionMail = sessionStorage.getItem("email");
  var navBarContent = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Events",
      link: "/events",
    },
  ];
  useEffect(() => {
    if (sessionMail.length) {
      console.log("nish is mad");
      navBarContent.push({ title: "Logout", link: "/" });
    } else {
      navBarContent.push({ title: "Login", link: "/login" });
    }
  }, [sessionMail]);
  return (
    <div>
      {sessionMail.length > 0 ? (
        <div>
          <Head>
            <title>Home Page | Volunteers</title>
          </Head>
          <Navbar content={navBarContent} />
          <div className="flex flex-row">
            <Sidebar content={sideBarContent} />
            {sessionMail}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default VolunteerHomePage;
