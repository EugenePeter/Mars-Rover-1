"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoverPosition = void 0;
var setRoverPosition = function (position) {
    console.log("POSITION:", position);
    //@ts-ignore
    var splitted_rover_position = position.split(" ");
    console.log("splitted_rover_position:", splitted_rover_position);
    return {
        x: parseInt(splitted_rover_position[0]),
        y: parseInt(splitted_rover_position[1]),
        cardinal_point: splitted_rover_position[2].toUpperCase(),
    };
};
exports.setRoverPosition = setRoverPosition;
