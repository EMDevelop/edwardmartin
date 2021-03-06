import React, { useEffect } from 'react';

export default function ProjectProfile(props) {
  useEffect(() => {
    console.log(props.previewProps);
  }, []);

  return (
    <div className="project-profile-container">
      <div className="close-container">
        <button className="close red" onClick={props.onClose}></button>
        <button className="close amber" onClick={props.onClose}></button>
        <button className="close green" onClick={props.onClose}></button>
      </div>
      <div className="address-bar">
        <input
          type="text"
          name="address-bar"
          value={
            props.previewProps.website
              ? props.previewProps.website + '  |  ' + props.previewProps.github
              : props.previewProps.github
          }
          onChange={() => {}}
        />
      </div>
      <div className="profile name">
        <h1>{props.previewProps.name}</h1>
        <p>{props.previewProps.description}</p>
      </div>
      <div className="profile tools">
        <p>
          <b>Tools:</b> {props.previewProps.tools}
        </p>
        <p>
          <b>Language:</b> {props.previewProps.language}
        </p>
      </div>
      <div className="profile image">
        {props.previewProps.image === 'youtube' ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pigj0cxPyOQ?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            className="profile-img"
            src={props.previewProps.image}
            alt="website preview"
          />
        )}
      </div>
    </div>
  );
}
