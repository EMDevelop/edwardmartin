import React, { useState, useEffect, useRef } from 'react';

export default function Typewriter(props) {
  const [text, setText] = useState(['add', 'props']);
  const [typingText, setTypingText] = useState('');

  let textCount = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  const typingRef = useRef();

  useEffect(() => {
    // setText(props.text);
    type();
  }, []);

  function type() {
    // RESET TO FIRST WORD FROM LAST
    if (textCount === props.textArray.length) textCount = 0;

    // CURRENT TEXT TO LOOP THROUGH
    currentText = props.textArray[textCount];
    letter = currentText.slice(0, ++index);

    // UPDATE PAGE
    typingRef.current.textContent = letter;

    // MOVE ONTO NEXT WORD
    if (letter.length === currentText.length) {
      textCount++;
      index = 0;
    }

    // Run Continiously
    setTimeout(type, 400);
  }

  return (
    <div className="typing-container">
      <h1 className="typing" ref={typingRef}></h1>
    </div>
  );
}
