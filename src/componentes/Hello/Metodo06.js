import React from 'react';

function World() {
  const message = ['Hello', ' ', 'World', ' 06'];

  return (
    <div>
      {message.map((word, index) => (
        <h1 key={index}>{word}</h1>
      ))}
    </div>
  );
}

export default World;

