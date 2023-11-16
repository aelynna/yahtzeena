export interface Dice {
  pip: number;
  locked: boolean;
}

export interface State {
  dices: Dice[];
}

interface ToggleLockAction {
  type: "toggle-lock";
  dice: number;
}

interface RollAction {
  type: "roll";
}

export type Actions = ToggleLockAction | RollAction;

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function gameLogic(state: State, action: Actions): State {
  switch (action.type) {
    case "roll":
      return {
        ...state,
        dices: state.dices.map((dice) => {
          if (dice.locked) {
            return dice;
          } else {
            return {
              ...dice,
              pip: randomIntFromInterval(1, 6),
            };
          }
        }),
      };

    case "toggle-lock":
      action.dice;
      return {
        ...state,
        dices: state.dices.map((dice, index) => {
          if (action.dice === index) {
            return {
              ...dice,
              locked: !dice.locked,
            };
          } else {
            return dice;
          }
        }),
      };
  }
}
