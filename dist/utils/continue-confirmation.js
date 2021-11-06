"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.continueConfirmation = void 0;
var readline_1 = require("readline");
var app_1 = require("../app");
var readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var continueConfirmation = function (rover_position) {
    console.log("\n", "\n");
    console.log("\n", "********____________********", "\n");
    console.table({
        x: {
            Operations: rover_position.x,
        },
        y: {
            Operations: rover_position.y,
        },
        cardinal_point: {
            Operations: rover_position.cardinal_point,
        },
    });
    readline.question("Would you like to set position another rover? (Y/N): ", function (answer) {
        // console.log("\n", " ypppppppppppppppp", answer);
        // if (answer && answer.toUpperCase() === "N") {
        //   readline.close();
        // } else {
        //   console.clear();
        //   setRoverLandingPosition();
        // }
        // readline.close();
        // console.clear();
        // console.log("ANSWER:", answer);
        // setRoverLandingPosition();
        switch (answer) {
            case "Y":
                console.clear();
                console.log("ANSWER:", answer);
                (0, app_1.setRoverLandingPosition)();
                break;
            case "N":
                readline.close();
                break;
            default:
                break;
        }
        // if (answer && answer.toUpperCase() === "N") console.log("YEEEEEEEEEEEEEEEEEES");
    });
};
exports.continueConfirmation = continueConfirmation;
//# sourceMappingURL=continue-confirmation.js.map