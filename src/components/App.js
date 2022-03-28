import * as React from "react"
import Hero from './Hero';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';

const App = () => {
  return (
    <div className="text-dark">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
    </div>
  )
}

export default App;