import Profile from "../../models/ProfileSchema"
import { Request, Response } from 'express'

const getClubsUsingSport = async (req: Request<{ sport: string }, {}, {}, {}>, res: Response) => {
    const {sport} = req.params
    const profiles = await Profile.find({ sport, type: "CLUB" })
    if (!profiles) return res.status(200).send({ clubs: [] })
    return res.status(200).send({ clubs: profiles })

}

export default getClubsUsingSport