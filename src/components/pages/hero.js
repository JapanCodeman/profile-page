import React from 'react';

function HeroPage() {
  return (
    <div className="hero-wrapper">
      <div className="hero-text-wrapper">
        <div className="name-sign">Ryan Surdick</div>
        <div className="hero-title">
          I want to work with you to build innovative web apps and sites
        </div>
      </div>
      <img className="hero-photo" src={require("../../assets/side_profile.png")} alt="profile pic"/>
    </div>
  );
}
export default HeroPage;