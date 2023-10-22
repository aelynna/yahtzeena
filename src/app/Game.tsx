import { useState } from "react";

function Game() {
  return (
    <div className="flex space-x-4 bg-white p-8">
      <RandomDice />
      <RandomDice />
    </div>
  );
}

function Dice(props: { number: number; onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white hover:bg-gray-800"
    >
      <div>{props.number}</div>
    </button>
  );
}

function RandomDice() {
  function handleClick() {
    setNumber(randomIntFromInterval(1, 6));
  }
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [number, setNumber] = useState(1);

  return (
    <>
      <Dice onClick={handleClick} number={number} />
    </>
  );
}

export default Game;
