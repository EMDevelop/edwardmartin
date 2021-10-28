import React, { useEffect } from 'react';

export default function ProjectProfile(props) {
  useEffect(() => {
    console.log(props.previewProps);
  }, []);

  return (
    <div className="project-profile-container">
      <div className="close-container">
        <button className="close red"></button>
        <button className="close amber"></button>
        <button className="close green"></button>
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
        />
      </div>
      <div className="profile name">
        <h1>{props.previewProps.name}</h1>
        <p>{props.previewProps.description}</p>
      </div>
      <div className="profile tools">
        <p>Tools: {props.previewProps.tools}</p>
        <p>Language: {props.previewProps.language}</p>
      </div>
      <div className="profile image">
        <img
          className="profile-img"
          src={props.previewProps.image}
          alt="website preview"
        />
      </div>
    </div>
  );
}
