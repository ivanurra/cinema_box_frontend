import axios from 'axios'

class AuthService {

    constructor() {
        let api = axios.create({
            // Here you must include the url of your BACKEND, localhost or online.
            baseURL: 'https://boxcinema.herokuapp.com/',
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