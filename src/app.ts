import { inputChecker } from "./utils";
import { setRoverPosition, navigateRover } from "./rover";
import { readline } from "./utils/readline";
import { reduceCommands, removePreCharacters } from "./utils";
import fs from "fs";

const res = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((item: string) => item.replace(/[\r" "]/g, ""));

const plateau = res.filter((command) => command.indexOf("Plateau") >= 0);
const rover1_commands = res.filter((command) => command.indexOf("Rover1") >= 0);
const rover2_commands = res.filter((command) => command.indexOf("Rover2") >= 0);

export const commands = {
  Plateau: removePreCharacters(plateau),
  Rover1: reduceCommands(rover1_commands),
  Rover2: reduceCommands(rover2_commands),
};

export const setRoverLandingPosition = async (data: string | null = null) => {
  const command_to_execute =
    data === null || data == ""
      ? commands["Rover1"].Rover1Landing
      : commands["Rover2"].Rover2Landing;

  console.log("landing position:", command_to_execute);
  console.log("INPUT ROVER LANDING LOCATION: TYPE [Y] to proceed");
  readline.question("Input here: ", async (answer: string) => {
    if (answer.toUpperCase() === "N") {
      setRoverLandingPosition();
    } else {
      console.clear();
      const { landing_location, unrecognize_position } = inputChecker<string>(command_to_execute);
      if (unrecognize_position) {
        setRoverLandingPosition();
      } else {
        const result = landing_location && setRoverPosition(landing_location);
        navigateRover(result, data);
      }
    }
  });
};

setRoverLandingPosition();
