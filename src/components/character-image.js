import React from "react";
import styled from "styled-components";


const CharacterStyled = styled.div`
 
.character-image {
  max-width: 100%;
  /* width: auto; */
  border-radius: 50%;
}
 
  @media screen and (max-width: 1024px) {
      
  }
` 

function CharacterImage({ image, name  }) {
    
    return (
        <CharacterStyled>
            <img className="character-image" src={image} alt={ name}/>
        </CharacterStyled>
    )
}

export default CharacterImage