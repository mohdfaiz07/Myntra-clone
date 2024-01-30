import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <nav  className="flex justify-between gap-3 px-10 py-3 items-center   ">
      <Link to = '/'>
      <img  src="/images/myntra_logo.webp" alt="" className=" h-10 cursor-pointer" />
      </Link>
      <ul className="flex gap-7 uppercase text-sm font-bold ">
        <li> 
          <NavLink to= '/men' className={ ({isActive})=> `${isActive ? 'text-blue-500' : "text-black"}`  }>
          men
        </NavLink >
        </li>
        <li>
          <NavLink  to= '/women' className={ ({isActive})=> `${isActive ? 'text-blue-500' : "text-black"}` }>
          women
        </NavLink>
        </li>
        <li>
          <NavLink >
            Home&living
          </NavLink>
        </li>
        <li>
          <NavLink>
            Beauty
          </NavLink>
        </li>
        <li>
          <NavLink>
            Studio
          </NavLink>
        </li>
      </ul>
      <div>
        <input type="text" placeholder="Search for Products" className=" bg-gray-200 text-sm px-14 py-2" />
      </div>
      <div className="flex gap-8 text-xs ">
        <div className="flex items-center flex-col">
          <CgProfile  className="text-base"/>
          <h6>Proile</h6>
        </div>

        <div className="flex items-center flex-col">
          <CiHeart className=" text-base " />
          <h6>Proile</h6>
        </div>

        <div className="flex items-center flex-col">
          <IoBagOutline  className="text-base"/>
          <Link to = '/bag'>Bag</Link> 
          
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
