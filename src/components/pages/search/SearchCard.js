import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SearchCard extends Component {
    
    render() {
        return (
            <div>
                <div className='SearchCard'>
                    <Link key={this.props.imdbID} to={'/movie/' + this.props.imdbID} {...this.props} onClick={this.props.closeModal}>
                        <img src={this.props.Poster} alt={this.props.Title} />
                    </Link>
                    <div>
                        <span>{this.props.Title}</span>  
                        <p>Release year: {this.props.Year}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default SearchCard