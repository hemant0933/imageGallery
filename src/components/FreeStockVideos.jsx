import React from "react";
import VideoView from "./VideoView";

const FreeStockVideos = ({ randomVideo }) => {
  return (
    <div className="w-full px-2 py-4 h-auto flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-2xl w-[92%] text-left font-semibold">
        Free Stock Photos
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10 items-center m-4">
        {Array.isArray(randomVideo) &&
          randomVideo.map((video, index) => (
            <VideoView key={`${index}+hk`} video={video} />
          ))}
      </div>
    </div>
  );
};

export default FreeStockVideos;
