import React from "react";

const Key = ({ children, isDisabled, onClick }) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
    className="bg-white border-l-4 border-b-4 hover:bg-slate-200 disabled:opacity-25 disabled:cursor-not-allowed border-black font-Roboto w-14 h-14 shadow-inner rounded-md text-2xl border"
  >
    {children}
  </button>
);

export default Key;
