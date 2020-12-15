import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './fixed/navbar/Navbar.js'
import SeriesDetails from './pages/details/SeriesDetails.js'
import Profile from './pages/profile/Profile.js'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import About from './pages/about/About'
import Home from './pages/home/Home.js'
import MovieDetails from './pages/details/MovieDetails.js'
import Footer from './fixed/footer/Footer.js'
import authService from './../services/auth.service'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedin: undefined
    }
    this.authService = new authService()
  }

  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({loggedin: user}, () => console.log('Username', this.state.loggedin))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({loggedin: response.data}))
      .catch(err => this.setState({loggedin: null}))
  }

  render() {
    return (
      <div>
        <Navbar setTheUser={this.setTheUser} loggedin={this.state.loggedin} />
        <Switch>
          <Route path="/" exact render={() => <Home setTheUser={this.setTheUser} loggedin={this.state.loggedin}/>} />
          <Route path="/movie/:id" render={props => <MovieDetails {...props} loggedin={this.state.loggedin} fetchUser={this.fetchUser}/>} />
          <Route path="/tv/:id" render={props => <SeriesDetails {...props} loggedin={this.state.loggedin} fetchUser={this.fetchUser}/>} />
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/about" render={() => <About setTheUser={this.setTheUser} loggedin={this.state.loggedin}/>} />
          <Route path="/profile" exact render={props => this.state.loggedin ? <Profile loggedin={this.state.loggedin} {...props} fetchUser={this.fetchUser} setTheUser={this.setTheUser}/> : <Redirect to="/login"/>}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
