import React from 'react';

function BackGroundLayer() {
  return (
    <div className='bg-layer'>
      <video className="hero-video" loop muted autoPlay={true} preload={"auto"} controls = ''>
        <source src={require("../assets/hd0924_preview.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="binary-video-wrapper">
        <video className="binary-video" loop muted autoPlay={true} preload={"auto"} controls = ''>
          <source src={require("../assets/binary_code_background2.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
}
export default BackGroundLayer;