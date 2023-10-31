import React, { Component } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portofolio from "./components/portofolio/portofolio";
import Testimonials from "./components/testimonials/testimonials";
import ContacMe from "./components/contacme/contacme";
import Footer from "./components/footer/footer";
import resumeData from "./components/resume/resumeData";
import WorkPortofolio from "./components/portofolio/workPortofolio";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <WorkPortofolio />
        <Portofolio />
        <Testimonials />
        <ContacMe />
        <Footer />
      </div>
    );
  }
}

export default App;
