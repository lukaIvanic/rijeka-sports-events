import io from 'socket.io-client'
import { store } from './store/store'
// import {getAllPosts, getPost} from './store/actions/postActions'
let socket: any = null

export const connectSocket = () => {
    socket = io('ws://localhost:5000', { transports: ['websocket'] })

    socket.on('connect', () => {
        console.log('Connected with socket server. ID: ' + socket.id)
    })

    // socket.on('new-post', data => {
    //     store.dispatch(getAllPosts())
    // })
    // socket.on('new-comment', data => {
    //     store.dispatch(getPost(data.postId))
    // })
}

// export const sendDirectMessage = data => {
//     socket.emit('direct-message', data)
// }

// export const getDirectChatHistory = data => {
//     socket.emit('direct-chat-history', data)
// }