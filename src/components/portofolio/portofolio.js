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
                            <img alt="" src="images/portfolio/girl.jpg" />
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
                    </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                    {/* Modal Popup
                        --------------------------------------------------------------- */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
                    <div className="description-box">
                        <h4>E-Commerce Customer Side</h4>
                        <p>This Web is build for e-commerce with Front End using Vue.js and Back End using Node.js, Database using PostgreSQL</p>
                        <span className="categories"><i className="fa fa-tag" />Fullstack, E-commerce</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Web </a>
                        <a href="http://www.behance.net">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
                    <div className="description-box">
                        <h4>Console</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-02 End */}
                    <div id="modal-03" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
                    <div className="description-box">
                        <h4>Judah</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Branding</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
                    <div className="description-box">
                        <h4>Into the Light</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Photography</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-04 End */}
                    <div id="modal-05" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
                    <div className="description-box">
                        <h4>Farmer Boy</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-05 End */}
                    <div id="modal-06" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
                    <div className="description-box">
                        <h4>Girl</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories"><i className="fa fa-tag" />Photography</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-06 End */}
                    <div id="modal-07" className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
                    <div className="description-box">
                        <h4>Portofolio</h4>
                        <p>You already saw it now, I'm using React Js and Framer Motion to generate the animation.</p>
                        <span className="categories"><i className="fa fa-tag" />Front End, Portofolio</span>
                    </div>
                    <div className="link-box">
                        <a href="http://www.behance.net">Code</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                    </div>{/* modal-07 End */}
                </div> {/* row End */}
                </section> {/* Portfolio Section End*/}
            </React.Fragment>
        )
    }
}