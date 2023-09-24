import React from "react";
import logosvg from "../Assets/logo.svg";
import ArrowDown from "../Assets/arrowDown.svg";
import Bell from "../Assets/bellIcon.svg";
import menu from "../Assets/menu.svg";
import avatar from "../Assets/images/avatar.jpeg";
import Menudropdown from "./Menudropdown";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const genere = [
  {label:'Discover Photos',url:''},
  {label:'Popular Searches',url:''},
  {label:'Leaderboard',url:''},
  {label:'Challenges',url:''},
  {label:'Pexels Blog',url:''},
]


export default function Navbar() {
  return (
      <nav className="w-full h-[80px] flex justify-between items-center px-[20px] py-4 inter z-0">
        <a
          href="/"
          className="flex justify-between items-center w-[130px] h-[50px] gap-2"
        >
          <img src={logosvg} alt="svg" width="44px" height="44px" />
          <span className="text-3xl font-medium text-white hover:text-gray-400">Pexels</span>
        </a>

        <div className="lg:flex md:flex sm:hidden justify-center items-center gap-6 py-4">
          <span className="flex items-center text-base font-medium
            text-white cursor-pointer hover:bg-gray-400 p-2 transition-all rounded-lg">
            <Menudropdown menucontent={genere} />
          </span>
          <span className="text-base font-medium text-white cursor-pointer 
          hover:bg-gray-400 p-2 transition ease-in-out duration-150 rounded-lg">License</span>
          <span className="text-base font-medium text-white cursor-pointer
            hover:bg-gray-400 p-2 transition ease-in-out duration-150 rounded-lg">
            <img src={Bell} alt="bell" width="18px" height="18px" />
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img src={avatar} alt="avatar" className="rounded-full" width="28" height="28" />
            <img src={ArrowDown} alt="ArrowDown" width="18px" height="18px" />
          </span>
          <button type="button" className="flex justify-center items-center text-base font-medium bg-white border-2 border-gray-200
           text-black w-[96px] h-[50px] px-2 py-3 rounded-lg hover:border-2 hover:border-gray-500 transition ease-in-out duration-150">
            Upload
          </button>
        </div>

        <div className="lg:hidden md:block cursor-pointer hover:bg-gray-400 p-1 transition-all rounded-lg">
          <img src={menu} width={40}height={40} alt="menu"/>
        </div>
      </nav>
  );
}
