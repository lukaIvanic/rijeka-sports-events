"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LeagueSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    sport: { type: String },
});
const League = (0, mongoose_1.model)("League", LeagueSchema);
exports.default = League;
//# sourceMappingURL=LeagueSchema.js.map