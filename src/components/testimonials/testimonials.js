import React, {Component} from 'react'

export default class Testimonials extends Component {
    render () {
        return (
            <React.Fragment>
                <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                    <div className="two columns header-col">
                        <h1><span>Client Testimonials</span></h1>
                    </div>
                    <div className="ten columns flex-container">
                        <div className="flexslider">
                        <ul className="slides">
                            <li>
                            <blockquote>
                                <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand
                                </p>
                                <cite>Martin Fowler</cite>
                            </blockquote>
                            </li> {/* slide ends */}
                            <li>
                            <blockquote>
                                <p>Java is to JavaScript what car is to Carpet.
                                </p>
                                <cite>Chris Heilmann</cite>
                            </blockquote>
                            </li> {/* slide ends */}
                        </ul>
                        </div> {/* div.flexslider ends */}
                    </div> {/* div.flex-container ends */}
                    </div> {/* row ends */}
                </div>  {/* text-container ends */}
                </section> {/* Testimonials Section End*/}
            </React.Fragment>
        )
    }
}