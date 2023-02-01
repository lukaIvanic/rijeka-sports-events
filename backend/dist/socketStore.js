"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSocketServerInstance = exports.getSocketServerInstance = void 0;
let io = null;
const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
};
exports.setSocketServerInstance = setSocketServerInstance;
const getSocketServerInstance = () => {
    return io;
};
exports.getSocketServerInstance = getSocketServerInstance;
//# sourceMappingURL=socketStore.js.map