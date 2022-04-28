import React, { useContext } from "react";
import styled from "styled-components";
import CharacterContext from "./character-context";
//import api from '../API/api'


const NextStyled = styled.div`
    cursor: pointer;
    background-image: url('/images/arrow.svg');
    background-repeat: no-repeat;
    background-position: left  bottom ;

    @media screen and (max-width: 1024px) {
        user-select: none;
        height: 50px;
        background-position: center;
    }
` 

function Next() {
    const context = useContext(CharacterContext)
    console.log(context);
    /* async function handleClick() {
        //context.setCharacter(await api.getCharacter(context.character.id + 1))
    } */
    return (
        <NextStyled /* onClick={handleClick} *//>  
    )
}

export default Next