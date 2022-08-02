import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";
import { parseCookies } from "../helpers";

function Login() {
  useEffect(()=>{
    console.log("something")
    alert("Please Login")
    Router.push("/admin/login");
  },[])
 /*  return Router.push("/"); */
 
}

const AdminLoginPage = (props) => {
  const data = props.data
  console.log("/admin")
  console.log("admin data",data);
  const sideBarContent = [
    { title: "Home", link: "/", logo: "/home.png" },
    { title: "Events", link: "/events", logo: "/events.png" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/leaderboard.png" },
    { title: "Logout", link: "/logout", logo: "/logout.png" },
  ];
  const [isLogin, setIsLogin] = useState(true);
  // var sessionUsername;
  // if(typeof window!=="undefined"){
  //   sessionUsername = sessionStorage.getItem("username");
  // }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [type, setType] = useState("");
  const [pcEmail, setPcEmail] = useState("");
  const [flag, setFlag] = useState(false);

  const [columns, setColumns] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [options, setOptions] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [targetEvent, setTargetEvent] = useState([]);
  const [viewDetails, setViewDetails] = useState(false);

  const [updatedStatus, setUpdatedStatus] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    if (targetEvent == "") {
      setViewDetails(false);
    } else {
      setViewDetails(true);
      for (let i = 0; i < eventList.length; i++) {
        if (eventList[i].pcEmail === targetEvent) {
          //console.log(eventList[i]);
          setUpdatedTitle(eventList[i].title);
        }
      }
    }
  }, [targetEvent]);

  const ref1 = useRef();

  const fetcher1 = async () => {
    const op1 = await axios.get("http://localhost:3000/api/event/getPC1");
    const op2 = await axios.get("http://localhost:3000/api/event/getPC2");
    const tempList = await axios.get("http://localhost:3000/api/event/view");
    // console.log(tempList.data);
    for (var i = 0; i < op1.data.doc.length; i++) {
      options.push({
        pcEmail: op1.data.doc[i].email,
        name: op1.data.doc[i].name,
      });
      setOptions(options);
    }
    for (var i = 0; i < op2.data.doc.length; i++) {
      options.push({
        pcEmail: op2.data.doc[i].email,
        name: op2.data.doc[i].name,
      });
      setOptions(options);
    }
    for (var i = 0; i < tempList.data.doc.length; i++) {
      eventList.push({
        pcEmail: tempList.data.doc[i].pcEmail,
        title: tempList.data.doc[i].title,
        desc: tempList.data.doc[i].desc,
        imgLink: tempList.data.doc[i].imgLink,
        type: tempList.data.doc[i].type,
        status: tempList.data.doc[i].status,
      });
      setEventList(eventList);
    }

    // console.log("eventlist", eventList);
  };


  if (!flag) {
    fetcher1();
    setFlag(true);
  }

  /* useEffect(() => {
    setPcOptions(options);
  }, [options]); */

  //

  async function handleCreateEventSubmit() {
    var data = {
      title: title,
      desc: desc,
      imgLink: imgLink,
      type: type,
      pcEmail: pcEmail,
      status: "ongoing",
      //s_type: "null",
    };
    const res = await axios.post(
      "http://localhost:3000/api/event/create",
      data
    );
    console.log("response", res);
  }

  async function handleUpdateSubmit() {
    var data = {
      pcEmail: targetEvent,
      status: updatedStatus,
      title: updatedTitle,
    };
    console.log("updated", data);
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
      {data["user"]==="admin" ? (
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
                          {options.map((option, index) => {
                            return (
                              <option key={index} value={option.pcEmail}>
                                {option.name}
                              </option>
                            );
                          })}
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
                <div className="bg-blue-50 min-h-[100px] w-[100%]">
                  <div className="p-3 m-3 group">
                    <div className="w-full bg-blue-200 text-2xl group-hover:text-[25px] transition-all duration-200 font-bold py-3 px-8 ring-1">
                      Update Event Status
                    </div>
                    <div className="flex flex-col mt-4 gap-2 text-lg">
                      <label>Select a Event</label>
                      <select
                        onChange={(e) => {
                          setTargetEvent(e.target.value);
                        }}
                      >
                        <option value="">Select</option>
                        {eventList.map((item, index) => {
                          return (
                            <option value={item.pcEmail}>{item.title}</option>
                          );
                        })}
                      </select>
                      {viewDetails && (
                        <div>
                          <div className="flex flex-col mt-4 gap-2 text-lg">
                            <label>Update Status</label>
                            <select
                              value={updatedStatus}
                              onChange={(e) => {
                                setUpdatedStatus(e.target.value);
                              }}
                            >
                              <option
                                //selected={updatedStatus === "ongoing" && true}
                                value="ongoing"
                              >
                                Ongoing
                              </option>
                              <option
                                //selected={updatedStatus === "completed" && true}
                                value="completed"
                              >
                                Completed
                              </option>
                            </select>
                          </div>
                          <div className="flex flex-col mt-10 gap-2 text-lg">
                            <button
                              onClick={() => {
                                handleUpdateSubmit();
                              }}
                              className="px-3 py-2 bg-green-500 hover:bg-green-600 hover:scale-90 transition-all duration-300"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
};

export async function getServerSideProps ({req,res})  {
  const data = parseCookies(req)

  console.log('admin here')
  if (res) {
    // console.log("res:",res);
    console.log("data:",data);
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/admin/login" })
      res.end()
    }
    else console.log("normal admin")
  }
  else console.log("lol")

  return {
    props:{data: data && data,}
  }
}

export default AdminLoginPage;

