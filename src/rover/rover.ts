interface IRover {
  x: number | null;
  y: number | null;
  cardinal_point: string;
  rover?: string;
}

export class Rover<T extends IRover> {
  data: T;
  constructor(data: T) {
    this.data = (data || {}) ?? {};
  }
  panLeft() {
    const direction = this.data.cardinal_point;
    switch (direction) {
      case "N":
        return {
          ...this.data,
          cardinal_point: "W",
        };
      case "S":
        return {
          ...this.data,
          cardinal_point: "E",
        };
      case "E":
        return {
          ...this.data,
          cardinal_point: "N",
        };
      case "W":
        return {
          ...this.data,
          cardinal_point: "S",
        };
      default:
        break;
    }
  }

  panRight() {
    const direction = this.data.cardinal_point;
    switch (direction) {
      case "N":
        return {
          ...this.data,
          cardinal_point: "E",
        };
      case "S":
        return {
          ...this.data,
          cardinal_point: "W",
        };
      case "E":
        return {
          ...this.data,
          cardinal_point: "S",
        };
      case "W":
        return {
          ...this.data,
          cardinal_point: "N",
        };
      default:
        break;
    }
  }
  move() {
    const direction = this.data.cardinal_point;

    switch (direction) {
      case "N":
        return {
          ...this.data,
          y: this.data.y! + 1,
        };
      case "S":
        return {
          ...this.data,
          y: --this.data.y!,
        };
      case "E":
        return {
          ...this.data,
          x: this.data.x! + 1,
        };
      case "W":
        return {
          ...this.data!,
          x: this.data.x! - 1,
        };
      default:
        break;
    }
  }
  stop() {
    return {
      ...this.data,
    };
  }
}
