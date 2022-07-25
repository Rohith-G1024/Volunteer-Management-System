import React, { useState } from "react";
import Leaderboard from "../../components/Leaderboard";

const PCMainPage = () => {
  const [view, setView] = useState(false);
  return (
    <div>
      <div className="text-5xl font-bold grid h-screen place-items-center">
        Program Coordinator Dashboard
      </div>
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        Click to view leaderboard
      </button>
      {view && <Leaderboard />}
    </div>
  );
};

export default PCMainPage;
