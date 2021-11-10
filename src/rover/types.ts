export type IsetRoverPosition = string | number;
export interface IRoverPosition {
  x: number;
  y: number;
  cardinal_point: string;
}

export interface Test {
  positions: { x: number; y: number; cardinal_point: string };
  rover?: string | null;
}

export interface ICache {
  Rover1: {};
  Rover2: {};
}
