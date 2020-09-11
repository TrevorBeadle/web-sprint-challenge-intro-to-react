// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.7);
  min-width: 50%;
  margin: 2rem;
  line-height: 2rem;
  ul {
    max-width: 50%;
  }
`;

export default function Character(props) {
  console.log(props);
  return (
    <StyledCharacter>
      <h2>{props.name}</h2>
      <ul>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth Year: {props.birthYear}</li>
        <li>Eye Color: {props.eyeColor}</li>
        <li>Hair Color: {props.hairColor}</li>
      </ul>
    </StyledCharacter>
  );
}
