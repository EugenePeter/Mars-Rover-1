import { logger, inputChecker } from "./utils";
import { setRoverPosition, navigateRover } from "./rover";
import { readline } from "./utils/readline";

export const setRoverLandingPosition = async (data: string | null = null) => {
  await logger({ operation: "setRoverLandingPosition" });
  readline.question("Input here: ", async (position: string) => {
    const { landing_location, unrecognize_position } = inputChecker<string>(position);

    if (unrecognize_position) {
      setRoverLandingPosition();
    } else {
      const result = landing_location && setRoverPosition(landing_location);
      navigateRover(result, data);
    }
  });
};

setRoverLandingPosition();
