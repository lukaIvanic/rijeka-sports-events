import Profile, { IProfile } from '../../models/ProfileSchema'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

const postLogin = async (req: Request<{}, {}, { password: string, mail: string }, {}>, res: Response) => {
    try {
        const { password, mail } = req.body
        const profile: IProfile | null = await Profile.findOne({
            $or: [{ username: mail }, { mail }]
        })

        if (profile && (await bcrypt.compare(password, profile.password))) {
            const token = jwt.sign({
                userId: profile._id,
                mail: profile.mail,
                username: profile.username,
                sport: profile.sport,
                league: profile.league,
                type: profile.type,
            }, process.env.TOKEN_KEY as string, { expiresIn: '30d' })

            return res.status(200).json({
                mail: profile.mail,
                token,
                username: profile.username,
                type: profile.type,
                sport: profile.sport,
                league: profile.league,
                _id: profile._id
            },
            )
        }
        return res.status(400).send({ message: 'Invalid credentials.' })

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default postLogin