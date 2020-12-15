import React, {Component} from 'react'

class About extends Component {

    render() {
        return (
            <div className="about mw-100">
                <h1>About me</h1>
                <br></br>
                <p>App created in December 2020 by Iván Urra.</p>
                <br></br>
                <p>Built with: MongoDB, Express, React and Node.js <strong>(MERN App)</strong>.
                <br></br>The following technologies were also used: 
                <br></br>Axios, Mongoose, Passport, Bcrypt and Bootstrap.
                <br></br>
                <br></br> 
                The data is extracted from two APIs:
                <br></br> 
                <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie DB </a> 
                and
                <a href="https://developers.themoviedb.org/3/getting-started/introduction"> The Open Movie Database.</a>
                </p>  
                <br></br>
                <p>I hope you enjoy it &#10084;</p>
                <br></br>
                <p><strong>Iván Urra</strong></p>
                <br></br>
                <button type="button" className="btn btn-primary"><a id="buttonNoStyle" href="https://github.com/ivanurra">GitHub</a></button>
                <button type="button" className="btn btn-dark"><a id="buttonNoStyle" href="https://www.linkedin.com/in/ivanurra/">LinkedIn</a></button>
            </div>
        )
    }
}

export default About