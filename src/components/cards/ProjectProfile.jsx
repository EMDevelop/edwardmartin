import React, { useEffect } from 'react';

export default function ProjectProfile(props) {
  useEffect(() => {
    console.log(props.previewProps);
  }, []);

  return (
    <div>
      {props.previewProps.name}
      {props.previewProps.image}
      {props.previewProps.description}
      {props.previewProps.github}
      {props.previewProps.language}
      {props.previewProps.website}
      {props.previewProps.tools}
    </div>
  );
}
