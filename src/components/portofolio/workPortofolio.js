const WorkPortofolio = () => {
  const portfolioItems = [
    {
      id: "01",
      company: "Jobilla",
      description: "Software Developer",
      images: [
        "images/workPortofolio/jobillaWebsite.png",
        "images/workPortofolio/jobillaWebsite1.png",
        "images/workPortofolio/jobillaAdmin.png",
      ],
      modalImage: "images/workPortofolio/jobillaWebsite.png",
      modalDescription:
        "Work on several project including Admin, Main Application, Billing details, UI/UX Design, Migration from Vue into React, etc",
      webLink: "https://www.jobilla.com/en/",
      categories:
        "Software Developer, Scrum Master, Technical Writer, UI/UX Designer",
    },
    {
      id: "02",
      company: "Tapp",
      description: "Front End Developer",
      images: [
        "images/workPortofolio/tappWeb.png",
        "images/workPortofolio/tappWeb1.png",
        "images/workPortofolio/tappMobile.png",
      ],
      modalImage: "images/workPortofolio/jobillaWebsite.png",
      modalDescription:
        "Work on several project including Admin, Main Application, Billing details, UI/UX Design, Migration from Vue into React, etc",
      webLink: "https://www.tappmoney.com/id",
      categories:
        "Software Developer, Scrum Master, Technical Writer, UI/UX Designer",
    },
    {
      id: "03",
      company: "Total Cipta Persada",
      description: "Fullstack Developer",
      images: [
        "images/workPortofolio/kmanWeb.png",
        "images/workPortofolio/kmanWeb1.png",
        "images/workPortofolio/kmanMobile.png",
        "images/workPortofolio/kmanMobile1.png",
        "images/workPortofolio/kmanMobile2.png",
      ],
      modalImage: "images/workPortofolio/jobillaWebsite.png",
      modalDescription:
        "Work on several project including Admin, Main Application, Billing details, UI/UX Design, Migration from Vue into React, etc",
      webLink: "https://remoteflow.com.au/",
      categories:
        "Software Developer, Scrum Master, Technical Writer, UI/UX Designer",
    },
  ];
  return (
    <>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out some of my professional works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`#work-modal-${item.id}`} title>
                      <img alt="" src={item.images[0]} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.company}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>{" "}
          {portfolioItems.map((item) => (
            <div id={`work-modal-${item.id}`} className="popup-modal mfp-hide">
              <div className="image-container">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${item.company}-${index}`}
                  />
                ))}
              </div>
              <div className="description-box">
                <h4>{item.company}</h4>
                <p>{item.description}</p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  {item.categories}
                </span>
              </div>
              <div className="link-box">
                {item.webLink ? <a href={item.webLink}>Website</a> : null}
                <a href="/" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div>
          ))}
        </div>{" "}
      </section>{" "}
    </>
  );
};

export default WorkPortofolio;
