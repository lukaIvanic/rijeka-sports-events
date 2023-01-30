import Profile, { IProfile } from '../../models/ProfileSchema'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sendConfirmationEmail } from '../../util/utils'
import { Request, Response } from 'express'
import League from '../../models/LeagueSchema'


type ProfileBody = {
    username: string;
    password: string;
    mail: string;
    sport?: string;
    type: string;
    league?: string;
    profilePicture?: string;
}

const postRegister = async (req: Request<{}, {}, { username: string, password: string, mail: string, type: string | null, sport: string, league: string, profilePicture: any }, {}>, res: Response) => {
    try {
        let { username, password, mail, type, sport, league } = req.body
        if (type !== 'CLUB') type = 'USER'
        if (type === "CLUB" && !(sport && league)) {
            return res.status(400).send({ message: "The club needs to have a sport and a league." })
        }
        const mailTaken = await Profile.exists({ mail: mail.toLowerCase() })
        if (mailTaken) {
            return res.status(409).send({ message: 'E-mail already in use.' })
        }

        const leagueExists = await League.exists({ name: league, sport })
        if (!leagueExists) {
            return res.status(409).send({ message: 'League doesnt exist.' })
        }

        const usernameTaken = await Profile.exists({ username })
        if (usernameTaken) {
            return res.status(409).send({ message: 'Username taken.' })
        }

        const encryptedPassword: string = await bcrypt.hash(password, 10)

        const profileBody: ProfileBody = {
            username, password: encryptedPassword, mail: mail.toLowerCase(), type
        }
        if (type === 'CLUB') {
            profileBody.sport = sport
            profileBody.league = leagueExists._id.toString()
        }

        const profile: IProfile | null = await Profile.create(profileBody)

        const token = jwt.sign({
            userId: profile._id,
            mail,
            username,
            type,
            sport: profileBody.sport ? profileBody.sport : "",
            league: profile.league ? profileBody.league : "",
        }, process.env.TOKEN_KEY as string, { expiresIn: '30d' })

        res.status(201).json({
            mail: profile.mail,
            token,
            type,
            username: profile.username,
            sport: profileBody.sport ? profileBody.sport : "",
            league: profile.league ? profileBody.league : "",
            _id: profile._id
        },
        )

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default postRegister