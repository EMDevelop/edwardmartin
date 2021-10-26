import React from 'react';
import ScrollButton from '../ScrollButton';
import Typewriter from '../Typewriter';

export default function MainBanner(props) {
  const onScrollButtonClick = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    props.scrollTo.current.scrollIntoView(); //this works but isn't smooth
    props.scrollTo.current.scrollIntoView({
      // this does nothing
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    props.scrollTo.current.scrollIntoView({
      // this also does nothing
      behavior: 'smooth',
    });
    // console.log(props.scrollTo.current);
  };

  return (
    <div className="banner-container">
      <div className="banner-typing">
        <Typewriter displayType="remain" textString="Work In Progress :)" />
      </div>
      <div className="banner-button">
        <ScrollButton click={() => onScrollButtonClick()} />
      </div>
    </div>
  );
}
