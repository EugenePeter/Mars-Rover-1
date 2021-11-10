import { logger, inputChecker } from "./utils";
import { setRoverPosition, navigateRover } from "./rover";
import { readline } from "./utils/readline";

import { readFileSync, writeFileSync, readFile } from "fs";
import fs from "fs";
import * as path from "path";

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

fs.readFile(__dirname + "/input.txt", (err, data) => {
  if (err) {
    return console.error("OOOH:", err);
  }
  const read_file = data.toString().split("\n");
  const convertedToArray = [...read_file];
  console.log("COMMANDS: ", read_file);
});

console.log(" iam running");
