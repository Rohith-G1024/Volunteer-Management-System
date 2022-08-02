import React, {useEffect} from "react";
import Router from "next/router";
import {useCookies} from "react-cookie";

function Logout(props) {
  // sessionStorage.clear();
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  removeCookie("user",{path: '/'});
  // Router.push("/");
  useEffect(()=>{
    // const [cookie, setCookie, removeCookie] = useCookies(["user"]);
    // removeCookie("user",{path: '/'});
    Router.push("/");
  },[]);
}

export default Logout;
