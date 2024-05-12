import React from "react";
import Login from "./Login";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

function Signup() {

   const location=useLocation();
   const navigate=useNavigate();
   const from=location.state?.form?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from,{replace:true});
         
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      
      })
      .catch((err) => {
        if(err.response){
          console.log(err);
          toast.error("Error:" + err.response.data.message);;
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-[2px] shadow-md p-5 rounded-md">
          <div className="model-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").closest()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 border rounded-md"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Passowrd"
                  className="w-80 px-3 border rounded-md"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have Account?
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700  ">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
