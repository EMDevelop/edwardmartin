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
        <img
          className="preview-image"
          src={props.image}
          alt="veganswap.co.uk preview image"
        />
      </div>
      <div>
        {isOpen && (
          <Modal open={isOpen} onClose={() => onClosingModel()}>
            <ProjectProfile previewProps={props} />
          </Modal>
        )}
      </div>
    </div>
  );
}
