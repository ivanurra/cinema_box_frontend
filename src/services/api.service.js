import axios from 'axios'

class ApiService {

    constructor() {
        this.api = axios.create({
            // TMDB API URL 
            baseURL: 'https://api.themoviedb.org/3'
        })
    }
    getCinema = () => this.api.get(`/trending/movie/week?api_key=${process.env.REACT_APP_KEY}`)
    getSeries = () => this.api.get(`/trending/tv/week?api_key=${process.env.REACT_APP_KEY}`)   
    findMovies = id => this.api.get(`/movie/${id}?api_key=${process.env.REACT_APP_KEY}`)
    findSeries = id => this.api.get(`/tv/${id}?api_key=${process.env.REACT_APP_KEY}`)
    findImageMovies = id => this.api.get(`/movie/${id}/images?api_key=${process.env.REACT_APP_KEY}`)
}

export default ApiService

