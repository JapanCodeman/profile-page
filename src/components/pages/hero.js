import React from 'react';

function HeroPage() {
  return (
    <div className="hero-wrapper">
      <div className="hero-text-wrapper">
        <div className="name-sign">Ryan Surdick</div>
        <div className="hero-title">
          I want to work with you to build innovative web apps and sites
        </div>
        <p className="hero-text">Creativity. Ambition. A drive to see the best in people and projects. These are the qualities I want to bring towards any enterprise I'm involved with. I'm full stack certified in a variety of technologies and have a great deal of experience, international and domestic, to help forge the best teams and projects possible.</p>
      </div>
      <img className="hero-photo" src={require("../../assets/side_profile.png")} alt="profile pic"/>
    </div>
  );
}
export default HeroPage;