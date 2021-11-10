import { Rover, continueConfirmation, invalidInputPrompt, addSecondRover } from "./index";
import { IRoverPosition } from "./types";
import { navigationValuesChecker, logger } from "../utils";
import { readline } from "../utils/readline";

let cache: IRoverPosition;

interface ICache {
  Rover1: {};
  Rover2: {};
}
let cache2: ICache = {
  Rover1: {},
  Rover2: {},
};

export const navigateRover = (rover_position: IRoverPosition, rover_data: string | null) => {
  cache = rover_position;
  const rover_number = rover_data ? "Rover2" : "Rover1";
  cache2 = {
    ...cache2,
    [rover_number]: {
      ...rover_position,
    },
  };

  logger({ operation: "navigateRover2", data: cache2 });
  readline.question("input here: ", async (position) => {
    const isInputValid = navigationValuesChecker(position);
    if (!isInputValid) {
      invalidInputPrompt(cache);
    } else {
      const rover = new Rover(rover_position);
      const location = position.toUpperCase();
      switch (location) {
        case "L":
          const left_pan_res = rover.panLeft() as IRoverPosition;
          navigateRover(left_pan_res, rover_data);
          break;
        case "R":
          const right_pan_res = rover.panRight() as IRoverPosition;
          navigateRover(right_pan_res, rover_data);
          break;
        case "M":
          const move_res = rover.move() as IRoverPosition;
          navigateRover(move_res, rover_data);
          break;
        case "A":
          const next = rover.stop();
          addSecondRover(next);
          break;
        case "S":
          const res = rover.stop();
          logger({ operation: "navigateRover2", data: cache2 });
          continueConfirmation(cache2);
          break;
        default:
          break;
      }
    }
  });
};
