import React from "react";

function Score({ score, length }) {
  return (
    <div className="megrim display-4 font-weight-bold">
      You scored {score} out of {length}
    </div>
  );
}

export default Score;
