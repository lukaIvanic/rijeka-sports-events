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
const ProfileSchema_1 = __importDefault(require("../../models/ProfileSchema"));
const getClubsUsingSport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sport } = req.params;
    const profiles = yield ProfileSchema_1.default.find({ sport, type: "CLUB" });
    if (!profiles)
        return res.status(200).send({ clubs: [] });
    return res.status(200).send({ clubs: profiles });
});
exports.default = getClubsUsingSport;
//# sourceMappingURL=getClubsUsingSport.js.map