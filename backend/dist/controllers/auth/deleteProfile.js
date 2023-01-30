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
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (req.user.userId !== id) {
            return res.status(400).send({ message: "Attempting to delete a profile that isnt yours." });
        }
        const profileToDelete = yield ProfileSchema_1.default.findByIdAndDelete(id);
        if (!profileToDelete)
            return res.status(404).send({ message: `No profile found with ID: ${id}` });
        res.status(200).send({ message: 'Profile deleted.', profile: profileToDelete });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = deleteProfile;
//# sourceMappingURL=deleteProfile.js.map