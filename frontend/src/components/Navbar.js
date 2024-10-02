import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [NavBg, setNavBg] = useState("#D8DEFF");

  useEffect(() => {}, []);
  return (
    <div
      className={`flex flex-row justify-center items-center h-[4.5rem] w-full bg-[${NavBg}] fixed`}
    >
      <div className="w-full flex flex-row justify-between items-center mx-20">
        {/* <div className="flex flex-row items-center gap-x-4">
          <input type="text" placeholder="Enter the Item to Search"
          id="searchItem"
          className="p-2 rounded-md w-[300px]"
          />
          <FaSearch/>
        </div> */}
        <div>
          <h1 className="font-mono text-3xl font-semibold">TrendNest</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-6 font-bold list-disc:none list-none font-mono">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
