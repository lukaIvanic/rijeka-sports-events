import * as api from '../../api/api'

export const gameActions = {
    SET_GAMES_FROM_SPORT: 'GAME.SET_GAMES_FROM_SPORT',
    CREATE_GAME: 'GAME.CREATE_GAME'
}

export const getGameActions = (dispatch: any) => {
    return {
        updateGame: (id: string, result: string) => dispatch(updateGame(id, result)),
        finishGame: (id: string, isFinished: boolean) => dispatch(finishGame(id, isFinished)),
        createGame: (game: any) => dispatch(createGame(game)),
        getGamesFromSport: (sport: string, timestamp: number) => dispatch(getGamesFromSport(sport, timestamp)),
    }
}

export const setGamesFromSport = (games: any[]) => {
    return {
        type: gameActions.SET_GAMES_FROM_SPORT,
        games
    }
}
export const getGamesFromSport = (sport: string, timestamp: number) => {
    return async (dispatch: any) => {
        const response = await api.getGamesFromSport(sport, timestamp)
        console.log("res", response)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const games = response.data           
            dispatch(setGamesFromSport(games))
            return {}
        }
    }
}

export const finishGame = (id: string, isFinished: boolean) => {
    return async (dispatch: any) => {
        const response = await api.finishGame(id, isFinished)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const games = response.data           
            console.log(games)
            return {}
        }
    }
}

export const updateGame = (id: string, result: string) => {
    return async (dispatch: any) => {
        const response = await api.updateGame(id, result)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const games = response.data           
            console.log(games)
            return {}
        }
    }
}

export const createGame = (game: any) => {
    return async (dispatch: any) => {
        const response = await api.createGame(game)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const game = response.data     
            console.log(game)      
            // dispatch(setGamesFromSport(games))
            return {}
        }
    }
}
