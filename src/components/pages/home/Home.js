import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap'
import ApiService from '../../../services/api.service.js'
import CardMovie from '../cards/CardMovie.js'
import CardTv from '../cards/CardTv.js'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listMovies: [],
            listTv: []
        }
      this.ApiService = new ApiService()
    }

    getMovies() {
        this.ApiService
            .getCinema()
            .then(response => {
                let concatenation = this.state.listMovies.concat(response.data.results)
                this.setState({listMovies: concatenation})
            })
            .catch(err => console.log(err))
    }

    getTv() {
        this.ApiService
            .getSeries()
            .then(response => {
                let concatenation = this.state.listTv.concat(response.data.results)
                this.setState({listTv: concatenation})
            })
            .catch(err => console.log(err))
    }
  
    componentDidMount() {
        this.getMovies()
        this.getTv()
    }

    render() {
        return (
            <div>
                 <div className="background">
                    <div className="container mw-100">
                        <h3>&#x25BA; What's Popular in Movies</h3>
                        <div className="row"> 
                            {!this.state.listMovies ? <Spinner animation="border"/> : this.state.listMovies.map(elm => <CardMovie key={elm.id}  {...elm} />)}
                        </div>
                        <div id="divideHome"></div>
                        <h3>&#x25BA; Trending TV Shows</h3>
                        <div className="row">
                            {!this.state.listTv ? <Spinner animation="border"/> : this.state.listTv.map(elm => <CardTv key={elm.id} {...elm} />)}
                        </div><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
