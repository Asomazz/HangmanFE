import React from "react";

const Dash = ({ children }) => (
  <div className="border-b-2 border-t-0 border-l-0 border-r-0 border-black font-Roboto w-12 h-14 text-2xl border">
    {children}
  </div>
);

const Render = () => {
  const rows = [
    [" ", " ", " ", " "],
    [" ", " "],
    [" ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " "],
  ];

  const gridClasses = [
    "grid grid-cols-4 gap-3 justify-center mb-3 ",
    "grid grid-cols-2 gap-3 justify-center mb-3 ",
    "grid grid-cols-6 gap-3 justify-center mb-3",
    "grid grid-cols-4 gap-3 justify-center mb-3 ",
    "grid grid-cols-6 gap-3 justify-center mb-3",
  ];

  return (
    <div className="flex justify-center flex-col items-start">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={gridClasses[rowIndex]}>
          {row.map((key) => (
            <Dash key={key}>{key}</Dash>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Render;
