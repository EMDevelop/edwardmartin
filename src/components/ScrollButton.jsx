import React from 'react';

export default function ScrollButton(props) {
  return (
    <a href="#" className="scrollButton" onClick={props.click}>
      <div id="mouse-scroll">
        <div className="mouse">
          <div className="mouse-in"></div>
        </div>
        <div>
          <span className="down-arrow-1"></span>
          <span className="down-arrow-2"></span>
          <span className="down-arrow-3"></span>
        </div>
      </div>
    </a>
  );
}
