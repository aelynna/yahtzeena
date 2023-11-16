import { createContext, useContext } from "react";

export default function Dice(props: {
  number: number;
  onClick: () => void;
  locked: boolean;
}) {
  let pips;
  switch (props.number) {
    case 1: {
      pips = <Pips pip5 />;
      break;
    }
    case 2: {
      pips = <Pips pip3 pip7 />;
      break;
    }
    case 3: {
      pips = <Pips pip3 pip5 pip7 />;
      break;
    }
    case 4: {
      pips = <Pips pip1 pip3 pip7 pip9 />;
      break;
    }
    case 5: {
      pips = <Pips pip1 pip3 pip5 pip7 pip9 />;
      break;
    }
    case 6: {
      pips = <Pips pip1 pip3 pip4 pip6 pip7 pip9 />;
      break;
    }
  }

  const colour = props.locked
    ? "bg-purple-950 hover:bg-purple-900"
    : "bg-purple-900 hover:bg-purple-800";

  return (
    <button
      onClick={props.onClick}
      className={`flex h-12 w-12 items-center justify-center rounded-md text-white ${colour}`}
    >
      <pipContext.Provider value={props.locked}>{pips}</pipContext.Provider>
    </button>
  );
}

function Pips(props: {
  pip1?: boolean;
  pip2?: boolean;
  pip3?: boolean;
  pip4?: boolean;
  pip5?: boolean;
  pip6?: boolean;
  pip7?: boolean;
  pip8?: boolean;
  pip9?: boolean;
}) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1.5">
      {props.pip1 && <Pip className="col-start-1 row-start-1" />}
      {props.pip2 && <Pip className="col-start-2 row-start-1" />}
      {props.pip3 && <Pip className="col-start-3 row-start-1" />}
      {props.pip4 && <Pip className="col-start-1 row-start-2" />}
      {props.pip5 && <Pip className="col-start-2 row-start-2" />}
      {props.pip6 && <Pip className="col-start-3 row-start-2" />}
      {props.pip7 && <Pip className="col-start-1 row-start-3" />}
      {props.pip8 && <Pip className="col-start-2 row-start-3" />}
      {props.pip9 && <Pip className="col-start-3 row-start-3" />}
    </div>
  );
}

function Pip(props: { className: string }) {
  const locked = useContext(pipContext);
  const colour = locked ? "bg-gray-500" : "bg-white";

  return (
    <div className={`h-2 w-2 rounded-full ${colour} ` + props.className} />
  );
}

const pipContext = createContext<boolean>(false);
