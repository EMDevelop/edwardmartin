import React from 'react';

export default function BannerCard(props) {
  return props.linkContext === 'mySite' ? (
    <div className="banner-card-container">
      <a href={props.linkTo} className="banner-card">
        <img src={props.url} alt={props.label} className="banner-image" />
        <h1>{props.label}</h1>
      </a>
    </div>
  ) : (
    <div className="banner-card-container">
      <a href={props.linkTo} target="_blank" className="banner-card">
        <img src={props.url} alt={props.label} className="banner-image" />
        <h1>{props.label}</h1>
      </a>
    </div>
  );
}
