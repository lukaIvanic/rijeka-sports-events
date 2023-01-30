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
exports.manageAccess = exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.body.token || req.query.token || req.headers["authorization"];
    if (!token) {
        return res.status(403).send({ message: "A token is required for authentication." });
    }
    try {
        token = token.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    }
    catch (err) {
        return res.status(401).send({ message: "Invalid Token." });
    }
    return next();
});
exports.protect = protect;
const manageAccess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user && req.user.role === 'ADMIN')
        return next();
    return res.status(403).send({ message: "User has no admin rights." });
});
exports.manageAccess = manageAccess;
//# sourceMappingURL=authMiddleware.js.map