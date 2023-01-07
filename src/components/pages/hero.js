import React from 'react';

function HeroPage() {
  return (
    <div className="hero-wrapper">
      <div className="hero-text-wrapper">
        <div className="name-sign">Ryan Surdick</div>
        <div className="hero-title">
          I want to work with you to build innovative web apps and sites
        </div>;
        <p className="hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam veniam earum iusto sapiente blanditiis quaerat perspiciatis. Quod, repellendus, assumenda suscipit rem consequuntur enim, placeat labore facilis corrupti quis itaque id vitae. Eaque eligeni aliquid modi similique assumenda nam commodi cumque voluptatibus necessitatibus esse eius cum fuga laboriosam, voluptate harum.</p>
      </div>
      <img className="hero-photo" src={require("../../assets/side_profile.png")} alt="profile pic"/>
    </div>
  );
}
export default HeroPage;