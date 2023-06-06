import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
