import Profile, { IProfile } from '../../models/ProfileSchema'
import { Request, Response } from 'express'
import _cloudinary from "cloudinary"
import jwt from 'jsonwebtoken'

const cloudinary = _cloudinary.v2
cloudinary.config({
    cloud_name: 'dpauo1xyi',
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
        const newProfile: IProfile | null = await Profile.findByIdAndUpdate(req.params.id, { profilePicture: uploaded.url }, { new: true })
        if (!newProfile) return res.status(400).send({ message: 'Profile not found.' })

        const token = jwt.sign({
            userId: newProfile._id,
            mail: newProfile.mail,
            type: newProfile.type,
            username: newProfile.username,
            sport: newProfile.sport ? newProfile.sport : "",
            league: newProfile.league ? newProfile.league : "",
            profilePicture: newProfile.profilePicture,
        }, process.env.TOKEN_KEY as string, { expiresIn: '30d' })


        res.status(201).json({
            mail: newProfile.mail,
            token,
            type: newProfile.type,
            username: newProfile.username,
            sport: newProfile.sport ? newProfile.sport : "",
            league: newProfile.league ? newProfile.league : "",
            profilePicture: newProfile.profilePicture,
            _id: newProfile._id
        },
        )

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default updateProfilePicture