import Profile, { IProfile } from '../../models/ProfileSchema'
import { Request, Response } from 'express'
import _cloudinary from "cloudinary"

const cloudinary = _cloudinary.v2
cloudinary.config({
    cloud_name: 'dx4rhdmc6',
    api_key: '892797165922693',
    api_secret: 'G7-xSm3zEwREdTHpZzJRm2N0xkc'
});

const updateProfilePicture = async (req: Request<{ id: string }, {}, { profilePicture: any }, {}>, res: Response) => {
    try {
        if (!req.body) {
            console.log('No file uploaded')
            return res.sendStatus(400)
        }
        const uploaded = await cloudinary.uploader.upload(req.body.profilePicture,
            function (error, result) {
                if (error) {
                    console.log(error)
                }
            });
        const newProfile: IProfile | null = await Profile.findByIdAndUpdate(req.params.id, { profilePic: uploaded.url }, { new: true })
        if (!newProfile) return res.status(400).send({ message: 'Profile not found.' })
        return res.sendStatus(204)

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default updateProfilePicture