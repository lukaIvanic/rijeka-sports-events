import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'

const patchScore = async (req: Request<{ id: string }, {}, { isFinished: boolean }, {}>, res: Response) => {
    try {
        let { isFinished } = req.body

        const newGame: IGame | null = await Game.findByIdAndUpdate(req.params.id, { isFinished }, { new: true })
        console.log(newGame)
        if (!newGame) return res.status(404).send({message: "Game not found"})
        res.status(201).send({ message: 'Game updated.', game: newGame })

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default patchScore