import React from "react";

const Header = ({ resumeData }) => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#resume" },
    { name: "Works", link: "#portfolio" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/drfrostongithub",
      icon: "fa fa-github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/putra-reza-f-3b226253/",
      icon: "fa fa-linkedin",
    },
    // {
    //   name: "Instagram",
    //   link: "https://www.instagram.com/drdotfrost/",
    //   icon: "fa fa-instagram",
    // },
  ];

  return (
    <React.Fragment>
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='/' title='Hide navigation'>
            Hide navigation
          </a>
          <ul id='nav' className='nav'>
            {navItems.map((item, index) => (
              <li key={index} className={item.name === "Home" ? "current" : ""}>
                <a className='smoothscroll' href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>I'm {resumeData.name}.</h1>
            <h3>
              Jakarta based <span>{resumeData.role}</span>, expert in{" "}
              <span>Front-End</span>, <span>UI/UX Design</span> and also{" "}
              <span>Back-End</span>, creating an awesome and effective web for
              both corporate and start-up alike. Let's{" "}
              <a className='smoothscroll' href='#about'>
                start scrolling{" "}
              </a>
              and learn more{" "}
              <a className='smoothscroll' href='#about'>
                about me
              </a>
              .
            </h3>
            <hr />
            <ul className='social'>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>
                    <i className={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle' />
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
