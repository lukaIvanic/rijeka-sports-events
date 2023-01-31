import { authActions } from "../actions/authActions"

const initialState = {
    userDetails: null,
    clubsFromSport: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case authActions.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails
            }
        case authActions.SET_CLUBS_FROM_SPORT:
            return {
                ...state,
                clubsFromSport: action.clubsFromSport
            }
        default:
            return state
    }
}

export default reducer