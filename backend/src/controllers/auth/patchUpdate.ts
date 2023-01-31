import Profile, { IProfile } from '../../models/ProfileSchema'
import { Request, Response } from 'express'
import League from '../../models/LeagueSchema'

const patchUpdate = async (req: Request<{ id: string }, {}, { league: string, name: string }, {}>, res: Response) => {
    try {
        let { league, name } = req.body
        //@ts-ignore
        let token: string | undefined = req.body.token || req.query.token || req.headers["authorization"];

        console.log(name)

        if (!league || !name) return res.status(400).send({ message: "League and name need to be defined." })

        const sameNameProfile = await Profile.exists({ username: name })
        if (sameNameProfile) return res.status(409).send({ message: 'Club with that name already exists.' })

        const leagueExists = await League.exists({ name: league })
        if (!leagueExists) return res.status(400).send({ message: "League doesnt exist." })

        const profile: IProfile | null = await Profile.findById(req.params.id)
        if (!profile) return res.status(400).send({ message: "Club not found." })
        if (profile.type !== "CLUB") return res.status(400).send({ message: "Account is not a club." })

        const newProfile: IProfile | null = await Profile.findByIdAndUpdate(req.params.id, { league: leagueExists._id, username: name }, { new: true })
        if (!newProfile) return res.status(400).send({ message: 'Club not found.' })

        res.status(201).json({
            mail: profile.mail,
            token,
            type: newProfile.type,
            username: profile.username,
            sport: newProfile.sport ? newProfile.sport : "",
            league: newProfile.league ? newProfile.league : "",
            _id: newProfile._id
        },
        )

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default patchUpdate