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
const removeScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { sideRemoved } = req.body;
        if (sideRemoved !== 0 && sideRemoved !== 1)
            return res.status(400).send({ message: "Side removed club must be 0 or 1" });
        const game = yield GameSchema_1.default.findById(req.params.id);
        if (!game)
            return res.status(400).send({ message: "Game not found." });
        //provjeri ako je jedan od tih klubova zapravo req.user
        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({ message: "Only the clubs from game can change the result of the game." });
        }
        let goals1 = Number(game.result.slice(0, game.result.indexOf("-")));
        let goals2 = Number(game.result.slice(game.result.indexOf("-") + 1));
        if (sideRemoved === 1) {
            if (goals2 > 0)
                goals2--;
            else
                return res.status(201).send({ message: 'Game not updated.', game });
        }
        else {
            if (goals1 > 0)
                goals1--;
            else
                return res.status(201).send({ message: 'Game not updated.', game });
        }
        const goalsArr = [...game.goals];
        goalsArr.sort((a, b) => b.localeCompare(a));
        const goalToRemoveIndex = goalsArr.findIndex(goal => Number(goal.slice(goal.lastIndexOf("(") + 1, goal.lastIndexOf("(") + 2)) === sideRemoved);
        goalsArr.splice(goalToRemoveIndex, 1);
        const newResult = `${goals1}-${goals2}`;
        const newGame = yield GameSchema_1.default.findByIdAndUpdate(req.params.id, { result: newResult, goals: goalsArr }, { new: true });
        res.status(201).send({ message: 'Game updated.', game: newGame });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = removeScore;
//# sourceMappingURL=removeScore.js.map