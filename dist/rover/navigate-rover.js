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
const index_1 = require("./index");
const utils_1 = require("../utils");
const readline_1 = require("../utils/readline");
let cache;
let cache2 = {
    Rover1: {},
    Rover2: {},
};
const navigateRover = (rover_position, rover_data) => {
    cache = rover_position;
    const rover_number = rover_data ? "Rover2" : "Rover1";
    cache2 = Object.assign(Object.assign({}, cache2), { [rover_number]: Object.assign({}, rover_position) });
    (0, utils_1.logger)({ operation: "navigateRover2", data: cache2 });
    readline_1.readline.question("input here: ", (position) => __awaiter(void 0, void 0, void 0, function* () {
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
                    (0, exports.navigateRover)(left_pan_res, rover_data);
                    break;
                case "R":
                    const right_pan_res = rover.panRight();
                    (0, exports.navigateRover)(right_pan_res, rover_data);
                    break;
                case "M":
                    const move_res = rover.move();
                    (0, exports.navigateRover)(move_res, rover_data);
                    break;
                case "A":
                    const next = rover.stop();
                    (0, index_1.addSecondRover)(next);
                    break;
                case "S":
                    const res = rover.stop();
                    (0, utils_1.logger)({ operation: "navigateRover2", data: cache2 });
                    (0, index_1.continueConfirmation)(cache2);
                    break;
                default:
                    break;
            }
        }
    }));
};
exports.navigateRover = navigateRover;
