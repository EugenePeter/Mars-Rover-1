"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateRover = void 0;
const readline_1 = require("readline");
const index_1 = require("./index");
const utils_1 = require("../utils");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
let cache;
const navigateRover = (rover_position) => {
    console.log("\n", "\n");
    console.log("CURRENT ROVER POSITION", rover_position);
    console.log("<<<<--- Input L or R to steer rover left or right, input M to move rover one step forward --->>>>");
    cache = rover_position;
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
    readline.question("input here: ", (position) => __awaiter(void 0, void 0, void 0, function* () {
        const isInputValid = (0, utils_1.navigationValuesChecker)(position);
        if (!isInputValid) {
            (0, index_1.invalidInputPrompt)(cache);
        }
        else {
            const rover = new index_1.Rover(rover_position);
            const location = position.toUpperCase();
            switch (location) {
                case "L":
                    const left_pan_res = rover.panLeft();
                    (0, exports.navigateRover)(left_pan_res);
                    break;
                case "R":
                    const right_pan_res = rover.panRight();
                    (0, exports.navigateRover)(right_pan_res);
                    break;
                case "M":
                    const move_res = rover.move();
                    console.log("move_res:", move_res);
                    (0, exports.navigateRover)(move_res);
                    break;
                case "S":
                    const res = rover.stop();
                    (0, index_1.continueConfirmation)(res);
                    break;
                default:
                    break;
            }
        }
    }));
};
exports.navigateRover = navigateRover;
