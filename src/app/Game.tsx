import { useState } from "react";
import Dice from "./Dice";

function Game() {
  return (
    <div className="flex space-x-4 bg-white p-8">
      <RandomDice />
    </div>
  );
}

function RandomDice() {
  function handleClick() {
    setNumbers([
      randomIntFromInterval(1, 6),
      randomIntFromInterval(1, 6),
      randomIntFromInterval(1, 6),
      randomIntFromInterval(1, 6),
      randomIntFromInterval(1, 6),
    ]);
  }

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);

  return (
    <div>
      <div className="flex space-x-4">
        {numbers.map((number, i) => (
          <Dice onClick={handleClick} key={i} number={number} />
        ))}
      </div>
      <button
        onClick={handleClick}
        className="h-6 w-20 rounded-lg bg-black text-white"
      >
        roll dice
      </button>
    </div>
  );
}

export default Game;
