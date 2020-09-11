import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacterList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Characters</h1>
      </header>
      {characterList.map((item) => {
        return (
          <Character
            key={item.name}
            name={item.name}
            gender={item.gender}
            height={item.height}
            mass={item.mass}
            birthYear={item.birth_year}
            eyeColor={item.eye_color}
            hairColor={item.hair_color}
          />
        );
      })}
    </div>
  );
};

export default App;
