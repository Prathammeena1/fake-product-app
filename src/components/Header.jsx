import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-tr from-zinc-800 to-zinc-900 shadow-md py-6 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="mx-auto  flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dope</h1>
        <div className="flex items-center">
          <span className="text-lg font-bold">2</span>
          <span className="ml-2">IN BAG</span>
        </div>
      </div>
      <div className="flex w-[90vw] justify-between items-center py-2 mt-4">
        <div className="capitalize text-xl font-bold text-zinc-600">Home <span className="text-zinc-300"><i className="ri-arrow-drop-right-line"></i>sneakers </span></div>
        <div className=" w-[60%]">
        <input type="text" placeholder="Search..." className="bg-transparent w-full focus:outline-none focus:border-none placeholder:text-zinc-600 placeholder:font-bold text-6xl text-zinc-300 font-medium" />
        </div>
      </div>
    </header>
  );
};

export default Header;
