import React, {Component} from 'react'

export default class Portofolio extends Component {
    render () {
        return (
            <React.Fragment>
                <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-01" title>
                            <img alt="" src="images/portfolio/ecommercecust.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>E-Commerce Customer Side</h5>
                                <p>Fullstack Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-02" title>
                            <img alt="" src="images/portfolio/ecomadm.png" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>E-Commerce Admin Side</h5>
                                <p>Fullstack Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-03" title>
                            <img alt="" src="images/portfolio/kanban.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Kanban Web Application</h5>
                                <p>Fullstack Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-04" title>
                            <img alt="" src="images/portfolio/fancytodo.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Fancy To-Do</h5>
                                <p>Fullstack Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-05" title>
                            <img alt="" src="images/portfolio/gclone.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Google Clone</h5>
                                <p>Front-End Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-06" title>
                            <img alt="" src="images/portfolio/github.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Github Search API with Vue Js and PWA</h5>
                                <p>Front-End Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-07" title>
                            <img alt="" src="images/portfolio/resumereactjs.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Portofolio with React Js and Framer</h5>
                                <p>Front-End Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                        <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-08" title>
                            <img alt="" src="images/portfolio/landingpage.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Landing Page</h5>
                                <p>Front-End Project</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="icon-plus" /></div>
                            </a>
                        </div>
                        </div> {/* item end */}
                    </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                    {/* Modal Popup
                        --------------------------------------------------------------- */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/ecommercecust.jpg" alt="" />
                    <div className="description-box">
                        <h4>E-Commerce Customer Side</h4>
                        <p>This Web is build for e-commerce with Front End using Vue.js and Back End using Node.js, Database using PostgreSQL</p>
                        <span className="categories"><i className="fa fa-tag" />Fullstack, E-commerce</span>
                    </div>
                    <div className="link-box">
                        <a href="https://e-kommerce-clientele-side.web.app">Web </a>
                        <a href="https://github.com/drfrostongithub/e-commerce-client">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/ecomadm.jpg" alt="" />
                    <div className="description-box">
                        <h4>E-Commerce Admin Side</h4>
                        <p>This Web is build as a pair for E-Commerce Customer Side, this is Admin Side, which you can Input, Update, and Delete item to show to customer</p>
                        <span className="categories"><i className="fa fa-tag" />Fullstack, E-commerce</span>
                    </div>
                    <div className="link-box">
                        <a href="https://e-kommerce.web.app/">Web </a>
                        <a href="http://www.behance.net">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-02 End */}
                    <div id="modal-03" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/kanban.jpg" alt="" />
                    <div className="description-box">
                        <h4>Kanban</h4>
                        <p>This is Kanban Application which you can use as project with team, using Vue and Parcel-build as base</p>
                        <span className="categories"><i className="fa fa-tag" />Fullstack, Kanban</span>
                    </div>
                    <div className="link-box">
                        <a href="https://kanban-sensei.web.app/">Web </a>
                        <a href="https://github.com/drfrostongithub/kanban-client">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/fancytodo.jpg" alt="" />
                    <div className="description-box">
                        <h4>Fancy To-Do</h4>
                        <p>This To-Do application used personally to remind you for To-do activity, build using Ajax and Jquery</p>
                        <span className="categories"><i className="fa fa-tag" />Fullstack, Todo</span>
                    </div>
                    <div className="link-box">
                        <a href="https://fancytodos.web.app/">Web </a>
                        <a href="https://github.com/drfrostongithub/fancy-todo-client">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-04 End */}
                    <div id="modal-05" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/gclone.jpg" alt="" />
                    <div className="description-box">
                        <h4>Google Clone</h4>
                        <p>This is a project from Odin-project which teach you how to make a Google Search in basic HTML and CSS.</p>
                        <span className="categories"><i className="fa fa-tag" />Front-End, Github API Vue, HTML, CSS</span>
                    </div>
                    <div className="link-box">
                        <a href="https://drfrostongithub.github.io/google-homepage/">Web </a>
                        <a href="https://github.com/drfrostongithub/google-homepage">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-05 End */}
                    <div id="modal-06" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/github.jpg" alt="" />
                    <div className="description-box">
                        <h4>Github ID Search</h4>
                        <p>This Application using Github API with PWA Vue Js, you can search github id without backend</p>
                        <span className="categories"><i className="fa fa-tag" />Front-End, Google Clone, HTML, CSS</span>
                    </div>
                    <div className="link-box">
                        <a href="https://vue-pwa-github-api.herokuapp.com/">Web </a>
                        <a href="https://github.com/drfrostongithub/Pwa-Github-Api">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-06 End */}
                    <div id="modal-07" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/resumereactjs.jpg" alt="" />
                    <div className="description-box">
                        <h4>Portofolio</h4>
                        <p>You already saw it now, I'm using React Js and Framer Motion to generate the animation.</p>
                        <span className="categories"><i className="fa fa-tag" />Front End, Portofolio, React JS</span>
                    </div>
                    <div className="link-box">
                        <a href="https://github.com/drfrostongithub/portofolio-in-react-js">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-07 End */}
                    <div id="modal-08" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/landingpage.jpg" alt="" />
                    <div className="description-box">
                        <h4>Portofolio</h4>
                        <p>Another Version of Landing Page for Domainesia.</p>
                        <span className="categories"><i className="fa fa-tag" />Front End, Portofolio, Vue JS</span>
                    </div>
                    <div className="link-box">
                        <a href="https://landing-page-93c52.web.app/">Web </a>
                        <a href="https://github.com/drfrostongithub/landing_page">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-08 End */}
                </div> {/* row End */}
                </section> {/* Portfolio Section End*/}
            </React.Fragment>
        )
    }
}