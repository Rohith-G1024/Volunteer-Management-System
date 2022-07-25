import React from "react";
import Sidebar from "../../components/Sidebar";

function VolunteerHomePage(props) {
  const content = [
    { title: "Home", link: "/volunteer" },
    { title: "Events", link: "/volunteer/events" },
    { title: "Leaderboard", link: "/leaderboard" },
    { title: "Logout", link: "/logout" },
  ];
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar content={content} />
      </div>
    </div>
  );
}

export default VolunteerHomePage;
