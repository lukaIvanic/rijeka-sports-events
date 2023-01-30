import League from "../../models/LeagueSchema"
import { Request, Response } from 'express'

const getLeague = async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
    try {
        const league = await League.findById(req.params.id)
        if (!league) res.status(404).send({message: "League not found."})
        return res.status(200).send(league)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}

export default getLeague