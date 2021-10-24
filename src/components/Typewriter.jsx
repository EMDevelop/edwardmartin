import React, { useState, useEffect, useRef } from 'react';

// How To Use:

// displayType = String: repeat | String: remain
// if remain:
//    textString = String ""
// else
//    textArray = Array [ , , ]

export default function Typewriter(props) {
  const [text, setText] = useState(['add', 'props']);
  const [typingText, setTypingText] = useState('');
  const typingRef = useRef();
  const displayType = props.displayType;
  const textArray = props.textArray;
  const textString = props.textString;

  let textCount = 0;
  let index = 0;
  let currentText = '';
  let letterAccumulator = '';

  useEffect(() => {
    displayType === 'repeat' ? typeRepeat() : typeRemain();
  }, []);

  function typeRepeat() {
    // Array input
    if (textCount === textArray.length) textCount = 0; // RESET TO FIRST WORD FROM LAST
    // CURRENT TEXT TO LOOP THROUGH
    currentText = textArray[textCount];

    letterAccumulator = currentText.slice(0, ++index);
    // UPDATE PAGE
    typingRef.current.textContent = letterAccumulator;
    // MOVE ONTO NEXT WORD
    if (letterAccumulator.length === currentText.length) {
      textCount++;
      index = 0;
    }
    // Run Continiously
    setTimeout(typeRepeat, 400);
  }

  const typeRemain = () => {
    if (index < textString.length) {
      letterAccumulator += textString[index];
      typingRef.current.textContent = letterAccumulator;
      ++index;
      setTimeout(typeRemain, 200);
    }
  };

  return (
    <div className="typing-container">
      <h1 className="typing" ref={typingRef}></h1>
    </div>
  );
}
