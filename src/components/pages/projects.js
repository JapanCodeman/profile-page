import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useInView } from 'framer-motion';
import ImageViewer from 'react-simple-image-viewer';

import devFries from "../../assets/thumbnails/devfries1.png";
import ecom from "../../assets/thumbnails/ecom4.png";
import letsgovocab from "../../assets/thumbnails/letsgovocab1.png";
import elscanner from "../../assets/thumbnails/elscanner7.jpg";


function Projects() {

  // text animation variables
  const slideInFromRight = useRef(null)
  const slideInFromLeft = useRef(null)
  const isInView1 = useInView(slideInFromRight)
  const isinView2 = useInView(slideInFromLeft)

  useEffect(() => {
  }, [isInView1, isinView2])

  // const [devOpen, setDevOpen] = useState(false)
  // const [reduxOpen, setReduxOpen] = useState(false)
  // const [letGoOpen, setLetsGoOpen] = useState(false)
  // const [elScanner, setElScannerOpen] = useState(false)

  const devImages = [
    "/images/devfries_screenshots/devfries1.png",
    "/images/devfries_screenshots/devfries2.png",
    "/images/devfries_screenshots/devfries3.png",
    "/images/devfries_screenshots/devfries4.png",
    "/images/devfries_screenshots/devfries5.png",
    "/images/devfries_screenshots/devfries6.png",
  ]

  const ecomImages = [
    "/images/ecom_redux_screenshots/ecom1.png",
    "/images/ecom_redux_screenshots/ecom2.png",
    "/images/ecom_redux_screenshots/ecom3.png",
    "/images/ecom_redux_screenshots/ecom4.png",
    "/images/ecom_redux_screenshots/ecom5.png",
    "/images/ecom_redux_screenshots/ecom6.png",
    "/images/ecom_redux_screenshots/ecom7.png",
    "/images/ecom_redux_screenshots/ecom8.png",
    "/images/ecom_redux_screenshots/ecom9.png"
  ]

  const elscannerImages = [
    "/images/elscanner_screenshots/elscanner1.png",
    "/images/elscanner_screenshots/elscanner2.png",
    "/images/elscanner_screenshots/elscanner3.png",
    "/images/elscanner_screenshots/elscanner4.png",
    "/images/elscanner_screenshots/elscanner5.png",
    "/images/elscanner_screenshots/elscanner6.png",
    "/images/elscanner_screenshots/elscanner7.png",
    "/images/elscanner_screenshots/elscanner8.png",
    "/images/elscanner_screenshots/elscanner9.png"
  ]

  const letsgovocabScreenshots = [
    "/images/letsgovocab_screenshots/letsgovocab1.png",
    "/images/letsgovocab_screenshots/letsgovocab2.png",
    "/images/letsgovocab_screenshots/letsgovocab3.png",
    "/images/letsgovocab_screenshots/letsgovocab4.png",
    "/images/letsgovocab_screenshots/letsgovocab5.png",
    "/images/letsgovocab_screenshots/letsgovocab6.png",
    "/images/letsgovocab_screenshots/letsgovocab7.png",
    "/images/letsgovocab_screenshots/letsgovocab8.png",
    "/images/letsgovocab_screenshots/letsgovocab9.png",
    "/images/letsgovocab_screenshots/letsgovocab10.png",
    "/images/letsgovocab_screenshots/letsgovocab11.png",
    "/images/letsgovocab_screenshots/letsgovocab12.png",
    "/images/letsgovocab_screenshots/letsgovocab13.png",
    "/images/letsgovocab_screenshots/letsgovocab14.png",
    "/images/letsgovocab_screenshots/letsgovocab15.png",
    "/images/letsgovocab_screenshots/letsgovocab16.png"
  ]

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="projects-wrapper">
    <div className="projects-wrapper__left">
      <h2 className="multi-talent">A Multitude of Talents</h2>
    </div>

    <div className="projects-wrapper__right">
      <div className="projects-wrapper__right__blue-circle" />
      <h2 className="projects-header" ref={slideInFromRight} style={{
        transform: isInView1 ? "none" : "translateX(75px)",
        opacity: isInView1 ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>Projects</h2>
      <div className="projects-wrapper-inner">
        <div className="projects-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, rerum iusto eius est cum, exercitationem expedita nesciunt non voluptates nobis ipsam molestias reprehenderit eos magni laboriosam? Fuga doloremque esse temporibus quia. Praesentium hic nam, odit minus fugit fugiat error delectus. Velit eius doloribus repudiandae repellat impedit, est perferendis explicabo dolorum?</div>
        <div className="projects-photo-wrapper">
          <img className="photo-caption-wrapper"
            src={devFries}
            onClick={ () => openImageViewer(devImages.indexOf("/images/devfries_screenshots/devfries1.png")) }
            alt=""
          />

          <img className="photo-caption-wrapper"
            src={ecom}
            onClick={ () => openImageViewer(ecomImages.indexOf("/images/ecom_redux_screenshots/ecom1.png")) }
            alt=""
          />

          <img className="photo-caption-wrapper"
            src={elscanner}
            onClick={ () => openImageViewer(elscannerImages.indexOf("/images/elscanner_screenshots/elscanner1.png")) }
            alt=""
          />

          <img className="photo-caption-wrapper"
            src={letsgovocab}
            onClick={ () => openImageViewer(letsgovocabScreenshots.indexOf("/images/letsgovocab_screenshots/letsgovocab1.png")) }
            alt=""
          />
          
        {isViewerOpen && (
          <ImageViewer
            className="img-viewer"
            src={ devImages }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}

        {isViewerOpen && (
          <ImageViewer
            className="img-viewer"
            src={ ecomImages }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}

        {isViewerOpen && (
          <ImageViewer
            className="img-viewer"
            src={ elscannerImages }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}

        {isViewerOpen && (
          <ImageViewer
            className="img-viewer"
            src={ letsgovocabScreenshots }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}
        </div>
      </div>
    </div> 
  </div>
  );
}
export default Projects;