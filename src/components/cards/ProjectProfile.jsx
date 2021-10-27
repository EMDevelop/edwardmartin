import React, { useEffect } from 'react';

export default function ProjectProfile(props) {
  useEffect(() => {
    console.log(props.previewProps);
  }, []);

  return <div>{props.previewProps.name}</div>;
}
