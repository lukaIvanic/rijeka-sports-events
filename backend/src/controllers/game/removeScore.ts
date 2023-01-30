import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'

const removeScore = async (req: Request<{ id: string }, {}, { sideRemoved: number }, {}>, res: Response) => {
    try {
        let { sideRemoved } = req.body

        if (sideRemoved !== 0 && sideRemoved !== 1) return res.status(400).send({ message: "Side removed club must be 0 or 1" })

        const game: IGame | null = await Game.findById(req.params.id)
        if (!game) return res.status(400).send({ message: "Game not found." })

        //provjeri ako je jedan od tih klubova zapravo req.user
        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({ message: "Only the clubs from game can change the result of the game." })
        }

        let goals1: number = Number(game.result.slice(0, game.result.indexOf("-")))
        let goals2: number = Number(game.result.slice(game.result.indexOf("-") + 1))
        if (sideRemoved === 1) {
            if (goals2 > 0) goals2--;
            else return res.status(201).send({ message: 'Game not updated.', game })
        }
        else {
            if (goals1 > 0) goals1--;
            else return res.status(201).send({ message: 'Game not updated.', game })
        }

        const goalsArr = [...game.goals]

        goalsArr.sort((a, b) => b.localeCompare(a));
    
        const goalToRemoveIndex = goalsArr.findIndex(goal => Number(goal.slice(goal.lastIndexOf("(") + 1, goal.lastIndexOf("(") + 2)) === sideRemoved)

        goalsArr.splice(goalToRemoveIndex, 1)

        const newResult: string = `${goals1}-${goals2}`

        const newGame: IGame | null = await Game.findByIdAndUpdate(req.params.id, { result: newResult, goals: goalsArr }, { new: true })

        res.status(201).send({ message: 'Game updated.', game: newGame })

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default removeScore