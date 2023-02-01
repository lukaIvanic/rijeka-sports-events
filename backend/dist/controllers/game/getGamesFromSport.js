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
const getGamesFromSport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sport } = req.params;
    try {
        if (!["nogomet", "rukomet", "kosarka", "vaterpolo", "odbojka"].includes(sport)) {
            return res.status(400).send({ message: "Invalid sport selected." });
        }
        // console.log(timestamp)
        // const dateToLook = dayjs(timestamp)
        // console.log(dateToLook.year(), dateToLook.month(), dateToLook.date())
        let games = yield GameSchema_1.default.find({ sport }).populate("clubs");
        // games = games.filter(game => {
        //     console.log(game.time)
        //     const gameDate = dayjs(game.time)
        //     console.log(gameDate.year(), gameDate.month(), gameDate.date())
        //     return gameDate.year() === dateToLook.year() && gameDate.month() === dateToLook.month() && gameDate.date() === dateToLook.date()
        // })
        if (!games)
            return res.status(200).send([]);
        return res.status(200).send(games);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send("Error occured. Please try again.");
    }
});
exports.default = getGamesFromSport;
//# sourceMappingURL=getGamesFromSport.js.map