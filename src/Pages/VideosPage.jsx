import { SearchIcon, ThreedotIcon, photoIcon, videoIcon } from './Home';
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchDropdown from "../components/SearchDropdown";
import AnotherNav from "../components/AnotherNav";
// import FreeStockPhotos from "../components/FreeStockPhotos";
import axios from "axios";
import FreeStockVideos from '../components/FreeStockVideos';


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

const VideosPage = () => {
  const [randomVideo,setRandomVideo] = useState();

  const getRandomVideo = async () => {
    try {
      const apiKey = process.env.REACT_APP_PEXEL_API_KEY;
      const res = await axios.get('https://api.pexels.com/videos/popular', {
        headers: {
          Authorization: apiKey
        },
        params: {
          'per_page': 30
        }
      });
      // console.log(res.data.videos)
      setRandomVideo(res.data.videos)
    } catch (err) {
      console.log(`Error fetching data: ${err}`);
    }
  }

  useEffect(() => {
    getRandomVideo();
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
        <FreeStockVideos randomVideo={randomVideo}/>        
    </div>
    </div> 
   
  );
}

export default VideosPage;
