import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center h-[4.5rem] w-full bg-black fixed ">
      <ul className = "flex flex-row gap-10 text-white font-bold list-disc:none list-none font-mono">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>ADDRESS</li> 
      </ul>
    </div>
  );
}

export default Navbar;
