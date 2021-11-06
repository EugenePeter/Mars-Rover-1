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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateRover = void 0;
var readline_1 = require("readline");
// import { updatePosition } from "./update-position";
var index_1 = require("./index");
var app_1 = require("../app");
var readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var navigateRover = function (rover_position) {
    console.log("\n", "\n");
    console.log("CURRENT ROVER POSITION", rover_position);
    console.log("<<<<--- Input L or R to steer rover left or right, input M to move rover --->>>>");
    console.table({
        L: {
            Operations: "LEFT",
        },
        R: {
            Operations: "RIGHT",
        },
        M: {
            Operations: "MOVE",
        },
        S: {
            Operations: "STOP",
        },
    });
    readline.question("input here: ", function (position) { return __awaiter(void 0, void 0, void 0, function () {
        var rover, location, left_pan_res, right_pan_res, move_res;
        return __generator(this, function (_a) {
            rover = new index_1.Rover(rover_position);
            location = position.toUpperCase();
            switch (location) {
                case "L":
                    left_pan_res = rover.panLeft();
                    (0, index_1.updatePosition)(left_pan_res);
                    (0, exports.navigateRover)(left_pan_res);
                    break;
                case "R":
                    right_pan_res = rover.panRight();
                    (0, index_1.updatePosition)(right_pan_res);
                    (0, exports.navigateRover)(right_pan_res);
                    break;
                case "M":
                    move_res = rover.move();
                    console.log("move_res:", move_res);
                    (0, index_1.updatePosition)(move_res);
                    (0, exports.navigateRover)(move_res);
                    break;
                case "S":
                    (0, app_1.continueConfirmation)();
                    break;
                default:
                    break;
            }
            return [2 /*return*/];
        });
    }); });
};
exports.navigateRover = navigateRover;
//# sourceMappingURL=navigate-rover.js.map