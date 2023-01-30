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
const patchScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { result, goals } = req.body;
        if (!goals) {
            const newGame = yield GameSchema_1.default.findByIdAndUpdate(req.params.id, { result: "0-0", goals: [] }, { new: true });
            return res.status(201).send({ message: 'Game updated.', game: newGame });
        }
        if (!result || !goals.length)
            return res.status(400).send({ message: "Results and goals need to be defined." });
        if (!(/^\d+-\d+$/.test(result))) {
            return res.status(400).send({ message: "Result provided in wrong format. Please format the result as NUMBER-NUMBER." });
        }
        let newGoals = [];
        if (Array.isArray(goals)) {
            for (const goal of goals) {
                if (!(/^\d+'\s.+\s\(0|1\)$/.test(goal))) {
                    return res.status(400).send({ message: "Goal provided in wrong format. Please format the result as MINUTE' NAME." });
                }
            }
            newGoals = [...goals];
        }
        else {
            if (!(/^\d+'\s.+\s\(0|1\)$/.test(goals))) {
                return res.status(400).send({ message: "Goal provided in wrong format. Please format the result as MINUTE' NAME (0_OR_1)." });
            }
            newGoals = [goals];
        }
        const game = yield GameSchema_1.default.findById(req.params.id);
        if (!game)
            return res.status(400).send({ message: "Game not found." });
        //provjeri ako je jedan od tih klubova zapravo req.user
        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({ message: "Only the clubs from game can change the result of the game." });
        }
        const goals1 = Number(result.slice(0, result.indexOf("-")));
        const goals2 = Number(result.slice(result.indexOf("-") + 1));
        if ((goals1 + goals2 !== goals.length && Array.isArray(goals)) || (!Array.isArray(goals) && goals1 + goals2 !== 1)) {
            return res.status(400).send({ message: "Goals not inserted correctly." });
        }
        const newGame = yield GameSchema_1.default.findByIdAndUpdate(req.params.id, { result, goals: newGoals }, { new: true });
        res.status(201).send({ message: 'Game updated.', game: newGame });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = patchScore;
//# sourceMappingURL=patchScore.js.map