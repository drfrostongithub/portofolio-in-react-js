import React from "react";
import socialLinks from "../socialMedia";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>
                    <i className={link.icon} />
                  </a>
                </li>
              ))}
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
};

export default Footer;
