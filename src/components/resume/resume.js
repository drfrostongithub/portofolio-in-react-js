import React, {Component} from 'react'

export default class Resume extends Component {
    render () {
        return (
            <React.Fragment>
                <section id="resume">
                {/* Education
                ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Padjadjaran University</h3>
                        <p className="info">Bachelor in Psychology <span>•</span> <em className="date">2017</em></p>
                        <p>
                            Finishing my degree in Psychology
                        </p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Hacktiv8</h3>
                        <p className="info">Fullstack Javascript<span>•</span> <em className="date">June 2020-Oct 2020</em></p>
                        <p>
                            Bootcamp with curicullum on fullstack developer, mainly : <br/>
                            <b>Front End</b> : Vue.js, Vuex, HTML, CSS, Bootstrap, Jquery, AJAX, SPA (SinglePageApplication)<br/>
                            <b>Back End</b>  : Javascript, Node Js, OOP Concept, MVC Models, PostgreSQL, 3rd Party API and REST API 
                            Implementation <br/>
                            <b>Testing</b> : Jest, Supertest, Postman, TDD <br/>
                            <b>Other Technical Skills</b> : Git, Linux, Firebase and Heroku Deploying <br/>
                        </p>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
                ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Asian Technology Solution Pvt. Ltd.</h3>
                        <p className="info">IT Recruitter <span>•</span> <em className="date">June 2019 - June 2020</em></p>
                        <p>
                        - Actively sourcing Candidates for Company's Client Needs (IT and SAP Focused) <br/>
                        - Search potential candidate that suitable for client requirements <br/>
                        - Held direct interview with candidates <br/>
                        - Introducing the suitable candidate for the client Job Inquiries
                        </p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Karya Putra Surya Gemilang</h3>
                        <p className="info">Talent Acquisition <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                        <p>
                        - Media Social Sourcing <br/>
                        - Conduct Job Interview, Psychological Test, and Report
                        - Onboarding to client
                        - Administration and Project Manager Substitute
                        </p>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
                ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <p>
                    <b>Front End</b> : Vue.js with Vuex, PWA and SPA (SinglePageApplication), React.JS with Framer-Motion, HTML, CSS, Bootstrap, Jquery, AJAX  <br/>
                    <b>Back End</b>  : Javascript, Node Js with OOP Concept and MVC Models, PostgreSQL, 3rd Party API and REST API 
                    Implementation <br/>
                    <b>Testing</b> : Jest, Supertest, Postman, TDD <br/>
                    <b>Other Technical Skills</b> : Git, Linux, Firebase and Heroku Deploying <br/>
                    </p>
                    </div> {/* main-col end */}
                </div> {/* End skills */}
                </section> {/* Resume Section End*/}
            </React.Fragment>
        )
    }
}