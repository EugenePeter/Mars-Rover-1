"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceCommands = exports.removePostCharacters = exports.removePreCharacters = void 0;
const removePreCharacters = (item) => item.map((item) => item.substring(item.indexOf(":") + 1))[0];
exports.removePreCharacters = removePreCharacters;
const removePostCharacters = (item) => item.map((item) => item.split(":")[0]);
exports.removePostCharacters = removePostCharacters;
const reduceCommands = (commands) => {
    return commands.reduce((prev, curr) => {
        let [key, value] = curr.split(":");
        prev[key] = value;
        return prev;
    }, {});
};
exports.reduceCommands = reduceCommands;
