import React from 'react';
import TitleSlide from '../helpers/titleSlide';

function Certifications() {
  return (
    <div className="certifications-wrapper">
      <div className="certifications-title">
        <div className="blue-circle" />
        <TitleSlide className="title-slide" title="Full Stack Certified" color="white" />
      </div>
    <div className="certifications-wrapper__left">
      <div className="stack-list">
        <ul>
          <li>HTML5</li>
          <li>CSS/SCSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS Framework</li>
          <li>Python</li>
          <li>SQL</li>
          <li>MongoDB (Atlas)</li>
          <li>Redis</li>
          <li>JQuery</li>
          <li>UML/UX&UI</li>
        </ul>
      </div>
    </div>

    <div className="certifications-wrapper__right">
      <p className="about-certifications">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni alias blanditiis mollitia. Impedit velit quibusdam corporis et cupiditate deleniti officiis minus pariatur debitis enim iste dolore mollitia rem praesentium sed esse vel repellat, ex consequatur, perferendis ducimus! Velit illo rerum voluptas autem facilis quam inventore consequuntur maxime alias pariatur.</p>
        {/* <div className="binary-video-wrapper"> */}
          <video className="binary-video" loop muted autoPlay={true} preload={"auto"} controls = ''>
            <source src={require("../../assets/binary_code_background2.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {/* </div> */}
        <div className="icons-wrapper">
          <img className="icon" src={require("../../assets/stack_icons/html5.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/css.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/javascript.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/reactjs.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/python.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/typescript.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/mongodb.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/mysql.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/git.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/heroku.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/redis.png")} alt="html-5"></img>
          <img className="icon" src={require("../../assets/stack_icons/npm.png")} alt="html-5"></img>
      </div>
    </div>
  </div>
  );
}
export default Certifications;