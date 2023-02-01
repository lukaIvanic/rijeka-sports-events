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


export const getCurrentAccount = async () => {
    try {
        return await apiClient.get('/api/users/me')
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
        return await apiClient.get(`/api/game/get/${sport}`)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
export const getAllClubs = async (sport: string) => {
    try {
        return await apiClient.get(`/api/users/get/all/${sport}`)
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

export async function createLeague(name: string, sport: string) {
    try {
        return await apiClient.post('/api/league/create', { name, sport })
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export async function createGame(game: any) {
    try {
        return await apiClient.post('/api/game/create', game)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export async function finishGame(id: string, isFinished: boolean) {
    try {
        return await apiClient.patch('/api/game/finish/'+id, {isFinished})
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export async function updateGame(id: string, result: string) {
    try {
        return await apiClient.patch('/api/game/update/whole/'+id, {result})
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export async function updateAccount(id: string, name: string, league: string) {
    try {
        return await apiClient.patch('/api/users/update/'+id, {name, league})
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export async function updateAccountProfilePicture(id: string, image: any) {
    try {
        return await apiClient.patch('/api/users/update/picture/'+id, {profilePicture: image})
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
