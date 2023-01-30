import * as api from '../../api/api'

export const leagueActions = {
    SET_ALL_LEAGUES: 'LEAGUE.SET_ALL_LEAGUES',
}

export const getLeagueActions = (dispatch: any) => {
    return {
        getAllLeagues: () => dispatch(getAllLeagues()),
        getLeague: (id: string) => dispatch(getLeague(id)),
    }
}

export const setAllLeagues = (leagues: string[]) => {
    return {
        type: leagueActions.SET_ALL_LEAGUES,
        leagues
    }
}
export const getAllLeagues = () => {
    return async (dispatch: any) => {
        const response = await api.getAllLeagues()
        console.log("res", response)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const leagues = response.data           
            dispatch(setAllLeagues(leagues))
            return {}
        }
    }
}
export const getLeague = (id: string) => {
    return async (dispatch: any) => {
        const response = await api.getLeague(id)
        console.log("res", response)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const league = response.data           
            return {league}
        }
    }
}