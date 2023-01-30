import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'

const deleteGame = async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
    try {
        const { id } = req.params

        const game = await Game.findById(id)

        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({message: "Attempting to delete a game that you dont participate in."})
        }

        const gameToDelete: IGame | null = await Game.findByIdAndDelete(id)
        if (!gameToDelete) return res.status(404).send({ message: `No game found with ID: ${id}` })

        res.status(200).send({ message: 'Game deleted.', profile: gameToDelete })
    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default deleteGame