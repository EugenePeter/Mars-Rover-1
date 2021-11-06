import { IsetRoverPosition, IRoverPosition } from "./types";

export const setRoverPosition = (position: string[]): IRoverPosition => {
  return {
    x: parseInt(position[0]),
    y: parseInt(position[1]),
    cardinal_point: position[2].toUpperCase(),
  };
};
