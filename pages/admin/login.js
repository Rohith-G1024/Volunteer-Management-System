import React, { useState } from "react";
import Router from "next/router";
import { useCookies } from "react-cookie";


function ALogin(props) {

  const [cookie, setCookie] = useCookies(["user"]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);

  async function onSubmit() {
    if (userName === " " || password === " ") {
      alert("Please enter your userName and password 1");
    }
    if (userName === "admin" && password === "admin") {
      setCookie("user", "admin", {
        path: "/",
        maxAge: 3600,  //3600=1hr
        sameSite: true
      })
      // sessionStorage.setItem("username", userName);
      return Router.push("/admin");
    } else {
      alert("Incorrect Credentials. Try Again.");
      setPassword("");
    }
  }
  return (
    <div>
      <div className="bg-blue-50 w-screen pt-[40px] h-screen pb-[10vh]">
        <div className="rounded ring-1 bg-blue-100 ml-[10vw] w-[75vw]  place-items-center h-auto py-[5vh]">
          <div className="px-3 py-4 grid place-items-center text-3xl font-bold ">
            Admin Login{" "}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="px-5 py-2 ">
              <label
                className="text-lg font-semibold pt-2 ml-[20vw] -mr-[18vw]"
                htmlFor="type"
              >
                Username
              </label>
              <input
                className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder={"test@gmail.com"}
              />
            </div>
            <div className="px-5 py-2 ">
              <div className="flex flex-row">
                <label
                  className="text-lg font-semibold pt-2 ml-[20vw] -mr-[18vw]"
                  htmlFor="type"
                >
                  Password
                  <span>
                    {view ? (
                      <svg
                        onClick={() => {
                          setView(!view);
                        }}
                        className=" w-7 h-7 text-grey  "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
                      </svg>
                    ) : (
                      <svg
                        onClick={() => {
                          setView(!view);
                        }}
                        className=" w-7 h-7  text-grey"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </span>
                </label>
              </div>
              <input
                type={view ? "text" : "password"}
                className="px-2 mb-2 py-1 rounded-lg  mx-[20vw]"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder={"*********"}
              ></input>
            </div>
            <input
              type="submit"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-[20vw]"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ALogin;
