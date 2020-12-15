import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import authService from '../../../services/auth.service.js'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: ''
        }
        this.authService = new authService()
    }

    handleInputChange = elm => {
        const {name, value} = elm.target
        this.setState({[name]: value})
    }

    handleFormSubmit = elm => {

        elm.preventDefault()

        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => this.setState({
                message: err.response.data.message 
            }))
    }

    render() {
        return (
            <Container className="login mw-100">
                <main>
                    <Row className="justify-content-center">
                        <Col md={{span: 4}}>
                            <h1>LOG IN</h1>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                                    {this.state.message && <h5>{this.state.message}</h5>}
                                <Button variant="dark" type="submit">LOG IN</Button>
                            </Form>
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default Login