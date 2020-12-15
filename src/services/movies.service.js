import axios from 'axios'

class MoviesService {

    constructor() {
        let api = axios.create({
            // Here you must include the url of your BACKEND, localhost or online.
            // baseURL: process.env.REACT_APP_URL,
            baseURL: 'http://localhost:3000/',
            withCredentials: true
        })
        this.api = api
    }

    saveMovie = (id, user, movie) => {
        return this.api.post(`/profile/addmovie/${id}`, user, movie)
        .then(response => response.data)
    }

    saveSerie = (id, user, serie) => {
        return this.api.post(`/profile/addserie/${id}`, user, serie)
        .then(response => response.data)
    }
    
    deleteMovie = (id, user) => {
        return this.api.post(`/profile/deleteFavMovie/${id}`, user)
        .then(response => response.data)
    }

    deleteSerie = (id, user) => {
        return this.api.post(`/profile/deleteFavSerie/${id}`, user)
        .then(response => response.data)
    }
}

export default MoviesService