import express from 'express';
import dotenv from "dotenv"
import db from "./config/db"
import authRouter from "./routes/AuthRouter"
import gameRouter from "./routes/GameRouter"
import leagueRouter from "./routes/LeagueRouter"
import cors from "cors"
import {registerSocketServer} from './socket'
import http from "http"

dotenv.config()
db()

const app = express()
const server = http.createServer(app)
const PORT: number = 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false, limit: "50mb"}))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', authRouter)
app.use('/api/game', gameRouter)
app.use('/api/league', leagueRouter)

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
registerSocketServer(server)