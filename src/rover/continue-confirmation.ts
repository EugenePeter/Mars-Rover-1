import { createInterface } from "readline";
import { IRoverPosition } from "./types";
import { setRoverLandingPosition } from "../app";
import { logger } from "./index";
import { navigateRover } from "./index";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
export const continueConfirmation = async (position: IRoverPosition) => {
  await logger({ operation: "continueConfirmation", data: position });
  readline.question("Set position for another rover? (Y/N) ", async (answer) => {
    if (answer.toUpperCase() === "N") {
      readline.close();
    } else {
      console.clear();
      setRoverLandingPosition();
    }
  });
};

export const invalidInputPrompt = async (cache: IRoverPosition) => {
  await console.log("INVALID INPUT: ONLY CHARACTERS L, R, M S is allowed");
  readline.question("try again ?: (Y/N) ", async (answer) => {
    if (answer.toUpperCase() === "N") {
      setRoverLandingPosition();
      readline.close();
    } else {
      console.clear();
      navigateRover(cache);
    }
  });
};
