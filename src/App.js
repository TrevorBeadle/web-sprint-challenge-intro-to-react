import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacterList(res.data.results);
        setName(res.data.results.name);
        setGender(res.data.results.gender);
        setHeight(res.data.results.height);
        setBirthYear(res.data.results.birth_year);
        setEyeColor(res.data.results.eye_color);
        setHairColor(res.data.results.hair_color);
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
