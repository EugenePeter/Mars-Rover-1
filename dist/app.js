"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoverLandingPosition = exports.rover_position = exports.continueConfirmation = void 0;
var readline_1 = require("readline");
var utils_1 = require("./utils");
var readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var continueConfirmation = function (position) {
    (0, utils_1.logger)({ operation: "continueConfirmation", data: position });
    readline.question("Set position for another rover: ", function (answer) {
        console.log("\n");
        (0, exports.setRoverLandingPosition)();
    });
};
exports.continueConfirmation = continueConfirmation;
exports.rover_position = {
    x: null,
    y: null,
    cardinal_point: null,
};
var setRoverLandingPosition = function () {
    console.log("\n", "********________INSTRUCTION____************", "\n");
    console.log("<<<<--- input a rover landing location --->>>");
    console.log("<<<<--- accepts three arguments separated by a space: x with values 0-9, y with values 0-9, and z with values of N,S,E,W:representing compass points --->>>");
    // logger({});
    readline.question("Input here: ", function (position) {
        console.log("QWERQWERQWRQWER:", position);
        var result = position && (0, utils_1.setRoverPosition)(position);
        console.log("setRoverPosition RES:", result);
        (0, utils_1.navigateRover)(result);
    });
};
exports.setRoverLandingPosition = setRoverLandingPosition;
(0, exports.setRoverLandingPosition)();
