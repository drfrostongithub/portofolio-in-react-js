import React, {Component} from 'react'

export default class About extends Component {
    render () {
        return (
            <React.Fragment>
                <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4E35AQGHJJxMZhPQfA/profile-framedphoto-shrink_200_200/0?e=1604851200&v=beta&t=xN0eG101A-VeT4Z3s9nJbCL4cZCxpGhZmiAGvHMjRpI" alt="" />
                    </div>
                    <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>•	Able to handle view that emphasize both human side (user) and also technical side (computer). <br></br>
                    •	Adept at implementing Back-End and leading effective Front-End and practical usability for company in limited resource <br></br>
                    •	Also technically competent Human Resource with nearly two years’ experience in the HR, and great at communicating with user and team-alike.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>Putra Reza Fardani</span><br />
                            <span>Tabah Raya Street, No 4<br />
                            North Jakarta, DKI Jakarta 14240 IDN
                            </span><br />
                            <span>(081)80-6957-340</span><br />
                            <span>business.putrarezafardani@gmail.com</span>
                        </p>
                        </div>
                        <div className="columns download">
                        <p>
                            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                        </div>
                    </div> {/* end row */}
                    </div> {/* end .main-col */}
                </div>
                </section> {/* About Section End*/}
            </React.Fragment>
        )
    }
}