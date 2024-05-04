import React from "react";
import laptop from "../assets/3757822.jpg";

import { FaBookReader } from "react-icons/fa";
const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto  my-10 p-2  md:grid grid-cols-3  ">
      <div className=" col-span-1 md:w-[80%] w-[60%] text-center flex">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className="col-span-2 text-gray-700 flex justify-center flex-col items-start gap-3 text-justify">
        <p className="text-xl flex gap-2 font-bold items-center">
          Success-oriented learning! <FaBookReader className="text-xl" />{" "}
        </p>
        <h2 className="text-5xl font-bold flex gap-2 items-center">
          Fueling Skills, Igniting Careers
        </h2>
        <p className="text-xl flex gap-2 font-bold items-center ">
          Master industry-relevant skills with our vernacular online courses.
          Choose your program, get certified, and open doors to lucrative career
          opportunities.
        </p>
        <div className="flex flex-col md:flex-row  w-full gap-4  justify-center mt-2">
          <button className="py-3 px-3 md:py-3 md:px-6 w-fit bg-blue-200 border hover:shadow-md hover:scale-105 transition border-blue-400 rounded-lg">
            Explore Courses{" "}
          </button>
          <button className="py-3 px-3 md:py-3 md:px-6 w-fit border hover:shadow-md hover:scale-105 transition  border-black rounded-lg">
            Book Demo Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
