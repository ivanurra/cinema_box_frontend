import React, {Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AllSearch from './AllSearch.js'

class Search extends Component {

    constructor() {
        super()
        this.state = {
            search: '',
            arraySearch: [],
            view: false
        }
    }

    handleInputChange = elm => {
        const {name, value} = elm.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        axios
            .get(`http://www.omdbapi.com/?apikey=3c888767&s=${this.state.search}`)
            .then((response) => { 
                this.setState({
                    arraySearch: response.data,
                    search: '',
                    view: true
                })
            })
            .catch((error) => console.log(error))
    }

    handleModal = view => this.setState({ view })
    render() {
        return (
            <div className="Search">
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" className="bg-light" name="search" placeholder=" Search" value={this.state.search} onChange={this.handleInputChange} />
                    <Button type="submit" variant="btn btn-danger">GO</Button>
                </form> 
                <Modal show={this.state.view} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontWeight:'700'}}>Results:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AllSearch {...this.state.arraySearch} closeModal={() => this.handleModal(false)}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Search