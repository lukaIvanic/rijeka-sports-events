import socket from "socket.io"
let io = null
const setSocketServerInstance = (ioInstance: socket.Server)=>{
    io = ioInstance
}

const getSocketServerInstance = ()=>{
    return io
}


export {
    getSocketServerInstance,
    setSocketServerInstance,
}