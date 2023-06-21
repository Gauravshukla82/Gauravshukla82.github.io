// import React from 'react';
// import Navbar from './Components/Navbar';
// import Home from './Routes/Home';
// import About from './Routes/About';
// import Skills from './Routes/Skills';
// import Projects from './Routes/Projects';
// import Contact from './Routes/Contact';
// import './styles.css';

import Navbar from "./Components/Navbar";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Skills from "./Routes/Skills";
import SocialLinks from "./Routes/SocialLinks";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    // </div>
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialLinks/>
    </div>
  );
}

export default App;
