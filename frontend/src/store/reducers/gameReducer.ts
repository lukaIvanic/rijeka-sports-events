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
        case gameActions.CREATE_GAME:
            return {
                ...state,
                games: [...state.games, action.game]
            }
        default:
            return state
    }
}

export default reducer