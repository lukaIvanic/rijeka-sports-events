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
const LeagueSchema_1 = __importDefault(require("../../models/LeagueSchema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const patchUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { league, name } = req.body;
        if (!league || !name)
            return res.status(400).send({ message: "League and name need to be defined." });
        const profile = yield ProfileSchema_1.default.findById(req.params.id);
        if (!profile)
            return res.status(400).send({ message: "Club not found." });
        if (profile.type !== "CLUB")
            return res.status(400).send({ message: "Account is not a club." });
        const sameNameProfile = yield ProfileSchema_1.default.exists({ username: name });
        if (sameNameProfile && profile.username !== name)
            return res.status(409).send({ message: 'Club with that name already exists.' });
        const leagueExists = yield LeagueSchema_1.default.exists({ name: league });
        if (!leagueExists)
            return res.status(400).send({ message: "League doesnt exist." });
        const newProfile = yield ProfileSchema_1.default.findByIdAndUpdate(req.params.id, { league: leagueExists._id, username: name }, { new: true });
        if (!newProfile)
            return res.status(400).send({ message: 'Club not found.' });
        const token = jsonwebtoken_1.default.sign({
            userId: profile._id,
            mail: newProfile.mail,
            type: newProfile.type,
            username: newProfile.username,
            sport: newProfile.sport ? newProfile.sport : "",
            league: newProfile.league ? newProfile.league : "",
            profilePicture: newProfile.profilePicture,
        }, process.env.TOKEN_KEY, { expiresIn: '30d' });
        res.status(201).json({
            mail: newProfile.mail,
            token,
            type: newProfile.type,
            username: newProfile.username,
            sport: newProfile.sport ? newProfile.sport : "",
            league: newProfile.league ? newProfile.league : "",
            profilePicture: newProfile.profilePicture,
            _id: newProfile._id
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = patchUpdate;
//# sourceMappingURL=patchUpdate.js.map