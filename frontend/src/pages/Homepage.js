import React from "react";
import { TfiSearch } from "react-icons/tfi";
import Navbar from "../components/Navbar";
import axios from "axios";
import { motion, Variants } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

function Homepage() {
  const displayToast = (title) => {
    toast(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const list = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div>
      <Navbar />
      <div className="flex  flex-col items-center pt-[5rem]"></div>
    </div>
  );
}

export default Homepage;
