import React, { useState } from 'react';
import Modal from '../Modal';

export default function ProjectPreview(props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClosingModel = () => {
    console.log('clicked');
    setIsOpen(false);
  };

  return (
    <div className="project-preview-card">
      <div className="preview-card-click" onClick={() => setIsOpen(true)}>
        {props.name}
        <img
          className="preview-image"
          src={props.image}
          alt="veganswap.co.uk preview image"
        />
      </div>
      <div>
        {isOpen && (
          <Modal open={isOpen} onClose={() => onClosingModel()}>
            Okay
          </Modal>
        )}
      </div>
    </div>
  );
}
