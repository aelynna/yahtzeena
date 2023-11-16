import { useReducer } from "react";
import { gameLogic } from "./game-logic";
import Dice from "./components/Dice";
import Button from "./components/Button";

function Game() {
  const [state, dispatch] = useReducer(gameLogic, {
    dices: [
      { pip: 1, locked: false },
      { pip: 1, locked: false },
      { pip: 1, locked: false },
      { pip: 1, locked: false },
      { pip: 1, locked: false },
    ],
  });

  const allLocked = state.dices.every((dice) => dice.locked);

  function rollDice() {
    dispatch({ type: "roll" });
  }

  function toggleLock(dice: number) {
    dispatch({ type: "toggle-lock", dice: dice });
  }

  return (
    <div className="flex h-full min-h-screen items-center justify-center space-x-4 bg-backround p-8">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          {state.dices.map((dice, i) => (
            <Dice
              onClick={() => toggleLock(i)}
              key={i}
              number={dice.pip}
              locked={dice.locked}
            />
          ))}
        </div>
        <Button onClick={rollDice} disabled={allLocked}>
          ROLL DICE
        </Button>
      </div>
    </div>
  );
}

export default Game;
