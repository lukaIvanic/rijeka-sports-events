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
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.type === "CLUB") {
        const profile = yield ProfileSchema_1.default.findById(req.user.userId);
        if (!profile)
            return res.status(404).send({ message: "User not found." });
        return res.status(200).send(Object.assign({ sport: profile.sport, league: profile.league }, req.user));
    }
    res.status(200).json(req.user);
});
exports.default = getMe;
//# sourceMappingURL=getUser.js.map