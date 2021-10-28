import React, { useState } from 'react';
import ReactDom from 'react-dom';

export default function Modal({ open, children, onClose }) {
  if (open === false) return null;

  return ReactDom.createPortal(
    <div id="me" className={open ? 'model-behind' : 'model-behind-hidden'}>
      <div className={open ? 'modal' : 'modal-hidden'}>{children}</div>
    </div>,
    document.getElementById('portal')
  );
}
