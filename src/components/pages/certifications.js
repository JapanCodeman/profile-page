import React from 'react';
import { motion } from 'framer-motion';
// import { Bounce } from 'react-reveal';

import TitleSlide from '../helpers/titleSlide';

function Certifications() {

// const containerRef = useRef(null)
// const [isVisible, setIsVisible] = useState(false)

// const observerCallback = (entries) => {
//   const [entry] = entries
//   setIsVisible(entry.isIntersecting)
// }

// useEffect(() => {
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0
//   }

//   const observer = new IntersectionObserver(observerCallback, options)
//   if (containerRef.current) observer.observe(containerRef.current)

//   // return () => {
//   //   if(containerRef.current) observer.unobserve(containerRef.current)
//   // }
// }, [containerRef])
  

  return (
    <div className="certifications-wrapper">
      <div className="certifications-title">
        <div className="blue-circle" />
        <TitleSlide className="title-slide" title="Full Stack Certified" color="white" />
      </div>
    <div className="certifications-wrapper__left">
      <motion.div className="stack-list"
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 2}}
        >
          <motion.ul>
            <motion.li>HTML5</motion.li>
            <motion.li>CSS/SCSS</motion.li>
            <motion.li>JavaScript</motion.li>
            <motion.li>TypeScript</motion.li>
            <motion.li>ReactJS Framework</motion.li>
            <motion.li>Python</motion.li>
            <motion.li>SQL</motion.li>
            <motion.li>MongoDB (Atlas)</motion.li>
            <motion.li>Redis</motion.li>
            <motion.li>JQuery</motion.li>
            <motion.li>UML/UX&UI</motion.li>
          </motion.ul>
      </motion.div>
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