import React from 'react';

function BackGroundLayer() {

  return (
    <div className='bg-layer'>
      {/* <img className="hero-video" src={require('../assets/ezgif.com-gif-maker.gif')} alt="alt text"></img> */}
      {/* <div
          dangerouslySetInnerHTML={{
            __html: `<video class="hero-video" 
                      autoplay 
                      loop 
                      muted
                      controls = ' '
                      playsinline>
                      
                      <source src=${require('../assets/hd0924_preview.mp4')} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>`,
          }}
        /> */}
      <video className="hero-video" loop muted={true} autoPlay={true} preload={"auto"} controls = '' playsInline poster={require("../assets/hd0924_preview_still.png")}>
        <source src={require("../assets/hd0924_preview.mp4")} type="video/mp4"/>
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