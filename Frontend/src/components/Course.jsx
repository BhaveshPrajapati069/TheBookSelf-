import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {

  const [book,setBook]=useState([])
  useEffect(()=>{
   const getBook=async()=>{
    try{
    const res= await axios.get("http://localhost:3000/book")
    console.log(res.data);
    setBook(res.data)
    }catch(error){
       console.log(error)
    }
   }
   getBook();
  })

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4">
            Here ! All Books you want :)
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            officia aliquid quasi voluptate molestias nulla similique
            consequuntur error fugiat deleniti odio praesentium dolores ipsum
            quae eveniet, vel quod atque recusandae.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
            Back
          </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-3">
           {
            book.map((item) =>(
                <Cards item={item} key={item.id} />
            ))
           }
            
        </div>
      </div>
    </>
  );
}

export default Course;
