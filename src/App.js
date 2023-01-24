import './styles/main.scss';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab, faGithub } from '@fortawesome/free-regular-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'

import NavBar from './components/navBar';
import Contact from './components/pages/contact';
import Certifications from './components/pages/certifications';
import HeroPage from './components/pages/hero';
import Projects from './components/pages/projects';
import BackgroundLayer from './components/background-layer';

// library.add(fab, faGithub)


function App() {

  return (
    <div className="App">
      <BackgroundLayer />
      <NavBar className="navbar-wrapper" />

      <div id="hero" />
      {/* splash view */}
      <HeroPage />
      
      <div id="certifications" />
      {/* certifications section */}
      <Certifications />

      <div id="projects" />
      {/* projects */}
      <Projects />

      <div id="contact" />
      {/* contact section */}
      <Contact />
    </div>
  );
}

export default App;
