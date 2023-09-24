import React, { useState } from "react";

const ImageView = ({ photo }) => {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={`image-view ${
        isClicked ? "expanded" : ""
      } relative cursor-pointer flex justify-center items-center`}
    >
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        className="rounded-lg"
      />
      {isClicked && (
        <div className="absolute z-20 bg-transparent px-2 text-gray-900 text-base font-semibold top-20 left-10">
          <h6>{photo.alt_description || "untitled"}</h6>
          <p>By: {photo.user.name || "Anonymous"}</p>
        </div>
      )}
    </div>
  );
};

export default ImageView;
