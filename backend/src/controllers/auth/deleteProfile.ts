import Profile, { IProfile } from '../../models/ProfileSchema'
import { Request, Response } from 'express'

const deleteProfile = async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
    try {
        const { id } = req.params
        if (req.user.userId !== id) {
            return res.status(400).send({message: "Attempting to delete a profile that isnt yours."})
        }

        const profileToDelete: IProfile | null = await Profile.findByIdAndDelete(id)
        if (!profileToDelete) return res.status(404).send({ message: `No profile found with ID: ${id}` })

        res.status(200).send({ message: 'Profile deleted.', profile: profileToDelete })
    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default deleteProfile