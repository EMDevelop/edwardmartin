import React from 'react';
import ScrollButton from '../ScrollButton';
import Typewriter from '../Typewriter';

export default function MainBanner() {
  return (
    <div className="banner-container">
      <div className="banner-typing">
        <Typewriter displayType="remain" textString="Work In Progress :)" />
      </div>
      <div className="banner-button">
        <ScrollButton />
      </div>
    </div>
  );
}
