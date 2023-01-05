import React from "react";

const section = ({ category, images }) => {
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="movies-list">
        {images.map((img, index) => {
          return <img key={index} alt="movie" src={img} />;
        })}
      </div>
    </div>
  );
};

export default section;
