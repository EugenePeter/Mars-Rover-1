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
exports.invalidInputPrompt = exports.addSecondRover = exports.continueConfirmation = void 0;
const app_1 = require("../app");
const index_1 = require("./index");
const index_2 = require("./index");
const readline_1 = require("../utils/readline");
const continueConfirmation = (position) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, index_1.logger)({ operation: "continueConfirmation", data: position });
    readline_1.readline.question("Do you wish to continue? (Y/N) ", (answer) => __awaiter(void 0, void 0, void 0, function* () {
        if (answer.toUpperCase() === "N") {
            (0, app_1.setRoverLandingPosition)();
            // readline.close();
        }
        else {
            console.clear();
            (0, app_1.setRoverLandingPosition)("Rover2");
        }
    }));
});
exports.continueConfirmation = continueConfirmation;
const addSecondRover = (position) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, index_1.logger)({ operation: "add_second_rover" });
    readline_1.readline.question("input here", (answer) => __awaiter(void 0, void 0, void 0, function* () {
        if (answer.toUpperCase() === "N") {
            (0, app_1.setRoverLandingPosition)();
            readline_1.readline.close();
        }
        else {
            console.clear();
            (0, app_1.setRoverLandingPosition)("Rover2");
        }
    }));
});
exports.addSecondRover = addSecondRover;
const invalidInputPrompt = (cache) => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("INVALID INPUT: ONLY CHARACTERS L, R, M S is allowed");
    readline_1.readline.question("try again ?: (Y/N) ", (answer) => __awaiter(void 0, void 0, void 0, function* () {
        if (answer.toUpperCase() === "N") {
            (0, app_1.setRoverLandingPosition)();
            readline_1.readline.close();
        }
        else {
            console.clear();
            (0, index_2.navigateRover)(cache, null);
        }
    }));
});
exports.invalidInputPrompt = invalidInputPrompt;
