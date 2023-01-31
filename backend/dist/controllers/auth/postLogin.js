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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, mail } = req.body;
        const profile = yield ProfileSchema_1.default.findOne({
            $or: [{ username: mail }, { mail }]
        });
        if (profile && (yield bcryptjs_1.default.compare(password, profile.password))) {
            const token = jsonwebtoken_1.default.sign({
                userId: profile._id,
                mail: profile.mail,
                username: profile.username,
                sport: profile.sport,
                league: profile.league,
                type: profile.type,
            }, process.env.TOKEN_KEY, { expiresIn: '30d' });
            return res.status(200).json({
                mail: profile.mail,
                token,
                username: profile.username,
                type: profile.type,
                sport: profile.sport,
                league: profile.league,
                _id: profile._id
            });
        }
        return res.status(400).send({ message: 'Invalid credentials.' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = postLogin;
//# sourceMappingURL=postLogin.js.map