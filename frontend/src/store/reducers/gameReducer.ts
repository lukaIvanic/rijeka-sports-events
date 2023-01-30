import { gameActions } from "../actions/gameActions"

const initialState = {
    games: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case gameActions.SET_GAMES_FROM_SPORT:
            return {
                ...state,
                games: action.games
            }
        default:
            return state
    }
}

export default reducer