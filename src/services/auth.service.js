import axios from 'axios'

class AuthService {

    constructor() {
        let api = axios.create({
            baseURL: 'http://localhost:3000/',
            withCredentials: true
        })
        this.api = api
    }
    signup = user => this.api.post('/signup', user)
    login = user => this.api.post('/login', user)
    logout = () => this.api.post('/logout')
    isLoggedIn = () => this.api.get('/loggedin')
}

export default AuthService