// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyleContainer = styled.div`
border: 2px solid white;
display:flex;
justify-content: center;
flex-direction: column;
max-width: 70%;
margin: auto;
color: white;
`

const Character = (props) => {
    const{homeworld, gender, height, mass, name} = props;
    return (
        <StyleContainer>
            <p>Name: {name}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </StyleContainer>
    )  
}


export default Character;