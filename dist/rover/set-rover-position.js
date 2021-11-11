"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoverPosition = void 0;
const setRoverPosition = (position) => {
    return {
        x: parseInt(position[0]),
        y: parseInt(position[1]),
        cardinal_point: position[2].toUpperCase(),
    };
};
exports.setRoverPosition = setRoverPosition;
