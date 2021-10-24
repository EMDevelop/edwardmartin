import React from 'react';
import ScrollButton from '../ScrollButton';
import Typewriter from '../Typewriter';

export default function MainBanner() {
  return (
    <>
      <Typewriter displayType="remain" textString="Work In Progress :)" />
      <ScrollButton />
    </>
  );
}
