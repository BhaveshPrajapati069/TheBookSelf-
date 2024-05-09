import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

 function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
     <>
     <Navbar/>
     
     <div className="flex h-screen items-center justify-center">
        <div className="border-[2px] shadow-md p-5 rounded-md">
          <div className="model-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
          
          
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 border rounded-md" {...register("name", { required: true })}
              />
          <br/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md" {...register("email", { required: true })}
              />
              <br/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="w-80 px-3 border rounded-md" {...register("text", { required: true })}
              />
              <br/>
            {errors.text && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
              </div>
            </form>
          </div>
     </div>

     </div>


     
    



     
     </>



  )
}
export default Contact;