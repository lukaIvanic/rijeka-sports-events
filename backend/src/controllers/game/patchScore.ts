import Game, { IGame } from '../../models/GameSchema'
import { Request, Response } from 'express'

const patchScore = async (req: Request<{ id: string }, {}, { token: string, result: string }, {}>, res: Response) => {
    try {
        let { result } = req.body

        // if (!goals) {
        //     const newGame: IGame | null = await Game.findByIdAndUpdate(req.params.id, { result: "0-0", goals: [] }, { new: true })
        //     return res.status(201).send({ message: 'Game updated.', game: newGame })
        // }

        // if (!result || !goals.length) return res.status(400).send({ message: "Results and goals need to be defined." })

        // if (!(/^\d+-\d+$/.test(result))) {
        //     return res.status(400).send({ message: "Result provided in wrong format. Please format the result as NUMBER-NUMBER." })
        // }
        // let newGoals: string[] = []

        // if (Array.isArray(goals)) {
        //     for (const goal of goals) {
        //         if (!(/^\d+'\s.+\s\(0|1\)$/.test(goal))) {
        //             return res.status(400).send({ message: "Goal provided in wrong format. Please format the result as MINUTE' NAME." })
        //         }
        //     }
        //     newGoals = [...goals]
        // } else {
        //     if (!(/^\d+'\s.+\s\(0|1\)$/.test(goals))) {
        //         return res.status(400).send({ message: "Goal provided in wrong format. Please format the result as MINUTE' NAME (0_OR_1)." })
        //     }
        //     newGoals = [goals]
        // }

        // const game: IGame | null = await Game.findById(req.params.id)
        // if (!game) return res.status(400).send({ message: "Game not found." })

        // //provjeri ako je jedan od tih klubova zapravo req.user
        // if (game.clubs[0].toString() !== req.user.userId && game.clubs[1].toString() !== req.user.userId) {
        //     return res.status(400).send({ message: "Only the clubs from game can change the result of the game." })
        // }

        // const goals1: number = Number(result.slice(0, result.indexOf("-")))
        // const goals2: number = Number(result.slice(result.indexOf("-") + 1))
        // if ((goals1 + goals2 !== goals.length && Array.isArray(goals)) || (!Array.isArray(goals) && goals1 + goals2 !== 1)) {
        //     return res.status(400).send({ message: "Goals not inserted correctly." })
        // }

        const newGame: IGame | null = await Game.findByIdAndUpdate(req.params.id, { result }, { new: true })
        // console.log(newGame)
        if (!newGame) return res.status(404).send({message: "Game not found"})
        res.status(201).send({ message: 'Game updated.', game: newGame })

    } catch (e: any) {
        console.log(e)
        return res.status(500).send({ message: "Error occured. Please try again.", error: e.message })
    }
}
export default patchScore