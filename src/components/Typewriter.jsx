import React, { useState, useEffect, useRef } from 'react';

export default function Typewriter(props) {
  const [text, setText] = useState(['HTML', 'CSS', 'Javascript', 'ruby']);
  const [typingText, setTypingText] = useState('');

  let textCount = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  const typingRef = useRef();

  useEffect(() => {
    (function type() {
      // reset count if at last word
      if (textCount === text.length) {
        textCount = 0;
      }

      // loop text
      currentText = text[textCount];
      letter = currentText.slice(0, ++index);

      // update the page
      typingRef.current.textContent = letter;

      // reset
      if (letter.length === currentText.length) {
        textCount++;
        index = 0;
      }

      console.log(`currentText: ${currentText}`);
      console.log(`letter: ${letter}`);
      console.log(`textCount: ${textCount}`);
      console.log(`index: ${index}`);
      console.log(typingRef);

      setTimeout(type, 400);
    })();
  }, []);

  // Calling function immediately

  return (
    <div className="typing-container">
      <h1 className="typing" ref={typingRef}></h1>
    </div>
  );
}
