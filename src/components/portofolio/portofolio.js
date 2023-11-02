import React from "react";

const Portofolio = () => {
  const portfolioItems = [
    {
      id: "01",
      title: "E-Commerce Customer Side",
      description: "Fullstack Project",
      image: "images/portfolio/ecommercecust.jpg",
      modalImage: "images/portfolio/modals/ecommercecust.jpg",
      modalDescription:
        "This Web is build for e-commerce with Front End using Vue.js and Back End using Node.js, Database using PostgreSQL",
      webLink: "https://e-kommerce-clientele-side.web.app",
      codeLink: "https://github.com/drfrostongithub/e-commerce-client",
      categories: "Fullstack, E-commerce",
    },
    {
      id: "02",
      title: "E-Commerce Admin Side",
      description: "Fullstack Project",
      image: "images/portfolio/ecomadm.png",
      modalImage: "images/portfolio/modals/ecomadm.jpg",
      modalDescription:
        "This Web is build as a pair for E-Commerce Customer Side, this is Admin Side, which you can Input, Update, and Delete item to show to customer",
      webLink: "https://e-kommerce.web.app/",
      codeLink: "https://github.com/drfrostongithub/e-commerce-cms-client",
      categories: "Fullstack, E-commerce",
    },
    {
      id: "03",
      title: "Kanban Web Application",
      description: "Fullstack Project",
      image: "images/portfolio/kanban.jpg",
      modalImage: "images/portfolio/modals/kanban.jpg",
      modalDescription:
        "This is Kanban Application which you can use as project with team, using Vue and Parcel-build as base",
      webLink: "https://kanban-sensei.web.app/",
      codeLink: "https://github.com/drfrostongithub/kanban-client",
      categories: "Fullstack, Kanban",
    },
    {
      id: "04",
      title: "Fancy To-Do",
      description: "Fullstack Project",
      image: "images/portfolio/fancytodo.jpg",
      modalImage: "images/portfolio/modals/fancytodo.jpg",
      modalDescription:
        "This To-Do application used personally to remind you for To-do activity, build using Ajax and Jquery",
      webLink: "https://fancytodos.web.app/",
      codeLink: "https://github.com/drfrostongithub/fancy-todo-client",
      categories: "Fullstack, To-do",
    },
    {
      id: "05",
      title: "Google Clone",
      description: "Front-End Project",
      image: "images/portfolio/gclone.jpg",
      modalImage: "images/portfolio/modals/gclone.jpg",
      modalDescription:
        "This is a project from Odin-project which teach you how to make a Google Search in basic HTML and CSS.",
      webLink: "https://drfrostongithub.github.io/google-homepage/",
      codeLink: "https://github.com/drfrostongithub/google-homepage",
      categories: "Front-End, Clone",
    },
    {
      id: "06",
      title: "Github Search API",
      description: "Front-End Project",
      image: "images/portfolio/github.jpg",
      modalImage: "images/portfolio/modals/github.jpg",
      modalDescription:
        "This Application using Github API, you can search github id without backend",
      webLink: "https://vue-pwa-github-api.herokuapp.com/",
      codeLink: "https://github.com/drfrostongithub/Pwa-Github-Api",
      categories: "Front-End, Netlify, React",
    },
    {
      id: "07",
      title: "Portofolio with React Js",
      description: "Front-End Project",
      image: "images/portfolio/resumereactjs.jpg",
      modalImage: "images/portfolio/modals/resumereactjs.jpg",
      modalDescription: "You already saw it now",
      codeLink: "https://github.com/drfrostongithub/portofolio-in-react-js",
      categories: "Front-End",
    },
    {
      id: "08",
      title: "Landing Page",
      description: "Front-End Project",
      image: "images/portfolio/landingpage.jpg",
      modalImage: "images/portfolio/modals/landingpage.jpg",
      modalDescription: "Another Version of Landing Page for Domainesia.",
      webLink: "https://landing-page-93c52.web.app/",
      codeLink: "https://github.com/drfrostongithub/landing_page",
      categories: "Front-End, Vue",
    },
  ];

  return (
    <React.Fragment>
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check out some of my personal works.</h1>
            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {portfolioItems.map((item, index) => (
                <div key={item.id} className='columns portfolio-item'>
                  <div className='item-wrap'>
                    <a href={`#modal-${item.id}`} title>
                      <img alt='' src={item.image} />
                      <div className='overlay'>
                        <div className='portfolio-item-meta'>
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className='link-icon'>
                        <i className='icon-plus' />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>{" "}
          {portfolioItems.map((item) => (
            <div id={`modal-${item.id}`} className='popup-modal mfp-hide'>
              <img
                className='scale-with-grid'
                src={item.modalImage}
                alt={item.image}
              />
              <div className='description-box'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className='categories'>
                  <i className='fa fa-tag' />
                  {item.categories}
                </span>
              </div>
              <div className='link-box'>
                {item.webLink ? <a href={item.webLink}>Web</a> : null}
                <a href={item.codeLink}>Code</a>
                <a className='popup-modal-dismiss'>Close</a>
              </div>
            </div>
          ))}
        </div>{" "}
      </section>{" "}
    </React.Fragment>
  );
};

export default Portofolio;
