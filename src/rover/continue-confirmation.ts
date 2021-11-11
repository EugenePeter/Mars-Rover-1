import { ICache, IRoverPosition } from "./types";
import { setRoverLandingPosition } from "../app";
import { logger } from "./index";
import { navigateRover } from "./index";
import { readline } from "../utils/readline";

export const continueConfirmation = async (position: ICache) => {
  await logger({ operation: "continueConfirmation", data: position });
  readline.question("Do you wish to continue? (Y/N) ", async (answer) => {
    if (answer.toUpperCase() === "N") {
      setRoverLandingPosition();
    } else {
      console.clear();
      setRoverLandingPosition("Rover2");
    }
  });
};

export const addSecondRover = async () => {
  await logger({ operation: "add_second_rover" });
  readline.question("input here: ", async (answer) => {
    if (answer.toUpperCase() === "N") {
      setRoverLandingPosition();
      readline.close();
    } else {
      console.clear();
      setRoverLandingPosition("Rover2");
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
      navigateRover(cache, null);
    }
  });
};
