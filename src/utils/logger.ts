export interface Params {
  operation?: string;
  data?: any | null;
}

export const logger = (params: Params): void => {
  if (params && params.operation) {
    switch (params.operation) {
      case "continueConfirmation":
        const { data: { x, y, cardinal_point } = {} } = params;
        console.log("\n", "\n");
        console.log("\n", "********____________********", "\n");
        console.table({
          x: {
            Operations: x,
          },
          y: {
            Operations: y,
          },
          cardinal_point: {
            Operations: cardinal_point,
          },
        });
        break;
      case "setRoverLandingPosition":
        console.log("\n", "********________INSTRUCTION____************", "\n");
        console.log("<<<<--- input a rover landing location --->>>");
        console.log(
          "<<<<--- accepts three arguments separated by a space: x with values 0-9, y with values 0-9, and z with values of N,S,E,W:representing compass points --->>>"
        );
        break;
      default:
        break;
    }
  }
};
