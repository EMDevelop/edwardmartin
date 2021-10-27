import React from 'react';

export default function CTAButton(props) {
  return (
    <button
      className={props.buttonClass}
      type="button"
      onClick={() => window.open(props.link, '_blank')}
    >
      {props.text}
    </button>
  );
}
