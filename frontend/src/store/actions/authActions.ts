import * as api from '../../api/api'


export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
}

export const getAuthActions = (dispatch: any) => {
    return {
        login: (userDetails: any, navigate: any) => dispatch(login(userDetails, navigate)),
        register: (userDetails: any, navigate: any) => dispatch(register(userDetails, navigate)),
        setUserDetails: (userDetails: any) => dispatch(setUserDetails(userDetails))
    }
}

export const setUserDetails = (userDetails: any) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
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