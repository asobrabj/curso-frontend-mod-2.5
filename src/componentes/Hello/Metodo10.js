import React from 'react';

function HelloWorld() {
  function getMessage() {
    return 'Hello World 10';
  }

  return <div><h1>{getMessage()}</h1></div>;
}

export default HelloWorld;

