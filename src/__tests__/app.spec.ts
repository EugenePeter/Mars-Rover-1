import { Rover } from "../utils/rover";
import { updatePosition, navigateRover, setRoverPosition } from "../utils";
import { continueConfirmation } from "../app";

export interface IRoverPosition {
  x: number | null;
  y: number | null;
  cardinal_point: string | null;
}

describe("rover", () => {
  it("should stop at the right location", () => {
    const rover_position = setRoverPosition("1 2 N");
    console.log("ROVER POSITION:", rover_position);
    const rover = new Rover(rover_position);
    const positions = "LMLMLMLMM";
    const positionCommands = positions.split("");
    let current_position: IRoverPosition;

    positionCommands.map((command, index, array) => {
      switch (command) {
        case "L":
          const left_pan_res = rover.panLeft();
          updatePosition(left_pan_res);
          navigateRover(left_pan_res!);
          current_position = left_pan_res!;
          console.log("PAN LEFT RES:", left_pan_res);
          break;
        case "R":
          const right_pan_res = rover.panRight();
          updatePosition(right_pan_res);
          navigateRover(right_pan_res!);
          current_position = right_pan_res!;
          break;
        case "M":
          const move_res = rover.move();
          console.log("move_res:", move_res);
          updatePosition(move_res);
          navigateRover(move_res!);
          current_position = move_res!;
          break;
        case "S":
          // const res = rover.stop();
          // continueConfirmation(res);
          break;
        default:
          break;
      }
      array.length - 1 === index &&
        expect(
          `${current_position.x} ${current_position.y} ${current_position.cardinal_point}`
        ).toEqual("1 3 N");
    });
  });
});
