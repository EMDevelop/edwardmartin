import React from 'react';
import BannerCard from '../cards/BannerCard';
import ScrollButton from '../ScrollButton';
import Typewriter from '../Typewriter';

export default function MainBanner(props) {
  const onScrollButtonClick = () => {
    props.scrollTo.current.scrollIntoView(); //this works but isn't smooth
  };

  const welcomeMessage =
    'Hi, welcome to my portfolio site. Thanks for visiting!';

  return (
    <div className="banner-container">
      <div className="banner-typing">
        <Typewriter displayType="remain" textString={welcomeMessage} />
      </div>
      <div className="banner-image-container">
        <BannerCard
          url="https://raw.githubusercontent.com/EMDevelop/public_resources/main/images/edwardMartin/projects.png"
          label="My Projects"
          linkTo="#section-two"
          linkContext="mySite"
        />
        <BannerCard
          url="https://raw.githubusercontent.com/EMDevelop/public_resources/main/images/edwardMartin/cv.png"
          label="My CV"
          linkTo="/EdwardMartinCV.pdf"
          linkContext="externalSite"
        />
        <BannerCard
          url="https://raw.githubusercontent.com/EMDevelop/public_resources/023b87f07c8f5710326f7f13c440caf423e2ee11/images/edwardMartin/github.svg"
          label="My Github"
          linkTo="https://github.com/EMDevelop"
          linkContext="externalSite"
        />
      </div>

      <div className="banner-button">
        <ScrollButton click={() => onScrollButtonClick()} />
      </div>
    </div>
  );
}
