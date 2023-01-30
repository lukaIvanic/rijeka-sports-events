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
const addScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { goal, scorer } = req.body;
        if (scorer !== 0 && scorer !== 1)
            return res.status(400).send({ message: "Scoring club must be 0 or 1" });
        if (!(/^\d+'\s.+\s\(0|1\)$/.test(goal))) {
            return res.status(400).send({ message: "Goal provided in wrong format. Please format the result as MINUTE' NAME (0_OR_1)." });
        }
        const extractedScorer = Number(goal.slice(goal.lastIndexOf("(") + 1, goal.lastIndexOf("(") + 2));
        if (extractedScorer !== 0 && extractedScorer !== 1) {
            return res.status(400).send({ message: "Score and scorer dont add up." });
        }
        const game = yield GameSchema_1.default.findById(req.params.id);
        if (!game)
            return res.status(400).send({ message: "Game not found." });
        //provjeri ako je jedan od tih klubova zapravo req.user
        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({ message: "Only the clubs from game can change the result of the game." });
        }
        let goals1 = Number(game.result.slice(0, game.result.indexOf("-")));
        let goals2 = Number(game.result.slice(game.result.indexOf("-") + 1));
        if (scorer === 1)
            goals2++;
        else
            goals1++;
        game.goals.push(goal);
        const newGoals = game.goals;
        const newResult = `${goals1}-${goals2}`;
        const newGame = yield GameSchema_1.default.findByIdAndUpdate(req.params.id, { result: newResult, goals: newGoals }, { new: true });
        res.status(201).send({ message: 'Game updated.', game: newGame });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = addScore;
//# sourceMappingURL=addScore.js.map