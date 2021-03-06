import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/HelloWorld`)).json();
      setData(text);
    })();
  });

  return <h1>{data}</h1>;
}

export default App;