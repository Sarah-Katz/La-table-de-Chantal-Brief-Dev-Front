import React from 'react';

function Dot({ images, currentImage, onClick, className }) {
  // map through the images array passed as a prop
  // for each image, return a div with the class "dot" and an additional class "dot-active" if the currentImage index matches the index of the image in the array
  // also add an onClick event that calls the onClick function passed as a prop and passes the image's id as an argument
  // add a key prop for each div for better performance
  return (
    <div className={className}>
      {images.map((image, i) => (
        <div className={`dot ${currentImage === i ? "dot-active" : ""}`} onClick={() => onClick(i + 1)} key={image.id} />
      ))}
    </div>
  );
}

export default Dot;
