import { Rover } from "../rover/rover";
import { navigateRover, setRoverPosition, continueConfirmation } from "../rover";
import { inputChecker, navigationValuesChecker } from "../utils";

// import { setRoverLandingPosition } from "../app";
console.clear();
export interface IRoverPosition {
  x: number | null;
  y: number | null;
  cardinal_point: string | null;
}
const { landing_location } = inputChecker("1 2 N");

describe("INPUT CHECKER", () => {
  it("should return [TRUE] if invalid values are given", () => {
    const { unrecognize_position } = inputChecker("1 1 x");
    expect(unrecognize_position).toBe(true);
  });
  it("should return [FALSE] if valid values are given", () => {
    const { unrecognize_position } = inputChecker("1 1 N");
    expect(unrecognize_position).toBe(false);
  });
});

describe("NAVIGATION VALUES CHECKER", () => {
  it("should return [FALSE] if invalid values are given", () => {
    const result = navigationValuesChecker("W");
    expect(result).toBe(false);
  });
  it("should return [TRUE] if invalid values are given", () => {
    const result = navigationValuesChecker("R");
    expect(result).toBe(true);
  });
});

describe("SET ROVER LANDING POSITION", () => {
  const rover_position = setRoverPosition(landing_location);
  it("should return positions", () => {
    expect(rover_position).toEqual({ x: 1, y: 2, cardinal_point: "N" });
  });
});

describe("ROVER", () => {
  it("should stop at the right location", () => {
    const rover_position = setRoverPosition(landing_location);
    console.log("ROVER POSITION:", rover_position);
    const rover = new Rover(rover_position);
    const positions = "LMLMLMLMM";
    const positionCommands = positions.split("");
    let current_position: IRoverPosition;

    positionCommands.map((command, index, array) => {
      switch (command) {
        case "L":
          const left_pan_res = rover.panLeft();
          navigateRover(left_pan_res!);
          current_position = left_pan_res!;
          console.log("PAN LEFT RES:", left_pan_res);
          break;
        case "R":
          const right_pan_res = rover.panRight();
          navigateRover(right_pan_res!);
          current_position = right_pan_res!;
          break;
        case "M":
          const move_res = rover.move();
          console.log("move_res:", move_res);
          navigateRover(move_res!);
          current_position = move_res!;
          break;
        case "S":
          const res = rover.stop();
          continueConfirmation(res);
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
