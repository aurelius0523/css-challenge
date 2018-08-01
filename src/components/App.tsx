import * as React from 'react';

const App: React.StatelessComponent = () => {
  return (
    <div className="app">
      <div className="content">
        <Challenge01 />
      </div>
    </div>
  );
};

const Challenge01: React.StatelessComponent = () => {
  return (
    <div className="challenge-wrapper">
      <p className="title">Challenge 01</p>
      <div className="challenge01">
        <div className="center">
          <div className="number-wrapper">
            <div className="one-one" />
            <div className="one-two" />
            <div className="zero-one" />
            <div className="zero-two" />
          </div>
          <span className="word-mid">Days</span>
          <span className="word-small">CSS Challenge</span>
        </div>
      </div>
    </div>
  );
};

const Challenge02: React.StatelessComponent = () => {
  return (
    <div className="challenge-wrapper">
      <p className="title">Challenge 02</p>
      <div className="challenge02">
        <span className="word-big">100</span>
        <span className="word-mid">Days</span>
        <span className="word-small">CSS Challenge</span>
      </div>
    </div>
  );
};

export default App;
