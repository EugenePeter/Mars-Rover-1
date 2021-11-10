"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (params) => {
    var _a;
    const { data = (_a = {}) !== null && _a !== void 0 ? _a : {} } = params;
    if (params && params.operation) {
        switch (params.operation) {
            case "add_second_rover":
                console.log("<<<<--- SET LANDING POSITION FOR ROVER 2: (Y/N)--->>>>");
                console.table({
                    Y: {
                        Operations: "YES",
                    },
                    N: {
                        Operations: "NO",
                    },
                });
                break;
            case "continueConfirmation":
                console.log("\n", "\n");
                console.table({
                    Rover1: {
                        x: data.Rover1.x,
                        y: data.Rover1.y,
                        cardinal_point: data.Rover1.cardinal_point,
                    },
                    Rover2: {
                        x: data.Rover2.x,
                        y: data.Rover2.y,
                        cardinal_point: data.Rover2.cardinal_point,
                    },
                });
                break;
            case "setRoverLandingPosition":
                console.log("\n", "********________INSTRUCTION____************", "\n");
                console.log("<<<<--- input a rover landing location --->>>");
                console.log("<<<<--- accepts three arguments separated by a space: [X] with values 0-5, [Y] with values [0-5], and [Z] with values of [N,S,E,W]:representing compass points --->>>");
                break;
            case "navigateRover":
                console.clear();
                console.log("\n", "\n");
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
            case "navigateRover2":
                const { Rover1 = {}, Rover2 = {} } = data !== null && data !== void 0 ? data : {};
                console.log("\n", "\n");
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
                    A: { Operations: "ADD SECOND ROVER" },
                    S: {
                        Operations: "STOP",
                    },
                });
                console.log("\n");
                console.log("-----------------------------------");
                console.log(`Rover1:${Rover1.x} ${Rover1.y} ${Rover1.cardinal_point}`);
                console.log(`Rover2:${Rover2.x || ""} ${Rover2.y || ""} ${Rover2.cardinal_point || ""}`);
                console.log("-----------------------------------", "\n");
            default:
                break;
        }
    }
};
exports.logger = logger;
