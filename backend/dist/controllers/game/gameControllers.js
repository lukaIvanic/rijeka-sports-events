"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGamesFromSport = exports.deleteScore = exports.removeScore = exports.addScore = exports.patchScore = exports.postGame = void 0;
const postGame_1 = __importDefault(require("./postGame"));
exports.postGame = postGame_1.default;
const patchScore_1 = __importDefault(require("./patchScore"));
exports.patchScore = patchScore_1.default;
const addScore_1 = __importDefault(require("./addScore"));
exports.addScore = addScore_1.default;
const removeScore_1 = __importDefault(require("./removeScore"));
exports.removeScore = removeScore_1.default;
const deleteScore_1 = __importDefault(require("./deleteScore"));
exports.deleteScore = deleteScore_1.default;
const getGamesFromSport_1 = __importDefault(require("./getGamesFromSport"));
exports.getGamesFromSport = getGamesFromSport_1.default;
//# sourceMappingURL=gameControllers.js.map