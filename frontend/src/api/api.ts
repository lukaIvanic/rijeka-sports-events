import axios from 'axios'
// import { logout } from './features/utils/auth'

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 10000
})

apiClient.interceptors.request.use(config => {
    const userDetails = localStorage.getItem('user')

    if (userDetails) {
        const token = JSON.parse(userDetails).token
        console.log(JSON.parse(userDetails))
        config.headers.authorization = "Bearer " + token
    }

    return config
}, err => {
    return Promise.reject(err)
})

export const login = async (data: any) => {
    try {
        return await apiClient.post('/api/users/login', data)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export const register = async (data: any) => {
    try {
        return await apiClient.post('/api/users/register', data)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export const getAllLeagues = async () => {
    try {
        return await apiClient.get('/api/league/all')
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export const getGamesFromSport = async (sport: string, timestamp: number) => {
    try {
        return await apiClient.get(`/api/game/get/${sport}/${timestamp}`)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export const getLeague = async (id: string) => {
    try {
        return await apiClient.get(`/api/league/${id}`)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export function createLeague(name: string, sport: string) {
    try {
        return apiClient.post('/api/league/create', { name, sport })
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export function createGame(game: any) {
    try {
        return apiClient.post('/api/game/create', game)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
