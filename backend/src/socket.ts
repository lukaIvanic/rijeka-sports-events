import {setSocketServerInstance} from './socketStore'
import socket from "socket.io"
import http from "http"

export const registerSocketServer = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) => {
    const io = new socket.Server(server, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"]
        }
    })

    setSocketServerInstance(io)
    console.log(io)

    io.on('connection', socket => {
        console.log('user connected')
    })
}



