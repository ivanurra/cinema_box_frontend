import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap'
import SearchCard from './SearchCard.js'

class AllSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            array: this.props.Search
        }
    }

    render() {
        return (
            <div>
                {!this.props.Search ? <Spinner/> : this.state.array.map(elm => <SearchCard {...elm} {...this.props}/>)}              
            </div>
        )
    }
}

export default AllSearch