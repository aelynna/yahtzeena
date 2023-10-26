import RandomDice from "./components/RandomDice";

function Game() {
  return (
    <div className="flex h-full min-h-screen items-center justify-center space-x-4 bg-backround p-8">
      <RandomDice />
    </div>
  );
}

// props: { onRoll: (rolls: number[]) => void }

export default Game;
