import React from "react";

function Student({ basic_input, Inputfield }) {
  return (
    <div>
      {[...basic_input, {}].map((item, index) => {
        return <Inputfield key={index} {...item} />;
      })}
    </div>
  );
}

export default Student;
