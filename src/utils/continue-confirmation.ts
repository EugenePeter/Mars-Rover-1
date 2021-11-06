import { createInterface } from "readline";
import { IRoverPosition } from "./types";
import { setRoverLandingPosition } from "../app";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
export const continueConfirmation = (rover_position: IRoverPosition) => {
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

  readline.question("Would you like to set position another rover? (Y/N): ", (answer) => {
    // console.log("\n", " ypppppppppppppppp", answer);
    // if (answer && answer.toUpperCase() === "N") {
    //   readline.close();
    // } else {
    //   console.clear();
    //   setRoverLandingPosition();
    // }
    // readline.close();
    // console.clear();
    // console.log("ANSWER:", answer);
    // setRoverLandingPosition();

    switch (answer) {
      case "Y":
        console.clear();
        console.log("ANSWER:", answer);
        setRoverLandingPosition();
        break;
      case "N":
        readline.close();
        break;
      default:
        break;
    }
    // if (answer && answer.toUpperCase() === "N") console.log("YEEEEEEEEEEEEEEEEEES");
  });
};
