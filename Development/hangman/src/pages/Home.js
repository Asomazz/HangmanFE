// import React from "react";
// import LB from "../assets/LB.svg";
// import hangman from "../assets/hangman.svg";
// import Keyboard from "../components/Keyboard";
// import Render from "../components/Render";

// const Home = () => {
//   return (
//     <div className="bg-[#FFF0E5] border-8 border-white h-[100vh] w-full flex">
//       <div className="w-[70%] h-full ">
//         <div className=" w-full h-[55%] flex">
//           <div className=" flex justify-center items-center w-[45%]">
//             <img src={hangman} />
//           </div>
//           <div className=" w-[55%] flex justify-center items-center">
//             <Render />
//           </div>
//         </div>
//         <div className=" w-full h-[45%]">
//           <div className="h-[70%]">
//             <Keyboard />
//           </div>
//           <div className=" w-full h-[30%] flex justify-between px-9">
//             <button className=" bg-[#FFD300] border-l-4 border-b-4 border-black font-Roboto w-28 h-14 shadow-inner rounded-md text-2xl border">
//               Hints
//             </button>
//             <button className=" bg-[#10162F] border-l-4 border-b-4 border-black font-Roboto w-52 h-14 shadow-inner text-2xl text-white border">
//               Mistakes: {7}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="w-[30%] h-full">
//         <img className="absolute top-24" src={LB} />
//         <div className="absolute bg-black w-[15%] h-[37%] top-52 right-2"></div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import LB from "../assets/Leaderboard.svg";
import hangman from "../assets/hangman.svg";
import Keyboard from "../components/Keyboard";
import Render from "../components/Render";

const Home = () => {
  const [guessedLetters, setGuessedLetters] = useState({});

  return (
    <div className="bg-[#FFF0E5] border-8 border-white h-[100vh] w-full flex">
      <div className="w-[70%] h-full ">
        <div className=" w-full h-[55%] flex">
          <div className=" flex justify-center items-center w-[45%]">
            <img src={hangman} alt="Hangman" />
          </div>
          <div className=" w-[55%] flex justify-center items-center">
            <Render guessedLetters={guessedLetters} />
          </div>
        </div>
        <div className=" w-full h-[45%]">
          <div className="h-[70%]">
            <Keyboard setGuessedLetters={setGuessedLetters} />
          </div>
          <div className=" w-full h-[30%] flex justify-between px-9">
            <button className=" bg-[#FFD300] border-l-4 border-b-4 border-black font-Roboto w-28 h-14 shadow-inner rounded-md text-2xl border">
              Hints
            </button>
            <button className=" bg-[#10162F] border-l-4 border-b-4 border-black font-Roboto w-52 h-14 shadow-inner text-2xl text-white border">
              Mistakes: {7}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-full">
        <img className="absolute top-24" src={LB} alt="LB" />
        <div className="absolute bg-black w-[15%] h-[37%] top-52 right-2"></div>
      </div>
    </div>
  );
};

export default Home;
