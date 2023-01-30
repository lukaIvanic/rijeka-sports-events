"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const joi_1 = __importDefault(require("joi"));
const date_1 = __importDefault(require("@joi/date"));
const Joi = joi_1.default.extend(date_1.default);
const express_joi_validation_1 = __importDefault(require("express-joi-validation"));
const validator = express_joi_validation_1.default.createValidator({});
const authControllers_1 = require("../controllers/auth/authControllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(24).required(),
    password: Joi.string().min(8).max(48).required(),
    mail: Joi.string().email().required(),
    birthdate: Joi.date().format('YYYY-MM-DD').raw().required(),
});
const loginSchema = Joi.object({
    mail: Joi.string().required(),
    password: Joi.string().min(8).max(48).required(),
});
router.post('/register', validator.body(registerSchema), authControllers_1.postRegister);
router.post('/login', validator.body(loginSchema), authControllers_1.postLogin);
router.get("/me", authMiddleware_1.protect, authControllers_1.getUser);
router.get('/*', authControllers_1.errorHandler);
// router.get('/confirm/:code', verifyUser)
// router.get('/confirm/resend/:id', resendConfirmationMail)
// router.patch('/reset', protect, resetPassword)
router.get('/*', authControllers_1.errorHandler);
exports.default = router;
//# sourceMappingURL=AuthRouter.js.map