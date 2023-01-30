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
const patchUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { league } = req.body;
        if (!league)
            res.status(400).send({ message: "League needs to be defined." });
        const profile = yield ProfileSchema_1.default.findById(req.params.id);
        if (!profile)
            return res.status(400).send({ message: "Club not found." });
        if (profile.type !== "CLUB")
            return res.status(400).send({ message: "Account is not a club." });
        const newProfile = yield ProfileSchema_1.default.findByIdAndUpdate(req.params.id, { league }, { new: true });
        if (!newProfile)
            return res.status(400).send({ message: 'Club not found.' });
        res.status(201).send({ message: 'Club updated.', profile: newProfile });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = patchUpdate;
//# sourceMappingURL=patchUpdate.js.map