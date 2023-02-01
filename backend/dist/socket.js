"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSocketServer = void 0;
const socketStore_1 = require("./socketStore");
const socket_io_1 = __importDefault(require("socket.io"));
const registerSocketServer = (server) => {
    const io = new socket_io_1.default.Server(server, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"]
        }
    });
    (0, socketStore_1.setSocketServerInstance)(io);
    console.log(io);
    io.on('connection', socket => {
        console.log('user connected');
    });
};
exports.registerSocketServer = registerSocketServer;
//# sourceMappingURL=socket.js.map