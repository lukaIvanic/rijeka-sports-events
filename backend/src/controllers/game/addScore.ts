import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'

const addScore = async (req: Request<{ id: string }, {}, { goal: string, scorer: number }, {}>, res: Response) => {
    try {
        let { goal, scorer } = req.body

        if (scorer !== 0 && scorer !== 1) return res.status(400).send({ message: "Scoring club must be 0 or 1" })
        
        if (!(/^\d+'\s.+\s\(0|1\)$/.test(goal))) {
            return res.status(400).send({ message: "Goal provided in wrong format. Please format the result as MINUTE' NAME (0_OR_1)." })
        }

        const extractedScorer = Number(goal.slice(goal.lastIndexOf("(") + 1, goal.lastIndexOf("(") + 2))

        if (extractedScorer !== 0 && extractedScorer !== 1) {
            return res.status(400).send({ message: "Score and scorer dont add up." })
        }

        const game: IGame | null = await Game.findById(req.params.id)
        if (!game) return res.status(400).send({ message: "Game not found." })

        //provjeri ako je jedan od tih klubova zapravo req.user
        if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
            return res.status(400).send({ message: "Only the clubs from game can change the result of the game." })
        }

        let goals1: number = Number(game.result.slice(0, game.result.indexOf("-")))
        let goals2: number = Number(game.result.slice(game.result.indexOf("-") + 1))
        if (scorer === 1) goals2++;
        else goals1++;

        game.goals.push(goal)

        const newGoals = game.goals

        const newResult: string = `${goals1}-${goals2}`

        const newGame: IGame | null = await Game.findByIdAndUpdate(req.params.id, { result: newResult, goals: newGoals }, { new: true })

        res.status(201).send({ message: 'Game updated.', game: newGame })

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default addScore