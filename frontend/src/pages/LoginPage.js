import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const nav = useNavigate();

  const showToast = (title) => {
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

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data.username + " " + data.password)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const req = await axios.post(
      "http://localhost:8080/login",
      {
        username: data.username,
        password: data.password,
      },
      {
        withCredentials: true,
      }
    );
    if (req) {
      console.log("Successfull");
      nav("/homepage");
    } else {
      console.log("Unsuccessfull");
    }
  };
  return (
    <div className="relative flex justify-center items-center h-screen bg-slate-800 w-screen overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[400px] h-auto rounded-3xl bg-white p-5 ">
          <h1 className="font-bold text-2xl text-center opacity-90 mb-5">
            LOGIN HERE
          </h1>
          <div className="flex flex-col justify-start items-center gap-6">
            <div className="flex flex-col w-[85%] gap-2">
              <label htmlFor="username" className="font-semibold text-lg">
                Username
              </label>
              <input
                type="text"
                className="w-full bg-gray-200 outline-none p-3 rounded-xl"
                id="username"
                placeholder="Enter your Username here"
                {...register("username", { required: true })}
              />
              {errors.password && (
                <span style={{ color: "red" }} className="mt-0">Username is required</span>
              )}
            </div>
            <div className="flex flex-col w-[85%] gap-2">
              <label htmlFor="password" className="font-semibold text-lg">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-200 outline-none p-3 rounded-xl"
                id="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.username && (
                <span style={{ color: "red" }} className="mt-0">password is required</span>
              )}
            </div>
          </div>

          <div className="flex flex-row w-full justify-center items-center mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-2 rounded-3xl bg-slate-900 text-white font-semibold"
            >
              LOGIN
            </button>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
}

export default LoginPage;
