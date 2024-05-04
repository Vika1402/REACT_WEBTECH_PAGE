import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
const Header = () => {
  const [togle, setTogle] = useState(false);
  return (
    <div className=" bg-cyan-600 p-4 ">
      <div className="max-w-[1600px] py-[20px] mx-auto flex justify-between gap-2 items-center">
        <div className="text-3xl items-center">WebTech</div>
        {togle ? (
          <IoClose
            onClick={() => setTogle(!togle)}
            className="text-white text-3xl md:hidden block"
          />
        ) : (
          <IoMenu
            onClick={() => setTogle(!togle)}
            className="text-white text-3xl md:hidden block"
          />
        )}

        <div className="menubar hidden md:flex gap-10  text-white text-xl ">
          <a className="hover:underline" href="/">
            Home
          </a>
          <a className="hover:underline transition " href="/">
            {" "}
            Company
          </a>
          <a className="hover:underline  transition" href="/">
            Resouses
          </a>
          <a className="hover:underline transition" href="/">
            {" "}
            About
          </a>
          <a className="hover:underline transition" href="/">
            {" "}
            Contact
          </a>
        </div>
        {/* responsive menu */}
        <div
          className={`duration-300 md:hidden text-white flex flex-col fixed bg-black left-0 top-[107px] gap-5 w-full p-2 h-screen 
        ${togle ? "left-[0]" : "left-[-100%]"}
      `}
        >
          <a className="p-3" href="/">
            Home
          </a>
          <a className="p-3" href="/">
            Company
          </a>
          <a className="p-3" href="/">
            Resouses
          </a>
          <a className="p-3" href="/">
            About
          </a>
          <a className="p-3" href="/">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
