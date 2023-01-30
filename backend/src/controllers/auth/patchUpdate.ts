import Profile, { IProfile } from '../../models/ProfileSchema'
import { Request, Response } from 'express'

const patchUpdate = async (req: Request<{id: string}, {}, { league: string }, {}>, res: Response) => {
    try {
        let { league } = req.body

        if (!league) res.status(400).send({message: "League needs to be defined."})

        const profile: IProfile | null = await Profile.findById(req.params.id)
        if (!profile) return res.status(400).send({message: "Club not found."})
        if (profile.type !== "CLUB") return res.status(400).send({message: "Account is not a club."})

        const newProfile: IProfile | null = await Profile.findByIdAndUpdate(req.params.id, { league }, { new: true })
        if (!newProfile) return res.status(400).send({ message: 'Club not found.' })

        res.status(201).send({ message: 'Club updated.', profile: newProfile })

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default patchUpdate