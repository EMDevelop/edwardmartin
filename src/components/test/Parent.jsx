import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [karim, setKarim] = useState(false);

  return (
    <>
      <Child person={karim} updatePerson={setKarim} />
    </>
  );
}
