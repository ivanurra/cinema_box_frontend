import React, {Component} from 'react'
import moviesService from '../../../services/movies.service.js'
import ApiService from '../../../services/api.service.js'
import Image from 'react-bootstrap/Image'

class MovieDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            array: [],
            favoriteMovies: [],
            view: false
        }
        this.moviesService = new moviesService()
        this.ApiService = new ApiService()
    }

    handleModal = view => this.setState({view})
    
    getFindMovie(id) {
        this.ApiService
            .findMovies(id)
            .then(response => {this.setState({movies: response.data})})
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getFindMovie(this.props.match.params.id)
    }

    handleFav = () => {

        this.moviesService
            .saveMovie(this.state.movies.imdb_id, this.props.loggedin, this.state.movies)
            .then(res => {
                this.props.fetchuser()
            })
            .catch(err => console.log(err))
    }
    
    componentDidUpdate(prevProps,prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getFindMovie(this.props.match.params.id)
        }   
    }

    render() {
        return (
                <div className="container mw-100">
                    <div className="row movieDetails">
                        <div className="col-4">
                            <Image src={'https://image.tmdb.org/t/p/original'+this.state.movies.poster_path} alt={this.state.movies.original_title} rounded style={{marginBottom:'40px'}}/>
                        </div>
                        <div className="col-8">
                            <div className="movieTitle">
                                <h1>{this.state.movies.original_title}</h1>
                            </div>
                            <h4><b>&#9733; {this.state.movies.vote_average} / 10</b></h4>
                            <br></br>
                            <h4><b>Synopsis:</b></h4>
                            <p>{this.state.movies.overview}</p>
                            <br></br>
                            <h6>Release date: {this.state.movies.release_date}</h6>
                            <h6>Duration: {this.state.movies.runtime} min</h6>
                            <br></br>
                            <div>
                                <button type="button" id="watch" className="btn btn-light"><a target="_blank" rel="noreferrer" href={this.state.movies.homepage}>&#x25BA; Watch</a></button>
                                {this.props.loggedin && <button className="btn btn-danger" id="adding" onClick={() => this.handleFav()}>+ Add to favorites</button>}
                            </div>
                        </div>
                    </div>
                </div>
        )       
    }
}

export default MovieDetails