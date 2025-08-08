import React from "react";
import { useState } from "react";

const Square = () => {
  const [value, setvalue] = useState(null);
  const handleClick = () => {
    setvalue("X");
  };

  return (
    <div>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
