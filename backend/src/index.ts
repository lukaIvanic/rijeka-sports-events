import express from 'express';
import dotenv from "dotenv"
import db from "./config/db"
import authRouter from "./routes/AuthRouter"
import gameRouter from "./routes/GameRouter"
import leagueRouter from "./routes/LeagueRouter"

dotenv.config()
db()
const app = express();
const PORT: number = 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', authRouter)
app.use('/api/game', gameRouter)
app.use('/api/league', leagueRouter)

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});