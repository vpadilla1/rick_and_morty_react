import React from "react";
import styled from "styled-components";


const CharacterStyled = styled.div`
 
 .character-label {
  background: #2b0752;
  padding: 0.5em;
  color: white;
  border-radius: 10px;
  text-align: left;
  font-size: 25px;
  font-weight: 400;
  /* display: inline-flex; */
}
`

function CharacterDescription({ gender, status, species }) {

    return (
        <CharacterStyled>
            <div className="character-labels">
                <h4 className="character-label">Género: {gender}</h4>
                <h4 className="character-label">Especie: {species}</h4>
                <h4 className="character-label">Status: {status}</h4>
               
            </div>

        </CharacterStyled>
    )
}

export default CharacterDescription