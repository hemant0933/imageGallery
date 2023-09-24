import React from "react";
import ImageView from "./ImageView";

const FreeStockPhotos = ({ randomPhoto }) => {
  return (
    <div className="w-full px-2 py-4 h-auto flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-2xl w-[92%] text-left font-semibold">Free Stock Photos</h1>
      <div className="image-wrapper">
        {randomPhoto &&
          randomPhoto.map((photo, index) => (
            <ImageView key={index} photo={photo} />
          ))}
      </div>
    </div>
  );
};

export default FreeStockPhotos;
