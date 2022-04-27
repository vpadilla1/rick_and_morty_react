import React,{useEffect, useState} from 'react';
import './App.css';
import Character from './components/character';
import CharacterName from './components/character-name';
import CharacterImage from './components/character-image';
import CharacterDescription from './components/character-description'
import CharacterPlaceholder from './components/character-placeholder'
import API from './API/api'


const api = new API()


function App() {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(78))
      //const character = 78
      console.log(character.name);
    }
    getCharacter()
  }, [])
  return (
    <div className="App">
      {/*  <Character/> */}

      <CharacterPlaceholder name={ character.name}/>
      
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src="../public/images/logo@2x.png" width="280" alt="" />
        <div className="social">
          <a href="https://instagram.com/LeonidasEsteban">
            <img src="../public/images/instagram.svg" alt="" />
          </a>
          <a href="https://facebook.com/LeonidasEsteban">
            <img src="../public/images/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/LeonidasEsteban">
            <img src="../public/images/twitter.svg" alt="" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>
        
        <CharacterName name={character.name}/>
      
        <CharacterImage image={character.image} name={character.name}/>
    
        <div className="navigation about">
          <a href="#">About</a>
        </div>

        <CharacterDescription gender={character.gender} status={character.status} species={ character.species}/>

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

        <div class="arrow" id="load-next"></div>
      </div>
    </div>
  )
}

export default App;
