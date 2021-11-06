"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger = function (params) {
    console.log("\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "PARAMS:", params);
    if (params && params.operation) {
        switch (params.operation) {
            case "continueConfirmation":
                var _a = params.data, _b = _a === void 0 ? {} : _a, x = _b.x, y = _b.y, cardinal_point = _b.cardinal_point;
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
                console.log("<<<<--- accepts three arguments separated by a space: x with values 0-9, y with values 0-9, and z with values of N,S,E,W:representing compass points --->>>");
                break;
            default:
                break;
        }
    }
};
exports.logger = logger;
