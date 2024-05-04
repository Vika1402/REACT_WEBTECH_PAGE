import React from "react";
import { FaReact } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa6";
const PlanCard = ({ icon, title, price, description }) => {
  const Icon = icon || FaReact; // Use DiAtom icon if no icon is provided
  return (
    <div className="shadow-2xl my-2 h-[500px] bg-slate-100 hover:scale-105 duration-500">
      <div className="flex flex-col text-center items-center my-[100px] gap-4">
        <div className="text-[50px] text-cyan-800">
          <Icon />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h1 className="text-3xl font-bold">{price}</h1>
        <p className="font-bold">{description}</p>
        <hr />
        <p>Lorem ipsum dolor sit.</p>
        <hr />
        <button className="px-[70px] py-3 my-2 bg-cyan-600 rounded-xl hover:bg-cyan-800 text-white transition">
          Start Trial
        </button>
      </div>
    </div>
  );
};

const Plans = () => {
  return (
    <div className="py-[100px] px-3">
      <div className="md:grid grid-cols-3 gap-6 max-w-[1240px] mx-auto">
        <PlanCard
          icon={FaReact}
          title="Web development"
          price="$149"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, deleniti?"
        />
        <PlanCard 
          icon={SiCoinmarketcap} 
          title="Digital Marketing"
          price="$199"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, deleniti?"
        />
        <PlanCard
          icon={FaAppStoreIos}
          title="IOS development"
          price="$234"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, deleniti?"
        />
      </div>
    </div>
  );
};

export default Plans;
