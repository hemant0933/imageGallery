import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchDropdown from "../components/SearchDropdown";
import AnotherNav from "../components/AnotherNav";
import FreeStockPhotos from "../components/FreeStockPhotos";
import axios from "axios";

const menucontent = [
  { label: "Photos", url: "", icon: photoIcon },
  { label: "Videos", url: "", icon: videoIcon },
];

const trendingKeywords = [
  "little models",
  "adventure",
  "bible",
  "muslim",
  "spa",
];

const Home = () => {
    const [randomPhoto,setRandomPhoto] = useState();

    const getRandomPhoto = async () => {

     try{
      const res = await axios.get("https://api.unsplash.com/photos/random?client_id=kUZDHVQeOQENYKbF5HFRHbEX3vpUNXR_d-AZEInYCSU&count=30")
      setRandomPhoto(res.data)
      // console.log(res.data);
     }catch(err){
        console.log(`Error fetching data: ${err}`);
     }
    }
  
    useEffect(() => {
      getRandomPhoto();
    },[])
  


  return (
   
    <div className="w-full relative flex items-center flex-col gap-14 z-10">
    <div className="w-full h-[500px] absolute top-0 inset-x-0 bgBannerImage -z-1"></div>
      <Navbar />
      {/* HERO SECTION */}
      <div className="w-full max-w-[630px] h-[267px] pt-[5px] z-2 flex justify-center items-center flex-col px-4">
        <h1 className="text-white inter font-semibold text-3xl text-justify mb-4">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h1>
        {/* SEARCH CONTAINER */}
        <div className="w-full h-[52px] flex justify-between items-center gap-3 bg-white px-1 py-2 rounded-lg">
          <SearchDropdown menucontent={menucontent} />
          <input
            type="text"
            className="w-full p-2 rounded-lg outline-none text-lg font-semibold inter text-gray-400"
            placeholder="Search for free photos"
          />
          <button className="flex items-center justify-center" type="button">
            <SearchIcon />
          </button>
        </div>
        {/* TRENDING SEARCHES */}
        <div className="w-full flex items-center gap-2 mt-4">
          <span className="text-lg text-gray-300 font-semibold">Trending:</span>
          <span className="flex items-center gap-2">
            {trendingKeywords.map((keyword, index) => (
              <a href="/" key={keyword} className="text-lg text-white font-semibold">
                {keyword}
                {index < trendingKeywords.length - 1 ? ", " : ""}
              </a>
            ))}
            <a href="/">
              <ThreedotIcon />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full pt-16 z-10">
        <AnotherNav/>
        <FreeStockPhotos randomPhoto={randomPhoto}/>        
    </div>
    </div> 
   
  );
};

export default Home;

export function photoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}
export function videoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-black"
    >
      <path
        strokeLinecap="round"
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}
export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10 p-2 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}
export function ThreedotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-gray-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
