import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className='row'>
            <div className='twelve columns'>
              <ul className='social-links'>
                <li>
                  <a href='https://github.com/drfrostongithub'>
                    <i className='fa fa-github' />
                  </a>
                </li>
                <li>
                  <a href='/' aria-disabled>
                    <i className='fa fa-twitter' />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/putra-reza-f-3b226253/'>
                    <i className='fa fa-linkedin' />
                  </a>
                </li>
                {/* <li><a href="https://www.instagram.com/drdotfrost/"><i className="fa fa-instagram" /></a></li> */}
              </ul>
              <ul className='copyright'>
                <li>© Copyright 2020 Putra</li>
                <li>This Portofolio was using React Js and Framer</li>
                <li>
                  Design reference by{" "}
                  <a title='Styleshout' href='http://www.styleshout.com/'>
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
            <div id='go-top'>
              <a className='smoothscroll' title='Back to Top' href='#home'>
                <i className='icon-up-open' />
              </a>
            </div>
          </div>
        </footer>{" "}
        {/* Footer End*/}
      </React.Fragment>
    );
  }
}
