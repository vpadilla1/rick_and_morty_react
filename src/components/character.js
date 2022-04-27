import React ,{useEffect, useState} from "react";
import styled from "styled-components";
import API from '../API/api'


const api = new API()

const CharacterStyled = styled.div`

` 

function Character() {
    const [character, setCharacter] = useState({})
    useEffect(() => {
       async function getCharacter() {
           setCharacter(await api.getCharacter(2))
            //const character = 
            //console.log(character.name);
        }
        getCharacter()
    }, [])
    return (
        <CharacterStyled>
        </CharacterStyled>
    )
}

export default Character