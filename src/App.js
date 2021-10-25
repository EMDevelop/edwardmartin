import React, { useRef } from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Typewriter from './components/Typewriter';
import MainBanner from './components/sections/MainBanner';

function App() {
  const two = useRef('');

  return (
    <>
      <Navbar />
      <main>
        <section className="section-one">
          <MainBanner scrollTo={two} />
        </section>
        <section className="section-two" ref={two}>
          <Typewriter
            displayType="repeat"
            textArray={['HTML', 'SCSS', 'Javascript', 'ruby']}
          />
        </section>
        <section className="section-three">
          <p>Github Projects</p>
        </section>
        <section className="section-four">
          <p>Experience</p>
        </section>
      </main>
    </>
  );
}

export default App;
