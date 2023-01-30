import express from 'express'
const router = express.Router()
import _Joi from 'joi'
import JoiDate from '@joi/date'
const Joi: any = _Joi.extend(JoiDate)

import ejv from 'express-joi-validation'
const validator = ejv.createValidator({})

import { postGame, patchScore, addScore, removeScore, deleteScore } from '../controllers/game/gameControllers'
import { protect } from '../middleware/authMiddleware'

const gameSchema = Joi.object({
    time: Joi.date().required(),
    clubs: Joi.array().items(Joi.string()).required(),
    sport: Joi.string().required(),
    league: Joi.string().required(),
})

const updateWholeScoreSchema = Joi.object({
    result: Joi.string().required(),
    goals: Joi.alternatives().try(Joi.string(), Joi.array())
})

const addScoreSchema = Joi.object({
    scorer: Joi.number().valid(0,1).required(),
    goal: Joi.string().required(),
})

const removeScoreSchema = Joi.object({
    sideRemoved: Joi.number().valid(0,1).required()
})

router.post('/create', validator.body(gameSchema), protect, postGame)
router.patch('/update/whole/:id', validator.body(updateWholeScoreSchema), protect, patchScore)
router.patch('/update/add/:id', validator.body(addScoreSchema), protect, addScore)
router.patch('/update/remove/:id', validator.body(removeScoreSchema), protect, removeScore)
router.delete('/delete/:id', protect, deleteScore)


export default router