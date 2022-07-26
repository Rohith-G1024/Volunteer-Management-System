import React from "react";
import Router from "next/router";

function Logout(props) {
  sessionStorage.clear();
  Router.push("/");
}

export default Logout;
