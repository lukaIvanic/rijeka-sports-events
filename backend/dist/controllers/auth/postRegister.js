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
const LeagueSchema_1 = __importDefault(require("../../models/LeagueSchema"));
const postRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, password, mail, type, sport, league } = req.body;
        if (type !== 'CLUB')
            type = 'USER';
        if (type === "CLUB" && !(sport && league)) {
            return res.status(400).send({ message: "The club needs to have a sport and a league." });
        }
        const mailTaken = yield ProfileSchema_1.default.exists({ mail: mail.toLowerCase() });
        if (mailTaken) {
            return res.status(409).send({ message: 'E-mail already in use.' });
        }
        const leagueExists = yield LeagueSchema_1.default.exists({ name: league, sport });
        if (!leagueExists) {
            return res.status(409).send({ message: 'League doesnt exist.' });
        }
        const usernameTaken = yield ProfileSchema_1.default.exists({ username });
        if (usernameTaken) {
            return res.status(409).send({ message: 'Username taken.' });
        }
        const encryptedPassword = yield bcryptjs_1.default.hash(password, 10);
        const profileBody = {
            username, password: encryptedPassword, mail: mail.toLowerCase(), type
        };
        if (type === 'CLUB') {
            profileBody.sport = sport;
            profileBody.league = leagueExists._id.toString();
        }
        const profile = yield ProfileSchema_1.default.create(profileBody);
        const token = jsonwebtoken_1.default.sign({
            userId: profile._id,
            mail,
            username,
            type,
        }, process.env.TOKEN_KEY, { expiresIn: '30d' });
        res.status(201).json({
            profileDetails: {
                mail: profile.mail,
                token,
                type,
                username: profile.username,
                _id: profile._id
            },
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = postRegister;
//# sourceMappingURL=postRegister.js.map