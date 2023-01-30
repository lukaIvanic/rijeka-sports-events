import League, { ILeague } from '../../models/LeagueSchema'
import { Request, Response } from 'express'

type LeagueBody = {
    name: string;
    sport: string;
}

const postLeague = async (req: Request<{},{},{name: string, sport: string},{}>, res: Response) => {
    try {
        const { name, sport } = req.body

        const leagueExists = await League.exists({ sport, name })
        if (leagueExists) {
            return res.status(409).send({ message: 'League already exists.' })
        }

        const leagueBody: LeagueBody = {
           name, sport
        }

        const newLeague: ILeague | null = await League.create(leagueBody)

        res.status(201).send({message: 'League created.', league: newLeague})
    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default postLeague