import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import ApiService from '../../../services/api.service.js'
import moviesService from '../../../services/movies.service.js'

class SeriesDetails extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            series: [],
            favoriteSeries:[],
            path: ''
        }
        this.moviesService = new moviesService()
        this.ApiService = new ApiService()
    }

    getFindSeries(id) {
    this.ApiService
            .findSeries(id)
            .then(response => {this.setState({series: response.data})})
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getFindSeries(this.props.match.params.id)
    }

    handleFav = () => {
        this.moviesService
            .saveSerie(this.props.match.params.id, this.props.loggedInUser, this.state.series)
            .then(response => this.props.fetchUser())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container mw-100">
                <div className="row movieDetails">
                    <div className="col-4">
                        <Image src={'https://image.tmdb.org/t/p/original' + this.state.series.poster_path} alt={this.state.series.name} rounded/>
                    </div>
                    <div className="col-8">
                            <div className="movieTitle">
                                <h1>{this.state.series.name}</h1>
                            </div> 
                            <h4><b>&#9733; {this.state.series.vote_average} / 10</b></h4>
                            <br></br>
                            <h4><b>Synopsis:</b></h4>
                            <p>{this.state.series.overview}</p>
                            <br></br>
                            <h6>Release date: {this.state.series.first_air_date}</h6>
                            <h6>Duration: {this.state.series.episode_run_time} min</h6>
                            <h6>Seasons: {this.state.series.number_of_seasons}</h6>
                            <h6>Episodes: {this.state.series.number_of_episodes} </h6>
                        <div>
                            <br></br>
                            <button type="button" id="watch" class="btn btn-light"><a target="_blank" rel="noreferrer" href={this.state.series.homepage}>&#x25BA; Watch</a></button>
                            {this.props.loggedInUser && <Link className="btn btn-danger" id="adding" onClick={() => this.handleFav()}>+ Add to favorites</Link>}
                        </div>
                    </div>
                </div>
            </div>
        )       
    }
}

export default SeriesDetails