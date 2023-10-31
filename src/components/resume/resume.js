import React, { Component } from "react";

const education = [
  {
    institution: "Padjadjaran University",
    degree: "Bachelor in Psychology",
    year: "2011 - 2017",
    description:
      "Finishing my degree in Psychology, learn how to interact in social and organizations, both formal and informal.",
  },
  {
    institution: "Hacktiv8",
    degree: "Fullstack Javascript",
    year: "June 2020-Oct 2020",
    description:
      "Learning from basic to advance on creating web developer stack starting in Javascript basic, into HTML, CSS, then right into other framework, like NodeJs, Express, Vue.Js, and React.js.",
  },
];

const work = [
  {
    company: "Jobilla Oy",
    position: "Software Developer",
    status: "Full-time",
    year: "Dec 2021 - June 2023",
    description: [
      "Front End:",
      <br></br>,
      "• Compartmentalize admin apps from main apps (Vue.js-Typescript-Tailwind)",
      "• Migration from Vue typescript codebase to React typescript admin apps",
      "• Support for billings detail project (Remix-Typescript)",
      "• Maintain and update feature of the Admin and Main apps.",
      "• Maintain and update the Jobilla own 3rd party application (JDS-Design) (Vue based)",
      <br></br>,
      "Scrum Master:",
      <br></br>,
      "• Keep all Parties on Track and Informed",
      "• Lead daily stand-up, discuss current objective",
      "• Remove blockers and assist both product owner and team member",
      <br></br>,
      "Technical Writer:",
      <br></br>,
      "• Introduce Standard Documentation and standard Scrum Master documentation",
      "• Mock-up important decision in documentation to the whole team-member and make decision (Request For Comment)",
    ],
  },
  {
    company: "Tapp",
    position: "Front-end Developer",
    status: "Freelance",
    year: "Sept 2021 - Nov 2021",
    description: [
      "• Create the feature admin Dashboard using Vue.js",
      <br></br>,
      "• Making documentation for the Front End",
      <br></br>,
      "• User discussion and negotiation for the product",
      <br></br>,
      "• Testing the API with the developed front-end",
    ],
  },
  {
    company: "Total Cipta Persada",
    position: "Fullstack Developer",
    status: "Contract",
    year: "Dec 2020 - May 2021",
    description: [
      "Front End:",
      <br></br>,
      "• Create the internal interface and web using React.js",
      "• Create reusable component which responsive to the web and mobile",
      "• Transform Mock UP UI design into workable front-end",
      <br></br>,
      "Back End:",
      <br></br>,
      "• Built API, and fixing query",
    ],
  },
  {
    company: "Asian Technology Solution Pvt. Ltd.",
    position: "IT Recruitter",
    year: "June 2019 - June 2020",
    description:
      "Actively sourced IT and SAP-focused candidates, conducted interviews, processed candidate documents, and posted job vacancies. Played a role in candidate recruitment, psychological assessments, screening, and follow-up.",
  },
  {
    company: "Karya Putra Surya Gemilang",
    position: "Talent Acquisition",
    year: "March 2007 - February 2010",
    description:
      "My responsibilities included talent acquisition, which involved sourcing candidates through various channels, conducting interviews and psychological assessments, and managing the onboarding process. I also handled administrative tasks such as BPJS and medical check-ups and worked as a project manager, coordinating recruitment efforts and maintaining client relationships.",
  },
];

const skills = [
  "Technical Skills: Vue.js, Vuex, React.js, HTML, CSS, Bootstrap, Jquery, AJAX, Javascript, Typescript, Node Js, Express, PostgreSQL, MongoDB, Jest, Supertest, Postman, TDD",
  "Non-technical skills: Scrum Master, UX Design",
];

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='resume'>
          {/* Education */}
          <div className='row education'>
            <div className='three columns header-col'>
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              {education.map((edu, index) => (
                <div key={index} className='row item'>
                  <div className='twelve columns'>
                    <h3>{edu.institution}</h3>
                    <p className='info'>
                      {edu.degree} <span>•</span>{" "}
                      <em className='date'>{edu.year}</em>
                    </p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Work */}
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              {work.map((job, index) => (
                <div key={index} className='row item'>
                  <div className='twelve columns'>
                    <h3>{job.company}</h3>
                    <p className='info'>
                      {job.position} <span>•</span>{" "}
                      <em className='date'>{job.year}</em>
                    </p>
                    <p>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='row skill'>
              <div className='three columns header-col'>
                <h1>
                  <span>Skills</span>
                </h1>
              </div>
              <div className='nine columns main-col'>
                <p>
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <b>{skill.split(":")[0]}</b> : {skill.split(":")[1]}{" "}
                      <br />
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
