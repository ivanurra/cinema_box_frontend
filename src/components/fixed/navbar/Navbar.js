import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import authService from '../../../services/auth.service'
import Search from '../../pages/search/Search.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.authService = new authService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('Logout error.', err))
    }

    render() {
        return (
            <Navbar variant="dark" expand="lg" fixed='top' className="Navbar">
                <Link to="/">
                    <Navbar.Brand id="title">CINEMABOX</Navbar.Brand>
                </Link>
                <Search/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Link className="nav-link, buttonsNav" to="/">Home</Link>
                        <Link className="about, buttonsNav" to="/about">About</Link>
                        {!this.props.loggedin && <Link className="nav-link, buttonsNav" to="/signup">Sign Up</Link>}
                        {!this.props.loggedin && <Link className="nav-link, buttonsNav" to="/login">Login</Link>}
                        {this.props.loggedin &&  <Link className="nav-link, buttonsNav" to="/" onClick={this.logoutUser}>Logout</Link>}
                        <Link className="nav-link, buttonsNav" to="/profile">&#x25AA; Hello, {this.props.loggedin ? this.props.loggedin.username : 'guest!'}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation