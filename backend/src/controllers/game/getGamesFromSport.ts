import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'
import dayjs from "dayjs"

const getGamesFromSport = async (req: Request<{ sport: string}, {}, {}, {}>, res: Response) => {
    const { sport } = req.params
    try {
        if (!["nogomet", "rukomet", "košarka", "vaterpolo", "odbojka"].includes(sport)) {
            return res.status(400).send({ message: "Invalid sport selected." })
        }
        // console.log(timestamp)
        // const dateToLook = dayjs(timestamp)
        // console.log(dateToLook.year(), dateToLook.month(), dateToLook.date())
        let games = await Game.find({ sport }).populate("clubs")

        // games = games.filter(game => {
        //     console.log(game.time)
        //     const gameDate = dayjs(game.time)
        //     console.log(gameDate.year(), gameDate.month(), gameDate.date())

        //     return gameDate.year() === dateToLook.year() && gameDate.month() === dateToLook.month() && gameDate.date() === dateToLook.date()
        // })
        if (!games) return res.status(200).send([])
        return res.status(200).send(games)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}

export default getGamesFromSport