import { useState, useRef } from 'react'
import './App.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ProjectBtn from './components/projectBtn/ProjectBtn';
import About from './components/about/About';
import ContactBtn from './components/contactBtn/ContactBtn';
import Skills from './components/skills/Skills';
import Project from './components/projectCom/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div>
        <Header />
          <div>
            <Hero />
            <ProjectBtn />
            <About />
            <ContactBtn />
            <Skills />
            <Project />
            <Contact />
            <Footer />
          </div>
      </div>
    </>
  )
}

export default App
