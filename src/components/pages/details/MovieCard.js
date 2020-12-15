import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moviesService from '../../../services/movies.service.js'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

class MovieCard extends Component {

    constructor(props) {
        super(props)
        this.moviesService = new moviesService()
    }
    
    DeleteFavMovie = () => {
        this.moviesService
            .deleteMovie(this.props.elm.imdb_id, this.props.loggedin, this.rerender())
            .then(res => this.props.fetchuser())            
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to={'/movie/' + this.props.elm.imdb_id} key={this.props.elm.imdb_id}>
                    <Image src={'https://image.tmdb.org/t/p/original' + this.props.elm.poster_path} rounded style={{width: '90%', marginBottom: '10px'}} {...this.props}/>
                </Link>
                <Button className="btn btn-danger delete" onClick={() => this.props.DeleteFavMovie(this.props.elm.imdb_id)} {...this.props}>Remove</Button>
            </div>
        )        
    }
}

export default MovieCard
