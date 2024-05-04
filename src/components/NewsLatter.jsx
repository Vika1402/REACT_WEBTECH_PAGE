import React from "react";

const NewsLatter = () => {
  return (
    <div className="bg-cyan-600 p-9">
      <div className="'max-w-[1240px] md:flex">
        <div className="flex-1  h-[300px] flex flex-col text-center md:px-0  px-[70px] w-fit justify-center">
          <h2 className="text-4xl text-white font-bold">
            Want to learn latest I.T skill ?{" "}
          </h2>
          <p className="text-md text-white  ">
            Sign-up to our newslatter and stay up to date
          </p>
        </div>
        
        <div className="flex-1 flex h-[300px] item-center text-center justify-center md:mx-0 md:mx-[120px] gap-5 flex-col">
        <form action="
        ">  <div className="md:flex gap-3 flex flex-col items-center">
          
          <input
            type="text"
            placeholder="Enter Email "
            className=" py-3 px-2 md:py-3 md:px-2  w-full rounded-lg outline-none"
          />
          <button className="py-3 px-6 bg-black w-fit text-white rounded-lg hover:scale-105">
            Notify Me
          </button>
        </div></form>
        
          <div>
            <p className="text-white item-">
              We care about your protection your data, Read our Privacy policy
            </p>
            <p className="font-bold text-gray-800 hover:text-black ">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
