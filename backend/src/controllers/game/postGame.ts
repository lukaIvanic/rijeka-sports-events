import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'
import Profile from '../../models/ProfileSchema';
import League from '../../models/LeagueSchema';
import dayjs from "dayjs"

type GameBody = {
    time: string;
    clubs: string[];
    sport: string;
    league: string;
    createdBy: string;
    result: string;
}

const postGame = async (req: Request<{}, {}, { time: Date, clubs: string[], sport: string, league: string }, {}>, res: Response) => {
    try {
        const { time, clubs, sport, league } = req.body

        if (clubs.length !== 2) return res.status(400).send({ message: "There should be 2 clubs involved" })
        const club1 = await Profile.findById(clubs[0])
        const club2 = await Profile.findById(clubs[1])

        if (!club1 || !club2) {
            return res.status(400).send({ message: "Not able to find one of the clubs" })
        }
        if (clubs[0] === clubs[1]) {
            return res.status(400).send({ message: "Cant create game using the same club twice." })
        }
        if (clubs[0] !== req.user.userId && clubs[1] !== req.user.userId) {
            return res.status(400).send({ message: "Cant create a game that doesnt involve your club" })
        }
        const leagueBase = await League.findOne({ name: league })
        if (!leagueBase) {
            return res.status(400).send({ message: "League not found." })
        }

        if (leagueBase.sport !== sport) {
            return res.status(400).send({ message: "Sport is not from that league." })
        }

        if (club1.league.toString() !== club2.league.toString() && leagueBase.name !== "FRIENDLY") {
            return res.status(400).send({ message: "Clubs are not in the same league and the game is not marked as friendly." })
        }
        if (club1.league.toString() !== leagueBase._id.toString() && leagueBase.name !== "FRIENDLY") {
            return res.status(400).send({ message: "Club doesnt belong to selected league." })
        }

        const ts = dayjs(time).unix().toString()

        const gameExists = await Game.exists({ sport, time: ts, league, clubs })
        if (gameExists) {
            return res.status(409).send({ message: 'Game already exists.' })
        }

        const gameBody: GameBody = {
            time: ts, clubs, sport, league, result: "0-0", createdBy: req.user?.userId
        }

        const newGame: IGame | null = await Game.create(gameBody)

        res.status(201).send({ message: 'Game created.', game: newGame })
    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default postGame