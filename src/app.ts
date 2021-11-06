import { createInterface } from "readline";
import { logger, inputChecker } from "./utils";
import { setRoverPosition, navigateRover } from "./rover";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

type Position = string;
export const setRoverLandingPosition = async () => {
  await logger({ operation: "setRoverLandingPosition" });
  readline.question("Input here: ", async (position: Position) => {
    const { landing_location, unrecognize_position } = inputChecker(position);

    if (unrecognize_position) {
      setRoverLandingPosition();
    } else {
      const result = landing_location && setRoverPosition(landing_location);
      navigateRover(result);
    }
  });
};

setRoverLandingPosition();
