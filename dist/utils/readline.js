"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readline = void 0;
const readline_1 = require("readline");
exports.readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
