import { useState } from "react";

import * as C from "./styles";
import { MainButton } from "../components/Button/styles";

import Tabs from "../components/Tabs";

import rgbHex from "rgb-hex";

type Inputs = {
  hexInput: string;
  rgbInput: string;
};

const Home = () => {
  const [bgColor, setBgColor] = useState("FAB70A");
  const [tabActive, setTabActive] = useState();

  const handlerHex = (hex: string) => {
    setBgColor(hex);
  };

  const handleRGBInput = (rgb: string) => {
    setBgColor(rgbHex(rgb));
    console.log(rgbHex(rgb));
  };

  const randomColor = () => {
    const hexNumber = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ];

    //gera uma posição aleatória dos valores do array
    function getRandomIntInclusive(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let randomInclusive = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomInclusive;
    }

    //concatena em uma variável os elementos aleatórios do array
    let generateRandomHexColor =
      hexNumber[getRandomIntInclusive(0, 15)] +
      hexNumber[getRandomIntInclusive(0, 15)] +
      hexNumber[getRandomIntInclusive(0, 15)] +
      hexNumber[getRandomIntInclusive(0, 15)] +
      hexNumber[getRandomIntInclusive(0, 15)] +
      hexNumber[getRandomIntInclusive(0, 15)];

    setBgColor(generateRandomHexColor);
    console.log(bgColor);
  };

  const activeTabHandler = (tab: string) => {
    setTabActive(tab);
  };

  return (
    <C.MainContainer mainBackgroundColor={bgColor} inputActive={tabActive}>
      <Tabs
        getActiveTab={activeTabHandler}
        hexColor={handlerHex}
        rgbColor={handleRGBInput}
        currentColor={bgColor}
      />

      <div>
        <MainButton buttonColor={bgColor} onClick={randomColor}>
          Mostre-me uma cor diferente!
        </MainButton>
      </div>
    </C.MainContainer>
  );
};

export default Home;
