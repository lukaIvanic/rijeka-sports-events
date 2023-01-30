import express from 'express'
const router = express.Router()
import _Joi from 'joi'
import JoiDate from '@joi/date'
const Joi: any = _Joi.extend(JoiDate)

import ejv from 'express-joi-validation'
const validator = ejv.createValidator({})

import { postLeague, getLeagues } from '../controllers/league/leagueControllers'
// import { protect } from '../middleware/authMiddleware'

const leagueSchema = Joi.object({
    name: Joi.string().required(),
    sport: Joi.string().required(),
})

router.post('/create', validator.body(leagueSchema), postLeague)
router.get('/all', getLeagues)

export default router