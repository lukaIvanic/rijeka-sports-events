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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameSchema_1 = __importDefault(require("../../models/GameSchema"));
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const game = yield GameSchema_1.default.findById(id);
        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({ message: "Attempting to delete a game that you dont participate in." });
        }
        const gameToDelete = yield GameSchema_1.default.findByIdAndDelete(id);
        if (!gameToDelete)
            return res.status(404).send({ message: `No game found with ID: ${id}` });
        res.status(200).send({ message: 'Game deleted.', profile: gameToDelete });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = deleteGame;
//# sourceMappingURL=deleteScore.js.map