import React from 'react';

function BackGroundLayer() {

  return (
    <div className='bg-layer'>
      <video className="hero-video" loop muted={true} autoPlay={true} preload={"auto"} controls = '' playsInline poster={require("../assets/hd0924_preview_still.jpeg")}>
        <source src={require("../assets/hd0924_preview.mp4")} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default BackGroundLayer;