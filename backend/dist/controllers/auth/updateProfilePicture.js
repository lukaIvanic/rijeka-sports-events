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
const cloudinary_1 = __importDefault(require("cloudinary"));
const cloudinary = cloudinary_1.default.v2;
cloudinary.config({
    cloud_name: 'dx4rhdmc6',
    api_key: '892797165922693',
    api_secret: 'G7-xSm3zEwREdTHpZzJRm2N0xkc'
});
const updateProfilePicture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body) {
            console.log('No file uploaded');
            return res.sendStatus(400);
        }
        const uploaded = yield cloudinary.uploader.upload(req.body.profilePicture, function (error, result) {
            if (error) {
                console.log(error);
            }
        });
        const newProfile = yield ProfileSchema_1.default.findByIdAndUpdate(req.params.id, { profilePic: uploaded.url }, { new: true });
        if (!newProfile)
            return res.status(400).send({ message: 'Profile not found.' });
        return res.sendStatus(204);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message });
    }
});
exports.default = updateProfilePicture;
//# sourceMappingURL=updateProfilePicture.js.map