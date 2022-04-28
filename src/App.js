import React,{useEffect, useState} from 'react';
import './App.css';
import CharacterName from './components/character-name';
import CharacterImage from './components/character-image';
import CharacterDescription from './components/character-description'
import CharacterPlaceholder from './components/character-placeholder'
import CharacterContext from './components/character-context'
import Layout from './components/layout'
import Next from './components/next'
import api from './API/api'




function App() {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    async function getCharacter() {
     setCharacter(await api.getCharacter(9))
    }
    getCharacter()
  }, [])
  return (
    <>
      <CharacterContext.Provider value={CharacterContext}/>
      <CharacterPlaceholder name={character.name} />
      <Layout
        next={<Next/>}
        name={<CharacterName name={character.name} />}
        image={<CharacterImage image={character.image} name={character.name} />}
        description={<CharacterDescription gender={character.gender} status={character.status} species={character.species} />}
      />
    </>
  )
}

export default App;
