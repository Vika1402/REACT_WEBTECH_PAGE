import React from "react";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="bg-cyan-600 p-[140px] w-full ">
      <div className="max-w-[1240px] mx-auto text-center font-bold">
        <div className="md:text-4xl text-2xl ">Learn with as</div>
        <h2 className="text-white mt-4 text-3xl md:text-6xl">Grow with us.</h2>
        <div className="md:text-[50px] text-2xl mt-4 text-white ">
          Learn
          <ReactTyped
            className="pl-3"
            strings={[
              "Web Development",
              " Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            backSpeed={120}
            loop={true}
          />
        </div>

        <button className="mt-6 py-3 px-3 md:py-4 md:px-8 bg-black text-white rounded-lg">
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Banner;
