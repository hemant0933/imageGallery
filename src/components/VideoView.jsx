import React from "react";
import ReactPlayer from "react-player";

const VideoView = ({...video }) => {
  return (
    <div className="relative cursor-pointer border border-gray-900 flex justify-center items-center">
      <ReactPlayer
        width={420}
        height={500}
        controls={true}
        light={true}
        muted={true}
        url={video?.videos_files?.link[0] || ""}
      />
      <div className="info absolute z-20 bg-transparent px-2 text-gray-900 text-base font-semibold bottom-0 left-10 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h6>{video?.videos?.user?.name || "untitled"}</h6>
      </div>
    </div>
  );
};

export default VideoView;
