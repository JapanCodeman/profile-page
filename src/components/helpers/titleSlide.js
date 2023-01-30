import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function TitleSlide(props) {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: props.xEnd,
        y: props.yEnd,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: props.xStart,
        y: props.yStart
      })
    }
  }, [animation, inView, props.color, props.xEnd, props.xStart, props.yEnd, props.yStart])

  return (
    <motion.div 
      className="title-slide"
      ref={ref}
      animate={animation}>{props.title}
    </motion.div>
  );
}
export default TitleSlide;