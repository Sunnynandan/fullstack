import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, Variants } from "framer-motion";

function Navbar() {
  const [NavBg, setNavBg] = useState("#fadcd9");

  const NavColor = () => {
    if (window.scrollY >= 500) {
      setNavBg("#f79489");
    } else {
      setNavBg("#fadcd9");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavColor);

    return () => window.removeEventListener("scroll", NavColor);
  }, []);

  return (
    <div
      className={`flex flex-row justify-center items-center h-[4.5rem] w-full fixed text-white`}
      style={{ backgroundColor: NavBg }}
    >
      <div className="w-full flex flex-row justify-between items-center mx-20">
        <div>
          <h1 className="font-mono text-3xl font-semibold">TrendNest</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-6 font-bold list-disc:none list-none font-mono ">
            <li className="flex flex-row items-center hover:cursor-pointer gap-1">
              Home <MdKeyboardArrowDown />
            </li>
            <li className="flex flex-row items-center hover:cursor-pointer gap-1">
              Shop <MdKeyboardArrowDown />
            </li>
            <li className="flex flex-row items-center hover:cursor-pointer gap-1">
              About Us <MdKeyboardArrowDown />
            </li>
            <li className="flex flex-row items-center hover:cursor-pointer gap-1">
              Contact Us <MdKeyboardArrowDown />
            </li>
            <li className="flex flex-row  items-center hover:cursor-pointer gap-1">
              Blog <MdKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
