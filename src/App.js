import React, { useState } from "react";
import "./App.css";
import Qouts from "./qoutes";
import Website from "./parallax";
import Scroll from "./scroll";
import Dark from "./content/darkMode";
import styled from "styled-components";
import Calculator from "./calculator";

const Container = styled.div`
  max-width: 50$;
  margin: 8rem auto 0;
  // background: #47f7ff;
`;

const MyColor = () => {
  const [color, setColor] = useState("#f6fhf3");
  const randomize = () => {
    const randomColor = "#" + Math.floor(Math.random() * 985149).toString();
    setColor(randomColor);
  };

  return (
    <div className="App">
      <Scroll />
      <h1 style={{ backgroundColor: `${color}` }}>{color}</h1>
      <button onClick={randomize}>randomize</button>
      <button onClick={() => navigator.clipboard.writeText(color)}>copy</button>
      <Qouts />
      <Website />

      <Container>
        <Dark />
      </Container>
      <hr />
      <hr />
      <hr />

    </div>
  );
};

export default MyColor;
