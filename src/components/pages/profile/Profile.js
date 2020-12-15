import React, {Component} from 'react'
import MovieCard from '../details/MovieCard.js'
import SerieCard from '../details/SerieCard.js'
import moviesService from '../../../services/movies.service.js'
import ApiService from '../../../services/api.service.js'

class Profile extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            arrayMovies: [],
            arraySeries: [],
            arrayMoviesId: this.props.loggedin.favoriteMovies,
            view: false             
        }
        this.moviesService = new moviesService()
        this.ApiService = new ApiService()
    }

    handleModal = view => this.setState({view})

    getMoviesFavorite() {
        this.props.fetchuser()
        this.props.loggedin && this.state.arrayMoviesId.map(id => {
            return this.ApiService
                .findMovies(id)
                .then(response => {
                    let concatenation = this.state.arrayMovies.concat(response.data)
                    this.setState({ arrayMovies: concatenation})
                })
                .catch(err => console.log(err))
            })       
    }

    getSeriesFavorite() {
        this.props.loggedin.favoriteSeries.map(id => {
            return this.ApiService
                .findSeries(id)
                .then(response => {
                    let concatenation = this.state.arraySeries.concat(response.data)
                    this.setState({ arraySeries: concatenation})
                })
                .catch(err => console.log(err))
        })     
    }

    componentDidMount() {
        this.getMoviesFavorite()
        this.getSeriesFavorite()
    }
    
    DeleteFavMovie = (id) => {
        this.moviesService
            .deleteMovie(id, this.props.loggedin)
            .then(response => {
                this.setState({arrayMoviesId: response.data.favoriteMovies, arrayMovies: []}, () => this.getMoviesFavorite())
            })
            .catch(err => console.log(err))
    }

    DeleteFavSerie = (id) => {
        this.moviesService
            .deleteSerie(id, this.props.loggedin)
            .then(response => {
                this.setState({ arraySeriesId: response.data.favoriteSeries, arraySeries: [] }, () => this.getSeriesFavorite())
                this.setState()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="backgroundProfile">
                <div className="container profile mw-100">
                    <div className="row">
                        <h1>Welcome, {this.props.loggedin.username} &#x263B;</h1>
                    </div>
                    <div id="divideHome"></div>
                    <div>
                        {!this.state.arrayMovies}
                        <h1>Favorites Movies</h1>                       
                        <div className="cardInfoImg">
                            {this.state.arrayMovies && this.state.arrayMovies.map(elm =>
                                <MovieCard key={elm.id} elm={elm} {...this.props} fetchuser={this.props.fetchuser} DeleteFavMovie={this.DeleteFavMovie}/>
                            )}
                        </div>
                    </div>
                    <div id="divideHome"></div>
                    <div>
                        {!this.state.arraySeries}
                        <h1>Favorites TV Shows</h1>                       
                        <div className="cardInfoImg">
                            {this.state.arraySeries && this.state.arraySeries.map(elm =>
                                <SerieCard key={elm.id} elm={elm} {...this.props} fetchuser={this.props.fetchuser} DeleteFavSerie={this.DeleteFavSerie}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default Profile