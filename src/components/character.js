import React ,{useEffect, useState} from "react";
import styled from "styled-components";
import api from '../API/api'




const CharacterStyled = styled.div`

` 

function Character() {
    const [character, setCharacter] = useState({})
    useEffect(() => {
       async function getCharacter() {
           setCharacter(await api.getCharacter(6))
            //const character = 
            //console.log(character.name);
        }
        getCharacter()
    }, []) 
    return (
        <CharacterStyled/>
    )
}

export default Character