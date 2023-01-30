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
const LeagueSchema_1 = __importDefault(require("../../models/LeagueSchema"));
const postLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, sport } = req.body;
        const leagueExists = yield LeagueSchema_1.default.exists({ sport, name });
        if (leagueExists) {
            return res.status(409).send({ message: 'League already exists.' });
        }
        const leagueBody = {
            name, sport
        };
        const newLeague = yield LeagueSchema_1.default.create(leagueBody);
        res.status(201).send({ message: 'League created.', league: newLeague });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = postLeague;
//# sourceMappingURL=postLeague.js.map