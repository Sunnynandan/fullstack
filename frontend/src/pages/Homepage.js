import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center pt-[5rem]">
        <h1 className="text-center font-bold text-4xl">Welcome to Home Page</h1>
        <button
        className="px-5 py-2 rounded bg-blue-700 text-white"
          onClick={() => {
            axios
              .get("http://localhost:8080/protected",
                {
                    withCredentials: true // This option ensures cookies are sent
                  }
              )
              .then(() => {
                console.log("Successfully Data Send");
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
