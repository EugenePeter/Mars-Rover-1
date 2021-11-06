import { createInterface } from "readline";
import { Rover, setRoverPosition, navigateRover, logger } from "./utils";

import { InavigateRover, RoverPosition } from "./types";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export const continueConfirmation = (position: RoverPosition) => {
  logger({ operation: "continueConfirmation", data: position });
  readline.question("Set position for another rover: ", (answer) => {
    console.log("\n");
    setRoverLandingPosition();
  });
};

export let rover_position: RoverPosition = {
  x: null,
  y: null,
  cardinal_point: null,
};

type Position = string | number;
export const setRoverLandingPosition = () => {
  console.log("\n", "********________INSTRUCTION____************", "\n");
  console.log("<<<<--- input a rover landing location --->>>");
  console.log(
    "<<<<--- accepts three arguments separated by a space: x with values 0-9, y with values 0-9, and z with values of N,S,E,W:representing compass points --->>>"
  );
  // logger({});
  readline.question("Input here: ", (position: Position) => {
    console.log("QWERQWERQWRQWER:", position);
    const result = position && setRoverPosition(position);
    console.log("setRoverPosition RES:", result);
    navigateRover(result);
  });
};

setRoverLandingPosition();
