import { createInterface } from "readline";
// import { updatePosition } from "./update-position";
import { Rover, updatePosition } from "./index";
import { IRoverPosition } from "./types";

import { continueConfirmation } from "../app";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export const navigateRover = (rover_position: IRoverPosition | any) => {
  console.log("\n", "\n");
  console.log("CURRENT ROVER POSITION", rover_position);
  console.log(
    "<<<<--- Input L or R to steer rover left or right, input M to move rover one step forward --->>>>"
  );
  console.table({
    L: {
      Operations: "LEFT",
    },
    R: {
      Operations: "RIGHT",
    },
    M: {
      Operations: "MOVE",
    },
    S: {
      Operations: "STOP",
    },
  });
  readline.question("input here: ", async (position) => {
    const rover = new Rover(rover_position);
    const location = position.toUpperCase();
    switch (location) {
      case "L":
        const left_pan_res = rover.panLeft();
        updatePosition(left_pan_res);
        navigateRover(left_pan_res);
        break;
      case "R":
        const right_pan_res = rover.panRight();
        updatePosition(right_pan_res);
        navigateRover(right_pan_res);
        break;
      case "M":
        const move_res = rover.move();
        console.log("move_res:", move_res);
        updatePosition(move_res);
        navigateRover(move_res);
        break;
      case "S":
        const res = rover.stop();
        continueConfirmation(res);
        break;
      default:
        break;
    }
  });
};
