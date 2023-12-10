import React from "react";

const GalleryItem = ({ imageURL, title, description }) => {
  return (
    <div className="showcase-child">
      <img src={imageURL}></img>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
