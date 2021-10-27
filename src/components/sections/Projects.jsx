import React, { useState } from 'react';
import Modal from '../Modal';

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button>open</button>

      <Modal open={isOpen}>Fancy Shmansy</Modal>
    </div>
  );
}
