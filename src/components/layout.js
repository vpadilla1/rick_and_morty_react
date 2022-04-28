import React from "react";
import styled from "styled-components";


const LayoutStyled = styled.div`
 .character-name-area{
    display: flex;
    align-items: center;
    grid-area: character-name;
    padding-inline-start: 1em; 
 }
 .character-image-area{
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .character-description-area{
    grid-area: character-description;
 }
 .grid-next-area{
    grid-area: arrow;
    
 }
 @media screen and (max-width: 1024px) {
    .character-name-area{
    margin-top: 1em;
    justify-content: center;
    }
    
}
`

function Layout({ name, image, description, next }) {

    return (
        <LayoutStyled>
            <div className="grid">
                <span className="asset top">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="line"></span>
                </span>
                <img className="logo" src="../public/images/logo@2x.png" width="280" alt="" />
                <div className="social">
                    <a href="https://instagram.co">
                        <img src="../public/images/instagram.svg" alt="" />
                    </a>
                    <a href="https://facebook.com">
                        <img src="../public/images/facebook.svg" alt="" />
                    </a>
                    <a href="https://twitter.com">
                        <img src="../public/images/twitter.svg" alt="" />
                    </a>
                </div>
                <div className="navigation name">
                    <a href="#">Name</a>
                </div>
                <div className="character-name-area">
                    {name}
                </div>
                <div className="character-image-area">
                    
                {image}
                </div>

                <div className="navigation about">
                    <a href="#">About</a>
                </div>
                <div className="character-description-area">
                    
                {description}
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
                <div className="grid-next-area">
                {next}
                    
                </div>
            
            </div>
        </LayoutStyled>
    )
}

export default Layout