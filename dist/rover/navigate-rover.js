"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateRover = void 0;
const index_1 = require("./index");
const utils_1 = require("../utils");
const readline_1 = require("../utils/readline");
const app_1 = require("../app");
let new_position = {
    Rover1: {
        x: null,
        y: null,
        cardinal_point: "",
    },
    Rover2: {
        x: null,
        y: null,
        cardinal_point: "",
    },
};
const navigateRover = (rover_position, rover_data) => {
    const rover_number = rover_data ? "Rover2" : "Rover1";
    new_position = Object.assign(Object.assign({}, new_position), { [rover_number]: rover_position });
    console.log("<<<<--- Input L or R to steer rover left or right, input M to move rover one step forward --->>>>");
    const command_to_execute = rover_data === null || rover_data == ""
        ? app_1.commands["Rover1"].Rover1Instructions
        : app_1.commands["Rover2"].Rover2Instructions;
    const navigationCommands = command_to_execute.split("");
    const additional_command = rover_data === null || rover_data == "" ? "A" : "S";
    const nav_command = [...navigationCommands, additional_command];
    console.log("navigation commands:", command_to_execute);
    readline_1.readline.question("INPUT NAVIGATION COMMANDS: TYPE [Y] to proceed: ", (answer) => {
        if (answer.toUpperCase() === "N") {
        }
        else {
            // const rover = new Rover(rover_position);
            nav_command.map((command) => {
                switch (command) {
                    case "L":
                        const rover_left = new index_1.Rover(new_position[rover_number]);
                        const left_pan_res = rover_left.panLeft();
                        new_position = Object.assign(Object.assign({}, new_position), { [rover_number]: Object.assign(Object.assign({}, new_position[rover_number]), left_pan_res) });
                        // console.log("left_pan_res:", left_pan_res);
                        // console.log("pan to left _position:", new_position);
                        break;
                    case "R":
                        const rover_right = new index_1.Rover(new_position[rover_number]);
                        const right_pan_res = rover_right.panRight();
                        new_position = Object.assign(Object.assign({}, new_position), { [rover_number]: Object.assign(Object.assign({}, new_position[rover_number]), right_pan_res) });
                        // console.log("right_pan_res:", right_pan_res);
                        // console.log("pan to left _position:", new_position);
                        break;
                    case "M":
                        const rover_move = new index_1.Rover(new_position[rover_number]);
                        const move_res = rover_move.move();
                        new_position = Object.assign(Object.assign({}, new_position), { [rover_number]: Object.assign(Object.assign({}, new_position[rover_number]), move_res) });
                        // console.log("move_res:", move_res);
                        // console.log("move to new_position:", new_position);
                        break;
                    case "A":
                        const rover_stop = new index_1.Rover(new_position[rover_number]);
                        const stop_res = rover_stop.stop();
                        new_position = Object.assign(Object.assign({}, new_position), { [rover_number]: Object.assign(Object.assign({}, new_position[rover_number]), stop_res) });
                        // console.log("stop to new_position:", new_position);
                        (0, utils_1.logger)({ operation: "navigateRover2", data: new_position });
                        (0, index_1.addSecondRover)();
                        break;
                    case "S":
                        (0, utils_1.logger)({ operation: "navigateRover2", data: new_position });
                        break;
                }
            });
        }
    });
};
exports.navigateRover = navigateRover;
