import { createInterface } from "readline";
import { Rover, setRoverPosition, navigateRover } from "./utils";

import { InavigateRover, RoverPosition } from "./types";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export const continueConfirmation = () => {
  console.log("\n", "\n");
  console.log("\n", "********____________********", "\n");
  console.table({
    x: {
      Operations: rover_position.x,
    },
    y: {
      Operations: rover_position.y,
    },
    cardinal_point: {
      Operations: rover_position.cardinal_point,
    },
  });

  readline.question("Set position for another rover: ", (answer) => {
    console.log("\n");
    // console.clear();
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
    "<<<<--- accepts three arguments: x with values 0-9, y with values 0-9, and z with values of N,S,E,W:representing compass points --->>>"
  );
  readline.question("Input here: ", async (position: Position) => {
    console.log("QWERQWERQWRQWER:", position);
    const result = position && setRoverPosition(position);
    console.log("setRoverPosition RES:", result);
    navigateRover(result);
  });
};

setRoverLandingPosition();
