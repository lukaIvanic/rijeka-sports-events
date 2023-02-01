"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const AuthRouter_1 = __importDefault(require("./routes/AuthRouter"));
const GameRouter_1 = __importDefault(require("./routes/GameRouter"));
const LeagueRouter_1 = __importDefault(require("./routes/LeagueRouter"));
const cors_1 = __importDefault(require("cors"));
const socket_1 = require("./socket");
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false, limit: "50mb" }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/users', AuthRouter_1.default);
app.use('/api/game', GameRouter_1.default);
app.use('/api/league', LeagueRouter_1.default);
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
(0, socket_1.registerSocketServer)(server);
//# sourceMappingURL=index.js.map