import { useState } from "react";
import Dice from "./Dice";

function Game() {
  return (
    <div className="flex space-x-4 bg-white p-8">
      <RandomDice />
      <RandomDice />
      <RandomDice />
      <RandomDice />
      <RandomDice />
    </div>
  );
}

function RandomDice() {
  function handleClick() {
    setNumber(randomIntFromInterval(1, 6));
  }

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [number, setNumber] = useState(0);

  return (
    <>
      <Dice onClick={handleClick} number={number} />
    </>
  );
}

export default Game;
