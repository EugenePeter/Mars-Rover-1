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
exports.setRoverLandingPosition = void 0;
const utils_1 = require("./utils");
const rover_1 = require("./rover");
const readline_1 = require("./utils/readline");
const setRoverLandingPosition = (data = null) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, utils_1.logger)({ operation: "setRoverLandingPosition" });
    readline_1.readline.question("Input here: ", (position) => __awaiter(void 0, void 0, void 0, function* () {
        const { landing_location, unrecognize_position } = (0, utils_1.inputChecker)(position);
        if (unrecognize_position) {
            (0, exports.setRoverLandingPosition)();
        }
        else {
            const result = landing_location && (0, rover_1.setRoverPosition)(landing_location);
            (0, rover_1.navigateRover)(result, data);
        }
    }));
});
exports.setRoverLandingPosition = setRoverLandingPosition;
(0, exports.setRoverLandingPosition)();
