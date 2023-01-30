import { leagueActions } from "../actions/leagueActions"

const initialState = {
    leagues: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case leagueActions.SET_ALL_LEAGUES:
            return {
                ...state,
                leagues: action.leagues
            }
        default:
            return state
    }
}

export default reducer