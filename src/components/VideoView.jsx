import React, { useRef, useState } from "react";

const VideoView = ({ video }) => {
  const [videoState, setVideoState] = useState("pause");
  const [loading, setLoading] = useState(false);
  const videoRef = useRef();

  const handlePlayPause = () => {
    if (videoState === "pause") {
      setLoading(true);
      setVideoState("play");
      let playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
      }
    } else if (videoState === "play") {
      setVideoState("pause");
      videoRef.current.currentTime = 0
    }
  };

  return (
    <div className="relative cursor-pointer border border-gray-900 flex justify-center items-center">
      <video
        className="rounded-lg"
        width={420}
        height={500}
        // ref={videoRef}
    
        controls
        muted
        // onClick={handlePlayPause}
      >
        <source src={video?.videos_files?.link[0] || ""} type="video/mp4" />
      </video>
      {loading && <div className="text-center absolute">Loading...</div>}
      <div className="info absolute z-20 bg-transparent px-2 text-gray-900 text-base font-semibold bottom-0 left-10 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h6>{video?.videos?.user?.name || "untitled"}</h6>
      </div>
    </div>
  );
};

export default VideoView;
