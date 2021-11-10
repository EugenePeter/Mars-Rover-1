"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigationValuesChecker = exports.inputChecker = void 0;
const position_dictionary_1 = require("./position-dictionary");
const inputChecker = (input) => {
    const removeSpace = input.replace(/ /g, "").toUpperCase();
    const convertedToArray = [...removeSpace];
    const unrecognize_position = convertedToArray.some((input) => {
        return input !== position_dictionary_1.position_dictionary[input];
    });
    return {
        unrecognize_position: unrecognize_position ? true : false,
        landing_location: convertedToArray,
    };
};
exports.inputChecker = inputChecker;
const navigationValuesChecker = (input) => {
    const removeSpace = input.replace(/ /g, "").toUpperCase();
    const res = position_dictionary_1.navigation_dictionary[removeSpace];
    return res ? true : false;
};
exports.navigationValuesChecker = navigationValuesChecker;
