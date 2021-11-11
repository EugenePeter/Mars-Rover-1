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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoverLandingPosition = exports.commands = void 0;
const utils_1 = require("./utils");
const rover_1 = require("./rover");
const readline_1 = require("./utils/readline");
const utils_2 = require("./utils");
const fs_1 = __importDefault(require("fs"));
const res = fs_1.default
    .readFileSync(__dirname + "/input.txt", "utf-8")
    .split("\n")
    .map((item) => item.replace(/[\r" "]/g, ""));
const plateau = res.filter((command) => command.indexOf("Plateau") >= 0);
const rover1_commands = res.filter((command) => command.indexOf("Rover1") >= 0);
const rover2_commands = res.filter((command) => command.indexOf("Rover2") >= 0);
exports.commands = {
    Plateau: (0, utils_2.removePreCharacters)(plateau),
    Rover1: (0, utils_2.reduceCommands)(rover1_commands),
    Rover2: (0, utils_2.reduceCommands)(rover2_commands),
};
const setRoverLandingPosition = (data = null) => __awaiter(void 0, void 0, void 0, function* () {
    const command_to_execute = data === null || data == ""
        ? exports.commands["Rover1"].Rover1Landing
        : exports.commands["Rover2"].Rover2Landing;
    console.log("landing position:", command_to_execute);
    console.log("INPUT ROVER LANDING LOCATION: TYPE [Y] to proceed");
    readline_1.readline.question("Input here: ", (answer) => __awaiter(void 0, void 0, void 0, function* () {
        if (answer.toUpperCase() === "N") {
            (0, exports.setRoverLandingPosition)();
        }
        else {
            console.clear();
            const { landing_location, unrecognize_position } = (0, utils_1.inputChecker)(command_to_execute);
            if (unrecognize_position) {
                (0, exports.setRoverLandingPosition)();
            }
            else {
                const result = landing_location && (0, rover_1.setRoverPosition)(landing_location);
                (0, rover_1.navigateRover)(result, data);
            }
        }
    }));
});
exports.setRoverLandingPosition = setRoverLandingPosition;
(0, exports.setRoverLandingPosition)();
