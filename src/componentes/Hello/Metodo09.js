import React from 'react';

function P1() {
  return <span>Hello</span>;
}

function P2() {
  return <span>World</span>;
}

function P3() {
  return <span>09</span>;
}

function Mod9() {
  return (
    <div><h1>
      <P1/> <P2 /> <P3 />
      </h1>
    </div>
  );
}

export default Mod9;


