import * as api from '../../api/api'

export const gameActions = {
    SET_GAMES_FROM_SPORT: 'GAME.SET_GAMES_FROM_SPORT',
}

export const getGameActions = (dispatch: any) => {
    return {
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