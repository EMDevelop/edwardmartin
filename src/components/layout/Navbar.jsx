import React from 'react';
import CTAButton from '../Button';

export default function Navbar() {
  return (
    <>
      <header>
        <h1> Edward Martin </h1>
        <CTAButton
          text="CV"
          buttonClass="cv-button"
          link="https://docs.google.com/presentation/d/1CG2ZNTadtv0T_jKB6r0mOOuvifLduVxQ2i4idS8MjOE/export/pdf"
        />
        <CTAButton
          text="github"
          buttonClass="git-button"
          link="https://github.com/EMDevelop"
        />
      </header>
    </>
  );
}
