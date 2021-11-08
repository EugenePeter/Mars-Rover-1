"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (params) => {
    var _a;
    const { data = (_a = {}) !== null && _a !== void 0 ? _a : {} } = params;
    if (params && params.operation) {
        switch (params.operation) {
            case "continueConfirmation":
                const { x = "", y = "", cardinal_point = "" } = data;
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
                console.log("<<<<--- accepts three arguments separated by a space: [X] with values 0-5, [Y] with values [0-5], and [Z] with values of [N,S,E,W]:representing compass points --->>>");
                break;
            case "navigateRover":
                console.log("\n", "\n");
                console.log("CURRENT ROVER POSITION", data.rover_position);
                console.log("<<<<--- Input L or R to steer rover left or right, input M to move rover one step forward --->>>>");
                console.table({
                    L: {
                        Operations: "LEFT",
                    },
                    R: {
                        Operations: "RIGHT",
                    },
                    M: {
                        Operations: "MOVE",
                    },
                    S: {
                        Operations: "STOP",
                    },
                });
            default:
                break;
        }
    }
};
exports.logger = logger;
