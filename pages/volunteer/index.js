import React from "react";
import Sidebar from "../../components/Sidebar";

function VolunteerHomePage(props) {
  const content = [
    { title: "Home", link: "/volunteer", logo: "/favicon.ico" },
    { title: "Events", link: "/volunteer/events", logo: "/favicon.ico" },
    { title: "Leaderboard", link: "/leaderboard", logo: "/favicon.ico" },
    { title: "Logout", link: "/logout", logo: "/favicon.ico" },
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
