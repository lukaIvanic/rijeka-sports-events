import express from 'express'
const router = express.Router()
import _Joi from 'joi'
import JoiDate from '@joi/date'
const Joi: any = _Joi.extend(JoiDate)

import ejv from 'express-joi-validation'
const validator = ejv.createValidator({})

import { errorHandler, postLogin, postRegister, getUser, patchUpdate, deleteProfile, updateProfilePicture } from '../controllers/auth/authControllers'
import { protect } from '../middleware/authMiddleware'

import multer from 'multer'

const upload = multer({
    limits:{
        fileSize:1e8
    },
    fileFilter(req,file,cb){
        cb(undefined,true)
    }
})

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(24).required(),
    password: Joi.string().min(8).max(48).required(),
    mail: Joi.string().email().required(),
    type: Joi.string().valid("USER", "CLUB").required(),
    sport: Joi.string(),
    league: Joi.string(),
})
const loginSchema = Joi.object({
    mail: Joi.string().required(),
    password: Joi.string().min(8).max(48).required(),
})

const updateLeagueSchema = Joi.object({
    league: Joi.string().required()
})

router.post('/register', validator.body(registerSchema), postRegister)
router.post('/login', validator.body(loginSchema), postLogin)
router.get("/me", protect, getUser)
router.patch('/update/:id', validator.body(updateLeagueSchema), protect, patchUpdate)
router.patch('/update/:id', upload.single("profilePicture"), protect, updateProfilePicture)
router.delete('/delete/:id', protect, deleteProfile)
router.get('/*', errorHandler)

// router.get('/confirm/:code', verifyUser)
// router.get('/confirm/resend/:id', resendConfirmationMail)

export default router