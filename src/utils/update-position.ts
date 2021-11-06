import { rover_position } from "../app";

export const updatePosition = (position: any) => {
  return {
    ...rover_position,
    ...position,
  };
};
