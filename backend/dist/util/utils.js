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
exports.getSeniority = exports.randomizer = exports.sendPasswordReset = exports.sendConfirmationEmail = exports.generateToken = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user = process.env.USER;
const pass = process.env.PASS;
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    auth: {
        user, pass
    },
});
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
exports.generateToken = generateToken;
const sendConfirmationEmail = (name, email, confirmationCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield transporter.sendMail({
            from: user,
            to: email,
            subject: "Confirm your account",
            html: `<h1>Email Confirmation</h1>
              <h2>Hello ${name}</h2>
              <p>Thank you for creating an account at Sports-Complex! Please confirm your email by clicking on the following link</p>
              <a href=http://localhost:3000/api/auth/confirm/${confirmationCode}> Click here</a>
              </div>`,
        });
        return res;
    }
    catch (e) {
        console.log(e);
    }
});
exports.sendConfirmationEmail = sendConfirmationEmail;
const sendPasswordReset = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield transporter.sendMail({
            from: user,
            to: email,
            subject: "Password Reset",
            html: `<h1>Password Reset</h1>
              <h2>Hello ${name}</h2>
              <p>Your new password: ${password}</p>
              </div>`,
        });
        return res;
    }
    catch (e) {
        console.log(e);
    }
});
exports.sendPasswordReset = sendPasswordReset;
const randomizer = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.randomizer = randomizer;
const getSeniority = (birthday) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 0 || age > 200)
        return 'ERROR';
    if (age < 15)
        return 'Children';
    if (age < 18)
        return 'Youth';
    if (age < 24)
        return 'Young Adults';
    return 'Adults';
};
exports.getSeniority = getSeniority;
//# sourceMappingURL=utils.js.map