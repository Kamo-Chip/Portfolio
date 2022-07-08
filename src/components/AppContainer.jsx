import React from 'react';
import Hero from './Hero';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from './Navigation';

const AppContainer = () => {
  return (
    <>
        <Navigation/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default AppContainer