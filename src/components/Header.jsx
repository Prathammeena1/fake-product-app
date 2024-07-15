import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const { search } = useLocation();
  const [category, setcategory] = useState("");

  useEffect(() => {
    setcategory("");
    if (search.trim() != "") {
      setcategory(decodeURIComponent(search.split("=")[1]));
    }
  }, [search]);

  const [inpSearch, setinpSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/?search=${inpSearch}`);
  };


  const openNav = ()=>{ 
      gsap.to('.nav',{
        top:'20px'
    })
  }





  return (
    <header className="bg-gradient-to-tr from-zinc-800 to-zinc-900 shadow-md py-6 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="mx-auto  flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dope</h1>
        <div onClick={openNav} className="menu flex items-center md:hidden text-xl">
          <i className="ri-menu-3-line"></i>
        </div>
      </div>
      <div className="flex w-[90vw] justify-between items-center py-2 mt-4">
        <div className="capitalize md:text-xl text-sm font-bold text-zinc-600">
          {category.trim() == "" ? (
            <Link className="text-zinc-300" to="/">
              Home
            </Link>
          ) : (
            <Link to="/">Home</Link>
          )}{" "}
          {category.trim() != "" && (
            <span className="text-zinc-300">
              <i className="ri-arrow-drop-right-line"></i>
              {category}{" "}
            </span>
          )}
        </div>
        <div className=" w-[60%]">
          <form onSubmit={submitHandler}>
            <input
              value={inpSearch}
              onChange={(e) => setinpSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              className="bg-transparent md:w-full focus:outline-none focus:border-none placeholder:text-zinc-600 placeholder:font-bold md:text-6xl text-zinc-300 font-medium"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
