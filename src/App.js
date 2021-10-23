import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Typewriter from './components/Typewriter';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-one">
          <Typewriter textArray={['HTML', 'SCSS', 'Javascript', 'ruby']} />
        </section>
        <section className="section-two">
          <Typewriter textArray={['This', 'is', 'a', 'template']} />
        </section>
        <section className="section-three">
          <h1>third page</h1>
        </section>
        <section className="section-four">
          <h1>owww yeeeeeeeee</h1>
        </section>
      </main>
    </>
  );
}

export default App;
