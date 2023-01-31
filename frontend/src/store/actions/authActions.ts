import * as api from '../../api/api'


export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
    SET_CLUBS_FROM_SPORT: 'AUTH.SET_CLUBS_FROM_SPORT',
}

export const getAuthActions = (dispatch: any) => {
    return {
        login: (userDetails: any, navigate: any) => dispatch(login(userDetails, navigate)),
        register: (userDetails: any, navigate: any) => dispatch(register(userDetails, navigate)),
        updateProfile: (id: string, body: any, navigate: any) => dispatch(updateProfile(id, body, navigate)),
        setUserDetails: (userDetails: any) => dispatch(setUserDetails(userDetails)),
        getAllClubsUsingSport: (sport: string) => dispatch(getAllClubsUsingSport(sport)),

    }
}

export const setUserDetails = (userDetails: any) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
}

export const setClubsFromSport = (clubsFromSport: any) => {
    return {
        type: authActions.SET_CLUBS_FROM_SPORT,
        clubsFromSport
    }
}

const login = (userDetails: any, navigate: any) => {
    return async (dispatch: any) => {
        const response = await api.login(userDetails)
        //@ts-ignore
        if (response.error) {
            return { error: response }
        } else {
            //@ts-ignore
            const userDetails = response.data
            localStorage.setItem('user', JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))
            navigate('/')
            return {}
        }
    }
}

const register = (userDetails: any, navigate: any) => {
    return async (dispatch: any) => {
        const response = await api.register(userDetails)
        console.log(response)
        //@ts-ignore
        if (response.error) {
            return { error: response }
        } else {
            //@ts-ignore
            const userDetails = response.data
            localStorage.setItem('user', JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))
            navigate('/')
            return {}
        }
    }
}

export const getAllClubsUsingSport = (sport: string) => {
    return async (dispatch: any) => {
        const response = await api.getAllClubs(sport)
        console.log("res", response)
        //@ts-ignore
        if (response.error) {
            return {error:response}
        } else {
            //@ts-ignore
            const clubs = response.data         
            console.log("kluboviiii", clubs)  
            dispatch(setClubsFromSport(clubs.clubs))
            return {}
        }
    }
}

export const updateProfile = (id: string, body: any, navigate: any) => {
    return async (dispatch: any) => {
        const response = await api.updateAccount(id, body.name, body.league)
        console.log(response)
        //@ts-ignore
        if (response.error) {
            return { error: response }
        } else {
            //@ts-ignore
            const userDetails = response.data
            localStorage.setItem('user', JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))
            navigate('/')
            return {}
        }
    }
}