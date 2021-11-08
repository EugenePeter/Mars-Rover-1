import { Rover, continueConfirmation, invalidInputPrompt } from "./index";
import { IRoverPosition } from "./types";
import { navigationValuesChecker, logger } from "../utils";
import { readline } from "../utils/readline";

let cache: IRoverPosition;

export const navigateRover = (rover_position: IRoverPosition | any) => {
  cache = rover_position;

  logger({ operation: "navigateRover", data: rover_position });
  readline.question("input here: ", async (position) => {
    const isInputValid = navigationValuesChecker(position);
    if (!isInputValid) {
      invalidInputPrompt(cache);
    } else {
      const rover = new Rover(rover_position);
      const location = position.toUpperCase();
      switch (location) {
        case "L":
          const left_pan_res = rover.panLeft();
          navigateRover(left_pan_res);
          break;
        case "R":
          const right_pan_res = rover.panRight();
          navigateRover(right_pan_res);
          break;
        case "M":
          const move_res = rover.move();
          console.log("move_res:", move_res);
          navigateRover(move_res);
          break;
        case "S":
          const res = rover.stop();
          continueConfirmation(res);
          break;
        default:
          break;
      }
    }
  });
};
