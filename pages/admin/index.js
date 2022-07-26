import React, { useState, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const AdminLoginPage = () => {
  const sideBarContent = [
    { title: "Home", link: "/volunteer", logo: "/home.png" },
    { title: "Events", link: "/events", logo: "/events.png" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/leaderboard.png" },
    { title: "Logout", link: "/logout", logo: "/logout.png" },
  ];
  const [isLogin, setIsLogin] = useState(true);
  const sessionUsername = sessionStorage.getItem("username");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [type, setType] = useState("");
  const [pcEmail, setPcEmail] = useState("");

  var columns = [];
  var rowData = [];

  const ref1 = useRef();

  function handleCreateEventSubmit() {
    var data = {
      title: title,
      desc: desc,
      imgLink: imgLink,
      type: type,
      pcEmail: pcEmail,
    };
    console.log("create-event", data);
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
            <div>
              <div className="p-4 flex flex-row gap-5">
                <div className="bg-blue-50 w-[100%]">
                  <div className="p-3 m-3 group">
                    <div className="w-full bg-blue-200 text-2xl group-hover:text-[25px] transition-all duration-200 font-bold py-3 px-8 ring-1">
                      Create Event
                    </div>
                    <div className="py-3 px-8 mb-8">
                      <div className="flex flex-col mt-8 gap-2 text-lg">
                        <label>Title :</label>
                        <input
                          className="w-full px-1"
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col mt-4 gap-2 text-lg">
                        <label>Description :</label>
                        <input
                          className="w-full px-1"
                          type="text"
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col mt-4 gap-2 text-lg">
                        <label>Image Link :</label>
                        <input
                          className="w-full px-1"
                          type="text"
                          value={imgLink}
                          onChange={(e) => setImgLink(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col mt-4 gap-2 text-lg">
                        <label>Type :</label>
                        <select
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        >
                          <option value="">Select</option>
                          <option value="college">College</option>
                          <option value="general">General</option>
                        </select>
                      </div>
                      <div className="flex flex-col mt-7 gap-2 text-lg">
                        <label>Assign Program Co-ordinator:</label>
                        <select
                          onChange={(e) => {
                            setPcEmail(e.target.value);
                          }}
                        >
                          <option value="">Select</option>
                          <option value="t1@mail.com">t1</option>
                          <option value="t2@mail.com">t2</option>
                        </select>
                      </div>
                      <div className="flex flex-col mt-10 gap-2 text-lg">
                        <button
                          onClick={() => {
                            handleCreateEventSubmit();
                          }}
                          className="px-3 py-2 bg-green-500 hover:bg-green-600 hover:scale-90 transition-all duration-300"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 w-[100%]">
                  <div className="p-3 m-3 group">
                    <div className="w-full bg-blue-200 text-2xl group-hover:text-[25px] transition-all duration-200 font-bold py-3 px-8 ring-1">
                      Update Event Status
                    </div>
                    <div
                      className=" mt-10 ag-theme-alpine"
                      style={{
                        height: "45vh",
                        width: "100%",
                      }}
                    >
                      <AgGridReact
                        ref={ref1}
                        columnDefs={columns}
                        rowData={rowData}
                        rowHeight={40}
                        //onGridReady={gridRef.current.sizeColumnsToFit()}
                        //onGridColumnsChanged={sizeToFit}
                        //suppressRowClickSelection={true}
                        rowSelection="single"
                      ></AgGridReact>
                    </div>
                  </div>
                </div>
              </div>
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
