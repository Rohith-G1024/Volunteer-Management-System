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
          <div className="flex flex-row">
            <Sidebar content={sideBarContent} />
            {JSON.stringify(sessionMail)};
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default VolunteerHomePage;
