import React, { useCallback, useState } from 'react';

import ImageViewer from 'react-simple-image-viewer';

function ProjectFeature(props) {

  const thumbnail = props.thumbnail
  const viewerImages = props.viewerImages

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }

  return (
    <div className="project-feature">
      <div className="project-image-and-caption-wrapper">
        <img src={thumbnail} alt="" onClick={() => openImageViewer(0)}/>
        <div className="project-caption">{props.caption}</div>
      </div>

      {isViewerOpen && (
        <ImageViewer
          className="img-viewer"
          src={ viewerImages }
            currentIndex={ currentImage }
            disableScroll={ true }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}
    </div>
  );
}
export default ProjectFeature;