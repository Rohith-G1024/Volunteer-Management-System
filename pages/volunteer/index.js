import React, { useEffect,  useState,  } from "react";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Router from "next/router";

function Login() {
  useEffect(()=>{
    alert("Please Login")
    Router.push("/login");
  },[])
 /*  return Router.push("/"); */
 
}


function VolunteerHomePage(props) {
  // const icon1=<svg class="w-10 h-10 text-sky-400" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
  const sideBarContent = [
    { title: "Home", link: "/volunteer", logo: "/favicon.ico" },
    { title: "Events", link: "/events", logo: "/favicon.ico" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/favicon.ico" },
    { title: "Logout", link: "/logout", logo: "/favicon.ico" },
  ];
  const [isLogin, setIsLogin] = useState(true);
  var sessionMail;
  if (typeof window!=="undefined") {
    sessionMail = sessionStorage.getItem("email");
  }

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
  /* useEffect(() => {
    if (sessionMail.length) {
      console.log("nish is mad");
      navBarContent.push({ title: "Logout", link: "/" });
    } else {
      navBarContent.push({ title: "Login", link: "/login" });
    }
  }, [sessionMail]); */
  return (
    <div>
      { sessionMail && sessionMail.length > 0 ? (
        <div>
          <Head>
            <title>Home Page | Volunteers</title>
          </Head>
          <Navbar content={navBarContent} />
          <div className="flex flex-row bg-[url('/navbar.jpg')] bg-cover">
      <Sidebar content={sideBarContent} />
      <div class="text-sky-400 mt-50"> {JSON.stringify(sessionMail)};</div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default VolunteerHomePage;
