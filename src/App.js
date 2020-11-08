import React,{ Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portofolio from './components/portofolio/portofolio';
import Testimonials from './components/testimonials/testimonials';
import ContacMe from './components/contacme/contacme';
import Footer from './components/footer/footer';
import {motion} from 'framer-motion' 
import resumeData from './components/resume/resumeData'

class App extends Component {
    render () {
      return (
        <motion.div className="App"
          initial={{
            opacity: 0,
            x:100,
            y:100
          }}
          animate={{
            opacity:1,
            x:0,
            y:0
          }}
          transition={{
            duration: 5
          }}
        >
          <Header resumeData={resumeData} />
          <About />
          <Resume />
          <Portofolio />
          <Testimonials />
          <ContacMe />
          <Footer />
        </motion.div>
    );
  }


}

export default App