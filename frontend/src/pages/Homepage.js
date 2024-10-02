import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Homepage() {
  const displayToast = (title) =>{

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
  }

  return (
    <div>
      <Navbar />
      
      <div className="flex w-screen h-screen flex-col items-center pt-[5rem] bg-[#D8DEFF]">
        <h1 className="text-center font-bold text-4xl">Welcome to Home Page</h1>
        <button
        className="px-5 py-2 rounded bg-blue-700 text-white"
          onClick={() => {
            axios
              .get("http://localhost:8080/protected/data",
                {
                    withCredentials: true // This option ensures cookies are sent
                  }
              )
              .then(() => {
                displayToast("Logged In")
                console.log("Successfully Data Send")
              })
              .catch(() => {
                console.log("Failed");
              });
              
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Homepage;
