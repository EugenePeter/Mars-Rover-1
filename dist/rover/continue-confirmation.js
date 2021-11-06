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
exports.invalidInputPrompt = exports.continueConfirmation = void 0;
const readline_1 = require("readline");
const app_1 = require("../app");
const index_1 = require("./index");
const index_2 = require("./index");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const continueConfirmation = (position) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, index_1.logger)({ operation: "continueConfirmation", data: position });
    readline.question("Set position for another rover? (Y/N) ", (answer) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("\n");
        // setRoverLandingPosition();
        if (answer.toUpperCase() === "N") {
            // process.exit();
            // setRoverLandingPosition();
            readline.close();
        }
        else {
            console.clear();
            (0, app_1.setRoverLandingPosition)();
        }
    }));
});
exports.continueConfirmation = continueConfirmation;
const invalidInputPrompt = (cache) => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("INVALID INPUT: ONLY CHARACTERS L, R, M S is allowed");
    readline.question("try again ?: (Y/N) ", (answer) => __awaiter(void 0, void 0, void 0, function* () {
        if (answer.toUpperCase() === "N") {
            // process.exit();
            (0, app_1.setRoverLandingPosition)();
            readline.close();
        }
        else {
            console.clear();
            (0, index_2.navigateRover)(cache);
        }
    }));
});
exports.invalidInputPrompt = invalidInputPrompt;
