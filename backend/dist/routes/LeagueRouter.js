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
const leagueControllers_1 = require("../controllers/league/leagueControllers");
// import { protect } from '../middleware/authMiddleware'
const leagueSchema = Joi.object({
    name: Joi.string().required(),
    sport: Joi.string().required(),
});
router.post('/create', validator.body(leagueSchema), leagueControllers_1.postLeague);
router.get('/all', leagueControllers_1.getLeagues);
router.get('/:id', leagueControllers_1.getLeague);
exports.default = router;
//# sourceMappingURL=LeagueRouter.js.map