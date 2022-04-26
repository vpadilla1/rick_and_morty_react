import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="placeholder-container">
        <h1 id="character-name-placeholder" className="character-name-placeholder"></h1>
      </div>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src="./static/images/logo@2x.png" width="280" alt="" />
        <div className="social">
          <a href="https://instagram.com/LeonidasEsteban">
            <img src="./static/images/instagram.svg" alt="" />
          </a>
          <a href="https://facebook.com/LeonidasEsteban">
            <img src="./static/images/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/LeonidasEsteban">
            <img src="./static/images/twitter.svg" alt="" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>
        <div id="character-name-container" className="character-name-container">

        </div>

        <div id="character-image-container" className="character-image-container">
        </div>
        <div className="navigation about">
          <a href="#">About</a>
        </div>


        <div id="character-description-container" className="character-description-container">

        </div>
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>
      </div>
    </div>
  )
}

export default App;
