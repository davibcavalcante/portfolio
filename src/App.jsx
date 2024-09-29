import './styles/index.css';
import { useRef } from 'react'

import Header from "./Components/Header";
import HomePage from './Components/HomePage';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <HomePage ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Testimonials ref={testimonialsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
