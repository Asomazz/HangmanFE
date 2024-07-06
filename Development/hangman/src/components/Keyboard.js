import React, { useState } from "react";
import Key from "./Key";

const Keyboard = () => {
  const [disabledKeys, setDisabledKeys] = useState({});

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const gridClasses = [
    "grid grid-cols-10 gap-3",
    "grid grid-cols-9 gap-3 py-3 justify-center",
    "grid grid-cols-7 gap-3 justify-center",
  ];

  const handleClick = (key) => {
    setDisabledKeys((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="flex justify-center flex-wrap items-center">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={gridClasses[rowIndex]}>
          {row.map((key) => (
            <Key
              letter={key}
              isDisabled={disabledKeys[key]}
              onClick={() => handleClick(key)}
            >
              {key}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
