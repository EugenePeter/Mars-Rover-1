import { IsetRoverPosition } from "./types";

export const setRoverPosition = (position: IsetRoverPosition) => {
  console.log("POSITION:", position);
  //@ts-ignore
  const splitted_rover_position: string[] = position.split(" ");
  console.log("splitted_rover_position:", splitted_rover_position);
  return {
    x: parseInt(splitted_rover_position[0]),
    y: parseInt(splitted_rover_position[1]),
    cardinal_point: splitted_rover_position[2].toUpperCase(),
  };
};
