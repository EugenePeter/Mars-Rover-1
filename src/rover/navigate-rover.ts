import { Rover, addSecondRover } from "./index";
import { logger } from "../utils";
import { readline } from "../utils/readline";

import { commands } from "../app";

export interface IRoverKeys {
  x: number | null;
  y: number | null;
  cardinal_point: string;
}

export interface IRovers {
  Rover1: IRoverKeys;
  Rover2: IRoverKeys;
}

let new_position: IRovers = {
  Rover1: {
    x: null,
    y: null,
    cardinal_point: "",
  },
  Rover2: {
    x: null,
    y: null,
    cardinal_point: "",
  },
};

export const navigateRover = (rover_position: IRoverKeys, rover_data: string | null) => {
  const rover_number = rover_data ? "Rover2" : "Rover1";
  new_position = {
    ...new_position,
    [rover_number]: rover_position,
  };
  console.log(
    "<<<<--- Input L or R to steer rover left or right, input M to move rover one step forward --->>>>"
  );
  const command_to_execute =
    rover_data === null || rover_data == ""
      ? commands["Rover1"].Rover1Instructions
      : commands["Rover2"].Rover2Instructions;
  const navigationCommands = command_to_execute.split("");
  const additional_command = rover_data === null || rover_data == "" ? "A" : "S";
  const nav_command = [...navigationCommands, additional_command];
  console.log("navigation commands:", command_to_execute);

  readline.question("INPUT NAVIGATION COMMANDS: TYPE [Y] to proceed: ", (answer: string) => {
    if (answer.toUpperCase() === "N") {
    } else {
      // const rover = new Rover(rover_position);

      nav_command.map((command: any) => {
        switch (command) {
          case "L":
            const rover_left = new Rover(new_position[rover_number]);
            const left_pan_res = rover_left.panLeft();
            new_position = {
              ...new_position,
              [rover_number]: {
                ...new_position[rover_number],
                ...left_pan_res,
              },
            };
            // console.log("left_pan_res:", left_pan_res);
            // console.log("pan to left _position:", new_position);
            break;
          case "R":
            const rover_right = new Rover(new_position[rover_number]);
            const right_pan_res = rover_right.panRight();
            new_position = {
              ...new_position,
              [rover_number]: {
                ...new_position[rover_number],
                ...right_pan_res,
              },
            };
            // console.log("right_pan_res:", right_pan_res);
            // console.log("pan to left _position:", new_position);
            break;
          case "M":
            const rover_move = new Rover(new_position[rover_number]);
            const move_res = rover_move.move();
            new_position = {
              ...new_position,
              [rover_number]: {
                ...new_position[rover_number],
                ...move_res,
              },
            };
            // console.log("move_res:", move_res);
            // console.log("move to new_position:", new_position);
            break;
          case "A":
            const rover_stop = new Rover(new_position[rover_number]);
            const stop_res = rover_stop.stop();
            new_position = {
              ...new_position,
              [rover_number]: {
                ...new_position[rover_number],
                ...stop_res,
              },
            };
            // console.log("stop to new_position:", new_position);
            logger({ operation: "navigateRover2", data: new_position });
            addSecondRover();

            break;
          case "S":
            logger({ operation: "navigateRover2", data: new_position });
            break;
        }
      });
    }
  });
};
