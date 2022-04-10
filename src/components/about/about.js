import React, {Component} from 'react'

export default class About extends Component {
    render () {
        return (
            <React.Fragment>
                <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/profile.jpg" alt="" />
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
                            <span>business.putrarezafardani@gmail.com</span>
                        </p>
                        </div>
                        <div className="columns download">
                        <p>
                            <a href="https://drive.google.com/file/d/1Dk9JhmGyFsNxWtVLuYLFw1-CMIsUF8nC/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
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