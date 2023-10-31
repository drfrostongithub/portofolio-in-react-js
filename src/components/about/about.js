import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='about'>
          <div className='row'>
            <div className='three columns'>
              <img
                className='profile-pic'
                src='images/new-profile.jpg'
                alt='images/profile.jpg'
              />
            </div>
            <div className='nine columns main-col'>
              <h2>About Me</h2>
              <p>
                A software engineer and ex-human resources with five years of
                experience mainly in IT solutions for Indonesian companies, and
                varied professional experience in IT and human resources.
                Recently worked as a software engineer in Jobilla a Finland tech
                company that specializes in recruiting not only the best but
                also a diverse workforce throughout Europe.
              </p>
              <div className='row'>
                <div className='columns contact-details'>
                  <h2>Contact Details</h2>
                  <p className='address'>
                    <span>Putra Reza Fardani</span>
                    <br />
                    <span>business.putrarezafardani@gmail.com</span>
                  </p>
                </div>
                <div className='columns download'>
                  <p>
                    <a
                      href='https://drive.google.com/file/d/1Dk9JhmGyFsNxWtVLuYLFw1-CMIsUF8nC/view?usp=sharing'
                      className='button'
                    >
                      <i className='fa fa-download' />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>{" "}
        {/* About Section End*/}
      </React.Fragment>
    );
  }
}
