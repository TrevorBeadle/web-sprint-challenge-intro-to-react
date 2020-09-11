// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(93, 93, 90, 0.8);
  min-width: 40%;
  margin: 2rem;
  line-height: 2rem;
  color: white;
  ul {
    font-size: 1rem;
    max-width: 60%;
    text-transform: capitalize;
  }
  h2 {
  }
`;

export default function Character(props) {
  console.log(props);
  return (
    <StyledCharacter>
      <h2>{props.name}</h2>
      <ul>
        <li>Gender: {props.gender}</li>
        <li>Mass: {props.mass}</li>
        <li>Height: {props.height}</li>
        <li>Birth Year: {props.birthYear}</li>
        <li>Eye Color: {props.eyeColor}</li>
        <li>Hair Color: {props.hairColor}</li>
      </ul>
    </StyledCharacter>
  );
}
