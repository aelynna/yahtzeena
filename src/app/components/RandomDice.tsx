import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

export default function RandomDice() {
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
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        {numbers.map((number, i) => (
          <Dice onClick={handleClick} key={i} number={number} />
        ))}
      </div>
      <Button onClick={handleClick}>ROLL DICE</Button>
    </div>
  );
}
