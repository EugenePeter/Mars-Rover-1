"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
class Rover {
    constructor(data) {
        var _a;
        this.data = (_a = (data || {})) !== null && _a !== void 0 ? _a : {};
    }
    panLeft() {
        const direction = this.data.cardinal_point;
        switch (direction) {
            case "N":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "W" });
            case "S":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "E" });
            case "E":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "N" });
            case "W":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "S" });
            default:
                break;
        }
    }
    panRight() {
        const direction = this.data.cardinal_point;
        switch (direction) {
            case "N":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "E" });
            case "S":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "W" });
            case "E":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "S" });
            case "W":
                return Object.assign(Object.assign({}, this.data), { cardinal_point: "N" });
            default:
                break;
        }
    }
    move() {
        const direction = this.data.cardinal_point;
        switch (direction) {
            case "N":
                return Object.assign(Object.assign({}, this.data), { y: this.data.y + 1 });
            case "S":
                return Object.assign(Object.assign({}, this.data), { y: --this.data.y });
            case "E":
                return Object.assign(Object.assign({}, this.data), { x: this.data.x + 1 });
            case "W":
                return Object.assign(Object.assign({}, this.data), { x: this.data.x - 1 });
            default:
                break;
        }
    }
    stop() {
        return Object.assign({}, this.data);
    }
}
exports.Rover = Rover;
