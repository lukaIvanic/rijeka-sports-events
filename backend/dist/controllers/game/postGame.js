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
const ProfileSchema_1 = __importDefault(require("../../models/ProfileSchema"));
const LeagueSchema_1 = __importDefault(require("../../models/LeagueSchema"));
const dayjs_1 = __importDefault(require("dayjs"));
const postGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { time, clubs, sport, league } = req.body;
        if (clubs.length !== 2)
            return res.status(400).send({ message: "There should be 2 clubs involved" });
        const club1 = yield ProfileSchema_1.default.findById(clubs[0]);
        const club2 = yield ProfileSchema_1.default.findById(clubs[1]);
        if (!club1 || !club2) {
            return res.status(400).send({ message: "Not able to find one of the clubs" });
        }
        if (clubs[0] === clubs[1]) {
            return res.status(400).send({ message: "Cant create game using the same club twice." });
        }
        if (clubs[0] !== req.user.userId && clubs[1] !== req.user.userId) {
            return res.status(400).send({ message: "Cant create a game that doesnt involve your club" });
        }
        const leagueBase = yield LeagueSchema_1.default.findOne({ name: league });
        if (!leagueBase) {
            return res.status(400).send({ message: "League not found." });
        }
        if (leagueBase.sport !== sport) {
            return res.status(400).send({ message: "Sport is not from that league." });
        }
        if (club1.league.toString() !== club2.league.toString() && !leagueBase.name.includes("FRIENDLY")) {
            return res.status(400).send({ message: "Clubs are not in the same league and the game is not marked as friendly." });
        }
        if (club1.league.toString() !== leagueBase._id.toString() && !leagueBase.name.includes("FRIENDLY")) {
            return res.status(400).send({ message: "Club doesnt belong to selected league." });
        }
        const ts = (0, dayjs_1.default)(time).unix().toString();
        const gameExists = yield GameSchema_1.default.exists({ sport, time: ts, league, clubs });
        if (gameExists) {
            return res.status(409).send({ message: 'Game already exists.' });
        }
        const gameBody = {
            time: ts, clubs, sport, league, result: "0-0", createdBy: (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId
        };
        const newGame = yield GameSchema_1.default.create(gameBody);
        res.status(201).send({ message: 'Game created.', game: newGame });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = postGame;
//# sourceMappingURL=postGame.js.map