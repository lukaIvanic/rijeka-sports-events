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
const gameControllers_1 = require("../controllers/game/gameControllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const gameSchema = Joi.object({
    time: Joi.date().required(),
    clubs: Joi.array().items(Joi.string()).required(),
    sport: Joi.string().required(),
    league: Joi.string().required(),
});
const updateWholeScoreSchema = Joi.object({
    result: Joi.string().required(),
    goals: Joi.alternatives().try(Joi.string(), Joi.array())
});
const addScoreSchema = Joi.object({
    scorer: Joi.number().valid(0, 1).required(),
    goal: Joi.string().required(),
});
const removeScoreSchema = Joi.object({
    sideRemoved: Joi.number().valid(0, 1).required()
});
router.post('/create', validator.body(gameSchema), authMiddleware_1.protect, gameControllers_1.postGame);
router.patch('/update/whole/:id', validator.body(updateWholeScoreSchema), authMiddleware_1.protect, gameControllers_1.patchScore);
router.patch('/update/add/:id', validator.body(addScoreSchema), authMiddleware_1.protect, gameControllers_1.addScore);
router.patch('/update/remove/:id', validator.body(removeScoreSchema), authMiddleware_1.protect, gameControllers_1.removeScore);
router.delete('/delete/:id', authMiddleware_1.protect, gameControllers_1.deleteScore);
exports.default = router;
//# sourceMappingURL=GameRouter.js.map