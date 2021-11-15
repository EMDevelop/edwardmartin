import React, { useState } from 'react';
import Modal from '../Modal';
import ProjectProfile from './ProjectProfile';

export default function ProjectPreview(props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClosingModel = () => {
    console.log('clicked');
    setIsOpen(false);
  };

  return (
    <div className="project-preview-card">
      <div className="preview-card-click" onClick={() => setIsOpen(true)}>
        <h4>{props.name}</h4>
        {props.image === 'youtube' ? (
          <iframe
            width="560"
            className="preview-image"
            height="315"
            src="https://www.youtube.com/embed/pigj0cxPyOQ?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            className="preview-image"
            src={props.image}
            alt="veganswap.co.uk preview image"
          />
        )}
      </div>
      <div>
        {isOpen && (
          <Modal open={isOpen}>
            <ProjectProfile
              previewProps={props}
              onClose={() => onClosingModel()}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}
