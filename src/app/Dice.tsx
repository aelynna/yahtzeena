export default function Dice(props: { number: number; onClick: () => void }) {
  let pips;
  switch (props.number) {
    case 1: {
      pips = <div className="h-2 w-2 rounded-full bg-white" />;
      break;
    }
    case 2: {
      pips = (
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
          <div className="col-start-3 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="row-start-3 h-2 w-2 rounded-full bg-white" />
        </div>
      );
      break;
    }
    case 3: {
      pips = (
        <div className="grid grid-cols-3 gap-1.5">
          <div className="col-start-3 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-2 row-start-2 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-1 row-start-3 h-2 w-2 rounded-full bg-white" />
        </div>
      );
      break;
    }
    case 4: {
      pips = (
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
          <div className="col-start-1 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-1 row-start-3 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-3 h-2 w-2 rounded-full bg-white" />
        </div>
      );
      break;
    }
    case 5: {
      pips = (
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
          <div className="col-start-1 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-2 row-start-2 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-1 row-start-3 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-3 h-2 w-2 rounded-full bg-white" />
        </div>
      );
      break;
    }
    case 6: {
      pips = (
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
          <div className="col-start-1 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-1 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-1 row-start-2 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-2 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-1 row-start-3 h-2 w-2 rounded-full bg-white" />
          <div className="col-start-3 row-start-3 h-2 w-2 rounded-full bg-white" />
        </div>
      );
      break;
    }
  }
  return (
    <button
      onClick={props.onClick}
      className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white hover:bg-gray-800"
    >
      {pips}
    </button>
  );
}
