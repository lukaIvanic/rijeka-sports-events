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
const getAllLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagues = yield LeagueSchema_1.default.find({});
        return res.status(200).send(leagues);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send("Error occured. Please try again.");
    }
});
exports.default = getAllLeagues;
//# sourceMappingURL=getLeagues.js.map