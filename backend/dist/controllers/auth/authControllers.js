"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClubsUsingSport = exports.updateProfilePicture = exports.deleteProfile = exports.patchUpdate = exports.errorHandler = exports.getUser = exports.postRegister = exports.postLogin = void 0;
const postLogin_1 = __importDefault(require("./postLogin"));
exports.postLogin = postLogin_1.default;
const postRegister_1 = __importDefault(require("./postRegister"));
exports.postRegister = postRegister_1.default;
const getUser_1 = __importDefault(require("./getUser"));
exports.getUser = getUser_1.default;
const errorHandler_1 = __importDefault(require("./errorHandler"));
exports.errorHandler = errorHandler_1.default;
const patchUpdate_1 = __importDefault(require("./patchUpdate"));
exports.patchUpdate = patchUpdate_1.default;
const deleteProfile_1 = __importDefault(require("./deleteProfile"));
exports.deleteProfile = deleteProfile_1.default;
const updateProfilePicture_1 = __importDefault(require("./updateProfilePicture"));
exports.updateProfilePicture = updateProfilePicture_1.default;
const getClubsUsingSport_1 = __importDefault(require("./getClubsUsingSport"));
exports.getClubsUsingSport = getClubsUsingSport_1.default;
//# sourceMappingURL=authControllers.js.map