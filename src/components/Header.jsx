import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto  flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dope</h1>
        <div className="flex items-center">
          <span className="text-lg font-bold">2</span>
          <span className="ml-2">IN BAG</span>
        </div>
      </div>
      <div className="flex w-[90vw] justify-between items-center py-2 mt-4">
        <div className="capitalize text-xl font-bold text-zinc-400">Home <span className="text-zinc-600"><i class="ri-arrow-drop-right-line"></i>sneakers </span></div>
        <div className=" w-[60%]">
        <input type="text" placeholder="Search..." className="bg-transparent w-full focus:outline-none focus:border-none placeholder:text-zinc-300 placeholder:font-bold text-6xl text-zinc-400 font-medium" />
        </div>
      </div>
    </header>
  );
};

export default Header;
