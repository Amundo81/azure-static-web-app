import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/HelloWorld`)).json();
      setData(text);
    })();
  });

  return <H1>{data}</H1>;
}

export default App;