interface Iposition {
  x: number;
  y: number;
}

export interface InavigateRover {
  x: number | null;
  y: number | null;
  cardinal_point: string | null;
}

export interface RoverPosition extends InavigateRover {}
