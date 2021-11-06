"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
var Rover = /** @class */ (function () {
    function Rover(data) {
        var _a;
        this.data = (_a = (data || {})) !== null && _a !== void 0 ? _a : {};
    }
    Rover.prototype.panLeft = function () {
        var direction = this.data.cardinal_point;
        switch (direction) {
            case "N":
                return __assign(__assign({}, this.data), { cardinal_point: "W" });
            case "S":
                return __assign(__assign({}, this.data), { cardinal_point: "E" });
            case "E":
                return __assign(__assign({}, this.data), { cardinal_point: "N" });
            case "W":
                return __assign(__assign({}, this.data), { cardinal_point: "S" });
            default:
                break;
        }
    };
    Rover.prototype.panRight = function () {
        var direction = this.data.cardinal_point;
        switch (direction) {
            case "N":
                return __assign(__assign({}, this.data), { cardinal_point: "E" });
            case "S":
                return __assign(__assign({}, this.data), { cardinal_point: "W" });
            case "E":
                return __assign(__assign({}, this.data), { cardinal_point: "S" });
            case "W":
                return __assign(__assign({}, this.data), { cardinal_point: "N" });
            default:
                break;
        }
    };
    Rover.prototype.move = function () {
        var direction = this.data.cardinal_point;
        switch (direction) {
            case "N":
                return __assign(__assign({}, this.data), { y: this.data.y + 1 });
            case "S":
                return __assign(__assign({}, this.data), { y: --this.data.y });
            case "E":
                return __assign(__assign({}, this.data), { x: this.data.x + 1 });
            case "W":
                return __assign(__assign({}, this.data), { x: this.data.x - 1 });
            default:
                break;
        }
    };
    Rover.prototype.stop = function () {
        return __assign({}, this.data);
    };
    return Rover;
}());
exports.Rover = Rover;
